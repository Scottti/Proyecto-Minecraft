import React from 'react'
import { useGLTF } from '@react-three/drei'
import farmGLB from '../images/farm.glb'

const Farm = () => {
  const { scene } = useGLTF(farmGLB)

  scene.scale.set(9, 9, 9) // Ajusta la escala del modelo
  scene.rotation.y = Math.PI / -2 // Aplica una rotación para mostrar la imagen de frente
  scene.position.set(6.5, -1.2, 13) // Ajusta la posición del modelo

  return <primitive object={scene} />
}

export default Farm
