import React from "react";
import App from "../../components/App";
import { expect } from "code";
import { shallow } from "enzyme";

describe("Given app", () => {
  let component = shallow(<App />);
  it("should exist", () => {
    expect(component.exists()).to.be.true();
  });
});
