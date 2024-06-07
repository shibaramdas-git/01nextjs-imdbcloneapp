import Image from "next/image";

export default async function Moviepage({ params }) {
  const OMDB_KEY = process.env.OMDB_KEY;
  const { movieid } = params;
  const res = await new Promise((resolve) => {
    setTimeout(async () => {
      const response = await fetch(
        `http://www.omdbapi.com/?i=${movieid}&apikey=${OMDB_KEY}`
      );
      resolve(response);
    }, 2000); //Delay of 2 seconds
  });
  const data = await res.json();

  return (
    <div className="flex flex-wrap max-w-[1440px] mx-auto my-[50px] text-md md:text-lg lg:text-xl">
      <div className="w-full sm:w-1/3 p-4">
        <Image
          src={data.Poster}
          width={400}
          height={600}
          alt="Movie Poster"
          className="w-full rounded-lg shadow-md"
        />
        <p className="text-center pt-4">Type : {data.Genre}</p>
      </div>
      <div className="w-full sm:w-2/3 p-4">
        <h3 className="text-2xl font-bold">{data.Title}</h3>
        <p className="pt-4 text-justify">{data.Plot}</p>
        <p className="flex flex-wrap justify-between sm:w-[80%] pt-8 ">
          <span>{data.Released}</span>
          <span>{data.Runtime}</span>
          <span>{data.imdbRating} Star</span>
        </p>
        <p>Director : {data.Director}</p>
        <p>
          Actor &nbsp;&nbsp;&nbsp; :
          <span className="inline-block w-[70%] align-top">
            &nbsp;{data.Actors}
          </span>
          {/* <ol className="list-[number] inline-block align-top">
            {data.Actors.split(",").map((actor) => (
              <li>{actor}</li>
            ))}
          </ol> */}
        </p>

        <p>Awards&nbsp; : {data.Awards}</p>
      </div>
    </div>
  );
}
