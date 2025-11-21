export async function fetchWordPressPosts({ pageNumber = 1, apiUrl, categoryId = null }) {
  const isFirstPage = pageNumber === 1;
  const postToLoad = isFirstPage ? 11 : 10;

  // Evitar duplicado: calcula offset manual
  const offset = isFirstPage ? 0 : 11 + (pageNumber - 2) * 10;

  let categoryFilter = categoryId ? `&categories=${categoryId}` : '';
  let offsetParam = `&offset=${offset}`;

  try {
    const res = await fetch(
      `${apiUrl}/wp-json/wp/v2/posts?_embed=true&per_page=${postToLoad}${offsetParam}${categoryFilter}`
    );

    if (!res.ok) throw new Error(`HTTP error: ${res.status}`);

    const data = await res.json();
    const hasMore = data.length >= 10;

    const mostRecent = data.length > 0
      ? data.reduce((a, b) => new Date(a.date) > new Date(b.date) ? a : b)
      : null;

    return { posts: data, hasMore, latestPostId: mostRecent?.id || null };
  } catch (error) {
    console.error('Error fetching posts:', error);
    return { posts: [], hasMore: false, latestPostId: null };
  }
}
