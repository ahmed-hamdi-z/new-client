// Dependencies
import { FC} from "react";
import { useTranslation } from "react-i18next";



const Work:FC = ()=>{
    return (
        <section className="flex flex-col items-center justify-center gap-12 bg-[#764095] px-4 py-24 md:flex-row">
          <Copy />
        </section>
      );
}
const Copy = () =>{
  const { t } = useTranslation();
 return (

    <div className="max-w-6xl text-center md:text-start flex flex-col items-center justify-center">
      <h2 className="mb-3 text-4xl text-white">{t("Zahw")}</h2>
      <p className="mb-6 text-xl text-justify rtl:text-end tracking-widest leading-relaxed text-white">
      {t("about disc")}
      </p>
      

    </div>
  );
}


        
export default Work; 