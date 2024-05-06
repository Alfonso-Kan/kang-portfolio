'use client'
import { Canvas, useFrame, useLoader, useThree } from "@react-three/fiber";
import { useRef } from "react";
import { Mesh } from "three";
import { GLTFLoader } from "three/examples/jsm/Addons.js";

function MeshComponent() {
    const fileUrl = '/model/scene.gltf';
    const mesh = useRef<Mesh>(null!);
    const gltf = useLoader(GLTFLoader, fileUrl);
    const { camera } = useThree();

    //uso del hook frame para animar el modelo.
    useFrame(() => {
        const windowWidth = window.innerWidth;
        if (windowWidth < 768) {
            camera.position.z = 3;
        } else {
            camera.position.z = 5;
        }

        mesh.current.rotation.y -= 0.006;
    })

    return (
        <mesh ref={mesh}>
            <primitive object={gltf.scene} />
            <meshBasicMaterial color={'red'} />
        </mesh>
    )
}

export const Developer = () => {
    return (
        <Canvas className="bg-cover overflow-hidden">
            <ambientLight />
            <MeshComponent />
        </Canvas>
    )
}

