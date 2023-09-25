import React, { useState } from 'react'
import Filme from './../filme/Filme'
import './Main.css'
type FilmeType = {
    id:number,
    titulo:string,
    sinopse:string,
    imagem:string
}

export default function Main() {
    //let textodigitado = 'Barbie'
    //Hooks são funções do React que ajudam a gente a fazer tarefas
    //específicas
    const [texto,setTexto]=useState("")

    const filmes:FilmeType[] = [
        {
            id:1,
            titulo:'Moda e Magia',
            sinopse:"Em um conto de fadas fashion, Barbie viaja a Paris para salvar o ateliê de moda da sua tia, que está prestes a ser fechado",
            imagem:'/main.jpg'
        },
        {
            id:2,
            titulo:'Vida de Sereia',
            sinopse:'Barbie é uma campeã de surfe que vive com sua família em Malibu. Um dia, ela descobre um segredo de família: ela é uma sereia. Sua mãe, a rainha de Oceana, está em perigo e ela parte numa grande aventura no fundo do mar para salvá-la.',
            imagem:'filme2.jpg'
        },
        {
            id:3,
            titulo:'Butterfly e a Princesa Fairy',
            sinopse:'Butterfly se torna a embaixadora real de Flutterfield e é enviada para estabelecer a paz entre sua terra encantada e seus rivais. Apesar de não causar uma boa impressão no rei, ela faz amizade com a tímida filha do monarca, a princesa Catania.',
            imagem:'/filme.jpg'
        },
        {
            id:4,
            titulo:'Escola de Princesas',
            sinopse:'Butterfly se torna a embaixadora real de Flutterfield e é enviada para estabelecer a paz entre sua terra encantada e seus rivais. Apesar de não causar uma boa impressão no rei, ela faz amizade com a tímida filha do monarca, a princesa Catania.',
            imagem:'/3.jpg'
        },      
        {
            id:5,
            titulo:'Sapatilhas magicas',
            sinopse:'Butterfly se torna a embaixadora real de Flutterfield e é enviada para estabelecer a paz entre sua terra encantada e seus rivais. Apesar de não causar uma boa impressão no rei, ela faz amizade com a tímida filha do monarca, a princesa Catania.',
            imagem:'/4.jpg'
        },     
        {
            id:6,
            titulo:'Segredo das Fadas',
            sinopse:'Butterfly se torna a embaixadora real de Flutterfield e é enviada para estabelecer a paz entre sua terra encantada e seus rivais. Apesar de não causar uma boa impressão no rei, ela faz amizade com a tímida filha do monarca, a princesa Catania.',
            imagem:'/5.png'
        },      
        {
            id:7,
            titulo:'Barbie',
            sinopse:'Butterfly se torna a embaixadora real de Flutterfield e é enviada para estabelecer a paz entre sua terra encantada e seus rivais. Apesar de não causar uma boa impressão no rei, ela faz amizade com a tímida filha do monarca, a princesa Catania.',
            imagem:'/6.jpg'
        },
        {
            id:8,
            titulo:'Vida na Dreamhouse',
            sinopse:'Butterfly se torna a embaixadora real de Flutterfield e é enviada para estabelecer a paz entre sua terra encantada e seus rivais. Apesar de não causar uma boa impressão no rei, ela faz amizade com a tímida filha do monarca, a princesa Catania.',
            imagem:'/7.jpg'
        }
    ]

    //O parâmetro "e" da minha função será o meu evento que ocorreu
    function TrataTexto(e:React.ChangeEvent<HTMLInputElement>){
        //console.log(e.target.value)
        //Como eu faço para mudar o texto para "TERE"
        setTexto(e.target.value)
    }
    return (
        <>
            <div className="campo_pesquisa">
                <input type="text" 
                       className='botao_pesquisa'
                       placeholder='Pesquise um Filme'
                       onChange={TrataTexto} />
                {texto && <p>Resultados Para: {texto} </p>}
            </div>
            <main className="content-main">
             
                {
                    filmes.filter((filme)=>filme.titulo.toLowerCase().includes(texto)).map(
                        (filme)=>
                            <Filme 
                                key={filme.id}
                                sinopse={filme.sinopse}
                                titulo={filme.titulo}
                                imagem={filme.imagem}
                            />
                    )
                }

        </main>
        </>
    )
}