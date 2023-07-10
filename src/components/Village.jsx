import React from 'react'
import { useGLTF } from '@react-three/drei'
import villageGLB from '../images/village.glb'

const Village = () => {
  const { scene } = useGLTF(villageGLB)

  scene.scale.set(1, 1, 1) // Ajusta la escala del modelo
  scene.rotation.y = Math.PI / 2 // Aplica una rotación para mostrar la imagen de frente
  scene.position.set(-14, 5, -4) // Ajusta la posición del modelo

  return <primitive object={scene} />
}

export default Village
