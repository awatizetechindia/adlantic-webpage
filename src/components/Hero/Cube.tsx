import styles from "./Cube.module.css";
import { CubeProps, FaceContent } from "./types";
import CubeFace from "./CubeFace";
import { CUBE_FACES } from "./constants";

const Cube = ({ rotation, onDragStart, isDragging }: CubeProps) => {
  const emptyFaceContent: FaceContent = {
    title: "",
    subtitle: "",
    features: [],
  };

  return (
    <div
      className={`${styles.cubeContainer} w-full h-full cursor-grab active:cursor-grabbing`}
      onMouseDown={onDragStart}
      onTouchStart={onDragStart}
    >
      <div
        className={`${styles.cube} ${isDragging ? styles.isDragging : ""}`}
        style={
          isDragging
            ? { transform: `rotateX(-10deg) rotateY(${rotation}deg)` }
            : undefined
        }
      >
        <CubeFace content={CUBE_FACES.front} position="front" />
        <CubeFace content={CUBE_FACES.back} position="back" />
        <CubeFace content={CUBE_FACES.right} position="right" />
        <CubeFace content={CUBE_FACES.left} position="left" />
        <CubeFace content={emptyFaceContent} position="top" />
        <CubeFace content={emptyFaceContent} position="bottom" />
      </div>
    </div>
  );
};

export default Cube;
