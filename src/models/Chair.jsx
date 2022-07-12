/* eslint-disable no-return-assign */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-props-no-spreading */
import React, { useEffect, useState } from "react";
import { useGLTF } from "@react-three/drei";
import { useBox } from "@react-three/cannon";
import { useAtom } from "jotai";
import { colorAtom } from "../common/atom";

function Chair({ type, onPointerDown, onPointerMissed, ...props }) {
  const { nodes, materials } = useGLTF("/Ottoman.gltf");
  const [{ current, items }, setColor] = useAtom(colorAtom);

  const [ref] = useBox(() => ({
    dispose: null,
    type,
    mass: 5,
    ...props,
  }));

  const handlePointerDown = (e) => {
    e.stopPropagation();
    setColor((prev) => ({
      ...prev,
      current: { index: 0, name: e.object.material.name },
    }));
  };

  const handlePointerMissed = () =>
    setColor((prev) => ({ ...prev, current: null }));

  return (
    <group
      ref={ref}
      scale={0.2}
      onPointerDown={handlePointerDown}
      onPointerMissed={handlePointerMissed}
    >
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Ottoman_legs.geometry}
        material={materials["Ottoman wood"]}
        material-color={items[0]["Ottoman wood"]}
        scale={15.62}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Ottoman_seams.geometry}
        material={materials["Ottoman fabric"]}
        material-color={items[0]["Ottoman fabric"]}
        rotation={[0, Math.PI / 4, 0]}
        scale={16.9}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Ottoman_seat.geometry}
        material={materials["Ottoman fabric"]}
        material-color={items[0]["Ottoman fabric"]}
        scale={16.9}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Ottoman_seat_cushion.geometry}
        material={materials["Ottoman fabric"]}
        material-color={items[0]["Ottoman fabric"]}
        scale={[2.52, 2.43, 2.52]}
      />
    </group>
  );
}

export default Chair;
