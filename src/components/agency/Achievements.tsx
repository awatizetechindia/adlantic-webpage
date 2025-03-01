"use client";
import { useState } from "react";
import Image from "next/image";

interface Achievement {
  id: number;
  title: string;
  imageUrl: string;
}

const achievements: Achievement[] = [
  { id: 1, title: "Achievement 1", imageUrl: "/blue.png" },
  { id: 2, title: "Achievement 2", imageUrl: "/red.png" },
  { id: 3, title: "Achievement 3", imageUrl: "/green.png" },
  { id: 4, title: "Achievement 4", imageUrl: "/red.png" },
  { id: 5, title: "Achievement 5", imageUrl: "/red.png" },
  { id: 6, title: "Achievement 6", imageUrl: "/green.png" },
  { id: 7, title: "Achievement 7", imageUrl: "/blue.png" },
  { id: 8, title: "Achievement 8", imageUrl: "/red.png" },
  { id: 9, title: "Achievement 9", imageUrl: "/green.png" },
  { id: 10, title: "Achievement 10", imageUrl: "/red.png" },
  { id: 11, title: "Achievement 11", imageUrl: "/blue.png" },
  { id: 12, title: "Achievement 12", imageUrl: "/red.png" },
];

export default function Achievements() {
  const [selectedAchievement, setSelectedAchievement] = useState(
    achievements[0]
  );

  return (
    <div className="border-primary border-4">
      <div className="flex flex-col md:flex-row gap-8">
        {/* Featured Image */}
        <div className="w-full flex flex-1 md:w-[52.5%]">
          <div className="aspect-[4/3] relative border-[3px] border-primary bg-primary overflow-hidden">
            <Image
              src={selectedAchievement.imageUrl}
              alt={selectedAchievement.title}
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Grid of Thumbnails */}
        <div className="w-full md:w-[45.5%] p-4 md:p-8">
          <h1 className="text-4xl md:text-6xl font-black text-primary text-center pb-4 md:pb-8">
            Achievements
          </h1>
          <div className="grid grid-cols-4 gap-2 md:gap-4">
            {achievements.map((achievement) => (
              <div
                key={achievement.id}
                className={`aspect-[1] cursor-pointer transition-all duration-300 relative bg-primary border-4 border-primary`}
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
