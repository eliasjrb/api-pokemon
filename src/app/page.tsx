import CardPokemon from '@/components/CardPokemon';
import Paginacao from '@/components/Paginacao';

async function getData(url:string) {
    const response = await fetch(url)
    return response.json()
}

const paginacao = {
    paginaAtual: 1,
    totalDeItens: 150,
    qtdPorPagina: 10,
}

export default async function Home({params}:any) {
  let limit = 8
  let offset = (params.page - 1) * limit
    const data = await getData(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`);

    paginacao.totalDeItens = data.count
    paginacao.qtdPorPagina = limit

   
    return (
        <>
            <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-10 w-4/5 mx-auto'>
                {data.results.map(async (x:any) => {
                    let pokemon = await getData(x.url);
                    
                    return (
                        <>
                            <CardPokemon key={pokemon.id - 1}  pokemon={pokemon} />
                        </>
                    )
                })}
            </div>
            
            <div className='w-full justify-center py-5'>
                <Paginacao paginacao={paginacao}  />
            </div>
        </>
    )
}
