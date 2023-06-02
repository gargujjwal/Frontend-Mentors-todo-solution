import Header from "./components/Header";
import TodoForm from "./components/Todo/TodoForm";
import TodoList from "./components/Todo/TodoList";
import { Todo } from "./types";
import { useState } from "react";
import TODOS from "./data";
import TodoListFilters from "./components/Todo/TodoListFilters";

const App = () => {
    const [todos, setTodos] = useState<Todo[]>(TODOS);

    function newTodoFormSubmitHandler(todo: Todo) {
        // append new todo on form submission
        setTodos(prevValue => [...prevValue, todo]);
    }

    const todoDeleteHandler = (id: string) => {
        setTodos(prevValue => prevValue.filter(todo => todo.id !== id));
    };

    const todoCompletionChangeHandler = (id: string, isCompleted: boolean) => {
        setTodos(prevValue =>
            prevValue.map(todo => {
                if (todo.id === id) todo.completed = isCompleted;
                return todo;
            })
        );
    };

    const filterChangeHandler = (todo: Todo[]) => setTodos(todo);

    return (
        <>
            <picture className="absolute left-0 right-0 top-0 -z-10 w-full">
                <source
                    media="(min-width:1024px)"
                    srcSet="/backgrounds/bg-desktop-light.jpg"
                />
                <img
                    src="/backgrounds/bg-mobile-light.jpg"
                    alt="background image"
                    className="w-full object-cover"
                />
            </picture>

            <main
                className={
                    "container mx-auto max-w-[50rem] space-y-6 px-8 pt-8 font-body text-base lg:text-lg xl:text-xl"
                }
            >
                <Header />
                <TodoForm onFormSubmit={newTodoFormSubmitHandler} />
                <TodoList
                    todos={todos}
                    onTodoDelete={todoDeleteHandler}
                    onTodoCompletionChange={todoCompletionChangeHandler}
                />
                <TodoListFilters
                    onFilterChange={filterChangeHandler}
                    todos={todos}
                />
            </main>

            <footer className="mt-10 text-center font-body font-semibold text-lightGrayishBlue">
                Drag and drop to reorder list
            </footer>
        </>
    );
};

export default App;
