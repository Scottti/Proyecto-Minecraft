// App.jsx
import React from 'react'
import { Canvas } from '@react-three/fiber'
import { Sky } from '@react-three/drei'
import { Physics } from '@react-three/cannon'
import { Ground } from './components/Ground.jsx'
import { FPV as Fpv } from './components/FPV.jsx'
import { Player } from './components/Player.jsx'
import { Cubes } from './components/Cubes.jsx'
import { TextureSelector } from './components/TextureSelect.jsx'
import Giraffe from './components/Giraffe.jsx'
import Chicken from './components/Chicken.jsx'
import Pig from './components/Pig.jsx'
import Park from './components/Park.jsx'
import Village from './components/Village.jsx'
import Bear from './components/Bear.jsx'
import Dog from './components/Dog.jsx'
import Farm from './components/Farm.jsx'
import Goat from './components/Goat.jsx'

function App () {
  return (
    <>
      <Canvas>
        <Sky sunPosition={[100, 100, 20]} />
        <ambientLight intensity={0.5} />
        <Fpv />

        <Physics>
          <Cubes />
          <Player />
          <Ground />
          <Giraffe />
          <Chicken />
          <Pig />
          <Park />
          <Village />
          <Bear />
          <Dog />
          <Farm />
          <Goat />
        </Physics>
      </Canvas>
      <div className='pointer'>+</div>
      <TextureSelector />
    </>
  )
}

export default App
