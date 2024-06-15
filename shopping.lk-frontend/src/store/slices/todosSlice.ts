/* 

import { createSlice } from '@reduxjs/toolkit';
//import { v4 as uuid } from 'uuid';

type TodoType = {
	id: string;
	text: any;
};

export const todosSlice = createSlice({
	name: 'todos',
	initialState: [] as TodoType[],
	reducers: {
		addTodo: (state, action) => {
			const todo: TodoType = {
				id: Math.random().toString(16).slice(2),
				text: action.payload,
			};
			return [...state, todo];
		},

		updateTodo: (state: TodoType[], action) => {
			const { id, text } = action.payload;

			const todo: TodoType | undefined = state.find((todo) => todo.id === id);
			if (todo) {
				todo.text = text;
			}
		},
		deleteTodo: (state: TodoType[], action) => {
			return state.filter((todo) => todo.id !== action.payload);
		},
	},
});

export const { addTodo, updateTodo, deleteTodo } = todosSlice.actions;

export default todosSlice.reducer;
*/

//
//
//
//
//
//
//
//

import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type TodoType = {
	id: string;
	text: string;
	completed: boolean;
};

type StatusType = 'uninitialized--' | 'loading' | 'error';

interface TodosState {
	status: StatusType;
	todos: TodoType[];
	error: null | string; // Adjust the error type based on your needs
}

const initialState2 = {
	status: 'uninitialized',
	todos: [],
	error: null,
};

const todosSlice = createSlice({
	name: 'todos',
	initialState: initialState2,
	reducers: {
		// Give case reducers meaningful past-tense "event"-style names
		todoAdded(state: TodosState, action: PayloadAction<{ id: string; text: string }>) {
			const { id, text } = action.payload;
			state.todos = [...state.todos, { id, text, completed: false }];
		},
		todoToggled(state: TodosState[], action: PayloadAction<string>) {
			// Look for the specific nested object to update.
			// In this case, `action.payload` is the default field in the action,
			// and can hold the `id` value - no need for `action.id` separately
			const matchingTodo = state.todos.find((todo: TodoType) => todo.id === action.payload);

			if (matchingTodo) {
				// Can directly "mutate" the nested object
				matchingTodo.completed = !matchingTodo.completed;
			}
		},
	},
});

// `createSlice` automatically generated action creators with these names.
// export them as named exports from this "slice" file
export const { todoAdded, todoToggled } = todosSlice.actions;

// Export the slice reducer as the default export
export default todosSlice.reducer;
