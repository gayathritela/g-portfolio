import Link from "next/link";

const NavLink = ({ href, title }) => {
  return (
    <Link
      href={href}
      className="block py-2 pl-3 pr-4  text-[#563e7b] hover:from-purple-700 font-bold  md:text-xl rounded md:p-0 hover:text-purple-800"
    >
      {title}
    </Link>
  );
};

export default NavLink;