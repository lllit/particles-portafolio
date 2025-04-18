import { Avatar } from "@/components/avatar";
import { ContainerPage } from "@/components/container";
import { CounterService } from "@/components/counter-services";
import { TimeLine } from "@/components/time-line";
import { TransitionPage } from "@/components/transition-page";

const PageAboutMe = () => {
    return(
        <>
            <TransitionPage></TransitionPage>
            <ContainerPage>
                <Avatar></Avatar>
                <h1 className="text-2xl leading-tight text-center md:text-left md:text-5xl md:mt-10">Toda mi 
                    <span className="font-bold text-secondary"> trayectoria profesional</span>
                </h1>
                <CounterService></CounterService>
                <TimeLine></TimeLine>
            </ContainerPage>
        </>
    )
}

export default PageAboutMe;