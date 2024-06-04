const API_KEY = process.env.API_KEY;

export default async function HomePage({ searchParams }) {
  const genre = searchParams.genre || "fetchTrending";
  try {
    const res = await fetch(
      `https://api.themoviedb.org/3${
        genre === "fetchTopRated" ? "/movie/top_rated" : "/trending/all/week"
      }?api_key=${API_KEY}&language=en-US`
    );
    const data = await res.json();
    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }
    const results = data.results;
    console.log(results);
  } catch (error) {
    console.log(error);
  }
  return <div>Good morning Home page------------</div>;
}
