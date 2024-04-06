import Cards from '../Cards'
import './Options.css'

const Options = (props) => {

    return (
        (props.cards.length > 0) ?
            <section
                className='options'
                style={{ backgroundColor: props.CorSecundaria }}
            >
                <h3 style={{ borderColor: props.CorPrimaria }} >
                    {props.name}
                </h3>

                <div className='cardss'>
                    {props.cards.map(persona =>
                        <Cards
                            key={persona.nome}
                            nome={persona.nome}
                            cargo={persona.cargo}
                            image={persona.image}
                        />)}
                </div>
            </section> : ''
    )
}

export default Options