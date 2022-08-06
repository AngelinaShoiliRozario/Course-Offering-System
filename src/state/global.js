import { createGlobalState } from "react-hooks-global-state";

const { setGlobalState, useGlobalState } = createGlobalState({
  user: "unrecognized",
  id: "****",
  currentStudent: {},
  selectedCode: "",
  courses: [],
});
export { setGlobalState, useGlobalState };
