import CardPokemon from '@/components/CardPokemon';
import Paginacao from '@/components/Paginacao';

async function getData(url) {
    const response = await fetch(url)
    return response.json()
}

const paginacao = {
    paginaAtual: 1,
    totalDeItens: 0,
    qtdPorPagina: 1,
    itens: []
}

function addItem (item){
    paginacao.itens.push(item)
}

export default async function Pokemon({params}) {
    let limit = 6
    let offset = (params.page - 1) * limit
    const data = await getData(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`);
    paginacao.paginaAtual = params.page
    paginacao.totalDeItens = data.count
    paginacao.qtdPorPagina = limit

   
    return (
        <>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-3 w-4/5 mx-auto'>
                {data.results.map(async x => {
                    let pokemon = await getData(x.url);
                    addItem (pokemon)
                    return (
                        <>
                            <CardPokemon key={pokemon.id} pokemon={pokemon} />
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