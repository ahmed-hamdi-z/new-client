// Dependencies
import { FC, lazy } from "react";

// Redux
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";

// React Router
import { Outlet } from "react-router-dom";

// React Bootstrap
import { Col, Row } from "react-bootstrap";


// Components

const SwipeCarousel = lazy(() => import("@/components/carousel"));
const CountUpStats = lazy(() => import("@/components/stats"));
const Services = lazy(() => import("@/components/services"));
const Gallary = lazy(() => import("@/components/gallary"));
const Clients = lazy(() => import("@/components/clients"));
const Work = lazy(() => import("@/components/work"));
const Partners = lazy(() => import("@/components/partners"));
const Blog = lazy(() => import("@/components/blog"));
const FollowUS = lazy(() => import("@/components/follow"));



// Pages
const Contact = lazy(() => import("@/pages/contact"));

const LayoutStructure: FC = () => {
  const { direction, language } = useSelector(
    (state: RootState) => state.settings
  );

  return (
    <main className={`main-layout direction-${direction} lang-${language}`}>
      <Row className="main-content">
      
        <Col xs="12">
          <SwipeCarousel />
        </Col>
        <Col xs="12">
          <CountUpStats />
        </Col>
        <Col xs="12">
          <Services />
        </Col>
        <Col xs="12">
          <Gallary />
        </Col>
        <Col xs="12">
          <Clients />
        </Col>
        <Col xs="12">
          <Work />
        </Col>
        <Col xs="12">
          <Partners />
        </Col>
        <Col xs="12">
          <Blog />
        </Col>
        <Col xs="12">
          <FollowUS />
        </Col>
        <Col xs="12">
          <Contact />
        </Col>
        <Col xs="12">
          <Outlet />
      
        </Col>
      </Row>
    </main>
  );
};

export default LayoutStructure;