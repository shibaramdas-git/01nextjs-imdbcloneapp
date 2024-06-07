import Card from "./Card";

export default function Result({ movies }) {
  return (
    <div className="sm:grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 p-8 w-full gap-10 ">
      {movies &&
        movies.length > 0 &&
        movies.map((movie) => (
          <>
            <Card movie={movie} />
          </>
        ))}
    </div>
  );
}
