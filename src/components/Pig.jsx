import React from 'react'
import { useGLTF } from '@react-three/drei'
import pigGLB from '../images/pig.glb'

const Pig = () => {
  const { scene } = useGLTF(pigGLB)

  scene.scale.set(0.88, 0.88, 0.88) // Ajusta la escala del modelo
  scene.rotation.y = Math.PI / 1.3 // Aplica una rotación para mostrar la imagen de frente
  scene.position.set(1, -0.5, 14) // Ajusta la posición del modelo

  return <primitive object={scene} />
}

export default Pig
