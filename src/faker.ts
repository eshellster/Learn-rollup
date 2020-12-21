import faker from "faker";

export const GenerateName = () => {
  return faker.name.findName();
};

export const Test = () => {
    return "Some string"
}