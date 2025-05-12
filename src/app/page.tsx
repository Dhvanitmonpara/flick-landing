import { AnimateWrapper } from "@/components/animations/AnimateWrapper";
import CTAButton from "@/components/landing/CTAButton";
import Header from "@/components/landing/Header";
import { AnimatedShinyText } from "@/components/magicui/animated-shiny-text";
import { TextAnimate } from "@/components/magicui/text-animate";
import { cn } from "@/lib/utils";
import { ArrowRightIcon } from "lucide-react";
import { JSX, ReactNode } from "react";
import { FaChartLine, FaRocket, FaUniversity } from "react-icons/fa";
import { HiOutlineUserCircle } from "react-icons/hi";

export default function Home() {
  return (
    <div className="min-h-screen px-4 bg-gradient-to-tr from-sky-100/50 via-sky-50/80 dark:from-sky-900/10 dark:via-sky-950/20 to-background">
      <div className="max-w-5xl mx-auto">
        <Header />
        <div className="flex flex-col justify-center items-center gap-8 h-[500px] md:h-[600px] lg:h-[700px] pb-8">
          <AnimateWrapper delay={0.3} once>
            <div
              className={cn(
                "group rounded-full border border-black/5 bg-neutral-100 text-base text-white transition-all ease-in hover:cursor-pointer hover:bg-neutral-200 dark:border-white/5 dark:bg-neutral-900 dark:hover:bg-neutral-800",
              )}
            >
              <AnimatedShinyText className="inline-flex text-xs md:text-sm cursor-pointer items-center justify-center px-4 py-1 transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400">
                <span>✨ Follow Flick on X</span>
                <ArrowRightIcon className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
              </AnimatedShinyText>
            </div>
          </AnimateWrapper>
          <div className="flex flex-col justify-center items-center text-neutral-700 dark:text-neutral-300">
            <TextAnimate as="h1" delay={0.4} className="font-editorial text-center max-w-5xl text-4xl sm:text-5xl md:text-6xl lg:text-7xl" animation="blurInUp" by="word" once>
              An exclusive, anonymous Reddit — only for college students.
            </TextAnimate>
            <TextAnimate delay={0.6} className="font-garnett text-center max-w-5xl text-lg sm:text-xl md:text-2xl" animation="blurInUp" by="word" once>
              Spill secrets, share advice, vent frustrations. No names, no judgment.
            </TextAnimate>
          </div>
          <AnimateWrapper delay={0.8} once>
            <CTAButton />
          </AnimateWrapper>
        </div>
        <div className="rounded-2xl overflow-hidden animate-fade-in-blur shadow-[0_-4px_28px_rgba(0,0,0,0.25)] border-[0.5px]">
          <div className="bg-zinc-100 dark:bg-zinc-700 h-8 flex justify-between items-center px-6">
            <div className="flex justify-center items-center gap-2">
              <span className="rounded-full bg-red-400 w-3.5 h-3.5"></span>
              <span className="rounded-full bg-yellow-400 w-3.5 h-3.5"></span>
              <span className="rounded-full bg-green-400 w-3.5 h-3.5"></span>
            </div>
          </div>
          <iframe height="100" width="100" className="h-full w-full" src="https://www.youtube.com/embed/NdJ_y1c_j_I?si=fjHelVhND9MuCchV" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
        </div>
        <div className="mt-16">
          <h3 className="text-3xl font-semibold font-editorial text-center mb-8">
            Why Flick?
          </h3>
          <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 text-center">
            <FeatureCard icon={<HiOutlineUserCircle className="text-3xl" />}>
              100% Anonymity — Speak your mind freely.
            </FeatureCard>
            <FeatureCard icon={<FaUniversity className="text-3xl" />}>
              Student-Only Clubs — Each campus has a private feed.
            </FeatureCard>
            <FeatureCard icon={<FaChartLine className="text-3xl" />}>
              Earn Roles & Tags — Upvotes unlock exclusive badges.
            </FeatureCard>
            <FeatureCard icon={<FaRocket className="text-3xl" />}>
              No Noise, No Ads — Just real talk, real people.
            </FeatureCard>
          </div>
        </div>
      </div>
    </div >
  );
}

const FeatureCard = ({ icon, children }: { icon: JSX.Element | string, children: ReactNode }) => {
  return (
    <div className="flex flex-col items-center space-y-4 border border-zinc-200 dark:border-zinc-800 rounded-2xl p-8">
      {icon}
      <p className="text-lg font-medium">{children}</p>
    </div>
  )
}