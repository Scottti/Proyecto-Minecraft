import React from 'react'
import { useGLTF } from '@react-three/drei'
import bearGLB from '../images/bear.glb'

const Bear = () => {
  const { scene } = useGLTF(bearGLB)

  scene.scale.set(0.7, 0.7, 0.7) // Ajusta la escala del modelo
  scene.rotation.y = Math.PI / 2 // Aplica una rotación para mostrar la imagen de frente
  scene.position.set(-18, -0.5, 6) // Ajusta la posición del modelo

  return <primitive object={scene} />
}

export default Bear
