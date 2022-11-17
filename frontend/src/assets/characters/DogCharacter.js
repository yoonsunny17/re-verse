import React, { useEffect, useRef, useState } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";

export default function DogCharacter() {
  const group = useRef();
  const [action, setAction] = useState("Idle_A");

  const previousAction = usePrevious(action);
  const { nodes, materials, animations } = useGLTF(
    "/assets/animals/GLTF/Animations/Dog_Animations.gltf"
  );
  const { actions, names } = useAnimations(animations, group);

  const [index, setIndex] = useState(8);
  useEffect(() => {
    actions[names[index]].reset().fadeIn(0.5).play();
    return () => {
      if (actions[names[index]]) {
        actions[names[index]].fadeOut(0.5);
      }
    };
  }, [index, actions, names]);

  return (
    <group ref={group} dispose={null}>
      <group name="Scene">
        <group name="Rig">
          <primitive object={nodes.root} />
          <skinnedMesh
            name="Dog"
            geometry={nodes.Dog.geometry}
            material={materials.M_Dog}
            skeleton={nodes.Dog.skeleton}
            morphTargetDictionary={nodes.Dog.morphTargetDictionary}
            morphTargetInfluences={nodes.Dog.morphTargetInfluences}
            // 그림자 설정은 여기에!
            castShadow
            receiveShadow
            onClick={() => setIndex((index + 1) % names.length)}
          />
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/assets/animals/GLTF/Animations/Dog_Animations.gltf");

function usePrevious(value) {
  const ref = useRef();
  useEffect(() => {
    ref.current = value;
  }, [value]);
  return ref.current;
}
