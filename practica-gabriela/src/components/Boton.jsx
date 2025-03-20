const Boton =({titulo})=>{

const estilo={
    boton: {
        backgroundColor: 'yellow',
        color: 'black'
    }
}

    return(
        <button type="button" 
        className="boton">{titulo}</button>
    )
}

export default Boton;