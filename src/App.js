import { useState } from 'react';
import Banner from './components/Banner/Banner';
import Form from './components/Form';
import Options from './components/Opicoes';

function App() {

  const [cards, setCards] = useState([])

  const items = [
    {
      id: 1,
      nome: 'Gamer',
      corPrimaria: '#57c278',
      corSecundaria: '#d9f7e9',
    },
    {
      id: 2,
      nome: 'Programador',
      corPrimaria: '#82CFFA',
      corSecundaria: '#E8F8FF',
    },
    {
      id: 3,
      nome: 'DevOps',
      corPrimaria: '#E06B69',
      corSecundaria: '#FDE7E8',
    },
    {
      id: 4,
      nome: 'Hacker',
      corPrimaria: '#FFBA05',
      corSecundaria: '#FFF5D9',
    }
  ]

  return (
    <div className="App">
      <Banner />
      <Form
        cards={card => setCards([...cards, card])}
        items={items}
      />

      {items.map(item => <Options
        key={item.id}
        name={item.nome}
        CorPrimaria={item.corPrimaria}
        CorSecundaria={item.corSecundaria}
        cards= {cards.filter(card => card.options === item.nome)}
      />)}

    </div>
  );
}

export default App;
