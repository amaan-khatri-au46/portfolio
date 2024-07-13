import React from "react";
import { Html } from "@react-three/drei";

interface LoaderProps {
  size?: number;
  color?: string;
}

export const Loader: React.FC<LoaderProps> = ({ size, color }) => {
  return (
    <Html>
      <div className="flex justify-center items-center">
        <div
          className={`w-${size} border-2 border-opacity-20 border-blue-500
           border-t-blue-500 rounded-full animate-spin`}
        />
      </div>
    </Html>
  );
};
