import './Botao.css'

function Botao(props) {
    // const form = document.querySelector('form')
    
    return (
        <button className='botao'>
            {props.children}
       </button>
    )
}

export default Botao