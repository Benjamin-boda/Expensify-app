import moment from "moment";
import filterReducers from "../../reducers/filters";

test("should setup default filter values", () => {
    const state = filterReducers(undefined, {type: "@@INIT"});
    expect(state).toEqual({
        text: "",
        sortBy: "date",
        startDate: moment().startOf("month"),
        endDate: moment().endOf("month")
    });
});

test("should set sortby to amount", () => {
    const state = filterReducers(undefined, {type: "SORT_BY_AMOUNT"});
    expect(state.sortBy).toBe("amount");
});

test("should set sortby to date", () => {
    const currentState = {
        sortBy: "amount",
        startDate: undefined,
        endDate: undefined, 
        text:""
    };
    const action = {type: "SORT_BY_DATE"}
    const state = filterReducers(currentState, action);
    expect(state.sortBy).toBe("date");
});

test("should setup text filter", () => {
    const text = "onche";
    const action = {
        type: "SET_TEXT_FILTER",
        text
    };
    const state = filterReducers(undefined, action);
    expect(state.text).toBe("onche");
});

test("should setup start date", () => {
    const startDate = moment(100);
    const action = {
        type: "SET_START_DATE",
        startDate
    };
    const state = filterReducers(undefined, action);
    expect(state.startDate).toEqual(moment(100));
});

test("should setup end date", () => {
    const endDate = moment(1000);
    const action = {
        type: "SET_END_DATE",
        endDate
    };
    const state = filterReducers(undefined, action);
    expect(state.endDate).toEqual(moment(1000));
});