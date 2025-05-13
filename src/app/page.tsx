import { AnimateWrapper } from "@/components/animations/AnimateWrapper";
import CTAButton from "@/components/landing/CTAButton";
import { FeatureCard } from "@/components/landing/FeatureCard";
import Header from "@/components/landing/Header";
import SecondaryButton from "@/components/landing/SecondaryButton";
import { TextAnimate } from "@/components/magicui/text-animate";
import { FaChartLine, FaRocket, FaUniversity } from "react-icons/fa";
import { HiOutlineUserCircle } from "react-icons/hi";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-tr from-sky-50/70 via-sky-100/90 dark:from-sky-900/30 dark:via-sky-950/50 to-background">
      <Header />
      <div className="max-w-6xl mx-auto px-8 lg:px-4">
        <div className="flex flex-col justify-center items-center gap-6 sm:gap-8 h-[450px] sm:h-[500px] md:h-[600px] lg:h-[700px] pb-8">
          <AnimateWrapper delay={0.3} once>
            <SecondaryButton />
          </AnimateWrapper>
          <div className="flex flex-col justify-center items-center text-neutral-700 dark:text-neutral-300">
            <TextAnimate as="h1" delay={0.4} className="font-neue-montreal text-center text-3xl sm:text-4xl md:text-5xl lg:text-6xl" animation="blurInUp" by="word" once>
              Your Anonymous Campus Hangout
            </TextAnimate>
            <TextAnimate delay={0.6} className="font-inter text-center mt-4 sm:mt-6 sm:text-lg md:text-xl lg:text-2xl" animation="blurInUp" by="word" once>
              Vent, share, connect - 100% anonymously. For Indian college students only.
            </TextAnimate>
          </div>
          <AnimateWrapper delay={0.8} once>
            <CTAButton size="xl" className="p-4 sm:p-6 text-sm md:text-md xl:text-lg" />
          </AnimateWrapper>
        </div>
        <div className="rounded-xl sm:rounded-2xl overflow-hidden animate-fade-in-blur shadow-[0_-4px_28px_rgba(0,0,0,0.25)] border-[0.5px]">
          <div className="bg-zinc-100 dark:bg-zinc-800 h-6 sm:h-8 flex justify-between items-center px-4 sm:px-6">
            <div className="flex justify-center items-center gap-1 sm:gap-2">
              <span className="rounded-full bg-red-400 w-2.5 h-2.5 sm:w-3.5 sm:h-3.5"></span>
              <span className="rounded-full bg-yellow-400 w-2.5 h-2.5 sm:w-3.5 sm:h-3.5"></span>
              <span className="rounded-full bg-green-400 w-2.5 h-2.5 sm:w-3.5 sm:h-3.5"></span>
            </div>
          </div>
          <img src="/landing-mockup.png" alt="mockup" />
        </div>
        <div className="mt-24 sm:mt-32">
          <h3 className="text-2xl sm:text-3xl font-semibold font-inter text-center mb-8 sm:mb-12">
            Why Flick?
          </h3>
          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-2 text-center">
            <FeatureCard title="100% Anonymity" description="Speak your mind freely." icon={<HiOutlineUserCircle className="text-3xl" />} />
            <FeatureCard title="Student-Only Clubs" description="Each campus has a private feed." icon={<FaUniversity className="text-3xl" />} />
            <FeatureCard title="Earn Roles & Tags" description="Upvotes unlock exclusive badges." icon={<FaChartLine className="text-3xl" />} />
            <FeatureCard title="No Noise, No Ads" description="Just real talk, real people." icon={<FaRocket className="text-3xl" />} />
          </div>
        </div>
        <div className="h-screen"></div>
      </div>
    </div >
  );
}