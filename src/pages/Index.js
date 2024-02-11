import SiteInput from "../components/SiteInput";
import React, { useEffect } from "react";
import { WebsiteCarbonAPI } from "../apis/WebsiteCarbon";
const testUrl = "https://liftshare.com/uk";

export default function Index() {
  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    console.log("Index mounted");
    WebsiteCarbonAPI.calculate(testUrl).then((data) => {
      console.log(data);
    });
  });

  return (
    <div>
      <h1>Website Carbon Footprint Calculator </h1>
      <h3> That's right, websites have a carbon footprint too.</h3>
      <p>
        This tool helps you understand the environmental impact of your website.
        It's a simple way to estimate how much CO2 are emitted every time a page
        on your site is viewed.
      </p>
      <SiteInput />
      <small>
        api:
        <a href="https://api.websitecarbon.com/#site-endpoint" target="_blank">
          websitecarbon
        </a>
      </small>
    </div>
  );
}
