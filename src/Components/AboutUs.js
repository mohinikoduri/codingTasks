import React from "react";
import { Link } from "react-router-dom";
import Figure from "react-bootstrap/Figure";
import "../Styles/AboutUs.css";
export default function AboutUs() {
  return (
    <>
      {/* <h2>Welcome to Aboutuspage!</h2>
      <nav>
        <Link to="/">Home</Link>
      </nav> */}

      <Figure id="About">
        <div>
          <Figure.Image
            width={200}
            height={180}
            alt="171x180"
            src="../assets/storeLogo.jpg"
          />
          <Figure.Caption
            style={{
              width: "80%",
              margin: "auto",
              color: "black",
              fontSize: "1.15rem",
            }}
          >
            With over 40 years of experience in selling and servicing
            Mercedes-Benz and smart vehicles, we pride ourselves on being
            experts in this iconic brand. Our simple goal is to continue to
            deliver award-winning service from each of our retailers throughout
            Surrey, Hampshire, Berkshire, Dorset and Wiltshire. In addition, as
            the official BRABUS representative for Southern England, we offer
            sales and aftersales expertise on this prestigious brand. Our
            customers are our main priority, which is why we aim to deliver the
            most pleasant purchase experience possible. This promise extends
            right through to our aftersales and My Service™ scheme, making your
            service as flexible and convenient as possible. We also have a
            number of schemes designed to benefit our range of customers,
            including our ‘Sandown Platinum Programmes’, which offers
            significant service and MOT discounts for owners of ‘mature’
            Mercedes-Benz vehicles.
          </Figure.Caption>
        </div>
        <div id="storeImgs">
          <Figure.Image
            width={300}
            height={280}
            alt="picture of our store"
            src="../assets/women.jpg"
          />
          <Figure.Image
            width={300}
            height={280}
            alt="Another picture of our store"
            src="../assets/vintage.jpg"
          />{" "}
        </div>
        <Figure.Caption>
          <div className="footer">
            <ul>
              <li>CONTACT US</li>
              <ul>
                <li>Customer Service: </li>

                <ul>
                  <li>Email: support@onlineshop.com</li>
                  <li>Phone: 1-800-123-4567</li>
                  <li> Hours: Monday to Friday, 9 AM - 6 PM (BST)</li>
                </ul>

                <li>Mailing Address: 12 Lancaster Road, Helston, TP21 8PZ</li>
              </ul>
            </ul>
          </div>
        </Figure.Caption>
      </Figure>
    </>
  );
}
