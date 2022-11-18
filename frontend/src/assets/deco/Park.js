/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
author: N1x (https://sketchfab.com/N1x)
license: SKETCHFAB Standard (https://sketchfab.com/licenses)
source: https://sketchfab.com/3d-models/isometric-low-poly-park-36d03819e5154f2d876924220c035ee4
title: Isometric Low Poly Park
*/

// TODO: 여기서 다리만 쓰고 싶은데.. CANNON 적용 된다면 다리만 배치하고싶음 다리 컴포넌트 뭔지 여기서 찾아줘
// TODO: 여기서 다리만 쓰고 싶은데.. CANNON 적용 된다면 다리만 배치하고싶음 다리 컴포넌트 뭔지 여기서 찾아줘
// TODO: 여기서 다리만 쓰고 싶은데.. CANNON 적용 된다면 다리만 배치하고싶음 다리 컴포넌트 뭔지 여기서 찾아줘
// TODO: 여기서 다리만 쓰고 싶은데.. CANNON 적용 된다면 다리만 배치하고싶음 다리 컴포넌트 뭔지 여기서 찾아줘
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function Park(props) {
  const { nodes, materials } = useGLTF("/assets/park/scene.gltf");
  return (
    <group {...props} dispose={null} scale={7} position={[75, 0, 7]}>
      <group rotation={[-Math.PI / 2, 0, -Math.PI / 10]}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          {/* <mesh geometry={nodes.Object_4.geometry} material={materials.Material} />
          <mesh geometry={nodes.Object_6.geometry} material={materials.Material} />
          <group position={[2.98, 0, -2.98]}>
            <mesh geometry={nodes.Object_8.geometry} material={materials.Material} />
          </group> */}
          {/* 다리 */}
          <group position={[0.25, 0, 0.25]}>
            <mesh
              geometry={nodes.Object_12.geometry}
              material={materials.Material}
            />
            <mesh
              geometry={nodes.Object_14.geometry}
              material={materials.Material}
            />
            <mesh
              geometry={nodes.Object_10.geometry}
              material={materials.Material}
            />
          </group>

          {/* 다리바닥 */}
          <mesh
            geometry={nodes.Object_116.geometry}
            material={materials.Material}
          />
          {/* 다리 밑 물 */}
          <mesh
            geometry={nodes.Object_118.geometry}
            material={materials.MaterialRough}
          />
          {/* 장식 돌 */}
          <group position={[-0.16, 0, 2.13]}>
            <mesh
              geometry={nodes.Object_120.geometry}
              material={materials.Material}
            />
          </group>
          <group position={[0.13, 0, 2.48]}>
            <mesh
              geometry={nodes.Object_122.geometry}
              material={materials.Material}
            />
          </group>
          <group position={[0.45, 0, 2.59]}>
            <mesh
              geometry={nodes.Object_124.geometry}
              material={materials.Material}
            />
          </group>
          <group position={[0.45, 0, 2.95]}>
            <mesh
              geometry={nodes.Object_126.geometry}
              material={materials.Material}
            />
          </group>
          <group position={[0.45, 0, 3.31]}>
            <mesh
              geometry={nodes.Object_128.geometry}
              material={materials.Material}
            />
          </group>
          <group position={[0.93, 0, 3.44]}>
            <mesh
              geometry={nodes.Object_130.geometry}
              material={materials.Material}
            />
          </group>
          <group position={[0.93, 0, 3.78]}>
            <mesh
              geometry={nodes.Object_132.geometry}
              material={materials.Material}
            />
          </group>
          <group position={[0.25, 0, -1.59]}>
            <mesh
              geometry={nodes.Object_134.geometry}
              material={materials.Material}
            />
          </group>
          <group position={[-0.4, 0, -2.55]}>
            <mesh
              geometry={nodes.Object_136.geometry}
              material={materials.Material}
            />
          </group>
          <group position={[-0.4, 0, -2.93]}>
            <mesh
              geometry={nodes.Object_138.geometry}
              material={materials.Material}
            />
          </group>
          <group position={[-0.4, 0, -3.3]}>
            <mesh
              geometry={nodes.Object_140.geometry}
              material={materials.Material}
            />
          </group>
          <group position={[-0.01, 0, -3.46]}>
            <mesh
              geometry={nodes.Object_142.geometry}
              material={materials.Material}
            />
          </group>
          <group position={[-0.01, 0, -2.73]}>
            <mesh
              geometry={nodes.Object_144.geometry}
              material={materials.Material}
            />
          </group>
          <group position={[-0.83, 0, -3.7]}>
            <mesh
              geometry={nodes.Object_146.geometry}
              material={materials.Material}
            />
          </group>
          <group position={[-0.83, 0, -2.33]}>
            <mesh
              geometry={nodes.Object_148.geometry}
              material={materials.Material}
            />
          </group>
          <group position={[-0.59, 0, -1.99]}>
            <mesh
              geometry={nodes.Object_150.geometry}
              material={materials.Material}
            />
          </group>
          <group position={[-0.09, 0.39, 1.52]} rotation={[0.47, 0, 0]}>
            <mesh
              geometry={nodes.Object_152.geometry}
              material={materials.Material}
            />
          </group>
          <group position={[0.03, 0.53, 1.21]} rotation={[0.42, 0, 0]}>
            <mesh
              geometry={nodes.Object_154.geometry}
              material={materials.Material}
            />
          </group>
          <group position={[0.03, 0.74, 0.39]}>
            <mesh
              geometry={nodes.Object_156.geometry}
              material={materials.Material}
            />
          </group>
          <group position={[0.37, 0.74, 0.17]}>
            <mesh
              geometry={nodes.Object_158.geometry}
              material={materials.Material}
            />
          </group>
          <group position={[-0.16, 0.44, -0.92]} rotation={[-0.47, 0, 0]}>
            <mesh
              geometry={nodes.Object_160.geometry}
              material={materials.Material}
            />
          </group>
          <group position={[0.18, 0.36, -1.06]} rotation={[-0.47, 0, 0]}>
            <mesh
              geometry={nodes.Object_162.geometry}
              material={materials.Material}
            />
          </group>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/scene.gltf");