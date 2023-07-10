import React from 'react'
import { useGLTF } from '@react-three/drei'
import giraffeGLB from '../images/giraffe.glb'

const Giraffe = () => {
  const { scene } = useGLTF(giraffeGLB)

  scene.scale.set(0.052, 0.052, 0.052) // Ajusta la escala del modelo
  scene.rotation.y = Math.PI / 1.2 // Aplica una rotación para mostrar la imagen de frente
  scene.position.set(-2, -0.5, -12) // Ajusta la posición del modelo

  return <primitive object={scene} />
}

export default Giraffe
