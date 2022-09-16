import React from "react";
import Navbar from "../components/Navbar";
import Image from "next/image";
import Profile from "../public/img/Profile.jpg";

export default function Contact() {
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
        <Navbar />
        <div
          className="text-bg-dark"
          style={{ border: "solid", borderradius: "5rem", margintop: "3rem" }}
        >
          <div className="hstack ">
            <div className="bodytext" style={{ marginleft: "3rem" }}>
              <ul>
                <li>C</li>
                <li>O</li>
                <li>N</li>
                <li>T</li>
                <li>A</li>
                <li>C</li>
                <li>T</li>
              </ul>
            </div>
            <div className="mx-4">
              <Image
                src={Profile}
                style={{
                  width: "15rem",
                  height: "15rem",
                }}
              />
            </div>
            {/* <!--contact details --> */}
            <div className="bodytext">
              <div>
                <span>NAME :</span>
                <span>Natacha Rungbanpant</span>
              </div>
              <div>
                <span>NICKNAME :</span>
                <span>Gus</span>
              </div>
              <div>
                <span>ADDRESS :</span>
                <span>199/19 KarnkanokVille22 Saraphi Chiangmai 50140</span>
              </div>
              <div>
                <span>FACEBOOK :</span>
                <span>
                  <a
                    href="https://www.facebook.com/profile.php?id=100006047683649"
                    target="_blank"
                    rel="noreferrer"
                  >
                    https://www.facebook.com/myprofile
                  </a>
                </span>
              </div>
              <div>
                <span>MAIL :</span>
                <span>
                  <a href="mailto:Natacha_rungbanpant@cmu.ac.th">
                    Natacha_rungbanpant@cmu.ac.th
                  </a>
                </span>
              </div>
              <div>
                <span>PHONE :</span>
                <span>090-319-6218</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
