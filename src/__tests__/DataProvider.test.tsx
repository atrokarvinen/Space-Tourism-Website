import { DataProvider } from "../services/DataProvider";

const provider = new DataProvider();
const data = provider.getSpaceTourismData();

it("reads data.json file", () => {
  expect(data).not.toBeUndefined();
});

it("has correct amount of destinations", () => {
  expect(data.destinations).toHaveLength(4);
});

it("has correct amount of crew members", () => {
  expect(data.crew).toHaveLength(4);
});

it("has correct amount of tech", () => {
  expect(data.technology).toHaveLength(3);
});

it("reads destination correctly", () => {
  const destination = data.destinations[0];
  expect(destination).not.toBeUndefined();
  expect(destination.description).not.toBeUndefined();
  expect(destination.distance).not.toBeUndefined();
  expect(destination.images.png).not.toBeUndefined();
  expect(destination.images.webp).not.toBeUndefined();
  expect(destination.name).not.toBeUndefined();
  expect(destination.travel).not.toBeUndefined();
});

it("reads crew member correctly", () => {
  const crewMember = data.crew[0];
  expect(crewMember).not.toBeUndefined();
  expect(crewMember.name).not.toBeUndefined();
  expect(crewMember.images.png).not.toBeUndefined();
  expect(crewMember.images.webp).not.toBeUndefined();
  expect(crewMember.role).not.toBeUndefined();
  expect(crewMember.bio).not.toBeUndefined();
});

it("reads tech correctly", () => {
  const technology = data.technology[0];
  expect(technology).not.toBeUndefined();
  expect(technology.name).not.toBeUndefined();
  expect(technology.images.portrait).not.toBeUndefined();
  expect(technology.images.landscape).not.toBeUndefined();
  expect(technology.description).not.toBeUndefined();
});
