import React from "react";
import { create } from "react-test-renderer";
import { Profile_ProfileStatus } from "../../Components/Profile/__PersonInfo/_ProfileStatus/Profile_ProfileStatus";
describe("Profile status component", () => {
  test("status from props should be in the state", () => {
    const component = create(
      <Profile_ProfileStatus status="test"></Profile_ProfileStatus>
    );
    const instance = component.getInstance();
    expect(instance.state.status).toBe("test");
  });

  test("<a> tag should be displayed", () => {
    const component = create(
      <Profile_ProfileStatus status="test"></Profile_ProfileStatus>
    );
    const instance = component.getInstance();
    const root = instance.root;
    let a = root.findByType("a");
  });
});
