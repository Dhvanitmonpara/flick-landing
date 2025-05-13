import { AnimateWrapper } from "@/components/animations/AnimateWrapper";
import CTAButton from "@/components/landing/CTAButton";
import { FeatureCard } from "@/components/landing/FeatureCard";
import Header from "@/components/landing/Header";
import Post from "@/components/landing/Post";
import SecondaryButton from "@/components/landing/SecondaryButton";
import { TextAnimate } from "@/components/magicui/text-animate";
import { FaChartLine, FaRocket, FaUniversity } from "react-icons/fa";
import { HiOutlineUserCircle } from "react-icons/hi";

const mockPosts = [
  {
    title: "Hostel Wi-Fi is Trash 🥲",
    description: "Can't even load a single PDF for tomorrow's exam... any hacks to get better speed?",
    date: "1/5/2025",
    university: "IIT Delhi",
    username: "a9f3k2jd8x",
    branch: "EE"
  },
  {
    title: "9 AM Lectures After Fest Night?",
    description: "How do you guys survive these early classes after a crazy fest night? I’m still recovering from Holi celebrations at IIT Bombay—dancing till 2 AM, covered in colors, and now I can barely keep my eyes open in this lecture! My professor just called me out for dozing off, so I really need tips to stay awake and not miss important notes! #IITLife",
    date: "2/5/2025",
    university: "IIT Bombay",
    username: "h0u39dkabx",
    branch: "CS"
  },
  {
    title: "Placement Stress is Real",
    description: "Feeling so anxious about interviews… any tips for staying calm? I’m at DU.",
    date: "3/5/2025",
    university: "Delhi University",
    username: "p4k9m2nx7q",
    branch: "Economics"
  },
  {
    title: "Best Canteen on Campus?",
    description: "Newbie here! Where’s the best place to grab chai and samosas at BITS Pilani?",
    date: "4/5/2025",
    university: "BITS Pilani",
    username: "z3t8v5lp9w",
    branch: "Mech"
  },
  {
    title: "JEE Prep Burnout",
    description: "I’m retaking JEE and feeling so overwhelmed… anyone have study tips?",
    date: "5/5/2025",
    university: "IIT Kanpur",
    username: "j7q2r4mk5y",
    branch: "Civil"
  },
  {
    title: "Toxic Project Group 😡",
    description: "My group isn’t doing any work for our final project… what should I do? #NIT",
    date: "6/5/2025",
    university: "NIT Trichy",
    username: "m9w3x8tk2p",
    branch: "ECE"
  },
  {
    title: "Fest Budget Hacks?",
    description: "Want to enjoy our college fest without breaking the bank… any jugaad ideas?",
    date: "7/5/2025",
    university: "IIT Madras",
    username: "v4y9p7ql3z",
    branch: "Aero"
  },
  {
    title: "Late-Night Study Spots",
    description: "Where do you guys study late at night on campus? Library closes at 10 PM.",
    date: "8/5/2025",
    university: "IIT Kharagpur",
    username: "k2r8w5nx9t",
    branch: "Chem"
  },
  {
    title: "Internship Advice Needed",
    description: "Applying for summer internships… how do I make my resume stand out? #VIT",
    date: "9/5/2025",
    university: "VIT Vellore",
    username: "q7t3m9xp2k",
    branch: "IT"
  },
  {
    title: "Roommate Issues",
    description: "My hostel roommate keeps borrowing my stuff without asking… how to deal?",
    date: "10/5/2025",
    university: "IIT Roorkee",
    username: "n4p8y2tk7w",
    branch: "BioTech"
  },
  {
    title: "Best Hangout Near Campus?",
    description: "Looking for chill spots near Anna University to hang out with friends… suggestions?",
    date: "11/5/2025",
    university: "Anna University",
    username: "x9k3v7qp2m",
    branch: "Mech"
  },
  {
    title: "Coding Club Worth It?",
    description: "Thinking of joining the coding club at IIIT Hyderabad… is it helpful for placements?",
    date: "12/5/2025",
    university: "IIIT Hyderabad",
    username: "t2w8r4nx9y",
    branch: "CSE"
  },
  {
    title: "Exam Week Survival Tips",
    description: "Exams start next week and I’m nowhere near ready… how do you guys manage stress?",
    date: "13/5/2025",
    university: "IIT Guwahati",
    username: "p7q3k9mt2x",
    branch: "EEE"
  },
  {
    title: "Cheap Food Near Campus",
    description: "Broke and hungry… where can I get affordable food near SRM University?",
    date: "14/5/2025",
    university: "SRM University",
    username: "y4t9w2rk7p",
    branch: "CSE"
  },
  {
    title: "First Year Nerves",
    description: "Just started at JNU and feeling so lost… any advice for freshers?",
    date: "15/5/2025",
    university: "JNU Delhi",
    username: "r2k8v5qp9t",
    branch: "Sociology"
  }
];

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-tr bg-[linear-gradient(to_right,_#fdfcfb,_#e2d1c3)] dark:bg-[linear-gradient(to_right,_#2e2e2e,_#1a1a1a)]">
      <Header />
      <div className="max-w-6xl mx-auto px-8 lg:px-4">
        <div className="flex flex-col justify-center items-center gap-6 sm:gap-8 h-[450px] sm:h-[500px] md:h-[550px] lg:h-[600px] pb-8">
          <AnimateWrapper delay={0.3} once>
            <SecondaryButton />
          </AnimateWrapper>
          <div className="flex flex-col justify-center items-center text-neutral-700 dark:text-neutral-300">
            <TextAnimate as="h1" delay={0.4} className="font-neue-montreal text-center text-3xl sm:text-4xl md:text-5xl lg:text-6xl" animation="blurInUp" by="word" once>
              Your Anonymous Campus Hangout
            </TextAnimate>
            <TextAnimate delay={0.6} className="font-inter text-center mt-4 text-zinc-700 dark:text-zinc-300 sm:mt-6 sm:text-lg md:text-xl lg:text-2xl" animation="blurInUp" by="word" once>
              Vent, share, connect - 100% anonymously. For Indian college students only.
            </TextAnimate>
          </div>
          <AnimateWrapper delay={0.8} once>
            <CTAButton size="xl" className="p-4 sm:p-6 text-sm md:text-md xl:text-lg" />
          </AnimateWrapper>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 grid-auto-rows-[150px]">
          {mockPosts.map((post, index) => (
            <Post
              key={index}
              title={post.title}
              description={post.description}
              date={post.date}
              university={post.university}
              username={post.username}
              branch={post.branch}
              className={[
                (index === 2) ? "row-span-2 mt-16" : "row-span-3",
                index === 0 && "!row-span-1 mt-8",
                "p-4 rounded-lg shadow-[0_4px_20px_rgba(0,0,0,0.10)] overflow-hidden"
              ].join(" ")}
            />
          ))}
        </div>
        <div className="rounded-xl mt-24 sm:mt-32 sm:rounded-2xl overflow-hidden animate-fade-in-blur shadow-[0_-4px_28px_rgba(0,0,0,0.25)] border-[0.5px]">
          <div className="bg-zinc-100 dark:bg-zinc-800 h-6 sm:h-8 flex justify-between items-center px-4 sm:px-6">
            <div className="flex justify-center items-center gap-1 sm:gap-2">
              <span className="rounded-full bg-red-400 w-2.5 h-2.5 sm:w-3.5 sm:h-3.5"></span>
              <span className="rounded-full bg-yellow-400 w-2.5 h-2.5 sm:w-3.5 sm:h-3.5"></span>
              <span className="rounded-full bg-green-400 w-2.5 h-2.5 sm:w-3.5 sm:h-3.5"></span>
            </div>
          </div>
          <img src="/landing-mockup.png" alt="mockup" />
        </div>
        <div className="mt-24 sm:mt-32 animate-fade-in-blur">
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
        <div className="mt-24 sm:mt-32 animate-fade-in-blur">
          <h3 className="text-2xl sm:text-3xl font-semibold font-inter text-center mb-8 sm:mb-12">
            How it works?
          </h3>
          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-2 text-center">
            <div className="">
              
            </div>
          </div>
        </div>
        <div className="h-screen"></div>
      </div>
    </div >
  );
}