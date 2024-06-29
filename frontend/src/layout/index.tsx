// Dependencies
import { FC, lazy } from "react";

// Routes
import { Route, Routes } from "react-router-dom";

// Config
import { CONFIG } from "@/utils/config";
import MainNavbar from "@/components/navbar";
import Footer from "@/components/footer";
import Details from "@/pages/blog-details";

// Languages
import "@/components/languages/index";

//Pages Routes
const LayoutStructure = lazy(() => import("./LayoutStructure"));
const Contact = lazy(() => import("@/pages/contact"));
const Blog = lazy(() => import("@/pages/blog"));

const Layout: FC = () => {
  return (
    <div className="overflow-y-hidden">
      <div>
        {" "}
        <MainNavbar />{" "}
      </div>
      <Routes>
        <Route path={CONFIG.root_path} element={<LayoutStructure />} />
        <Route path={CONFIG.contact_path} element={<Contact />} />
        <Route path={CONFIG.blog_path} element={<Blog />} />
        <Route path={CONFIG.blog_details} element={<Details />} />
      </Routes>
      <div>
        {" "}
        <Footer />{" "}
      </div>
    </div>
  );
};

export default Layout;
