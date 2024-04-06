import './Input.css';

const Input = (props) => {

    

    const handleChange = (e) => props.handleChange(e.target.value);

    return (
        <div className="input-text">
            <label>  {props.label} </label>
            <input value={props.value}  onChange={handleChange} required={props.required} placeholder = {props.placeholder} />
        </div>
    )

}



export default Input
