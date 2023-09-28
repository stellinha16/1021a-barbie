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
            sinopse:'Blair é uma garota simples e órfã que foi sorteada para estudar na exclusiva Escola de Princesas. A escola é um lugar incrível, onde as meninas aprendem dança, etiqueta, arte e outras habilidades indispensáveis a uma princesa. Blair adora suas aulas, suas novas fadinhas assistentes e suas novas amigas, as princesas Hadley e Isla. Porém, quando a malvada Dama Devin desconfia que Blair é a princesa e herdeira desaparecida, ela faz de tudo para impedir que Blair assuma o trono.',
            imagem:'/3.jpg'
        },      
        {
            id:5,
            titulo:'Sapatilhas magicas',
            sinopse:'Kristyn e Hailey vão parar em um mundo mágico do balé dominado pela diabólica Rainha das Neves. As duas bailarinas dançam seus balés fav',
            imagem:'/4.jpg'
        },     
        {
            id:6,
            titulo:'Segredo das Fadas',
            sinopse:'Mundos mágicos, fadas e cavalos voadores são alguns dos elementos encontrados neste filme da Barbie. Ela precisa viajar a um mundo encantado para salvar Ken. Nesta aventura, serão revelados segredos e algumas amizades serão testadas.',
            imagem:'/5.png'
        },      
        {
            id:7,
            titulo:'Barbie',
            sinopse:'Depois de ser expulsa da Barbieland por ser uma boneca de aparência menos do que perfeita, Barbie parte para o mundo humano em busca da verdadeira felicidade.',
            imagem:'/6.jpg'
        },
        {
            id:8,
            titulo:'Vida na Dreamhouse',
            sinopse:'Barbie e seus amigos vivem muitas aventuras juntos e estão sempre à procura de diversão.',
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