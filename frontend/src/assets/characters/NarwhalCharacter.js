import React, { useEffect, useRef, useState } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";

export default function NarwhalCharacter() {
  const group = useRef();
  const [action, setAction] = useState("Idle_A");

  const previousAction = usePrevious(action);
  const { nodes, materials, animations } = useGLTF(
    "/assets/animals/GLTF/Animations/Narwhal_Animations.gltf"
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
            name="Narwhal"
            geometry={nodes.Narwhal.geometry}
            material={materials.M_Narwhal}
            skeleton={nodes.Narwhal.skeleton}
            morphTargetDictionary={nodes.Narwhal.morphTargetDictionary}
            morphTargetInfluences={nodes.Narwhal.morphTargetInfluences}
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

useGLTF.preload("/assets/animals/GLTF/Animations/Narwhal_Animations.gltf");

function usePrevious(value) {
  const ref = useRef();
  useEffect(() => {
    ref.current = value;
  }, [value]);
  return ref.current;
}