import {Header} from "../../components/Header";
import React from "react";
import { shallow } from "enzyme";

test("Should render Header correctly", () => {
    const wrapper = shallow(<Header startLogout={() => {}} />);
    expect(wrapper).toMatchSnapshot();
});

test("Should call startlogout on button click", () => {
    const startLogout = jest.fn();
    const wrapper = shallow(<Header startLogout={startLogout}/>);
    wrapper.find("button").simulate("click")
    expect(startLogout).toHaveBeenCalled();
});