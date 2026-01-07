import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <div className="relative flex min-h-screen justify-center bg-[#007AFF] bg-[linear-gradient(rgba(255,255,255,0.9),rgba(255,255,255,0.9))] bg-blend-normal">
      <div className="ellipse"></div>

      <Navbar />
    </div>
  );
}
