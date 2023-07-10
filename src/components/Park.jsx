import React from 'react'
import { useGLTF } from '@react-three/drei'
import parkGLB from '../images/park.glb'

const Park = () => {
  const { scene } = useGLTF(parkGLB)

  scene.scale.set(7.8, 7.8, 7.8) // Ajusta la escala del modelo
  scene.rotation.y = Math.PI / 400 // Aplica una rotación para mostrar la imagen de frente
  scene.position.set(8, -0.5, -13.4) // Ajusta la posición del modelo

  return <primitive object={scene} />
}

export default Park
