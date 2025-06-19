import Image from "next/image";

const Card = ({ children, className }) => (
  <div className={`relative ${className}`}>{children}</div>
);

function TemplateAICard() {
  return (
    <Card
      className="
        lg:col-start-2 lg:row-start-1 max-[909px]:w-[262px] bottomCenterCorn lg:col-span-2 lg:row-span-2
        relative overflow-hidden
        w-[556px] h-[396px] rounded-[24px]
        border border-white/[0.19]  /* 19% of #FFFFFF */
         bg-[#653AD8] 
        flex flex-col items-center justify-start 
        pt-16
      "
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

      <div className="relative z-10 flex flex-col items-center gap-y-6">
        {" "}
        <h2
          className="
            text-[62px] font-[600] leading-[62px] text-center
            text-white /* Figma image shows solid white text */
            "
        >
          Template Ai
        </h2>
      </div>
    </Card>
  );
}

export default TemplateAICard;
