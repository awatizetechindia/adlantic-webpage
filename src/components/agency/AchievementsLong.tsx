import Image from "next/image";
import React from "react";

interface Achievement {
  title: string;
  description: string;
  image?: string;
}

interface AchievementsLongProps {
  achievements: Achievement[];
}

const AchievementsLong: React.FC<AchievementsLongProps> = ({
  achievements,
}) => {
  return (
    <div className="">
      {/* Header */}
      <div className="bg-primary py-16 mb-6">
        <h1 className="text-6xl font-bold text-white text-center">
          Achievements
        </h1>
      </div>

      {/* Achievement Cards */}
      <div className="space-y-6">
        {achievements.map((achievement, index) => (
          <div
            key={index}
            className="bg-white border-primary border-4 text-primary p-8"
          >
            <div className="flex flex-col md:flex-row gap-8">
              {achievement.image && (
                <div className="md:w-1/3">
                  <Image
                    src={achievement.image}
                    alt={achievement.title}
                    width={1000}
                    height={1000}
                    className="w-full h-full max-h-[300px] object-contain"
                  />
                </div>
              )}

              <div className="md:w-2/3">
                <h3 className="text-4xl font-bold text-primary mb-4">
                  {achievement.title}
                </h3>
                <p className="text-primary text-2xl leading-relaxed">
                  {achievement.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AchievementsLong;
