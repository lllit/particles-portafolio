import { Introduction } from "@/components/introduction";
import { TransitionPage } from "@/components/transition-page";

export default function Home() {
  return (
    <main>
      <TransitionPage />
      <div className="flex main-h-[100vh] h-full bg-no-repeat bg-gradient-cover" >
        <Introduction></Introduction>
      </div>
    </main>
  );
}
