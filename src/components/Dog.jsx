import React from 'react'
import { useGLTF } from '@react-three/drei'
import dogGLB from '../images/dog.glb'

const Dog = () => {
  const { scene } = useGLTF(dogGLB)

  scene.scale.set(0.040, 0.040, 0.040) // Ajusta la escala del modelo
  scene.rotation.y = Math.PI / 1.2 // Aplica una rotación para mostrar la imagen de frente
  scene.position.set(-4, -0.5, 7) // Ajusta la posición del modelo

  return <primitive object={scene} />
}

export default Dog
