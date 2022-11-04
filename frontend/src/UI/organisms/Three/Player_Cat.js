import React, { useEffect, useRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import GLTFLoader from "gltfjsx/src/utils/glftLoader";

export default function CatAnimations({ action }) {
  const group = useRef();
  const previousAction = usePrevious(action);
  const { nodes, materials, animations } = useGLTF(
    "/assets/animals/GLTF/Animations/Cat_Animations.gltf"
  );
  const { actions } = useAnimations(animations, group);
  // useEffect(() => {
  //   console.log(actions);
  //   actions.Idle_A.play();
  //   console.log(previousAction);
  // });

  useEffect(() => {
    if (previousAction) {
      actions[previousAction].fadeOut(0.2);
      actions[action].stop();
    }
    actions[action].play();
    actions[action].fadeIn(0.2);
    // actions.Idle_A.play();
  }, [actions, action, previousAction]);
  return (
    <group ref={group} dispose={null}>
      <group name="Scene">
        <group name="Rig">
          <primitive object={nodes.root} />
          <skinnedMesh
            name="Cat"
            geometry={nodes.Cat.geometry}
            material={materials.M_Cat}
            skeleton={nodes.Cat.skeleton}
            morphTargetDictionary={nodes.Cat.morphTargetDictionary}
            morphTargetInfluences={nodes.Cat.morphTargetInfluences}
            // 그림자 설정은 여기에!
            castShadow
            receiveShadow
          />
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/Cat_Animations.gltf");

function usePrevious(value) {
  const ref = useRef();
  useEffect(() => {
    ref.current = value;
  }, [value]);
  return ref.current;
}
