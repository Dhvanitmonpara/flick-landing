import { AnimateWrapper } from "@/components/animations/AnimateWrapper";
import CTAButton from "@/components/landing/CTAButton";
import Header from "@/components/landing/Header";
import { AnimatedShinyText } from "@/components/magicui/animated-shiny-text";
import { TextAnimate } from "@/components/magicui/text-animate";
import { cn } from "@/lib/utils";
import { ArrowRightIcon } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen px-4 bg-gradient-to-tr from-sky-100/50 via-sky-50/90 to-background">
      <div className="max-w-5xl mx-auto gap-8">
        <Header />
        <div className="flex flex-col justify-center items-center gap-8 h-[500px] md:h-[600px] lg:h-[700px]">
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
          <div className="flex flex-col justify-center items-center text-neutral-800">
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
          <iframe height={"100%"} width={"100%"} className="h-full w-full" src="https://www.youtube.com/embed/NdJ_y1c_j_I?si=fjHelVhND9MuCchV" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
        </div>
        <div className="h-screen"></div>
      </div>
    </div>
  );
}