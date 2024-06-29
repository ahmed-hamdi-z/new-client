// Dependencies
import { FC, useEffect, useRef } from "react";
import { animate, useInView } from "framer-motion";
import { useTranslation } from "react-i18next";
import LanguagesBtn from "@/components/languages/button";


const CountUpStats: FC = () => {
  const { t } = useTranslation();
  
  return (
    <div className="flex flex-col items-center justify-between pt-20 ">
      <div className="">

        <button className=" mb-16  w-60 h-12 border-2 border-black  font-semibold text-black transition-colors hover:bg-slate-700 hover:text-black">
          <p>{t("Talk to us ")} </p>
        </button>
        <div className=""> <LanguagesBtn /> </div>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:gap-24 md:gap-16 gap-12">
        <div className=" ">
          {" "}
          <Stat num={9} suffix="" subheading="Years Of Experience" />
        </div>
        <div className=" ">
          <Stat
            num={125}
            decimals={0}
            suffix=""
            subheading="Satisfied Customers "
          />
        </div>
        <div className=" ">
          <Stat num={150} suffix="" subheading="Completed Projects" />
        </div>
        <div className=" ">
          {" "}
          <Stat num={88} suffix="" subheading="Ready Equipment
 " />
        </div>
      </div>
    </div>
  );
};

interface Props {
  num: number;
  suffix: string;
  decimals?: number;
  subheading: string;
}

const Stat = ({ num, suffix, decimals = 0, subheading }: Props) => {
  const ref = useRef<HTMLSpanElement | null>(null);
  const isInView = useInView(ref);

  useEffect(() => {
    if (!isInView) return;

    animate(0, num, {
      duration: 2.5,
      onUpdate(value) {
        if (!ref.current) return;

        ref.current.textContent = value.toFixed(decimals);
      },
    });
  }, [num, decimals, isInView]);

  return (
    <div className="flex flex-col items-center ">
      <p className="mb-2 text-center text-5xl font-semibold ">
        <span ref={ref}></span>
        {suffix}
      </p>
      <p className="max-w-48 text-center text-neutral-600">{subheading}</p>
    </div>
  );
};

export default CountUpStats;
