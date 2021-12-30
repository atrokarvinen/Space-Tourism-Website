import { render } from "@testing-library/react";
import { DestinationType } from "../../models/DestinationType";
import DestinationContent from "./DestinationContent";

it("renders correct information", () => {
  const destination: DestinationType = {
    name: "moon",
    images: { png: "", webp: "" },
    description: "description",
    distance: "100 km",
    travel: "10 years",
  };
  const { container } = render(
    <DestinationContent destination={destination} />
  );
  
  expect(container.querySelector("h2")?.textContent).toBe("MOON");
  expect(container.querySelector("p")?.textContent).toBe("description");
  expect(container.getElementsByClassName("subHeading1")[0].textContent).toBe("100 KM");
  expect(container.getElementsByClassName("subHeading1")[1].textContent).toBe("10 YEARS");
});
