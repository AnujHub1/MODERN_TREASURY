import Page from "./Components/Login/Page";
import SignUp from "./Components/SignUp/SignUp";
import SignUpForm from "./Components/Signup2/SignUpForm";
import HomeScreen from "./Components/HomeScreen/HomeScreen";
import Navbar from "./Components/HomeScreen/Navbar";
import Contact from "./Components/ContactForm1/Contact";
import ContactForm from "./Components/ContactForm2/ContactForm";
import NavbarGroup from "./Components/NavbarDiv/NavbarGruop";
import Home from "./Components/HomeScreen/Home";
import Payments from "./Components/Payments/Payments";
import Payment_Prod from "./Components/Payment_Products/Payment_Prod";
import PaymentsProduct from "./Components/Payment_Products/PaymentsProduct";
import "./App.css";
import * as React from "react";

import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
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
      path: "/signupnext",
      element: <SignUp />,
    },

    {
      path: "/signup",
      element: <SignUpForm />,
    },
    {
      path: "/contactus",
      element: (
        <>
          <div className="container2">
            <Navbar></Navbar>
            <Contact></Contact>
          </div>
        </>
      ),
    },
    {
      path: "/contact/submit",
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
      path: "/talktous",
      element: (
        <>
          <div className="container2">
            <NavbarGroup></NavbarGroup>
          </div>
        </>
      ),
    },
    {
      path: "/payments",
      element: (
        <div className="container2">
          <Navbar></Navbar>
          <Payments />
        </div>
      ),
    },
    {
      path: "/payments/:title",

      element: (
        <div className="container2">
          <Navbar></Navbar>
          <PaymentsProduct />
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
