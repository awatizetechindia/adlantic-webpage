import ThreeScene from "@/components/Cube/Cube";
export default function Home() {
  return (
    <div className="flex min-h-screen">
      <div className="w-1/2">
        <ThreeScene />
      </div>
      <div className="w-1/2 flex items-center justify-center">
        {/* Add content for right side here */}
      </div>
    </div>
  );
}
