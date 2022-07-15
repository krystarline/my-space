/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useState } from "react";
import { useGLTF } from "@react-three/drei";
import { Debug, useBox } from "@react-three/cannon";
import { Select } from "@react-three/postprocessing";
import { useAtomValue } from "jotai";

import { useDrag, usePaint, useHover } from "../hooks";
import { colorItemsAtom } from "../atoms";

function Desk({ pos, ...props }) {
  const { nodes, materials } = useGLTF("/Desk.glb");
  const [position, setPosition] = useState(pos || [0, 0, 0]);
  const [ref, api] = useBox(() => ({
    type: "Static",
    dispose: null,
    mass: 5,
    args: [2.5, 5.5, 4.5],
    position,
    ...props,
  }));

  const bindDrag = useDrag(api, position, setPosition);
  const bindPaint = usePaint(2);
  const [hovered, bindHover] = useHover();

  const items = useAtomValue(colorItemsAtom);

  return (
    <Debug color="black">
      <Select enabled={hovered}>
        <group
          ref={ref}
          scale={2}
          dispose={null}
          {...bindHover()}
          {...bindDrag()}
          {...bindPaint()}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube.geometry}
            material={materials.Material}
            material-color={items[2].Material}
            position={[-0.07, 0.94, 0.63]}
            scale={[0.51, 0.42, 0.53]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.desk_collider.geometry}
            material={materials.Material}
            material-color={items[2].Material}
            position={[-0.07, 0.94, 0.63]}
            scale={[0.51, 0.42, 0.53]}
          />
        </group>
      </Select>
    </Debug>
  );
}

export default Desk;
