import Image from 'next/image'

async function getData(url) {
    const response = await fetch(url)
    return response.json()
}

export default async function RepositorioId({params}) {
    const data = await getData("https://api.openligadb.de/getmatchdata/bl1/2020/1");
    return(
        <div className='grid grid-cols-3 gap-3 w-4/5 mx-auto'>
            {data.map( async (x, i) => {
             if(i == 0){
                 console.log(x)
             }
                return (
                    <div className='flex flex-col text-center justify-center items-center p-3 border border-gray-400  rounded hover:bg-gray-400'>
                       <h1>{x.team1.teamName}</h1>
                       <h1>{x.team1.shortName}</h1>
                        <img src={x.team1.teamIconUrl} width={75}/>
                    </div>
                )
            })}
        </div>
    )
}