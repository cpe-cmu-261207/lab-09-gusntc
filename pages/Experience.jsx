import React from "react";
import Navbar from "../components/Navbar";

export default function Experience() {
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
        <h3 className="d-flex justify-content-center my-3">MY EXPERIENCE</h3>
        {/* <!--cards--> */}
        <div className="d-flex justify-content-center">
          <div>
            <div className="card mb-3" style={{ width: "500px" }}>
              <img
                height="200rem"
                style={{ objectfit: "cover" }}
                src="https://scratch.mit.edu/images/scratch-og.png"
                className="card-img-top"
              />
              <div className="card-body">
                <h3 className="bodytext">SCRATCH</h3>
                <p className="card-text">
                  ในตอนปี 1 เทอม 1
                  ได้มีการรวมกลุ่มกันในการเขียนพื้นฐานโค้ดนำไปสู่การเขียนเกมบน
                  scratch.
                </p>
              </div>
            </div>
            {/* <!--Cards--> */}
            <div
              className="card mb-3"
              style={{ margintop: "3rem", width: "500px" }}
            >
              <img
                height="200rem"
                style={{ objectfit: "cover" }}
                src="https://restaurantindia.s3.ap-south-1.amazonaws.com/s3fs-public/2022-01/Tech%20in%20food.jpg"
                class="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h3 className="bodytext">RESTAURANT MANAGEMENT PROGRAM</h3>
                <p className="card-text">
                  ในตอนปี 1 เทอม 2 ได้ฝึกเขียนพื้นฐานภาษา C++ บน VsCode
                  และทำการพัฒนามาเป็นโปรแกรมร้านอาหารที่ช่วยทั้งผู้ประกอบการและผู้บริโภคได้เป็นอย่างดี.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
