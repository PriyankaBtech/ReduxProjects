import { createSlice, nanoid } from "@reduxjs/toolkit";
// nanoid -> for generating unique id

// assign with array or object, whatever you want to chose
const initialState = {
    todos: [{
        id: 1,
        text: "Welcome"
    }]
}

// create slice(bigger version of reducer)
export const todoSlice = createSlice({
    name: "Todo",
    initialState,
    reducers: {
        addTodo: (state, action) => {
            const todo = {
                id: nanoid(),
                text: action.payload // remove through action
            }
            // take excess of state
            state.todos.push(todo)

        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload)

        }
    }
})

export const {addTodo, removeTodo} = todoSlice.actions

export default todoSlice.reducer