import Image from "next/image";
import CapaPokemon from "../../public/images/capa-pokemon.jpg"
import PokeBall from "../../public/images/poke-ball.png"
import Link from "next/link";

export default function Home() {
  return (
    <>
      <section className="py-10 my-10 h-[78vh]" id="home">
        <div className="max-w-5xl mx-auto h-full flex flex-col items-center justify-center">
          <h1 className="text-gray-200 text-2xl md:text-3xl mb-2">Trabalhando com o consumo de APIs e paginação</h1>
          <p className="font-serif text-gray-100 text-xl line typing">Clique na PokeBall e conheça os Pokemons</p>
          <Link href="/pokemons/1">
            <Image
              src={PokeBall}
              className="rounded-lg"
              alt="pokemon logo"
              quality={100}
              width={60}
              height={60}
            />
          </Link>
          <Image
            src={CapaPokemon}
            className="rounded-lg"
            alt="pokemon logo"
            quality={100}
            sizes="(max-width: 768px) 100vw, (maxwidth: 1200px) 44vw"
          />
        </div>
      </section>
    </>
  )
}
