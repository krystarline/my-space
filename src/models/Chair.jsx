/* eslint-disable no-return-assign */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-props-no-spreading */
import React, { useState, useEffect } from "react";
import { useThree, useFrame } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";
import { Debug, useBox } from "@react-three/cannon";
import { Select } from "@react-three/postprocessing";
import { useDrag } from "@use-gesture/react";
import { useAtom, useAtomValue } from "jotai";

import { useHover } from "../hooks";
import { toolAtom, colorAtom } from "../common/atom";

function Chair({ initPos, boxProps, groupProps }) {
  const { size, viewport } = useThree();
  const { nodes, materials } = useGLTF("/Ottoman.gltf");
  const [position, setPosition] = useState(initPos || [0, 6, 0]);
  const [ref, api] = useBox(() => ({
    dispose: null,
    type: "Static",
    mass: 10,
    args: [1.5, 0.75, 1.5],
    position,
    ...boxProps,
  }));
  const [hovered, bindHover] = useHover();

  const { type: toolType } = useAtomValue(toolAtom);
  const [{ items }, setColor] = useAtom(colorAtom);

  const isDraggerActivated = () => toolType === "dragger";
  const isPainterActivated = () => toolType === "painter";

  const bindDrag = useDrag(({ offset: [,], movement: [x, z] }) => {
    const [, y] = position;
    const aspect = size.width / viewport.width;

    api.position.set(x / aspect, y, z / aspect);
  });
  const bindPaint = () => ({
    onPointerUp: (e) => {
      e.stopPropagation();
      setColor((prev) => ({
        ...prev,
        current: { index: 0, name: e.object.material.name },
      }));
    },
  });

  useEffect(() => {
    const unsub = api.position.subscribe((p) => {
      setPosition(p);
    });

    return unsub;
  }, [api]);

  return (
    <Select enabled={hovered}>
      <Debug color="black">
        <group
          ref={ref}
          scale={0.3}
          dispose={null}
          {...bindHover()}
          {...(isPainterActivated() && bindPaint())}
          {...(isDraggerActivated() && bindDrag())}
          {...groupProps}
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
      </Debug>
    </Select>
  );
}

export default Chair;
