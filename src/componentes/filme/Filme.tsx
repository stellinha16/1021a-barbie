import './Filme.css'
import imagem from "./../img/filme.jpg";

function Filme(){
    return(
        <div className="filme-content">
            <img src={imagem} alt=""/>
            <div className='texto-barbie'>
                <h1>Barbie</h1>
                <p className='sinopse'>ladhfdfjdfbfgergbrgbfvfengegbegkb </p>
            </div>
            </div>
    )
}

export default Filme