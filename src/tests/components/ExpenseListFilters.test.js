import React from "react";
import { ExpenseListFilters } from "../../components/ExpenseListFilters";
import { shallow } from "enzyme";
import {filters, altFilters} from "../fixtures/filters";
import moment from "moment";

let setTextFilter, sortByAmount, sortByDate, setStartDate, setEndDate, wrapper;

beforeEach(() => {
    setTextFilter = jest.fn();
    sortByAmount = jest.fn();
    sortByDate = jest.fn();
    setEndDate = jest.fn();
    setStartDate = jest.fn();
    wrapper = shallow(
        <ExpenseListFilters
            setTextFilter={setTextFilter}
            setEndDate={setEndDate}
            setStartDate={setStartDate}
            sortByAmount={sortByAmount}
            sortByDate={sortByDate}
            filters={filters}
        />)
});

test("should render expense list filters correctly", () => {
    expect(wrapper).toMatchSnapshot();
});

test("should render expense list filters with alt data correctly", () => {
    wrapper.setProps({
        filters: altFilters
    });
    expect(wrapper).toMatchSnapshot();
});

test("should handle text change", () => {
    const value = "rent";
    wrapper.find("input").simulate("change", {
        target: { value }
    });
    expect(setTextFilter).toHaveBeenLastCalledWith(value);
});

test("should sort by date", () => {
    const value = "date";
    wrapper.setProps({
        filters: altFilters
    });
    wrapper.find("select").simulate("change", {
        target: { value }
    });
    expect(sortByDate).toHaveBeenCalled();
});

test("should sort by amount", () => {
    const value = "amount";
    wrapper.find("select").simulate("change", {
        target: { value }
    });
    expect(sortByAmount).toHaveBeenCalled();
});

test("should handle date change", () => {
    const startDate = moment(0).add(3, "years");
    const endDate = moment(0).add(6, "years");
    wrapper.find("DateRangePicker").prop("onDatesChange")({ startDate, endDate});
    expect(setStartDate).toHaveBeenLastCalledWith(startDate);
    expect(setEndDate).toHaveBeenLastCalledWith(endDate);
});

test("should handle focus change", () => {
    const calenderFocused = "endDate";
    wrapper.find("DateRangePicker").prop("onFocusChange")(calenderFocused);
    expect(wrapper.state("calenderFocused")).toBe(calenderFocused)
});