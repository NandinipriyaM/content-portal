//Loader
const Loader = () => {
  return (
    <div
      role="status"
      aria-live="polite"
      aria-label="Loading articles"
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '40vh',
      }}
    >
      <div className="spinner" />
    </div>
  )
}

export default Loader
