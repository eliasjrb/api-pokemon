import { FaAnglesRight, FaAngleRight, FaAnglesLeft, FaAngleLeft } from "react-icons/fa6";

export default function Paginacao({ paginacao }) {
    const totalDePaginas = Math.ceil(paginacao.totalDeItens / paginacao.qtdPorPagina)
    const paginaAtual = paginacao.paginaAtual
    const Primeiros5 = paginaAtual >= 1 && paginaAtual < 4;
    const ultimos5 = totalDePaginas - paginaAtual < 4;
    const totalMenorQue5 = totalDePaginas < 5;
    const botaoInicial = totalMenorQue5 ? 1 : Primeiros5 ? 2 : ultimos5 ? totalDePaginas - 4 : paginaAtual == totalDePaginas ? paginaAtual - 2 : paginaAtual - 1;
    const botaoFinal = totalMenorQue5 ? totalDePaginas : Primeiros5 ? 5 : ultimos5 ? totalDePaginas - 1 : botaoInicial + 2;

    const paginasCentral = []

    const classPaginaLink = `font-semibold rounded-md`
    const linkItem = `flex items-center justify-center h-full px-3 py-2`
    const classPadrao = `text-blue-500 bg-gray-100 hover:bg-blue-600 hover:text-gray-100`
    const classAtivo = `text-gray-100 bg-blue-500 hover:bg-blue-600 hover:text-gray-100`
    const classDisable = `text-white-100 bg-gray-400`


    for (let pagina = botaoInicial; pagina <= botaoFinal; pagina++) {
        if (!(pagina == 1 || pagina == totalDePaginas)) {
            if (!((pagina === 1) && (paginaAtual < 4))) {
                paginasCentral.push(pagina)
            }
        }
    }

    return (
        <>
            {totalDePaginas &&
                <div class="flex justify-center mt-4">
                    <nav>
                        <ul class="flex space-x-2">
                            <li className={`${classPaginaLink} ${!(paginaAtual > 1 && totalDePaginas > 1) ? classDisable : classPadrao}`}>
                                <a className={linkItem} href="/pokemons/1" aria-label="Primeira">
                                    <FaAnglesLeft size={20} />
                                </a>
                            </li>
                            <li className={`${classPaginaLink} ${!(paginaAtual > 1 && totalDePaginas > 1) ? classDisable : classPadrao}`}>
                                <a className={linkItem} href={`/pokemons/${paginaAtual - 1}`}>
                                <FaAngleLeft size={20} />
                                </a>
                            </li>
                            <li className={`${classPaginaLink} ${paginaAtual == 1 ? classAtivo : classPadrao}`}>
                                <a className={linkItem} href="/pokemons/1">1</a>
                            </li>
                            {botaoInicial > 2 &&

                                <li className={`${classDisable} font-semibold px-3 py-2 rounded-md`}>
                                    <span>...</span>
                                </li>
                            }
                            {paginasCentral.map((x, i) => {
                                return (
                                    <>
                                        <li className={`${classPaginaLink} ${paginaAtual == x ? classAtivo : classPadrao}`} >
                                            <a className={linkItem} href={`/pokemons/${x}`}>{x}</a>
                                        </li >
                                    </>
                                )
                            }
                            )}

                            {(totalDePaginas > botaoFinal + 1) &&

                                <li className={`${classDisable} font-semibold px-3 py-2 rounded-md`}>
                                    <span>...</span>
                                </li>
                            }
                            {(totalDePaginas > 1) &&
                                <li className={`${classPaginaLink} ${paginaAtual == totalDePaginas ? classAtivo : classPadrao}`}>
                                    <a className={linkItem} href={`/pokemons/${totalDePaginas}`}>{totalDePaginas}</a>
                                </li>
                            }
                            <li className={`${classPaginaLink} ${paginaAtual == totalDePaginas ? classDisable : classPadrao}`}>
                                <a className={linkItem} href={`/pokemons/${+paginaAtual + 1}`} aria-label="Proxima">
                                    <i class="fa-solid fa-angle-right"></i>
                                    <FaAngleRight size={20} />
                                </a>
                            </li>
                            <li className={`${classPaginaLink} ${paginaAtual == totalDePaginas ? classDisable : classPadrao}`}>
                                <a className={linkItem} href={`/pokemons/${totalDePaginas}`} aria-label="Ultima">
                                    <i class="fa-solid fa-angles-right"></i>
                                    <FaAnglesRight size={20} />
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>
            }
        </>
    )
}




