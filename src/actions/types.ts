import { DeleteTodoAction, FetchTodosAction } from "./todos";


export enum ActionTypes {
    fetchTodos, /* = 'fetchTodos' // We dont really about the value, the default `= 0` is good enough since it will be unique to this enum */
    deleteTodo
}

// Allows us to type hint "Action" instead of a long line of different action types, @see todosReducer in reducers/todos.ts
export type Action = FetchTodosAction | DeleteTodoAction;