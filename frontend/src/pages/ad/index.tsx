// Dependencies
import { FC, lazy } from "react";

// React Router
import { Outlet } from "react-router-dom";

// React Bootstrap
import { Col, Row } from "react-bootstrap";

import WhatsAppIcon from "@/components/whatsapp-icon";


// Components
const SwipeCarousel = lazy(() => import("@/components/carousel"));



const Clients = lazy(() => import("@/components/clients"));
const Work = lazy(() => import("@/components/work"));
const Blog = lazy(() => import("@/components/blog"));


const ContactComp = lazy(() => import("@/components/contact"));

// Pages

const Ad: FC = () => {

  return (
    <main className={`main-layout`}>
      <Row className="main-content">
      <Col className="fixed bottom-10 left-10" xs="12">
          <WhatsAppIcon />
        </Col>
        <Col xs="12">
          <SwipeCarousel />
        </Col>
      
     
        <Col xs="12">
          <Clients />
        </Col>
        <Col xs="12">
          <Work />
        </Col>
        <Col xs="12">
          <Blog />
        </Col>
    
        <Col xs="12">
          <ContactComp />
        </Col>
        <Col xs="12">
          <Outlet />
        </Col>
      </Row>
    </main>
  );
};

export default Ad;
