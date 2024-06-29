// Dependencies
import { FC } from "react";
import AppCards from "./card";

const Services: FC = () => {
  return (
    <>
      <div className="min-h-screen flex justify-center items-center bg-parallex bg-fixed bg-no-repeat bg-cover bg-center mt-20"></div>
      <div className="xl:mt-[-250px] md:mt-[-200px] mt-[-200px] flex items-center justify-center ">
        <AppCards />
      </div>
    </>
  );
};

export default Services;
