const OMDB_KEY = process.env.OMDB_KEY;
export default async function HomePage({ searchParams }) {
  const genre = searchParams.genre || "movie";
  const res = await new Promise((resolve) => {
    setTimeout(async () => {
      const response = await fetch(
        `http://www.omdbapi.com/?s=adventure&type=${genre}&apikey=${OMDB_KEY}`,
        { next: { revalidate: 10 } }
      );
      resolve(response);
    }, 2000); //Delay of 2 seconds
  });

  // const res = await fetch(
  //   `http://www.omdbapi.com/?s=adventure&type=${genre}&apikey=${OMDB_KEY}`,
  //   { next: { revalidate: 20 } }
  // );
  const data = await res.json();
  const movies = data.Search;
  console.log(data);
  if (data.Response == "False") {
    throw new Error("OOPS!! Failed to fetch data from database..");
  }
  return (
    <div>
      {data &&
        movies.map((movie) => (
          <div key={movie.imdbID}>
            <h3>{movie.Title}</h3>
            <p>Year : {movie.Year}</p>
          </div>
        ))}
    </div>
  );
}
// {next: {revalidate: 20}} in fetch method for cashing after 20sec
