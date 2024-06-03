import Link from "next/link";

function Menuitem({ title, address, Icon }) {
  return (
    <Link href={address} className="flex items-center hover:text-amber-600">
      <span className="hidden sm:inline">{title}</span>
      <span className=" sm:hidden">
        <Icon className="text-[1.5em]" />
      </span>
    </Link>
  );
}

export default Menuitem;
