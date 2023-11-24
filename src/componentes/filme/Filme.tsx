
import './Filme.css'    
type FilmeProps ={
    titulo:string,
    descricao:string,
    foto:string

}
function Filme(props:FilmeProps){
    return(
        <div className="filme-content">
            <div className='foto-filme'>
        <img className="img-filme" src={props.foto} alt="" />
            </div>
           
            <div className="text-barbie">
                <h1>{props.titulo}</h1>
                <p className="descricao">{props.descricao}</p>
            </div>
        </div>
    )
}

export default Filme