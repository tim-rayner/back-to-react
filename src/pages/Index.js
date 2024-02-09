import SiteInput from "../components/SiteInput";

export default function Index() {
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
