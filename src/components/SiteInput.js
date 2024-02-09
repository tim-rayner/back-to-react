import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";

export default function SiteInput() {
  return (
    <form>
      <InputText
        placeholder="Enter your website URL"
        style={{ margin: "0 10px" }}
      />
      <Button type="button" label="Calculate" icon="pi pi-calculator" />
    </form>
  );
}
