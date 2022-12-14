/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
author: Vanillain (https://sketchfab.com/vanillain)
license: CC-BY-NC-4.0 (http://creativecommons.org/licenses/by-nc/4.0/)
source: https://sketchfab.com/3d-models/cartoon-notebook-pencil-bd3831c95ab04e719f6ba740289a6ed1
title: Cartoon Notebook & Pencil
*/

import React, { useRef, useState } from "react";
import { useGLTF } from "@react-three/drei";
import { gsap } from "gsap";
import { useFrame } from "@react-three/fiber";

import { useSelector, useDispatch } from "react-redux";
import { setTravelWriteIsOpen } from "../../modules/reverse";
import { useBox } from "@react-three/cannon";
import { BoxGeometry } from "three";
import { Toast } from "../../UI/atoms/Toast";
export function Notebook({ props, event, position, rotation }) {
  const { nodes, materials } = useGLTF("/assets/notebook/scene.gltf");
  const travelWriteObject = useRef();

  // modal창 열어주세요
  const dispatch = useDispatch();
  const reverse = useSelector((state) => state.reverse);
  const loginUser = useSelector((state) => state.user.loginUser);
  const joinArchive = useSelector((state) => state.archive.joinArchive);
  const [boxCollider] = useBox((props) => ({
    mass: 100000,
    args: [5, 5, 5],
    type: "Static",
    position,
    ...props,
    // args: [1, 5, 1],
  }));
  return (
    <group {...props} dispose={null}>
      <group
        ref={travelWriteObject}
        rotation={rotation}
        scale={0.05}
        // position={[24, 0.4, -73.5]}
        position={position}
        // position={[46.5, 0.12, -72]}
        onPointerOver={(e) => {
          document.getElementsByTagName("body")[0].style.cursor = "pointer";
        }}
        onPointerLeave={(e) => {
          document.getElementsByTagName("body")[0].style.cursor = "";
        }}
      >
        <group rotation={[Math.PI / 2, 0, 0]}>
          <group
            position={[-2.36, 21.71, -37.71]}
            rotation={[-1.07, -1.4, 2.78]}
            scale={1.06}
          >
            <mesh
              geometry={nodes["Pencil_01_-_Default_0"].geometry}
              material={materials["01_-_Default"]}
            />
          </group>
          <group
            rotation={[-Math.PI / 2, 0, 0.7]}
            onClick={() => {
              if (joinArchive.members[0].nickname !== loginUser.nickname) {
                Toast.fire({
                  icon: "error",
                  title: "글쓰기 권한이 없습니다",
                  timer: 1500,
                });
                // alert("글쓰기 권한이 없습니다.");
                return;
              }
              dispatch(setTravelWriteIsOpen());
            }}
          >
            <mesh
              geometry={nodes.Rectangle004__0.geometry}
              material={materials.Rectangle004__0}
            />
          </group>
        </group>
        <group>
          <mesh ref={boxCollider} scale={50} position={position} {...props}>
            <meshLambertMaterial color={"hotpink"} />
          </mesh>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/scene.gltf");
