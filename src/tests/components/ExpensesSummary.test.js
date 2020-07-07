import { shallow } from "enzyme";
import React from "react";
import { ExpensesSummary } from "../../components/ExpensesSummary";

test("should correctly render Expenses summary with 1 expense ", () => {
    const wrapper = shallow(<ExpensesSummary expenseCount={1} expensesTotal={123} />)
    expect(wrapper).toMatchSnapshot();
});

test("should correctly render Expenses summary with multiple expense ", () => {
    const wrapper = shallow(<ExpensesSummary expenseCount={14} expensesTotal={1239899} />)
    expect(wrapper).toMatchSnapshot();
});