export default function Card({ movie }) {
  const { Title, Year, Type, Poster } = movie;
  return (
    <div className="border border-black ">
      <div className="">
        <img src={Poster} alt="Movie image" className="w-full h-[400px] " />
      </div>
      <h3>{Title}</h3>
      <p>
        <span className="font-bold">Year : </span>
        <span>{Year}</span>
      </p>
      <p>
        <span className="font-bold">Type : </span>
        <span>{Type}</span>
      </p>
      <p>
        <span className="font-bold">Type : </span>
        <span>{Type}</span>
      </p>
    </div>
  );
}
