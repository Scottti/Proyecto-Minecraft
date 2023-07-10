import { usePlane } from '@react-three/cannon'
import { useStore } from '../hooks/useStore.js'
import { groundTexture } from '../images/textures.js'
import { useEffect, useRef, useState } from 'react'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'

export function Ground () {
  const [ref] = usePlane(() => ({
    rotation: [-Math.PI / 2, 0, 0],
    position: [0, -0.5, 0]
  }))

  const [addCube] = useStore((state) => [state.addCube])
  const [modelLoaded, setModelLoaded] = useState(false)
  const modelRef = useRef()

  useEffect(() => {
    const loader = new GLTFLoader()
    loader.load('../images/giraffe.glb', (gltf) => {
      modelRef.current = gltf.scene
      setModelLoaded(true)
    })
  }, [])

  const handleClickGround = (event) => {
    event.stopPropagation()
    const [x, y, z] = Object.values(event.point).map((n) => Math.ceil(n))

    addCube(x, y, z)
  }

  return (
    <>
      {modelLoaded && <primitive object={modelRef.current} />}
      <mesh onClick={handleClickGround} ref={ref}>
        <planeBufferGeometry attach='geometry' args={[43, 43]} />
        <meshStandardMaterial attach='material' map={groundTexture} />
      </mesh>
    </>
  )
}
