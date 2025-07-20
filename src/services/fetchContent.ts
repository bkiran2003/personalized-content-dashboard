import axios from 'axios';


const NEWS_API_KEY = '72f0826c26594527bc5f4bd217b6f32e';

const TMDB_API_KEY = 'pub_b670ef0af7e74d8b87da8500602016b5'; 

export async function fetchContent(categories: string[]) {
  let all: any[] = [];
  if (!categories.length) return [];

  // --- 1. Fetch News from NewsAPI ---
  try {
    // Only the first category is used for demo
    const newsUrl = `https://newsapi.org/v2/top-headlines?country=us&category=${categories[0].toLowerCase()}&apiKey=${NEWS_API_KEY}`;
    const newsRes = await axios.get(newsUrl);
    if (newsRes.data && newsRes.data.articles) {
      all = [
        ...all,
        ...newsRes.data.articles.slice(0, 5).map((n: any, idx: number) => ({
          id: `news-${n.title?.slice(0, 15) || idx}`,
          type: 'news',
          title: n.title || 'No title',
          description: n.description || '',
          image: n.urlToImage || '/placeholder.png',
          link: n.url,
          source: 'NewsAPI',
          category: categories[0]
        }))
      ];
    }
  } catch (err) {
  
  }


  if (TMDB_API_KEY) {
    try {
      const tmdbUrl = `https://api.themoviedb.org/3/trending/movie/week?api_key=${TMDB_API_KEY}&language=en-US`;
      const tmdbRes = await axios.get(tmdbUrl);
      if (tmdbRes.data && tmdbRes.data.results) {
        all = [
          ...all,
          ...tmdbRes.data.results.slice(0, 5).map((m: any, idx: number) => ({
            id: `rec-${m.id}`,
            type: 'recommendation',
            title: m.title,
            description: m.overview || '',
            image: m.poster_path
              ? `https://image.tmdb.org/t/p/w300${m.poster_path}`
              : '/placeholder.png',
            link: `https://www.themoviedb.org/movie/${m.id}`,
            source: 'TMDB'
          }))
        ];
      }
    } catch (err) {
      
    }
  }


  all = [
    ...all,
    ...categories.map((cat: string, idx: number) => ({
      id: `social-${cat}-${idx}`,
      type: 'social',
      title: `What's hot in #${cat}`,
      description: `Trending post in #${cat}`,
      image: '/placeholder.png',
      link: 'https://www.twitter.com',
      source: 'MockSocial'
    }))
  ];

  return all;
}
