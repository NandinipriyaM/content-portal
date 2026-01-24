// // // Define the type for items
// // export interface ContentItem {
// //   id: number | string;
// //   title: string;
// //   description: string;
// //   image?: string;
// // }

// // // Define a union type for sections
// // export type Section = 'articles' | 'videos' | 'podcasts';

// // // Add type to the parameter
// // export async function fetchContent(section: Section): Promise<ContentItem[]> {
// //   try {
// //     const res = await fetch(`${import.meta.env.BASE_URL}db.json`);
// //     if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);

// //     const data = await res.json();

// //     if (!data[section]) {
// //       throw new Error(`Section "${section}" not found in db.json`);
// //     }

// //     return data[section];
// //   } catch (error) {
// //     console.error(`Failed to fetch ${section}:`, error);
// //     return [];
// //   }
// // }
// // src/utils/fetchContent.js
// // export async function fetchContent(section: string): Promise<any[]> {
// //   try {
// //     const res = await fetch(`${import.meta.env.BASE_URL}db.json`);
// //     if (!res.ok) throw new Error("Network response was not ok");
// //     const data = await res.json();
// //     return data[section] || [];
// //   } catch (err) {
// //     console.error("Failed to fetch content:", err);
// //     return [];
// //   }
// // }
// export async function fetchContent(section: string): Promise<any[]> {
//   try {
//     // This ensures we always have a clean path like "/content-portal/db.json"
//     const baseUrl = import.meta.env.BASE_URL.endsWith('/') 
//       ? import.meta.env.BASE_URL 
//       : `${import.meta.env.BASE_URL}/`;
      
//     const url = `${baseUrl}db.json`;
    
//     console.log("Fetching from:", url); // Check this in the browser console!

//     const res = await fetch(url);
    
//     if (!res.ok) {
//       throw new Error(`HTTP error! status: ${res.status}`);
//     }
    
//     const data = await res.json();
    
//     // Return the specific array from the JSON object
//     return data[section] || [];
//   } catch (err) {
//     console.error("Failed to fetch content:", err);
//     return [];
//   }
// }
export async function fetchContent(section: string): Promise<any[]> {
  try {
    const baseUrl = import.meta.env.BASE_URL;
    // This combines '/content-portal/' + 'db.json' correctly
    const res = await fetch(`${baseUrl}db.json`);
    
    if (!res.ok) throw new Error("Could not find db.json file");
    
    const data = await res.json();
    // This returns the specific array (articles, videos, or podcasts)
    return data[section] || [];
  } catch (err) {
    console.error("Fetch error:", err);
    throw err; 
  }
}