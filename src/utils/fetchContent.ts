// // Define the type for items
// export interface ContentItem {
//   id: number | string;
//   title: string;
//   description: string;
//   image?: string;
// }

// // Define a union type for sections
// export type Section = 'articles' | 'videos' | 'podcasts';

// // Add type to the parameter
// export async function fetchContent(section: Section): Promise<ContentItem[]> {
//   try {
//     const res = await fetch(`${import.meta.env.BASE_URL}db.json`);
//     if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);

//     const data = await res.json();

//     if (!data[section]) {
//       throw new Error(`Section "${section}" not found in db.json`);
//     }

//     return data[section];
//   } catch (error) {
//     console.error(`Failed to fetch ${section}:`, error);
//     return [];
//   }
// }
// src/utils/fetchContent.js
export async function fetchContent(section: string): Promise<any[]> {
  try {
    const res = await fetch(`${import.meta.env.BASE_URL}db.json`);
    if (!res.ok) throw new Error("Network response was not ok");
    const data = await res.json();
    return data[section] || [];
  } catch (err) {
    console.error("Failed to fetch content:", err);
    return [];
  }
}
