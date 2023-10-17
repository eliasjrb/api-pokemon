import Image from "next/image"
import DefaultPokemon from "../../../public/images/default-pokemon.png"

export default function CardPokemon({ pokemon }) {
    return (
        <div className='flex flex-col text-center justify-center items-center p-3 border border-gray-400  rounded hover:bg-gray-500 hover:text-gray-900'>
            <div className="bg-gradient-to-r from-sky-500 to-indigo-500 p-5 rounded-full">
                <Image src={pokemon["sprites"].front_default ?? DefaultPokemon}
                    className="drop-shadow-2xl animate-bounce"
                    alt="pokemon logo"
                    quality={100}
                    width={80}
                    height={80}
                />
            </div>
            <h1 className="text-2xl">{pokemon.name}</h1>

            <div className="w-full">
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
        </div>
    )
}