// Dependencies
import { FC, lazy } from "react";

// Routes
import { Route, Routes } from "react-router-dom";

// Config
import { CONFIG } from "@/utils/config";
import MainNavbar from "@/components/navbar";
import Footer from "@/components/footer";


//Pages Routes
const LayoutStructure = lazy(() => import("./LayoutStructure"));
const Contact = lazy(() => import("@/pages/contact"));
const Blog = lazy(() => import("@/pages/blog"));


const Layout: FC = () => {
  return (
    <>
    <div> <MainNavbar /> </div>
    <Routes>
   
      <Route path={CONFIG.root_path} element={<LayoutStructure />} />
      <Route path={CONFIG.contact_path} element={<Contact />} />
      <Route path={CONFIG.blog_path} element={<Blog />} />

    </Routes>
    <div> <Footer /> </div>

    </>
  );
};

export default Layout;
