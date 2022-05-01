import { useEffect, useState } from 'react';
import './App.css';
import Form from './components/Form';
import List from './components/List';
import { Sub } from './types';

interface AppState {
  subs: Sub[];
}

const INITIAL_STATE = [
  {
    nick: 'Carlos',
    subMonths: 3,
    avatar: 'https://i.pravatar.cc/150?u=dapelu',
    description: 'Hace de moredador en ocasiones',
  },
  {
    nick: 'Jose',
    subMonths: 5,
    avatar: 'https://i.pravatar.cc/150?u=perro',
  },
];

function App() {
  const [subs, setSubs] = useState<AppState['subs']>(INITIAL_STATE);

  useEffect(() => {}, []);
  return (
    <div className="App">
      <h1>Carlos Subs</h1>
      <List subs={subs} />
      <Form onNewSub={setSubs} />
    </div>
  );
}

export default App;
