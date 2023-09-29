import React from "react";
import InquiryBox from "./InquiryBox";
export default function ContactUs() {
  return (
    <div>
      <h1>Contact Us</h1>
      <h3>Office Details</h3>
      <p>
        Address: Flat D, 21st Floor, Seabright Plaza, 9-23 Shell Street, North
        Point, Hong Kong
      </p>
      <p>Office Hotline: (+852) 2528 5926</p>
      <p>Available Hours: 9:00 am to 7:00 pm (GMT +8:00)</p>
      <h3>Staff:</h3>
      <p>Candy Yeung, Manager</p>
      <p>Phone no. (Hong Kong): (+852) 9322 1317</p>
      <p>Phone no. (China): (+86) 176 7534 0802</p>
      <p>Email: candy@pacificagriscience.com / pahk@biznetvigator.com</p>

      <p>Stanley Poon, Administration and Logistics</p>
      <p>Phone no. (Hong Kong): (+852) 6303 3499</p>
      <p>Email: logistics@pacificagriscience.com</p>

      <InquiryBox />
      </div>
  );
}
