// Dependencies
import { FC } from "react";
import i18n from "i18next";

const LanguagesBtn: FC = () => {
  return (
    <div className="w-10 h-10 bg-black flex items-center justify-center">
      <button
        className="m-5"
        onClick={() => {
          i18n.changeLanguage("ar");
        }}
      >
        {" "}
        AR{" "}
      </button>
      
      <button
        className="m-5"
        onClick={() => {
          i18n.changeLanguage("en");
        }}
      >
        {" "}
        EN{" "}
      </button>
    </div>
  );
};

export default LanguagesBtn;
