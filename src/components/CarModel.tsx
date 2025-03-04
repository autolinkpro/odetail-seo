"use client";

import React, { Suspense, useLayoutEffect, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  useGLTF,
  PerformanceMonitor,
  AccumulativeShadows,
  RandomizedLight,
  Environment,
  Lightformer,
  Float,
  OrbitControls,
  Html,
} from "@react-three/drei";
import { sRGBEncoding } from "@react-three/drei/helpers/deprecated";
import { BackSide, MathUtils, Vector3, Group } from "three";

const isMobile = window.innerWidth < 768;

interface CarModelCanvasProps {
  modelPath: string;
  primitivePos: number[];
  camPos: number[];
  lookPos: number[];
  rotation: number[];
}

interface CameraRigProps {
  camPos: [number, number, number] | number[];
  lookPos: [number, number, number] | number[];
  rotation: [number, number, number] | number[];
}

const CarModelCanvas = ({
  modelPath,
  primitivePos,
  camPos,
  lookPos,
  rotation,
}: CarModelCanvasProps) => {
  return (
    <div className="w-full h-[350px] md:h-[600px]">
      <Canvas
        shadows
        camera={{ position: [0, 0, 0], fov: 30 }}
        style={{ borderRadius: isMobile ? "10px 10px 0 0" : "10px 0 0 10px" }}
      >
        <PerformanceMonitor />
        {/* Lights */}
        <spotLight
          position={[0, 15, 0]}
          angle={0.3}
          penumbra={1}
          castShadow
          intensity={2}
          shadow-bias={-0.0001}
        />
        <ambientLight intensity={0.5} />
        <AccumulativeShadows
          position={[0, -1.16, 0]}
          frames={100}
          alphaTest={0.9}
          scale={10}
        >
          <RandomizedLight
            amount={8}
            radius={10}
            ambient={0.5}
            position={[1, 5, -1]}
          />
        </AccumulativeShadows>
        <OrbitControls
          enableZoom={false} // Enable zoom functionality
        />
        <Suspense fallback={<Loader />}>
          {/* Model */}
          <CarModel modelPath={modelPath} primitivePos={primitivePos} />
          {/* Environment */}
          <Environment frames={Infinity} resolution={256} background blur={1}>
            <Lightformers />
          </Environment>
        </Suspense>
        {/* Camera Rig */}
        <CameraRig camPos={camPos} lookPos={lookPos} rotation={rotation} />
      </Canvas>
    </div>
  );
};

const Loader = () => (
  <Html>
    <div>Loading...</div>
  </Html>
);

const CarModel = ({
  modelPath,
  primitivePos,
}: {
  modelPath: string;
  primitivePos: number[];
}) => {
  const { scene, nodes, materials } = useGLTF(modelPath) as any;

  useLayoutEffect(() => {
    Object.values(nodes).forEach((node: any) => {
      if (node.isMesh) {
        node.castShadow = true;
        node.receiveShadow = true;
      }
    });

    // Ensure materials retain textures
    Object.values(materials).forEach((material: any) => {
      if (material.map) material.map.encoding = sRGBEncoding;
      if (material.emissiveMap) material.emissiveMap.encoding = sRGBEncoding;
    });
  }, [nodes, materials]);

  return <primitive object={scene} scale={0.5} position={primitivePos} />;
};

const CameraRig = ({ camPos, lookPos, rotation }: CameraRigProps) => {
  const v = new Vector3();
  return useFrame((state) => {
    state.camera.position.lerp(
      v.set(...(camPos as [number, number, number])),
      0.1
    );
    state.camera.lookAt(...(lookPos as [number, number, number]));
    if (rotation) {
      state.camera.rotation.set(
        MathUtils.degToRad(rotation[0]),
        MathUtils.degToRad(rotation[1]),
        MathUtils.degToRad(rotation[2])
      );
    }
  });
};

const Lightformers = () => {
  const group = useRef<Group>(null);

  useFrame((_, delta) => {
    if (group.current) {
      group.current.position.z += delta * 10;
      if (group.current.position.z > 20) group.current.position.z = -60;
    }
  });

  return (
    <>
      {/* Ceiling */}
      <Lightformer
        intensity={0.65}
        rotation-x={Math.PI / 2}
        position={[0, 5, -9]}
        scale={[10, 10, 1]}
      />
      <group rotation={[0, 0.5, 0]}>
        <group ref={group}>
          {[2, 0, 2, 0, 2, 0, 2, 0].map((x, i) => (
            <Lightformer
              key={i}
              form="circle"
              intensity={1}
              rotation={[Math.PI / 2, 0, 0]}
              position={[x, 4, i * 4]}
              scale={[3, 1, 1]}
            />
          ))}
        </group>
      </group>
      {/* Sides */}
      <Lightformer
        intensity={4}
        rotation-y={Math.PI / 2}
        position={[-5, 1, -1]}
        scale={[20, 0.1, 1]}
      />
      <Lightformer
        rotation-y={Math.PI / 2}
        position={[-5, -1, -1]}
        scale={[20, 0.5, 1]}
      />
      <Lightformer
        rotation-y={-Math.PI / 2}
        position={[10, 1, 0]}
        scale={[20, 1, 1]}
      />
      {/* Accent Light (red) */}
      <Float speed={5} floatIntensity={2} rotationIntensity={2}>
        <Lightformer
          form="ring"
          color="red"
          intensity={1}
          scale={10}
          position={[-15, 4, -18]}
        />
      </Float>
      {/* Background */}
      <mesh scale={100}>
        <sphereGeometry args={[1, 64, 64]} />
        <meshStandardMaterial color="#343434" side={BackSide} />
      </mesh>
    </>
  );
};

export default CarModelCanvas;
