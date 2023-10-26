import Link from "next/link";
import { FaSearch } from "react-icons/fa";

export default function Header() {
    return (
        <header className="w-4/5 mx-auto px-4 h-24 flex justify-center items-center border-b" id="top">
            <form className="flex justify-center items-center w-full rounded">
                <input className='w-full rounded-l-lg h-10 px-5 outline-none' />
                <button type="submit" className="p-2 h-full bg-blue-600 rounded-r-lg hover:scale-105">
                    <FaSearch size={24} className="text-white" />
                </button>
            </form>
        </header>
    )
}