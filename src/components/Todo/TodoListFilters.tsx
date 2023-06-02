import Card from "../UI/Card";
import { Todo } from "../../types";
import { useState } from "react";

type TodoListFilters = {
    todos: Todo[];
    onFilterChange: (todos: Todo[]) => void;
};

const TodoListFilters = ({ todos, onFilterChange }: TodoListFilters) => {
    const [filter, setFilter] = useState<"no" | "active" | "completed">("no");

    const noFilter = () => {
        setFilter("no");
        onFilterChange(todos.map(todos => ({ ...todos, show: true })));
    };

    // only show todo only if todo is not complete
    const filterActive = () => {
        setFilter("active");
        onFilterChange(todos.map(todo => ({ ...todo, show: !todo.completed })));
    };

    // only show todo only if todo is complete
    const filterCompleted = () => {
        setFilter("completed");
        onFilterChange(todos.map(todo => ({ ...todo, show: todo.completed })));
    };

    return (
        <Card component="div" className="justify-center gap-6">
            <button
                className={`font-bold  hover:text-veryDarkGrayishBlue ${
                    filter === "no"
                        ? "text-brightBlue"
                        : "text-lightGrayishBlue"
                } `}
                onClick={noFilter}
            >
                All
            </button>
            <button
                className={`font-bold  hover:text-veryDarkGrayishBlue ${
                    filter === "active"
                        ? "text-brightBlue"
                        : "text-lightGrayishBlue"
                } `}
                onClick={filterActive}
            >
                Active
            </button>
            <button
                className={`font-bold  hover:text-veryDarkGrayishBlue ${
                    filter === "completed"
                        ? "text-brightBlue"
                        : "text-lightGrayishBlue"
                } `}
                onClick={filterCompleted}
            >
                Completed
            </button>
        </Card>
    );
};

export default TodoListFilters;
