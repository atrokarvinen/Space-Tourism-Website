import { render } from "@testing-library/react";
import { CrewMemberType } from "../../models/CrewMemberType";
import CrewContent from "./CrewContent";

it("matches snapshot", () => {
  const crewMember: CrewMemberType = {
    name: "john doe",
    images: { png: "", webp: "" },
    bio: "fancy biography",
    role: "captain",
  };
  const { container } = render(<CrewContent crewMember={crewMember} />);

  expect(container.innerHTML).toMatchSnapshot();
});
