import React from "react";
import { shallow } from "enzyme";

import Input from "../../03/Input";

describe("<Input>", () => {
  // ...(renders without crashing에 관한 예제 항목)...
  it("has one elements", () => {
    const wrapper = shallow(<Input />);
    expect(wrapper.length).toEqual(1); // expect() 함수가 반환한 toEquals() 함수를 사용하여 반환된 객체의 수를 비교합니다.
    expect(wrapper).toHaveLength(1); // expect() 함수가 반환한 toHaveLength() 함수를 사용하여 .length값을 비교합니다.
  });
});
