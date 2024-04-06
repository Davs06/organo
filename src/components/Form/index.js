import { useState } from 'react';
import './Form.css'
import Input from '../Input';
import Select from '../Select/Index';
import Button from '../Button';

const Form = (props) => {

    const [nome, setNome] = useState('');
    const [cargo, setCargo] = useState('');
    const [image, setImage] = useState('');
    const [options, setOptions] = useState('');

    const itens = props.items


    const aoSalvar = (e => {
        e.preventDefault();
        props.cards({
            nome,
            cargo,
            image,
            options
        })
        setCargo('')
        setNome('')
        setImage('')
        // setOptions('')
    })



    return (
        <section className='form' >
            <form onSubmit={aoSalvar} >

                <h2> Preencha os dados para criar um card</h2>

                <Input
                    label="Nome"
                    required={true}
                    placeholder="Digite seu nome"
                    value={nome}
                    handleChange={value => setNome(value)}
                />
                <Input
                    label="Cargo"
                    required={true}
                    placeholder="Digite seu Cargo"
                    value={cargo}
                    handleChange={value => setCargo(value)}
                />
                <Input
                    label="Imagem"
                    placeholder="Digite o endereço da sua Imagem"
                    value={image}
                    handleChange={value => setImage(value)}
                />

                <Select
                    label="Options"
                    required={true}
                    itens={itens}
                    options={options}
                    handleChange={setOptions}
                />

                <Button>
                    Criar card
                </Button>
            </form>
        </section>
    )
}

export default Form