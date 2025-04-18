import { CoverParticles } from "@/components/cover-particles"
import { TransitionPage } from "@/components/transition-page";

export default function Home() {
  return (
    <main>
      <TransitionPage />
      <div className="flex main-h-[100vh] h-full bg-no-repeat bg-gradient-cover" >
        <CoverParticles></CoverParticles>
        <p>Introduccion</p>
      </div>
    </main>
  );
}
