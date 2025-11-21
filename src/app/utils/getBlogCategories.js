export async function getWordPressCategories(apiUrl) {
  try {
    const res = await fetch(`${apiUrl}/wp-json/wp/v2/categories`);
    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }
    const categories = await res.json();
    return categories;
  } catch (error) {
    console.error('Error al obtener categorías:', error.message);
    return [];
  }
}