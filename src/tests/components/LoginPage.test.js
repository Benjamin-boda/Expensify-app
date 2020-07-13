import {LoginPage} from "../../components/LoginPage";
import React from "react";
import { shallow } from "enzyme";

test("Should render LoginPage component correctly", () => {
    const wrapper = shallow(<LoginPage/>);
    expect(wrapper).toMatchSnapshot();
});

test("Should call startlogin on button click", () => {
    const startLogin = jest.fn();
    const wrapper = shallow(<LoginPage startLogin={startLogin}/>);
    wrapper.find("button").simulate("click")
    expect(startLogin).toHaveBeenCalled();
});