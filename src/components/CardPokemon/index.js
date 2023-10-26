import Image from "next/image"
import DefaultPokemon from "../../../public/images/default-pokemon.png"

const pokemonk = {
    "bug": "Inseto",
    "dark": "Sombrio",
    "dragon": "Dragão",
    "electric": "Elétrico",
    "fairy": "Fada",
    "fighting": "Lutador",
    "fire": "Fogo",
    "flying": "Voador",
    "ghost": "Fantasma",
    "grass": "Planta",
    "ground": "Terrestre",
    "ice": "Gelo",
    "normal": "Normal",
    "poison": "Venenoso",
    "psychic": "Psíquico",
    "rock": "Pedra",
    "steel": "Aço",
    "water": "Água"
}

const pokemonColor = {
    "bug": "bg-lime-500",
    "dark": "bg-slate-900",
    "dragon": "bg-sky-700 text-white",
    "electric": "bg-yellow-300",
    "fairy": "bg-fuchsia-400",
    "fighting": "bg-rose-700 text-white",
    "fire": "bg-orange-500 text-white",
    "flying": "bg-sky-500",
    "ghost": "bg-indigo-600",
    "grass": "bg-green-700 text-white",
    "ground": "bg-yellow-950 text-white",
    "ice": "bg-teal-400",
    "normal": "bg-zinc-400",
    "poison": "bg-violet-400",
    "psychic": "bg-rose-400",
    "rock": "bg-amber-800 text-white",
    "steel": "bg-neutral-600 text-white",
    "water": "bg-cyan-400"
}
export default function CardPokemon({ pokemon }) {
    return (
        <div className='flex flex-col text-center justify-center items-center bg-white p-2 border border-gray-300 rounded-xl'>
            <h4 className="text-sm text-right text-gray-600"><span className="bg-green-500 p-1 rounded-md">{`Nº ${pokemon.id}`}</span></h4>
            <div className="flex items-center justify-center">
            {/* <Image src={pokemon["sprites"].other.dream_world.front_default ?? DefaultPokemon} */}
                <Image src={pokemon["sprites"].front_default ?? DefaultPokemon}
                    className="drop-shadow-2xl flex-1"
                    alt="pokemon logo"
                    quality={100}
                    width={100}
                    height={100}
                />
            </div>
            <div className="w-full h-full">
                <div className="flex gap-2 justify-center items-center text-gray-800">
                { pokemon["types"].map( x => {
                    return (<span key={x.type.name+x.type.url} className={`${pokemonColor[x.type.name]} text-sm p-2 rounded-md`}>{pokemonk[x.type.name]}</span>)
                })}
                </div>
                <h1 className="text-2xl text-gray-900 font-semibold">{pokemon.name.toUpperCase()}</h1>
            </div>

            <div className="w-full bg-white p-2 border border-gray-300 rounded-xl">
                {pokemon["stats"].map(x => {
                    return (
                        <div className="px-3" key={x.name}>
                            <div className="text-sm">{x.stat.name}</div>
                            <div className="flex items-center justify-center">
                                <div className="pr-2 text-sm">
                                    {x.base_stat}%
                                </div>
                                <div class="w-full h-1 bg-neutral-200 dark:bg-neutral-600">
                                    <div class="h-1 bg-green-400 p-0.5 text-center text-xs font-medium leading-none text-white"
                                        style={{ width: (x.base_stat < 100 ? x.base_stat : 100) + '%' }}></div>
                                </div>
                            </div>
                        </div>

                    )
                })}
            </div>
        </div >
    )
}