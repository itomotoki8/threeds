import { Koikingu, Nijika, Rukario } from "@/components/Anime";

export default function Home() {
  return (
    <main className="h-screen flex items-center justify-center bg-black">
      <Rukario />
      <Koikingu />
      <Nijika />
    </main>
  );
}
