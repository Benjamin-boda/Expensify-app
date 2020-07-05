import ExpenseDashboardPage from "../../components/ExpenseDashboardPage";
import React from "react";
import { shallow } from "enzyme";

test("Should render Expense dashboard page correctly", () => {
    const wrapper = shallow(<ExpenseDashboardPage />);
    expect(wrapper).toMatchSnapshot();
})