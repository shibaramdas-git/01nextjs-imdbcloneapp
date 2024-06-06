const OMDB_KEY = process.env.OMDB_KEY;
export default async function HomePage({ searchParams }) {
  const genre = searchParams.genre || "movie";
  const res = await fetch(
    `http://www.omdbapi.com/?s=adventure&type=${genre}&apikey=${OMDB_KEY}j`
  );
  const data = await res.json();
  console.log(data);
  if (data.Response == "False") {
    throw new Error("OOPS!! Failed to fetch data from database..");
  }
  return <div>-----------Good morning Home page------------</div>;
}
