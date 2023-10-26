import Image from "next/image"
import DefaultPokemon from "../../../public/images/default-pokemon.png"

export default function CardPokemon({ pokemon }) {
    return (
        <div className='flex flex-col text-center justify-center items-center bg-white p-2 border border-gray-300 rounded-xl'>
            <h4 className="text-sm text-right text-gray-600"><span className="bg-green-500 p-1 rounded-md">{`Nº ${pokemon.id}`}</span></h4>
            <div className="flex items-center justify-center">
            <Image src={pokemon["sprites"].other.dream_world.front_default ?? DefaultPokemon}
                //  <Image src={pokemon["sprites"].front_default ?? DefaultPokemon} 
                    className="drop-shadow-2xl flex-1"
                    alt="pokemon logo"
                    quality={100}
                    width={100}
                    height={100}
                />
            </div>
            <div className="w-full h-full">
                <h1 className="text-2xl text-gray-900 font-semibold">{pokemon.name.toUpperCase()}</h1>
            </div>

            {/* <div className="w-full bg-white p-2 border border-gray-300 rounded-xl">
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
            </div> */}
        </div >
    )
}