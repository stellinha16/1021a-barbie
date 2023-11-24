import { useEffect, useState } from 'react';
import Filme from './../filme/Filme'
import './Main.css'
import axios from 'axios';
type FilmeType = {
    id:number,
    titulo:string,
    descricao:string,
    foto:string
}

const URL_API = "http://localhost:3000/filmes"; 
export default function Main() {
    
    const [texto, setTexto] = useState("");
    const [filmes, setFilmes] = useState<FilmeType[]>([]);

  useEffect(() => {
    const buscarFilmes = async () => {
      try {
        const resposta = await axios.get<FilmeType[]>(URL_API);
        setFilmes(resposta.data);
      } catch (error) {
        console.log('Erro ao buscar os dados:');
      }
    };

    buscarFilmes();
  }, []);

  function TrataTexto(e:React.ChangeEvent<HTMLInputElement>){
    setTexto(e.target.value)
}

  
  return (  
    <>
       <div className="campo_pesquisa"> 
           < input type="text" 
            className='botao_pesquisa'
            placeholder='Pesquise um filme'
            onChange={TrataTexto} />
            {texto && <p>Resultados Para: {texto} </p>}
                
        </div>

        <main className="content-main">
        {
                    filmes.filter((filme)=>filme.titulo.toLowerCase().includes(texto)).map(
                        (filme)=>
                            <Filme 
                                key={filme.id}
                                descricao={filme.descricao}
                                titulo={filme.titulo}
                                foto={filme.foto}
                            />
                    )
                }
        </main>
    </>
  );
}