import React from 'react'
import { useGLTF } from '@react-three/drei'
import ChickenGLB from '../images/chicken.glb'

const Chicken = () => {
  const { scene } = useGLTF(ChickenGLB)

  scene.scale.set(0.04, 0.04, 0.04) // Ajusta la escala del modelo
  scene.rotation.y = Math.PI / -4 // Aplica una rotación para mostrar la imagen de frente
  scene.position.set(-12, 0, 3) // Ajusta la posición del modelo

  return <primitive object={scene} />
}

export default Chicken
