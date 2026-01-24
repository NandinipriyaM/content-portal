export async function fetchContent(section: string): Promise<any[]> {
  try {
    const baseUrl = import.meta.env.BASE_URL;
    const url = `${baseUrl}/db.json`.replace(/\/+/g, '/');
    
    const res = await fetch(url);
    if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
    
    const data = await res.json();
    return data[section] || [];
  } catch (err) {
    console.error("Fetch error:", err);
    return [];
  }
}