import Page from "./Components/Login/Page";
import SignUpForm from "./Components/SignUp/SignUpForm";
import HomeScreen from "./Components/HomeScreen/HomeScreen";
import Navbar from "./Components/HomeScreen/Navbar";
import Contact from "./Components/ContactForm1/Contact";
import ContactForm from "./Components/ContactForm2/ContactForm";
import NavbarGroup from "./Components/NavbarDiv/NavbarGruop";
import Home from "./Components/HomeScreen/Home";
import Payments from "./Components/Payments/Payments";
import Payment_Prod from "./Components/Payment_Products/Payment_Prod";
import PaymentsProduct from "./Components/Payment_Products/PaymentsProduct";
import LadgersHome from "./Components/Ledgers/LadgersHome";
import GeneralLedgers from "./Components/Ledgers/GenralLedgers/GeneralLedgers";
import CashLedger from "./Components/Ledgers/CashLedger/CashLedger";
import SalesLedger from "./Components/Ledgers/SalesLedger/SalesLedger";
import PurchaseLedger from "./Components/Ledgers/PurchaseLedger/PurchaseLedger";
import Subside from "./Components/Ledgers/SubSidnary/Subside";
import Reconciliation from "./Components/Reconciliation/Reconciliation";
import MultiwayForm from "./Components/Reconciliation/Multiway/MultiwayForm";
import MultiRecon from "./Components/Reconciliation/Multiway/MultiRecon";
import BatchPayment from "./Components/Reconciliation/BatchPayment/BatchPayment";
import Intercompany from "./Components/Reconciliation/Intercom/Intercompany";
import PlatformOver from "./Components/PlatformOverview/PlatformOver";
import ApiR from "./Components/APIReference/ApiR";
import PricingRates from "./Components/PriningRates/PricingRates";
import Integration from "./Components/Integration/Integration";
import Knowledgehub from "./Components/KnowledgeHub/Knowledgehub";
import SubPages from "./Components/KnowledgeHub/SubPages";
import "./App.css";
import * as React from "react";

import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import Glossary from "./Components/Glossary/Glossary";
import Journal from "./Components/Journal/Journal";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/platforms",
      element: (
        <div className="container1">
          <Navbar />
          <HomeScreen></HomeScreen>
        </div>
      ),
    },
    {
      path: "/resources",
      element: (
        <div className="container1">
          <Navbar />
          <HomeScreen></HomeScreen>
        </div>
      ),
    },

    {
      path: "/documentation",
      element: (
        <div className="container1">
          <Navbar />
          <HomeScreen></HomeScreen>
        </div>
      ),
    },

    {
      path: "/pricing",
      element: (
        <div className="container1">
          <Navbar />
          <HomeScreen></HomeScreen>
        </div>
      ),
    },
    {
      path: "/navbar",
      element: (
        <>
          <div className="container1">
            <Navbar></Navbar>
          </div>
        </>
      ),
    },

    {
      path: "/home",
      element: (
        <>
          <div className="container1">
            <Navbar />
            <HomeScreen></HomeScreen>
          </div>
        </>
      ),
    },

    {
      path: "/login",
      element: <Page />,
    },

    {
      path: "/signup",
      element: <SignUpForm />,
    },
    {
      path: "/contactus",
      element: (
        <>
          <div className="container1">
            <Navbar></Navbar>
            <HomeScreen></HomeScreen>
          </div>
        </>
      ),
    },
    {
      path: "/contactus/submit",
      element: (
        <>
          <Navbar></Navbar>
          <div className="container2">
            <ContactForm></ContactForm>
          </div>
        </>
      ),
    },
    {
      path: "/contactus/talktous",
      element: (
        <>
          <div className="container2">
            <NavbarGroup></NavbarGroup>
          </div>
        </>
      ),
    },
    {
      path: "platforms/payments",
      element: (
        <>
          <Navbar></Navbar>
          <Payments />
        </>
      ),
    },
    {
      path: "/platforms/payments/:title",

      element: (
        <>
          <Navbar></Navbar>
          <PaymentsProduct />
        </>
      ),
    },
    {
      path: "/platforms/ledgers",
      element: (
        <>
          <Navbar></Navbar>
          <LadgersHome></LadgersHome>
        </>
      ),
    },
    {
      path: "/platforms/ledgers/general",
      element: (
        <>
          <Navbar></Navbar>
          <GeneralLedgers></GeneralLedgers>
        </>
      ),
    },

    // {
    //   path: "/platforms/ledgers/general/create",
    //   element: (
    //     <div className="container2">
    //       <Navbar></Navbar>
    //       <GeneralLedgers></GeneralLedgers>
    //     </div>
    //   ),
    // },

    {
      path: "/platforms/ledgers/cash",
      element: (
        <div className="container2">
          <Navbar></Navbar>
          <CashLedger></CashLedger>
        </div>
      ),
    },
    {
      path: "/platforms/ledgers/sales",
      element: (
        <div className="container2">
          <Navbar></Navbar>
          <SalesLedger />
        </div>
      ),
    },
    {
      path: "/platforms/ledgers/purchase",
      element: (
        <div className="container2">
          <Navbar></Navbar>
          <PurchaseLedger />
        </div>
      ),
    },
    {
      path: "/platforms/ledgers/subsidiary",
      element: (
        <div className="container2">
          <Navbar></Navbar>
          <Subside />
        </div>
      ),
    },
    {
      path: "/platforms/reconciliation",
      element: (
        <div className="container2">
          <Navbar></Navbar>
          <Reconciliation />
        </div>
      ),
    },
    {
      path: "/platforms/reconciliation/multiway",
      element: (
        <div className="container2">
          <Navbar></Navbar>
          <MultiRecon />
        </div>
      ),
    },
    {
      path: "/platforms/reconciliation/batch",
      element: (
        <div className="container2">
          <Navbar></Navbar>
          <BatchPayment />
        </div>
      ),
    },
    {
      path: "/platforms/reconciliation/intercompany",
      element: (
        <div className="container2">
          <Navbar></Navbar>
          <Intercompany />
        </div>
      ),
    },
    {
      path: "/platforms/platformoverview",
      element: (
        <div className="container2">
          <Navbar />
          <PlatformOver />
        </div>
      ),
    },
    {
      path: "/documentation/apireferences",
      element: (
        <div className="container2">
          <Navbar />
          <ApiR />
        </div>
      ),
    },
    {
      path: "/pricing/pricingrates",
      element: (
        <div className="container2">
          <Navbar />
          <PricingRates />
        </div>
      ),
    },
    {
      path: "/resources/integrations",
      element: (
        <div className="container2">
          <Navbar />
          <Integration />
        </div>
      ),
    },
    {
      path: "/resources/knowledgehub",
      element: (
        <div className="container2">
          <Navbar />
          <Knowledgehub />
        </div>
      ),
    },
    // {
    //   path: "/platforms/reconciliation/explore",
    //   element: (
    //     <div className="container2">
    //       <Navbar></Navbar>
    //       <ReconnciliationExplore />
    //     </div>
    //   ),
    // },
    {
      path: "/resources/knowledgehub/:title",

      element: (
        <div className="container2">
          <Navbar></Navbar>
          <SubPages />
        </div>
      ),
    },
    {
      path: "/resources/glossary",
      element: (
        <div className="conatiner2">
          <Navbar />
          <Glossary />
        </div>
      ),
    },
    {
      path: "/resources/journal",
      element: (
        <div className="container2">
          <Navbar />
          <Journal />
        </div>
      ),
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
