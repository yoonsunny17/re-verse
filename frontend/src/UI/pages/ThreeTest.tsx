import { Canvas } from "@react-three/fiber";
import React, { useRef } from "react";
// import { Suspense } from "react";
// import { Model } from "../../../public/characters_pack/Scene";
import { useGLTF, OrbitControls, useAnimations } from "@react-three/drei";
import { GLTF } from "three-stdlib";
type GLTFResult = GLTF & {
  nodes: {
    polySurface81_lambert8_0: THREE.Mesh;
    polySurface94_lambert8_0: THREE.Mesh;
    polySurface95_lambert8_0: THREE.Mesh;
    polySurface96_lambert8_0: THREE.Mesh;
    polySurface57_lambert11_0: THREE.Mesh;
    polySurface56_lambert6_0: THREE.Mesh;
    polySurface55_lambert6_0: THREE.Mesh;
    polySurface54_lambert6_0: THREE.Mesh;
    polySurface53_lambert6_0: THREE.Mesh;
    polySurface52_lambert6_0: THREE.Mesh;
    polySurface51_lambert6_0: THREE.Mesh;
    polySurface50_lambert6_0: THREE.Mesh;
    polySurface49_lambert6_0: THREE.Mesh;
    polySurface48_lambert6_0: THREE.Mesh;
    polySurface47_lambert6_0: THREE.Mesh;
    polySurface46_lambert6_0: THREE.Mesh;
    polySurface45_lambert6_0: THREE.Mesh;
    polySurface44_lambert6_0: THREE.Mesh;
    polySurface43_lambert6_0: THREE.Mesh;
    polySurface42_lambert6_0: THREE.Mesh;
    polySurface41_lambert6_0: THREE.Mesh;
    polySurface40_lambert6_0: THREE.Mesh;
    polySurface12_lambert3_0: THREE.Mesh;
    polySurface11_lambert3_0: THREE.Mesh;
    polySurface10_lambert3_0: THREE.Mesh;
    polySurface9_lambert3_0: THREE.Mesh;
    polySurface8_lambert3_0: THREE.Mesh;
    polySurface7_lambert3_0: THREE.Mesh;
    polySurface6_lambert3_0: THREE.Mesh;
    polySurface5_lambert3_0: THREE.Mesh;
    polySurface4_lambert3_0: THREE.Mesh;
    polySurface3_lambert3_0: THREE.Mesh;
    polySurface2_lambert3_0: THREE.Mesh;
    polySurface1_lambert3_0: THREE.Mesh;
    polySurface23_lambert8_0: THREE.Mesh;
    polySurface33_lambert8_0: THREE.Mesh;
    polySurface29_lambert8_0: THREE.Mesh;
    polySurface31_lambert8_0: THREE.Mesh;
    polySurface27_lambert8_0: THREE.Mesh;
    polySurface22_lambert8_0: THREE.Mesh;
    polySurface32_lambert8_0: THREE.Mesh;
    polySurface26_lambert8_0: THREE.Mesh;
    polySurface28_lambert8_0: THREE.Mesh;
    polySurface21_lambert8_0: THREE.Mesh;
    polySurface30_lambert8_0: THREE.Mesh;
    polySurface24_lambert8_0: THREE.Mesh;
    polySurface25_lambert8_0: THREE.Mesh;
    polySurface36_lambert8_0: THREE.Mesh;
    polySurface34_lambert8_0: THREE.Mesh;
    polySurface35_lambert11_0: THREE.Mesh;
    polySurface37_lambert8_0: THREE.Mesh;
    polySurface38_lambert8_0: THREE.Mesh;
    polySurface15_lambert3_0: THREE.Mesh;
    polySurface16_lambert3_0: THREE.Mesh;
    polySurface14_lambert3_0: THREE.Mesh;
    polySurface13_lambert3_0: THREE.Mesh;
    polySurface39_lambert6_0: THREE.Mesh;
    polySurface20_lambert8_0: THREE.Mesh;
    polySurface18_lambert3_0: THREE.Mesh;
    polySurface19_lambert11_0: THREE.Mesh;
    polySurface17_lambert3_0: THREE.Mesh;
    PG_01_accessories1_lambert3_0: THREE.Mesh;
    PG_02_accessories1_lambert3_0: THREE.Mesh;
    PG_03_accessories1_lambert3_0: THREE.Mesh;
    PG_04_accessories1_lambert3_0: THREE.Mesh;
    PG_05_accessories1_lambert3_0: THREE.Mesh;
    polySurface64_lambert3_0: THREE.Mesh;
    polySurface65_lambert3_0: THREE.Mesh;
    polySurface66_lambert3_0: THREE.Mesh;
    polySurface67_lambert3_0: THREE.Mesh;
    polySurface68_lambert3_0: THREE.Mesh;
    PG_11_accessories1_lambert3_0: THREE.Mesh;
    PG_12_accessories1_lambert3_0: THREE.Mesh;
    PG_13_accessories1_lambert3_0: THREE.Mesh;
    PG_14_accessories1_lambert3_0: THREE.Mesh;
    PG_15_accessories1_lambert3_0: THREE.Mesh;
    PG_16_accessories1_lambert3_0: THREE.Mesh;
    polySurface75_lambert3_0: THREE.Mesh;
    polySurface76_lambert3_0: THREE.Mesh;
    polySurface77_lambert11_0: THREE.Mesh;
    polySurface97_lambert6_0: THREE.Mesh;
    polySurface98_lambert6_0: THREE.Mesh;
    polySurface99_lambert6_0: THREE.Mesh;
    polySurface100_lambert6_0: THREE.Mesh;
    polySurface101_lambert6_0: THREE.Mesh;
    polySurface102_lambert6_0: THREE.Mesh;
    polySurface103_lambert6_0: THREE.Mesh;
    polySurface104_lambert6_0: THREE.Mesh;
    polySurface105_lambert6_0: THREE.Mesh;
    polySurface106_lambert6_0: THREE.Mesh;
    polySurface107_lambert6_0: THREE.Mesh;
    polySurface108_lambert6_0: THREE.Mesh;
    polySurface108_lambert16_0: THREE.Mesh;
    polySurface109_lambert6_0: THREE.Mesh;
    polySurface110_lambert6_0: THREE.Mesh;
    polySurface110_PG_33_glass_0: THREE.Mesh;
    polySurface111_lambert6_0: THREE.Mesh;
    polySurface111_lambert15_0: THREE.Mesh;
    polySurface112_lambert6_0: THREE.Mesh;
    polySurface113_lambert6_0: THREE.Mesh;
    PG_37_accessories1_lambert6_0: THREE.Mesh;
    PG_38_accessories1_lambert11_0: THREE.Mesh;
    polySurface78_lambert8_0: THREE.Mesh;
    polySurface79_lambert8_0: THREE.Mesh;
    polySurface80_lambert8_0: THREE.Mesh;
    polySurface80_lambert17_0: THREE.Mesh;
    polySurface82_lambert8_0: THREE.Mesh;
    polySurface83_lambert8_0: THREE.Mesh;
    polySurface84_lambert8_0: THREE.Mesh;
    polySurface85_lambert8_0: THREE.Mesh;
    polySurface86_lambert8_0: THREE.Mesh;
    polySurface87_lambert8_0: THREE.Mesh;
    polySurface88_lambert8_0: THREE.Mesh;
    polySurface89_lambert8_0: THREE.Mesh;
    polySurface90_lambert8_0: THREE.Mesh;
    polySurface91_lambert8_0: THREE.Mesh;
    polySurface92_lambert8_0: THREE.Mesh;
    polySurface93_lambert11_0: THREE.Mesh;
    Object_7: THREE.SkinnedMesh;
    Object_8: THREE.SkinnedMesh;
    _rootJoint: THREE.Bone;
  };
  materials: {
    lambert8: THREE.MeshBasicMaterial;
    lambert11: THREE.MeshBasicMaterial;
    lambert6: THREE.MeshBasicMaterial;
    lambert3: THREE.MeshBasicMaterial;
    lambert16: THREE.MeshBasicMaterial;
    PG_33_glass: THREE.MeshBasicMaterial;
    lambert15: THREE.MeshBasicMaterial;
    lambert17: THREE.MeshBasicMaterial;
    PG_42pCube35SG1: THREE.MeshBasicMaterial;
    PG_42polySurface162SG1: THREE.MeshBasicMaterial;
  };
  animations: GLTFAction[];
};
type ActionName = "Take 001";
// type GLTFActions = Record<ActionName, THREE.AnimationAction>
interface GLTFAction extends THREE.AnimationClip {
  name: ActionName;
}
function Scene(props: JSX.IntrinsicElements["group"]) {
  const group = useRef<THREE.Group>(null);
  const mesh = useRef<THREE.Mesh>(null!);
  const { nodes, materials, animations } = useGLTF(
    "characters_pack/scene.gltf"
  ) as unknown as GLTFResult;
  const { actions } = useAnimations(animations, group);
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <group
          name="Sketchfab_model"
          rotation={[-Math.PI / 2, 0, 0]}
          scale={3.98}
        >
          <group
            name="34784d6679264234b47bfae814ef0eabfbx"
            rotation={[Math.PI / 2, 0, 0]}
          >
            <group name="Object_2">
              <group name="RootNode">
                <group name="Object_4">
                  <primitive object={nodes._rootJoint} />
                  <group name="Object_6" />
                  <group name="Character1" />
                  <group name="PG_01_accessories" position={[1.81, 0, -4.92]}>
                    <group name="transform4" />
                  </group>
                  <group name="PG_02_accessories" position={[1.72, 0, -4.92]}>
                    <group name="transform6" />
                  </group>
                  <group name="PG_03_accessories" position={[1.65, 0, -4.92]}>
                    <group name="transform8" />
                  </group>
                  <group name="PG_04_accessories" position={[0.65, 0, -4.92]}>
                    <group name="transform10" />
                  </group>
                  <group name="PG_05_accessories" position={[-0.26, 0, -4.92]}>
                    <group name="transform12" />
                  </group>
                  <group name="PG_06_accessories" position={[-1.35, 0, -4.92]}>
                    <group name="transform13" />
                  </group>
                  <group name="PG_07_accessories" position={[-1.35, 0, -4.92]}>
                    <group name="transform15" />
                  </group>
                  <group name="PG_08_accessories" position={[-1.35, 0, -4.92]}>
                    <group name="transform17" />
                  </group>
                  <group name="PG_09_accessories" position={[-1.35, 0, -4.92]}>
                    <group name="transform19" />
                  </group>
                  <group name="PG_10_accessories" position={[-0.32, 0, -4.92]}>
                    <group name="transform21" />
                  </group>
                  <group name="PG_11_accessories" position={[-0.33, 0, -4.92]}>
                    <group name="transform24" />
                  </group>
                  <group name="PG_12_accessories" position={[-0.35, 0, -4.92]}>
                    <group name="transform26" />
                  </group>
                  <group name="PG_13_accessories" position={[-0.35, 0, -4.92]}>
                    <group name="transform28" />
                  </group>
                  <group name="PG_14_accessories" position={[-0.35, 0, -4.92]}>
                    <group name="transform30" />
                  </group>
                  <group name="PG_15_accessories" position={[-0.35, 0, -4.92]}>
                    <group name="transform32" />
                  </group>
                  <group name="PG_16_accessories" position={[-0.35, 0, -4.92]}>
                    <group name="transform34" />
                  </group>
                  <group name="PG_17_accessories" position={[-0.35, 0, -4.92]}>
                    <group name="transform35" />
                  </group>
                  <group name="PG_18_accessories" position={[-0.35, 0, -4.92]}>
                    <group name="transform37" />
                  </group>
                  <group name="PG_19_accessories" position={[-1.35, 0, -4.92]}>
                    <group name="transform39" />
                  </group>
                  <group
                    name="PG_39_accessories"
                    position={[-7.41, 0, -16.74]}
                    scale={0.01}
                  >
                    <group name="transform79" />
                  </group>
                  <group
                    name="PG_40_accessories"
                    position={[-8.41, 0, -16.74]}
                    scale={0.01}
                  >
                    <group name="transform81" />
                  </group>
                  <group
                    name="PG_41_accessories"
                    position={[-8.46, 0, -16.74]}
                    scale={0.01}
                  >
                    <group name="transform83" />
                  </group>
                  <group
                    name="PG_43_accessories"
                    position={[6.06, 0, -16.74]}
                    scale={0.01}
                  >
                    <group name="transform85" />
                  </group>
                  <group
                    name="PG_44_accessories"
                    position={[6.06, 0, -16.74]}
                    scale={0.01}
                  >
                    <group name="transform87" />
                  </group>
                  <group
                    name="PG_45_accessories"
                    position={[6.06, 0, -16.74]}
                    scale={0.01}
                  >
                    <group name="transform89" />
                  </group>
                  <group
                    name="PG_46_accessories"
                    position={[6.06, 0, -16.74]}
                    scale={0.01}
                  >
                    <group name="transform91" />
                  </group>
                  <group
                    name="PG_47_accessories"
                    position={[6.06, 0, -16.74]}
                    scale={0.01}
                  >
                    <group name="transform93" />
                  </group>
                  <group
                    name="PG_48_accessories"
                    position={[5.06, 0, -16.74]}
                    scale={0.01}
                  >
                    <group name="transform95" />
                  </group>
                  <group
                    name="PG_49_accessories"
                    position={[5.53, 0, -16.74]}
                    scale={0.01}
                  >
                    <group name="transform97" />
                  </group>
                  <group
                    name="PG_50_accessories"
                    position={[5.06, 0, -16.74]}
                    scale={0.01}
                  >
                    <group name="transform99" />
                  </group>
                  <group
                    name="PG_51_accessories"
                    position={[5.06, 0, -16.74]}
                    scale={0.01}
                  >
                    <group name="transform101" />
                  </group>
                  <group
                    name="PG_52_accessories"
                    position={[5.06, 0, -16.74]}
                    scale={0.01}
                  >
                    <group name="transform103" />
                  </group>
                  <group
                    name="PG_53_accessories"
                    position={[5.06, 0, -16.74]}
                    scale={0.01}
                  >
                    <group name="transform105" />
                  </group>
                  <group
                    name="PG_54_accessories"
                    position={[5.06, 0, -16.74]}
                    scale={0.01}
                  >
                    <group name="transform107" />
                  </group>
                  <group name="PG_20_accessories" position={[0.27, 0, 20.63]}>
                    <group name="transform41" />
                  </group>
                  <group name="PG_21_accessories" position={[0.27, 0, 20.63]}>
                    <group name="transform43" />
                  </group>
                  <group name="PG_22_accessories" position={[0.27, 0, 20.63]}>
                    <group name="transform45" />
                  </group>
                  <group name="PG_23_accessories" position={[0.27, 0, 20.63]}>
                    <group name="transform47" />
                  </group>
                  <group name="PG_24_accessories" position={[0.2, 0, 20.63]}>
                    <group name="transform49" />
                  </group>
                  <group name="PG_25_accessories" position={[0.28, 0, 20.63]}>
                    <group name="transform51" />
                  </group>
                  <group name="PG_26_accessories" position={[0.27, 0, 20.63]}>
                    <group name="transform53" />
                  </group>
                  <group name="PG_27_accessories" position={[0.27, 0, 20.63]}>
                    <group name="transform55" />
                  </group>
                  <group name="PG_28_accessories" position={[0.27, 0, 20.63]}>
                    <group name="transform57" />
                  </group>
                  <group name="PG_29_accessories" position={[0.27, 0, 20.63]}>
                    <group name="transform59" />
                  </group>
                  <group name="PG_30_accessories" position={[0.27, 0, 20.63]}>
                    <group name="transform61" />
                  </group>
                  <group name="PG_31_accessories" position={[0.27, 0, 20.63]}>
                    <group name="transform63" />
                  </group>
                  <group name="PG_32_accessories" position={[-0.45, 0, 20.63]}>
                    <group name="transform65" />
                  </group>
                  <group name="PG_33_accessories" position={[-0.45, 0, 20.63]}>
                    <group name="transform67" />
                  </group>
                  <group name="PG_34_accessories" position={[-0.45, 0, 20.63]}>
                    <group name="transform69" />
                  </group>
                  <group name="PG_35_accessories" position={[-0.45, 0, 20.63]}>
                    <group name="transform71" />
                  </group>
                  <group name="PG_36_accessories" position={[-0.45, 0, 20.63]}>
                    <group name="transform73" />
                  </group>
                  <group name="PG_37_accessories" position={[-0.45, 0, 20.63]}>
                    <group name="transform76" />
                  </group>
                  <group name="PG_38_accessories" position={[-1.45, 0, 20.63]}>
                    <group name="transform78" />
                  </group>
                  <group name="PG_01_body1">
                    <group name="polySurface58">
                      <group name="polySurface59">
                        <group name="transform3" />
                      </group>
                      <group name="polySurface60">
                        <group name="transform5" />
                      </group>
                      <group name="polySurface61">
                        <group name="transform7" />
                      </group>
                      <group name="polySurface62">
                        <group name="transform9" />
                      </group>
                      <group name="polySurface63">
                        <group name="transform11" />
                      </group>
                      <group name="polySurface64_1">
                        <group name="transform14" />
                      </group>
                      <group name="polySurface65_1">
                        <group name="transform16" />
                      </group>
                      <group name="polySurface66_1">
                        <group name="transform18" />
                      </group>
                      <group name="polySurface67_1">
                        <group name="transform20" />
                      </group>
                      <group name="polySurface68_1">
                        <group name="transform22" />
                      </group>
                      <group name="polySurface69">
                        <group name="transform23" />
                      </group>
                      <group name="polySurface70">
                        <group name="transform25" />
                      </group>
                      <group name="polySurface71">
                        <group name="transform27" />
                      </group>
                      <group name="polySurface72">
                        <group name="transform29" />
                      </group>
                      <group name="polySurface73">
                        <group name="transform31" />
                      </group>
                      <group name="polySurface74">
                        <group name="transform33" />
                      </group>
                      <group name="polySurface75_1">
                        <group name="transform36" />
                      </group>
                      <group name="polySurface76_1">
                        <group name="transform38" />
                      </group>
                      <group name="polySurface77_1">
                        <group name="transform40" />
                      </group>
                      <group name="polySurface78_1">
                        <group name="transform80" />
                      </group>
                      <group name="polySurface79_1">
                        <group name="transform82" />
                      </group>
                      <group name="polySurface80_1">
                        <group name="transform84" />
                      </group>
                      <group name="polySurface81">
                        <mesh
                          name="polySurface81_lambert8_0"
                          geometry={nodes.polySurface81_lambert8_0.geometry}
                          material={materials.lambert8}
                        />
                      </group>
                      <group name="polySurface82_1">
                        <group name="transform86" />
                      </group>
                      <group name="polySurface83_1">
                        <group name="transform88" />
                      </group>
                      <group name="polySurface84_1">
                        <group name="transform90" />
                      </group>
                      <group name="polySurface85_1">
                        <group name="transform92" />
                      </group>
                      <group name="polySurface86_1">
                        <group name="transform94" />
                      </group>
                      <group name="polySurface87_1">
                        <group name="transform96" />
                      </group>
                      <group name="polySurface88_1">
                        <group name="transform98" />
                      </group>
                      <group name="polySurface89_1">
                        <group name="transform100" />
                      </group>
                      <group name="polySurface90_1">
                        <group name="transform102" />
                      </group>
                      <group name="polySurface91_1">
                        <group name="transform104" />
                      </group>
                      <group name="polySurface92_1">
                        <group name="transform106" />
                      </group>
                      <group name="polySurface93_1">
                        <group name="transform108" />
                      </group>
                      <group name="polySurface94">
                        <mesh
                          name="polySurface94_lambert8_0"
                          geometry={nodes.polySurface94_lambert8_0.geometry}
                          material={materials.lambert8}
                        />
                      </group>
                      <group name="polySurface95">
                        <mesh
                          name="polySurface95_lambert8_0"
                          geometry={nodes.polySurface95_lambert8_0.geometry}
                          material={materials.lambert8}
                        />
                      </group>
                      <group name="polySurface96">
                        <mesh
                          name="polySurface96_lambert8_0"
                          geometry={nodes.polySurface96_lambert8_0.geometry}
                          material={materials.lambert8}
                        />
                      </group>
                      <group name="polySurface97_1">
                        <group name="transform42" />
                      </group>
                      <group name="polySurface98_1">
                        <group name="transform44" />
                      </group>
                      <group name="polySurface99_1">
                        <group name="transform46" />
                      </group>
                      <group name="polySurface100_1">
                        <group name="transform48" />
                      </group>
                      <group name="polySurface101_1">
                        <group name="transform50" />
                      </group>
                      <group name="polySurface102_1">
                        <group name="transform52" />
                      </group>
                      <group name="polySurface103_1">
                        <group name="transform54" />
                      </group>
                      <group name="polySurface104_1">
                        <group name="transform56" />
                      </group>
                      <group name="polySurface105_1">
                        <group name="transform58" />
                      </group>
                      <group name="polySurface106_1">
                        <group name="transform60" />
                      </group>
                      <group name="polySurface107_1">
                        <group name="transform62" />
                      </group>
                      <group name="polySurface108_1">
                        <group name="transform64" />
                      </group>
                      <group name="polySurface109_1">
                        <group name="transform66" />
                      </group>
                      <group name="polySurface110_1">
                        <group name="transform68" />
                      </group>
                      <group name="polySurface111_1">
                        <group name="transform70" />
                      </group>
                      <group name="polySurface112_1">
                        <group name="transform72" />
                      </group>
                      <group name="polySurface113_1">
                        <group name="transform74" />
                      </group>
                      <group name="polySurface114">
                        <group name="transform75" />
                      </group>
                      <group name="polySurface115">
                        <group name="transform77" />
                      </group>
                      <group name="transform2" />
                    </group>
                    <group name="transform1" />
                  </group>
                  <group name="group1">
                    <group name="polySurface57">
                      <mesh
                        name="polySurface57_lambert11_0"
                        geometry={nodes.polySurface57_lambert11_0.geometry}
                        material={materials.lambert11}
                      />
                    </group>
                    <group name="polySurface56">
                      <mesh
                        name="polySurface56_lambert6_0"
                        geometry={nodes.polySurface56_lambert6_0.geometry}
                        material={materials.lambert6}
                      />
                    </group>
                    <group name="polySurface55">
                      <mesh
                        name="polySurface55_lambert6_0"
                        geometry={nodes.polySurface55_lambert6_0.geometry}
                        material={materials.lambert6}
                      />
                    </group>
                    <group name="polySurface54">
                      <mesh
                        name="polySurface54_lambert6_0"
                        geometry={nodes.polySurface54_lambert6_0.geometry}
                        material={materials.lambert6}
                      />
                    </group>
                    <group name="polySurface53">
                      <mesh
                        name="polySurface53_lambert6_0"
                        geometry={nodes.polySurface53_lambert6_0.geometry}
                        material={materials.lambert6}
                      />
                    </group>
                    <group name="polySurface52">
                      <mesh
                        name="polySurface52_lambert6_0"
                        geometry={nodes.polySurface52_lambert6_0.geometry}
                        material={materials.lambert6}
                      />
                    </group>
                    <group name="polySurface51">
                      <mesh
                        name="polySurface51_lambert6_0"
                        geometry={nodes.polySurface51_lambert6_0.geometry}
                        material={materials.lambert6}
                      />
                    </group>
                    <group name="polySurface50">
                      <mesh
                        name="polySurface50_lambert6_0"
                        geometry={nodes.polySurface50_lambert6_0.geometry}
                        material={materials.lambert6}
                      />
                    </group>
                    <group name="polySurface49">
                      <mesh
                        name="polySurface49_lambert6_0"
                        geometry={nodes.polySurface49_lambert6_0.geometry}
                        material={materials.lambert6}
                      />
                    </group>
                    <group name="polySurface48">
                      <mesh
                        name="polySurface48_lambert6_0"
                        geometry={nodes.polySurface48_lambert6_0.geometry}
                        material={materials.lambert6}
                      />
                    </group>
                    <group name="polySurface47">
                      <mesh
                        name="polySurface47_lambert6_0"
                        geometry={nodes.polySurface47_lambert6_0.geometry}
                        material={materials.lambert6}
                      />
                    </group>
                    <group name="polySurface46">
                      <mesh
                        name="polySurface46_lambert6_0"
                        geometry={nodes.polySurface46_lambert6_0.geometry}
                        material={materials.lambert6}
                      />
                    </group>
                    <group name="polySurface45">
                      <mesh
                        name="polySurface45_lambert6_0"
                        geometry={nodes.polySurface45_lambert6_0.geometry}
                        material={materials.lambert6}
                      />
                    </group>
                    <group name="polySurface44">
                      <mesh
                        name="polySurface44_lambert6_0"
                        geometry={nodes.polySurface44_lambert6_0.geometry}
                        material={materials.lambert6}
                      />
                    </group>
                    <group name="polySurface43">
                      <mesh
                        name="polySurface43_lambert6_0"
                        geometry={nodes.polySurface43_lambert6_0.geometry}
                        material={materials.lambert6}
                      />
                    </group>
                    <group name="polySurface42">
                      <mesh
                        name="polySurface42_lambert6_0"
                        geometry={nodes.polySurface42_lambert6_0.geometry}
                        material={materials.lambert6}
                      />
                    </group>
                    <group name="polySurface41">
                      <mesh
                        name="polySurface41_lambert6_0"
                        geometry={nodes.polySurface41_lambert6_0.geometry}
                        material={materials.lambert6}
                      />
                    </group>
                    <group name="polySurface40">
                      <mesh
                        name="polySurface40_lambert6_0"
                        geometry={nodes.polySurface40_lambert6_0.geometry}
                        material={materials.lambert6}
                      />
                    </group>
                    <group name="polySurface12">
                      <mesh
                        name="polySurface12_lambert3_0"
                        geometry={nodes.polySurface12_lambert3_0.geometry}
                        material={materials.lambert3}
                      />
                    </group>
                    <group name="polySurface11">
                      <mesh
                        name="polySurface11_lambert3_0"
                        geometry={nodes.polySurface11_lambert3_0.geometry}
                        material={materials.lambert3}
                      />
                    </group>
                    <group name="polySurface10">
                      <mesh
                        name="polySurface10_lambert3_0"
                        geometry={nodes.polySurface10_lambert3_0.geometry}
                        material={materials.lambert3}
                      />
                    </group>
                    <group name="polySurface9">
                      <mesh
                        name="polySurface9_lambert3_0"
                        geometry={nodes.polySurface9_lambert3_0.geometry}
                        material={materials.lambert3}
                      />
                    </group>
                    <group name="polySurface8">
                      <mesh
                        name="polySurface8_lambert3_0"
                        geometry={nodes.polySurface8_lambert3_0.geometry}
                        material={materials.lambert3}
                      />
                    </group>
                    <group name="polySurface7">
                      <mesh
                        name="polySurface7_lambert3_0"
                        geometry={nodes.polySurface7_lambert3_0.geometry}
                        material={materials.lambert3}
                      />
                    </group>
                    <group name="polySurface6">
                      <mesh
                        name="polySurface6_lambert3_0"
                        geometry={nodes.polySurface6_lambert3_0.geometry}
                        material={materials.lambert3}
                      />
                    </group>
                    <group name="polySurface5">
                      <mesh
                        name="polySurface5_lambert3_0"
                        geometry={nodes.polySurface5_lambert3_0.geometry}
                        material={materials.lambert3}
                      />
                    </group>
                    <group name="polySurface4">
                      <mesh
                        name="polySurface4_lambert3_0"
                        geometry={nodes.polySurface4_lambert3_0.geometry}
                        material={materials.lambert3}
                      />
                    </group>
                    <group name="polySurface3">
                      <mesh
                        name="polySurface3_lambert3_0"
                        geometry={nodes.polySurface3_lambert3_0.geometry}
                        material={materials.lambert3}
                      />
                    </group>
                    <group name="polySurface2">
                      <mesh
                        name="polySurface2_lambert3_0"
                        geometry={nodes.polySurface2_lambert3_0.geometry}
                        material={materials.lambert3}
                      />
                    </group>
                    <group name="polySurface1">
                      <mesh
                        name="polySurface1_lambert3_0"
                        geometry={nodes.polySurface1_lambert3_0.geometry}
                        material={materials.lambert3}
                      />
                    </group>
                    <group name="polySurface23">
                      <mesh
                        name="polySurface23_lambert8_0"
                        geometry={nodes.polySurface23_lambert8_0.geometry}
                        material={materials.lambert8}
                      />
                    </group>
                    <group name="polySurface33">
                      <mesh
                        name="polySurface33_lambert8_0"
                        geometry={nodes.polySurface33_lambert8_0.geometry}
                        material={materials.lambert8}
                      />
                    </group>
                    <group name="polySurface29">
                      <mesh
                        name="polySurface29_lambert8_0"
                        geometry={nodes.polySurface29_lambert8_0.geometry}
                        material={materials.lambert8}
                      />
                    </group>
                    <group name="polySurface31">
                      <mesh
                        name="polySurface31_lambert8_0"
                        geometry={nodes.polySurface31_lambert8_0.geometry}
                        material={materials.lambert8}
                      />
                    </group>
                    <group name="polySurface27">
                      <mesh
                        name="polySurface27_lambert8_0"
                        geometry={nodes.polySurface27_lambert8_0.geometry}
                        material={materials.lambert8}
                      />
                    </group>
                    <group name="polySurface22">
                      <mesh
                        name="polySurface22_lambert8_0"
                        geometry={nodes.polySurface22_lambert8_0.geometry}
                        material={materials.lambert8}
                      />
                    </group>
                    <group name="polySurface32">
                      <mesh
                        name="polySurface32_lambert8_0"
                        geometry={nodes.polySurface32_lambert8_0.geometry}
                        material={materials.lambert8}
                      />
                    </group>
                    <group name="polySurface26">
                      <mesh
                        name="polySurface26_lambert8_0"
                        geometry={nodes.polySurface26_lambert8_0.geometry}
                        material={materials.lambert8}
                      />
                    </group>
                    <group name="polySurface28">
                      <mesh
                        name="polySurface28_lambert8_0"
                        geometry={nodes.polySurface28_lambert8_0.geometry}
                        material={materials.lambert8}
                      />
                    </group>
                    <group name="polySurface21">
                      <mesh
                        name="polySurface21_lambert8_0"
                        geometry={nodes.polySurface21_lambert8_0.geometry}
                        material={materials.lambert8}
                      />
                    </group>
                    <group name="polySurface30">
                      <mesh
                        name="polySurface30_lambert8_0"
                        geometry={nodes.polySurface30_lambert8_0.geometry}
                        material={materials.lambert8}
                      />
                    </group>
                    <group name="polySurface24">
                      <mesh
                        name="polySurface24_lambert8_0"
                        geometry={nodes.polySurface24_lambert8_0.geometry}
                        material={materials.lambert8}
                      />
                    </group>
                    <group name="polySurface25">
                      <mesh
                        name="polySurface25_lambert8_0"
                        geometry={nodes.polySurface25_lambert8_0.geometry}
                        material={materials.lambert8}
                      />
                    </group>
                    <group name="polySurface36">
                      <mesh
                        name="polySurface36_lambert8_0"
                        geometry={nodes.polySurface36_lambert8_0.geometry}
                        material={materials.lambert8}
                      />
                    </group>
                    <group name="polySurface34">
                      <mesh
                        name="polySurface34_lambert8_0"
                        geometry={nodes.polySurface34_lambert8_0.geometry}
                        material={materials.lambert8}
                      />
                    </group>
                    <group name="polySurface35">
                      <mesh
                        name="polySurface35_lambert11_0"
                        geometry={nodes.polySurface35_lambert11_0.geometry}
                        material={materials.lambert11}
                      />
                    </group>
                    <group name="polySurface37">
                      <mesh
                        name="polySurface37_lambert8_0"
                        geometry={nodes.polySurface37_lambert8_0.geometry}
                        material={materials.lambert8}
                      />
                    </group>
                    <group name="polySurface38">
                      <mesh
                        name="polySurface38_lambert8_0"
                        geometry={nodes.polySurface38_lambert8_0.geometry}
                        material={materials.lambert8}
                      />
                    </group>
                    <group name="polySurface15">
                      <mesh
                        name="polySurface15_lambert3_0"
                        geometry={nodes.polySurface15_lambert3_0.geometry}
                        material={materials.lambert3}
                      />
                    </group>
                    <group name="polySurface16">
                      <mesh
                        name="polySurface16_lambert3_0"
                        geometry={nodes.polySurface16_lambert3_0.geometry}
                        material={materials.lambert3}
                      />
                    </group>
                    <group name="polySurface14">
                      <mesh
                        name="polySurface14_lambert3_0"
                        geometry={nodes.polySurface14_lambert3_0.geometry}
                        material={materials.lambert3}
                      />
                    </group>
                    <group name="polySurface13">
                      <mesh
                        name="polySurface13_lambert3_0"
                        geometry={nodes.polySurface13_lambert3_0.geometry}
                        material={materials.lambert3}
                      />
                    </group>
                    <group name="polySurface39">
                      <mesh
                        name="polySurface39_lambert6_0"
                        geometry={nodes.polySurface39_lambert6_0.geometry}
                        material={materials.lambert6}
                      />
                    </group>
                    <group name="polySurface20">
                      <mesh
                        name="polySurface20_lambert8_0"
                        geometry={nodes.polySurface20_lambert8_0.geometry}
                        material={materials.lambert8}
                      />
                    </group>
                    <group name="polySurface18">
                      <mesh
                        name="polySurface18_lambert3_0"
                        geometry={nodes.polySurface18_lambert3_0.geometry}
                        material={materials.lambert3}
                      />
                    </group>
                    <group name="polySurface19">
                      <mesh
                        name="polySurface19_lambert11_0"
                        geometry={nodes.polySurface19_lambert11_0.geometry}
                        material={materials.lambert11}
                      />
                    </group>
                    <group name="polySurface17">
                      <mesh
                        name="polySurface17_lambert3_0"
                        geometry={nodes.polySurface17_lambert3_0.geometry}
                        material={materials.lambert3}
                      />
                    </group>
                  </group>
                  <group name="PG_01_accessories1">
                    <mesh
                      name="PG_01_accessories1_lambert3_0"
                      geometry={nodes.PG_01_accessories1_lambert3_0.geometry}
                      material={materials.lambert3}
                    />
                  </group>
                  <group name="PG_02_accessories1">
                    <mesh
                      name="PG_02_accessories1_lambert3_0"
                      geometry={nodes.PG_02_accessories1_lambert3_0.geometry}
                      material={materials.lambert3}
                    />
                  </group>
                  <group name="PG_03_accessories1">
                    <mesh
                      name="PG_03_accessories1_lambert3_0"
                      geometry={nodes.PG_03_accessories1_lambert3_0.geometry}
                      material={materials.lambert3}
                    />
                  </group>
                  <group name="PG_04_accessories1">
                    <mesh
                      name="PG_04_accessories1_lambert3_0"
                      geometry={nodes.PG_04_accessories1_lambert3_0.geometry}
                      material={materials.lambert3}
                    />
                  </group>
                  <group name="PG_05_accessories1">
                    <mesh
                      name="PG_05_accessories1_lambert3_0"
                      geometry={nodes.PG_05_accessories1_lambert3_0.geometry}
                      material={materials.lambert3}
                    />
                  </group>
                  <group name="polySurface64">
                    <mesh
                      name="polySurface64_lambert3_0"
                      geometry={nodes.polySurface64_lambert3_0.geometry}
                      material={materials.lambert3}
                    />
                  </group>
                  <group name="polySurface65">
                    <mesh
                      name="polySurface65_lambert3_0"
                      geometry={nodes.polySurface65_lambert3_0.geometry}
                      material={materials.lambert3}
                    />
                  </group>
                  <group name="polySurface66">
                    <mesh
                      name="polySurface66_lambert3_0"
                      geometry={nodes.polySurface66_lambert3_0.geometry}
                      material={materials.lambert3}
                    />
                  </group>
                  <group name="polySurface67">
                    <mesh
                      name="polySurface67_lambert3_0"
                      geometry={nodes.polySurface67_lambert3_0.geometry}
                      material={materials.lambert3}
                    />
                  </group>
                  <group name="polySurface68">
                    <mesh
                      name="polySurface68_lambert3_0"
                      geometry={nodes.polySurface68_lambert3_0.geometry}
                      material={materials.lambert3}
                    />
                  </group>
                  <group name="PG_11_accessories1">
                    <mesh
                      name="PG_11_accessories1_lambert3_0"
                      geometry={nodes.PG_11_accessories1_lambert3_0.geometry}
                      material={materials.lambert3}
                    />
                  </group>
                  <group name="PG_12_accessories1">
                    <mesh
                      name="PG_12_accessories1_lambert3_0"
                      geometry={nodes.PG_12_accessories1_lambert3_0.geometry}
                      material={materials.lambert3}
                    />
                  </group>
                  <group name="PG_13_accessories1">
                    <mesh
                      name="PG_13_accessories1_lambert3_0"
                      geometry={nodes.PG_13_accessories1_lambert3_0.geometry}
                      material={materials.lambert3}
                    />
                  </group>
                  <group name="PG_14_accessories1">
                    <mesh
                      name="PG_14_accessories1_lambert3_0"
                      geometry={nodes.PG_14_accessories1_lambert3_0.geometry}
                      material={materials.lambert3}
                    />
                  </group>
                  <group name="PG_15_accessories1">
                    <mesh
                      name="PG_15_accessories1_lambert3_0"
                      geometry={nodes.PG_15_accessories1_lambert3_0.geometry}
                      material={materials.lambert3}
                    />
                  </group>
                  <group name="PG_16_accessories1">
                    <mesh
                      name="PG_16_accessories1_lambert3_0"
                      geometry={nodes.PG_16_accessories1_lambert3_0.geometry}
                      material={materials.lambert3}
                    />
                  </group>
                  <group name="polySurface75">
                    <mesh
                      name="polySurface75_lambert3_0"
                      geometry={nodes.polySurface75_lambert3_0.geometry}
                      material={materials.lambert3}
                    />
                  </group>
                  <group name="polySurface76">
                    <mesh
                      name="polySurface76_lambert3_0"
                      geometry={nodes.polySurface76_lambert3_0.geometry}
                      material={materials.lambert3}
                    />
                  </group>
                  <group name="polySurface77">
                    <mesh
                      name="polySurface77_lambert11_0"
                      geometry={nodes.polySurface77_lambert11_0.geometry}
                      material={materials.lambert11}
                    />
                  </group>
                  <group name="polySurface97">
                    <mesh
                      name="polySurface97_lambert6_0"
                      geometry={nodes.polySurface97_lambert6_0.geometry}
                      material={materials.lambert6}
                    />
                  </group>
                  <group name="polySurface98">
                    <mesh
                      name="polySurface98_lambert6_0"
                      geometry={nodes.polySurface98_lambert6_0.geometry}
                      material={materials.lambert6}
                    />
                  </group>
                  <group name="polySurface99">
                    <mesh
                      name="polySurface99_lambert6_0"
                      geometry={nodes.polySurface99_lambert6_0.geometry}
                      material={materials.lambert6}
                    />
                  </group>
                  <group name="polySurface100">
                    <mesh
                      name="polySurface100_lambert6_0"
                      geometry={nodes.polySurface100_lambert6_0.geometry}
                      material={materials.lambert6}
                    />
                  </group>
                  <group name="polySurface101">
                    <mesh
                      name="polySurface101_lambert6_0"
                      geometry={nodes.polySurface101_lambert6_0.geometry}
                      material={materials.lambert6}
                    />
                  </group>
                  <group name="polySurface102">
                    <mesh
                      name="polySurface102_lambert6_0"
                      geometry={nodes.polySurface102_lambert6_0.geometry}
                      material={materials.lambert6}
                    />
                  </group>
                  <group name="polySurface103">
                    <mesh
                      name="polySurface103_lambert6_0"
                      geometry={nodes.polySurface103_lambert6_0.geometry}
                      material={materials.lambert6}
                    />
                  </group>
                  <group name="polySurface104">
                    <mesh
                      name="polySurface104_lambert6_0"
                      geometry={nodes.polySurface104_lambert6_0.geometry}
                      material={materials.lambert6}
                    />
                  </group>
                  <group name="polySurface105">
                    <mesh
                      name="polySurface105_lambert6_0"
                      geometry={nodes.polySurface105_lambert6_0.geometry}
                      material={materials.lambert6}
                    />
                  </group>
                  <group name="polySurface106">
                    <mesh
                      name="polySurface106_lambert6_0"
                      geometry={nodes.polySurface106_lambert6_0.geometry}
                      material={materials.lambert6}
                    />
                  </group>
                  <group name="polySurface107">
                    <mesh
                      name="polySurface107_lambert6_0"
                      geometry={nodes.polySurface107_lambert6_0.geometry}
                      material={materials.lambert6}
                    />
                  </group>
                  <group name="polySurface108">
                    <mesh
                      name="polySurface108_lambert6_0"
                      geometry={nodes.polySurface108_lambert6_0.geometry}
                      material={materials.lambert6}
                    />
                    <mesh
                      name="polySurface108_lambert16_0"
                      geometry={nodes.polySurface108_lambert16_0.geometry}
                      material={materials.lambert16}
                    />
                  </group>
                  <group name="polySurface109">
                    <mesh
                      name="polySurface109_lambert6_0"
                      geometry={nodes.polySurface109_lambert6_0.geometry}
                      material={materials.lambert6}
                    />
                  </group>
                  <group name="polySurface110">
                    <mesh
                      name="polySurface110_lambert6_0"
                      geometry={nodes.polySurface110_lambert6_0.geometry}
                      material={materials.lambert6}
                    />
                    <mesh
                      name="polySurface110_PG_33_glass_0"
                      geometry={nodes.polySurface110_PG_33_glass_0.geometry}
                      material={materials.PG_33_glass}
                    />
                  </group>
                  <group name="polySurface111">
                    <mesh
                      name="polySurface111_lambert6_0"
                      geometry={nodes.polySurface111_lambert6_0.geometry}
                      material={materials.lambert6}
                    />
                    <mesh
                      name="polySurface111_lambert15_0"
                      geometry={nodes.polySurface111_lambert15_0.geometry}
                      material={materials.lambert15}
                    />
                  </group>
                  <group name="polySurface112">
                    <mesh
                      name="polySurface112_lambert6_0"
                      geometry={nodes.polySurface112_lambert6_0.geometry}
                      material={materials.lambert6}
                    />
                  </group>
                  <group name="polySurface113">
                    <mesh
                      name="polySurface113_lambert6_0"
                      geometry={nodes.polySurface113_lambert6_0.geometry}
                      material={materials.lambert6}
                    />
                  </group>
                  <group name="PG_37_accessories1">
                    <mesh
                      name="PG_37_accessories1_lambert6_0"
                      geometry={nodes.PG_37_accessories1_lambert6_0.geometry}
                      material={materials.lambert6}
                    />
                  </group>
                  <group name="PG_38_accessories1">
                    <mesh
                      name="PG_38_accessories1_lambert11_0"
                      geometry={nodes.PG_38_accessories1_lambert11_0.geometry}
                      material={materials.lambert11}
                    />
                  </group>
                  <group name="polySurface78">
                    <mesh
                      name="polySurface78_lambert8_0"
                      geometry={nodes.polySurface78_lambert8_0.geometry}
                      material={materials.lambert8}
                    />
                  </group>
                  <group name="polySurface79">
                    <mesh
                      name="polySurface79_lambert8_0"
                      geometry={nodes.polySurface79_lambert8_0.geometry}
                      material={materials.lambert8}
                    />
                  </group>
                  <group name="polySurface80">
                    <mesh
                      name="polySurface80_lambert8_0"
                      geometry={nodes.polySurface80_lambert8_0.geometry}
                      material={materials.lambert8}
                    />
                    <mesh
                      name="polySurface80_lambert17_0"
                      geometry={nodes.polySurface80_lambert17_0.geometry}
                      material={materials.lambert17}
                    />
                  </group>
                  <group name="polySurface82">
                    <mesh
                      name="polySurface82_lambert8_0"
                      geometry={nodes.polySurface82_lambert8_0.geometry}
                      material={materials.lambert8}
                    />
                  </group>
                  <group name="polySurface83">
                    <mesh
                      name="polySurface83_lambert8_0"
                      geometry={nodes.polySurface83_lambert8_0.geometry}
                      material={materials.lambert8}
                    />
                  </group>
                  <group name="polySurface84">
                    <mesh
                      name="polySurface84_lambert8_0"
                      geometry={nodes.polySurface84_lambert8_0.geometry}
                      material={materials.lambert8}
                    />
                  </group>
                  <group name="polySurface85">
                    <mesh
                      name="polySurface85_lambert8_0"
                      geometry={nodes.polySurface85_lambert8_0.geometry}
                      material={materials.lambert8}
                    />
                  </group>
                  <group name="polySurface86">
                    <mesh
                      name="polySurface86_lambert8_0"
                      geometry={nodes.polySurface86_lambert8_0.geometry}
                      material={materials.lambert8}
                    />
                  </group>
                  <group name="polySurface87">
                    <mesh
                      name="polySurface87_lambert8_0"
                      geometry={nodes.polySurface87_lambert8_0.geometry}
                      material={materials.lambert8}
                    />
                  </group>
                  <group name="polySurface88">
                    <mesh
                      name="polySurface88_lambert8_0"
                      geometry={nodes.polySurface88_lambert8_0.geometry}
                      material={materials.lambert8}
                    />
                  </group>
                  <group name="polySurface89">
                    <mesh
                      name="polySurface89_lambert8_0"
                      geometry={nodes.polySurface89_lambert8_0.geometry}
                      material={materials.lambert8}
                    />
                  </group>
                  <group name="polySurface90">
                    <mesh
                      name="polySurface90_lambert8_0"
                      geometry={nodes.polySurface90_lambert8_0.geometry}
                      material={materials.lambert8}
                    />
                  </group>
                  <group name="polySurface91">
                    <mesh
                      name="polySurface91_lambert8_0"
                      geometry={nodes.polySurface91_lambert8_0.geometry}
                      material={materials.lambert8}
                    />
                  </group>
                  <group name="polySurface92">
                    <mesh
                      name="polySurface92_lambert8_0"
                      geometry={nodes.polySurface92_lambert8_0.geometry}
                      material={materials.lambert8}
                    />
                  </group>
                  <group name="polySurface93">
                    <mesh
                      name="polySurface93_lambert11_0"
                      geometry={nodes.polySurface93_lambert11_0.geometry}
                      material={materials.lambert11}
                    />
                  </group>
                  <skinnedMesh
                    name="Object_7"
                    geometry={nodes.Object_7.geometry}
                    material={materials.PG_42pCube35SG1}
                    skeleton={nodes.Object_7.skeleton}
                  />
                  <skinnedMesh
                    name="Object_8"
                    geometry={nodes.Object_8.geometry}
                    material={materials.PG_42polySurface162SG1}
                    skeleton={nodes.Object_8.skeleton}
                  />
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  );
}

function ThreeTest() {
  return (
    <Canvas>
      <OrbitControls enablePan={true} enableZoom={true} enableRotate={true} />
      <Scene />
    </Canvas>
  );
}

export default ThreeTest;
