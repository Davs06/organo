import './Select.css'

const Select = (props) => {

    const handleChange = e => props.handleChange(e.target.value);

    return (
        <div className='select'>
            <label>{props.label}</label><br />
            <select
                required={props.required}
                value={props.value}
                onChange={handleChange}
            >
                <option value="" selected ></option>
                {props.itens.map(item =>
                    <option key={item.id} value={item.options} >
                        {item.nome}
                    </option>)}
            </select>
        </div>
    )
}

export default Select