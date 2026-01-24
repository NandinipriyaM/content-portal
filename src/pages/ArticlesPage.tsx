// // const ArticlesPage = () => {
// //   return <h1>Articles Page</h1>
// // }

// // export default ArticlesPage
// import { useArticles } from '../hooks/useArticles'
// import OptimizedImage from '../components/OptimizedImage'

// const ArticlesPage = () => {
//   const { data, isLoading, isError, error } = useArticles()

//   if (isLoading) return <p>Loading articles...</p>
//   if (isError) return <p>{(error as Error).message}</p>

//   return (
//     <div>
//       <h1>Articles</h1>
//       {data.map((article: any) => (
//         <div key={article.id}>
//           <h3>{article.title}</h3>
//           <p>{article.description}</p>
//           {article.imageUrl && (
//             <OptimizedImage src={article.imageUrl} alt={article.title} />
//           )}
//         </div>
//       ))}
//     </div>
//   )
// }

// export default ArticlesPage
import { useArticles } from '../hooks/useArticles'
import OptimizedImage from '../components/OptimizedImage'
import Loader from '../components/Loader'
import { fetchContent } from '../utils/fetchContent';


// const ArticlesPage = () => {
//   const { data, isLoading, isError, error } = useArticles()

//   if (isLoading) return <Loader />
//   if (isError) return <p role="alert">{(error as Error).message}</p>

//   return (
//     <main
//       style={{
//         maxWidth: '960px',
//         margin: '0 auto',
//         padding: '1rem',
//       }}
//     >
//       <h1>Articles</h1>

//       {data.map((article: any) => (
//         <article
//           key={article.id}
//           style={{
//             marginBottom: '2.5rem',
//           }}
//         >
//           <h3>{article.title}</h3>
//           <p>{article.description}</p>

//           {article.imageUrl && (
//             <OptimizedImage
//               src={article.imageUrl}
//               alt={article.title}
//             />
//           )}
//         </article>
//       ))}
//     </main>
//   )
// }
const ArticlesPage = () => {
  const { data, isLoading, isError, error } = useArticles()

  if (isLoading) return <p>Loading articles...</p>
  if (isError) return <p>{(error as Error).message}</p>

  return (
    <main style={{ maxWidth: '1200px', margin: '0 auto', padding: '1rem' }}>
      <h1>Articles</h1>

      {data.map((article: any) => (
        <article key={article.id} style={{ marginBottom: '2rem' }}>
          <h3>{article.title}</h3>
          <p>{article.description}</p>

          {article.imageUrl && (
            <OptimizedImage
              src={article.imageUrl}
              alt={article.title}
              width={600}
              height={350}
            />
          )}
        </article>
      ))}
    </main>
  )
}


export default ArticlesPage
