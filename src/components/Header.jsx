import Image from "next/image";
import Link from "next/link";
import pokemonLogo from "../../public/images/pokemon-logo.png"

export default function Header() {
    return (
        <header className="max-w-5xl mx-auto px-4 h-24 flex justify-center items-center border-b" id="top">
                <Link href="/">
                    <Image className="rounded-lg object-cover"
                        src={pokemonLogo}
                        alt="pokemon logo"
                        quality={100}
                        width={120}
                        height={120}
                        />
                </Link>
        </header>
    )
}