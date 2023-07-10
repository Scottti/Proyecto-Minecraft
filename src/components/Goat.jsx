import React from 'react'
import { useGLTF } from '@react-three/drei'
import goatGLB from '../images/goat.glb'

const Goat = () => {
  const { scene } = useGLTF(goatGLB)

  scene.scale.set(1, 1, 1) // Ajusta la escala del modelo
  scene.rotation.y = Math.PI / 1.4 // Aplica una rotación para mostrar la imagen de frente
  scene.position.set(1, 5.2, 1) // Ajusta la posición del modelo

  return <primitive object={scene} />
}

export default Goat
