"use client";
import { useState } from "react";
import Image from "next/image";

interface Achievement {
  id: number;
  title: string;
  imageUrl: string;
}

const achievements: Achievement[] = [
  { id: 1, title: "Achievement 1", imageUrl: "/temp.png" },
  { id: 2, title: "Achievement 2", imageUrl: "/temp.png" },
  { id: 3, title: "Achievement 3", imageUrl: "/temp2.png" },
  { id: 4, title: "Achievement 4", imageUrl: "/temp.png" },
  { id: 5, title: "Achievement 5", imageUrl: "/temp.png" },
  { id: 6, title: "Achievement 6", imageUrl: "/temp2.png" },
  { id: 7, title: "Achievement 7", imageUrl: "/temp.png" },
  { id: 8, title: "Achievement 8", imageUrl: "/temp.png" },
  { id: 9, title: "Achievement 9", imageUrl: "/temp2.png" },
  { id: 10, title: "Achievement 10", imageUrl: "/temp.png" },
  { id: 11, title: "Achievement 11", imageUrl: "/temp.png" },
  { id: 12, title: "Achievement 12", imageUrl: "/temp.png" },
];

export default function Achievements() {
  const [selectedAchievement, setSelectedAchievement] = useState(
    achievements[0]
  );

  return (
    <div className="flex flex-col max-w-[1440px] mx-auto p-8">
      <div className="flex flex-col md:flex-row gap-8">
        {/* Featured Image */}
        <div className="flex-1 flex justify-center">
          <div className="aspect-square relative border-[3px] border-primary bg-primary overflow-hidden">
            <Image
              src={selectedAchievement.imageUrl}
              alt={selectedAchievement.title}
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Grid of Thumbnails */}
        <div className="flex-1 border-[3px] border-primary p-8">
          <h1 className="text-5xl font-black text-primary mb-8">
            Achievements
          </h1>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
            {achievements.map((achievement) => (
              <div
                key={achievement.id}
                className={`aspect-square cursor-pointer transition-all duration-300 relative bg-primary ${
                  selectedAchievement.id === achievement.id
                    ? "border-[3px] border-primary"
                    : "border-[3px] border-transparent hover:border-primary"
                }`}
                onMouseEnter={() => setSelectedAchievement(achievement)}
              >
                <Image
                  src={achievement.imageUrl}
                  alt={achievement.title}
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
