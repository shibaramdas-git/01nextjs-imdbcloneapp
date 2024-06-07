import Image from "next/image";
import Link from "next/link";

export default function Card({ movie }) {
  const { Title, Year, Poster, imdbID } = movie;
  return (
    <div className="shadow-xl border-[0.4px] border-gray-400 rounded-lg  mb-8 sm:mb-2 dark:bg-slate-600 p-1 ">
      <div>
        <Link className="" href={`/movie/${imdbID}`}>
          <Image
            src={Poster}
            alt="Movie Poster"
            width={400}
            height={600}
            className="w-full rounded-t-lg"
          />
        </Link>
      </div>
      <h2 className="font-normal text-xl mt-4 pl-2">
        {Title} ({Year})
      </h2>
    </div>
  );
}
