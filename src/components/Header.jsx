import Link from "next/link";
import { FaBars, FaShield } from "react-icons/fa6";

export default function Header() {
    return (
        <header className="max-w-5xl mx-auto px-4 h-24 flex justify-between items-center border-b" id="top">
            <div className="flex">
                <Link href="/">
                    <FaShield size={20} color='text-gray-100' />
                </Link>
            </div>
            <div className="flex items-center justify-center md:hidden">
                <i id="icoMenu" className="fa-solid fa-bars fa-2xl"></i>
                <FaBars size={24} color="text-gray-100" />
            </div>
            <div
                className="nav-links md:static absolute bg-gray-900 text-gray-100 md:min-h-fit min-h-[30vh] left-0 top-[-100%] md:w-auto w-full flex items-center justify-center px-5">
                <ul
                    className="md:space-x-4 flex flex-col md:flex-row text-left md:items-center md:gap-[4vw] md:gap-8 text-gray-600 md:text-gray-100 w-full">
                    <li className="hover:bg-sky-900 hover:text-gray-100 p-1 text-center rounded">
                        <Link href="/futebol">Api Futebol</Link>
                    </li>
                    <li className="hover:bg-sky-900 hover:text-gray-100 p-1 text-center rounded">
                        <Link href="/pokemons/1">API Pokemon</Link>
                    </li>
                </ul>
            </div>
        </header>
    )
}