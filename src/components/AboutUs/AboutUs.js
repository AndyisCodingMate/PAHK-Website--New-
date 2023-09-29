import React from "react";
import Banner from "../Banner/Banner";
export default function AboutUs() {
  return (
    <body>
      <top>
        <Banner />
      </top>
      <h1>Milestones</h1>
      <hr></hr>
      <p>AboutUs</p>
      <h1>Company Philosophy</h1>
      <hr></hr>
      <p>
        Pacific Agriscience Hong Kong has built a strong global network in the
        past 20 years or more. Utilizing this network, we are able to help
        suppliers and customers find what they need. The following is a map
        indicating cities and countries that we have done business in:
      </p>
      <img src="" alt="map.jpg" className="map"></img>
      <p>
        Pacific Agriscience (PAHK) follows the philosophy written in a document
        dubbed "the Golden Folder". We operate based on the rules written in the
        folder to ensure our customers receives the best experience regardless
        of their order. Below is a link to the folder, <a href="">click here</a>{" "}
        to learn more.
      </p>
      <h1>Products and Services</h1>
      <hr></hr>
      <h3>Sourcing Agrochemicals for the global market</h3>
      <p>
        At Pacific Agriscience, we utilize our global network to source a wide
        range of Agrochemicals at different price ranges and quality, aside from
        widely-used generics, we are also able to source raw materials and other
        high performance chemicals. Visit our <a href="">Products page</a> to
        learn more about our roster of offered products.
      </p>
      <h3>Registration Services for Agrochemicals</h3>
      <p>
        We have a great number of generic pesticide products with data packages
        registered in Australia and we offer duplications of these registrations
        to companies interested in entering the Australian market more directly.
        With the changing business landscape where the supply chain is
        shortening, manufacturers and formulators need to be closer to the
        markets and end-users. Founder of Pacific Agriscience, C S Liew has made
        speeches (Zhenghe's Art of Collaboration) and written articles on this
        subject.
      </p>
      <p>
        We highly recommend you contact us directly if you wish to learn more
        about our registration services. Contact us{" "}
        <a href="/contactus">here</a> to learn more details.
      </p>
    </body>
  );
}
