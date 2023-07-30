import { useState } from 'react';
import './App.css'
import data from './db/data.json'
import BoxInfo from './components/BoxInfo';

const listBg = ['img1', 'img2', 'img3', 'img4'];


function App() {

  const randomList = (list) => {
    const randomIndex = Math.floor(Math.random() * list.length)
    return list[randomIndex];
  }

const [ dataB, setDataB ] = useState(randomList(data));
const [ backG, setBackG] = useState(randomList(listBg));

const handleClick = () => {
  setDataB(randomList(data))
  setBackG(randomList(listBg))
}

  return (
    <main className={`main ${backG} `}>
        <BoxInfo handleClick={handleClick} dataB={dataB} />
    </main>
  )
}

export default App
