import Navbar from "../components/Navbar";
import { useState } from "react";
import Image from "next/image";
import Profile from "../public/img/Profile.jpg";
export default function Home() {
  return (
    <div>
      <div
        className="container"
        style={{
          backgroundcolor: "white",
          border: "solid",
          bordercolor: "white",
          borderradius: "20px",
          margin: "auto",
          padding: "5rem",
          margintop: "9rem",
          marginbottom: "9rem",
        }}
      >
        {/* <!--Navbar--> */}
        <Navbar />
        {/* <!--Photo and Name--> */}
        <div
          className="d-flex justify-content-center vstack my-4"
          style={{ margintop: "3rem", alignItems: "center" }}
        >
          <div style={{ width: "300px", objectfit: "cover" }}>
            <Image src={Profile} className="my-3 " />
          </div>
          <h1>NATACHA RUNGBANPANT</h1>
        </div>
        {/* <!--Introducing--> */}
        <div
          className="d-flex justify-content-center vstack"
          style={{ border: "solid", bordercolor: "black" }}
        >
          <span
            className="d-flex justify-content-center "
            style={{ padding: "20px" }}
          >
            Introducing Myself
          </span>
          <span className="d-flex justify-content-center ps-2">
            Hi,my name is Natacha.I have studied at chiangmai University
            Department of Computer Engineering.I'm training basic coding
            languages such as C++,Html,css and JavaScript.
          </span>
        </div>
        <div
          className="d-flex justify-content-center gap-5 fw-bold my-4"
          style={{ color: "black" }}
        >
          <h1>MY SKILL</h1>
        </div>
        {/* <!--cards--> */}
        <div className="d-flex justify-content-center gap-2">
          <div
            className="card"
            style={{ width: "20rem", display: "block", margin: "auto" }}
          >
            <img
              src="https://i.pinimg.com/736x/ed/af/e8/edafe888ea97e38ddf4c658379e7d96c--ad-design-icon-design.jpg"
              className="card-img-top"
              style={{ height: "25rem", objectfit: "cover" }}
            />
            <div className="card-body">
              <h4 className="card-title">Design</h4>
            </div>
          </div>

          <div
            className="card"
            style={{ width: "20rem", display: "block", margin: "auto" }}
          >
            <img
              src="https://ak.picdn.net/shutterstock/videos/7138747/thumb/1.jpg"
              className="card-img-top"
              style={{ height: "25rem", objectfit: "cover" }}
            />
            <div className="card-body">
              <h4 className="card-title">Computer Software</h4>
            </div>
          </div>

          <div
            className="card"
            style={{ width: "20rem", display: "block", margin: "auto" }}
          >
            <img
              src="https://thumbs.dreamstime.com/b/teamwork-cog-web-icons-symbols-black-background-teamwork-cog-web-icons-symbols-black-background-157681690.jpg"
              className="card-img-top"
              style={{ height: "25rem", objectfit: "cover" }}
            />
            <div className="card-body">
              <h4 className="card-title">Teamwork</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
