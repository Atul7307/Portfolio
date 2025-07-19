"use client";
import { Environment } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import clsx from "clsx";
import React, { Suspense } from "react";
import RippleLoader from "./Loader/RippleLoader";

const RenderModel = ({ children, className }) => {
  return (
    <Canvas
      className={clsx("w-screen h-screen -z-10 relative", className)}
      dpr={[1, 1.5]}
      shadows={false}
      frameloop="demand"
      gl={{ powerPreference: "low-power" }}
    >
      <Suspense fallback={<RippleLoader />}>{children}</Suspense>
      <Environment preset="dawn" />
    </Canvas>
  );
};

export default RenderModel;