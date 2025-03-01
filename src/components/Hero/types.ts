export type FaceContent = {
  title: string;
  subtitle: string;
  features: {
    icon: string;
    title: string;
    subtitle: string;
  }[];
};

export type CubeFaceProps = {
  content: FaceContent;
  position: "front" | "back" | "left" | "right" | "top" | "bottom";
};

export type CubeProps = {
  rotation: number;
  isDragging: boolean;
  onDragStart: (e: React.MouseEvent | React.TouchEvent) => void;
};
