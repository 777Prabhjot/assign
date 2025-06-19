"use client";
import Image from "next/image";
import "./globals.css";
import { Sparkles } from "lucide-react";
import TemplateAICard from "@/components/TemplateAICard";
import CustomToggle from "@/components/CustomToggle";
import { useState } from "react";
import OverlappingAvatars from "@/components/OverlappingAvatars";
import RotatedUIButtons from "@/components/RotatedUIButtons";
import Timeline from "@/components/TimeLine";
import AvatarCarousel from "@/components/AvatarCarousel";
import BlurredCardCarousel from "@/components/BlurredCardCarousel";

const Card = ({ children, className }) => (
  <div
    className={`
      bg-[#1e1b3a] border rounded-[24px] flex flex-col z-10 p-6 border-slate-800
      relative overflow-hidden
      ${className}
    `}
  >
    <div
      className="
        absolute inset-0
        bg-[url('/general_noise.png')] bg-repeat
        opacity-[0.70] mix-blend-overlay
      "
    ></div>
    <div
      className="
        absolute inset-0
        bg-[url('/download.png')] bg-repeat
        opacity-[0.15] mix-blend-overlay
      "
    ></div>
    {children}
  </div>
);

export default function TemplateAiDashboard() {
  const [darkMode, setDarkMode] = useState(false);

  const sampleAvatars = [
    {
      id: 1,
      src: "/MarcoKelly.png",
      alt: "User 1",
      bgColor: "bg-orange-400",
    },
    {
      id: 2,
      src: null,
      alt: "Diamond Icon",
      bgColor: "bg-orange-100",
    },
    {
      id: 3,
      src: "/AnaiahWhitten.png",
      alt: "User 2",
      bgColor: "bg-purple-400",
    },
  ];

  return (
    <>
    <main className="bg-[#10101A] w-full flex justify-center min-h-screen text-white p-[32px]">
      <div className="container">
        <div className="flex items-center gap-[28px] mb-[28px] justify-center flex-wrap">
          <div >
          <Card className="flex justify-between lg:row-start-1 lg:row-span-2 bg-[#191934] h-[396px] w-[262px] rounded-[24px]">
            <h1
              className="text-[36px] w-[198px] h-[120px] font-[600] leading-[40px] bg-gradient-to-b from-[#FFFFFF] to-[#AA9CFC] 
            bg-clip-text text-transparent"
            >
              Create <br />
              your own <br />
              template
            </h1>

            <div>
              <p className="text-[18px] font-[700] leading-[28px] text-[#E6E3FF]">
                14 days trial
              </p>
              <p className="text-[16px] font-[400] leading-[24px] text-[#ACA0E4]">
                after – $5/month
              </p>
            </div>
          </Card>

          <div className="mt-[28px]">
            <Card className="lg:col-start-1 w-[262px] mb-[28px] h-[220px] lg:row-start-4 items-center justify-center">
              <div className="text-center">
                <p
                  className="text-[62px] font-[600] leading-[56px] bg-gradient-to-r from-[#FFB266] to-[#E9766F] 
            bg-clip-text text-transparent"
                >
                  20
                </p>
                <p className="text-[18px] font-[400] leading-[28px] text-[#B2A1FD] mt-[12px] mb-[20px]">
                  Top Users
                </p>
                <OverlappingAvatars
                  avatars={sampleAvatars}
                  size="sm"
                  maxVisible={3}
                />
              </div>
            </Card>

            <Card className="lg:col-start-1 lg:row-start-5 flex items-center justify-center w-[262px] h-[164px]">
              <button
                style={{
                  boxShadow:
                    "rgba(0, 0, 0, 0.16) 0px 1px 4px, rgb(51, 51, 51) 0px 0px 0px 5px;",
                }}
                className="w-[182px] h-[56px] bg-gradient-to-t from-[#5F33D6] to-[#BBA5F4] rounded-[10000px] flex items-center justify-center text-lg font-semibold hover:opacity-90 transition-opacity"
              >
                <Sparkles className="mr-2" size={20} />
                Generate
              </button>
            </Card>
          </div>
          </div>

          <div className="max-[909px]:flex max-[909px]:flex-col max-[909px]:items-center relative">
            <TemplateAICard />
            <Image
            src="/Sphere.png" 
            alt="AI Orb"
            width={300}
            height={300}
            className="object-contain absolute top-[265px] left-[125px]"
          />
           <Image
            src="/code.png" 
            alt="code"
            width={460}
            height={370}
            className="object-contain absolute z-[999999] top-[184px] left-[50px]"
          />
            <div className="flex items-center gap-[28px] mt-[28px]">
              <Card className="lg:col-start-2 max-[909px]:w-[120px] topRightCorn !h-[412px] w-[264px] lg:row-start-3 lg:row-span-2 justify-end">
                <div>
                  <Image src={"/branchIcon.svg"} height={52} width={52} />
                  <div className="w-[200px] h-[80px]">
                    <h3 className="text-[18px] text-[#E6E3FF] font-[700] leading-[28px] mt-[12px] mb-[4px]">
                      Branching paths
                    </h3>
                    <p className="text-[#ACA0E4] text-[16px] leading-[24px] font-[400]">
                      Explore multiple prompt directions with branching.
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="lg:col-start-3 topLeftCorn max-[909px]:w-[120px] !h-[412px] w-[264px] lg:row-start-3 lg:row-span-2 justify-end">
                <div>
                  <Image src={"/journeyIcon.svg"} width={52} height={52} />
                  <div className="w-[200px] h-[80px]">
                    <h3 className="text-[18px] text-[#E6E3FF] font-[700] leading-[28px] mt-[12px] mb-[4px]">
                      Ai journey
                    </h3>
                    <p className="text-[#ACA0E4] text-[16px] leading-[24px] font-[400]">
                      Boost your prompt precision with keywords.
                    </p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
          <div>
          <div>
            <Card className="lg:col-start-4 rounded-[24px] mb-[28px] w-[262px] h-[157px] lg:row-start-1 justify-center items-center">
              <CustomToggle
                isToggled={darkMode}
                onToggle={() => setDarkMode(!darkMode)}
                size="lg"
              />
            </Card>

            <Card className="lg:col-start-4 rounded-[24px] w-[262px] h-[211px] lg:row-start-2 items-center justify-center">
              <div className="text-center">
                <p
                  className="text-[62px] leading-[56px] font-[600] bg-gradient-to-r from-[#FFFFFF] to-[#AA9CFC] 
            bg-clip-text text-transparent"
                >
                  25M
                </p>
                <div
                  className="flex items-center justify-between w-[188px] mt-[24px] 
            "
                >
                  {/* bg-gradient-to-r from-[#B294FF80] to-[#4F2BAC] */}
                  <Image src={"/Union.svg"} width={10} height={40} />
                  <p className="text-[#B2A1FD] text-[18px] leading-[28px] font-[400]">
                    created prompts
                  </p>
                  <Image src={"/Union.svg"} width={10} height={40} />
                </div>
              </div>
            </Card>
          </div>

          <Card className="lg:col-start-4 mt-[28px] lg:row-start-3 lg:row-span-3 w-[262px] h-[412px]">
            <div className="w-[198px] h-[80px]">
              <h3 className="text-[18px] text-[#E6E3FF] font-[700] leading-[28px] mb-[4px]">
                Prompt Service
              </h3>
              <p className="text-[#ACA0E4] text-[16px] leading-[24px] font-[400]">
                Use pre-made templates to jumpstart creativity.
              </p>
            </div>

            <div className="flex-grow flex flex-col justify-between">
              <RotatedUIButtons />
            </div>
          </Card>
          </div>
        </div>

        <div className="flex items-center gap-[28px]">
          
        </div>
      </div>
    </main>

    <Timeline />
    <AvatarCarousel />
    <BlurredCardCarousel />
    </>
  );
}
