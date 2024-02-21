import { RootState } from "store/store";

export const selectData = (state: RootState) => state.data.todos;
