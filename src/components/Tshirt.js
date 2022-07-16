import { Suspense, useRef,useState } from 'react';
import { OrbitControls, useGLTF } from '@react-three/drei';

export default function Model({ ...props }) {
  const group = useRef()
  const { nodes, materials } = useGLTF('/Tshirt.gltf')
  return (
    <group ref={group} {...props} dispose={null}>
      <mesh geometry={nodes.AM_102_035_003_AM_102_035_002_0.geometry} material={materials.AM_102_035_002} material-color={"white"} />
    </group>
  )
}

useGLTF.preload('/Tshirt.gltf')