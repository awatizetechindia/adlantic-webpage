import styles from "./Cube.module.css";
import { CubeFaceProps } from "./types";

const CubeFace = ({ content, position }: CubeFaceProps) => {
  if (position === "top" || position === "bottom") {
    return <div className={`${styles.face} ${styles[position]}`} />;
  }

  return (
    <div className={`${styles.face} ${styles[position]}`}>
      <div className="flex flex-col items-center justify-center h-full p-4 text-center bg-gradient-to-br from-blue-900/90 to-blue-800/90">
        <h2 className="text-xl font-bold mb-2 text-white tracking-wider">
          {content.title}
        </h2>
        <div className="w-16 h-0.5 bg-gradient-to-r from-blue-400 to-blue-600 mb-2" />
        <p className="text-xs text-blue-100 mb-3 font-medium">
          {content.subtitle}
        </p>
        <div className="grid grid-cols-2 gap-2 text-xs text-blue-100">
          {content.features.map((feature, index) => (
            <div
              key={index}
              className="flex flex-col items-center gap-0.5 p-1.5 hover:bg-blue-700/30 rounded-lg transition-all cursor-pointer"
            >
              <span>{feature.icon}</span>
              <span className="font-medium">{feature.title}</span>
              <span className="text-[10px] text-blue-200">
                {feature.subtitle}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CubeFace;
