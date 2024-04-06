import './Cards.css'

const Cards = ({ nome, image, cargo }) => {

    console.log(image);

    return (
        <div className="cards">
            <div className='head'>
                <img src={image} alt='Profile' />
            </div>
            <div className='footer'>
                <h4>{nome}</h4>
                <h5>{cargo}</h5>

            </div>
        </div>
    )
}

export default Cards