import React, { Suspense } from "react";
import styled from "styled-components";
import { Canvas } from "@react-three/fiber";
import Earth from "./../components/home/Earth";
import Overlay from "./../components/home/Overlays";

const CanvasContainer = styled.div`
  width: 100%;
  height: 100vh;
`;

const Home = () => {
  return (
    <div className="home">
      <CanvasContainer>
        <Overlay />
        <Canvas>
          <Suspense fallback={null}>
            <Earth />
          </Suspense>
        </Canvas>
      </CanvasContainer>
    </div>
  );
};

export default Home;
