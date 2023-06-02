import { Todo } from "../../types";
import Card from "../UI/Card";
import TodoListItem from "./TodoListItem";

type Props = {
    todos: Todo[];
    onTodoDelete: (id: string) => void;
    onTodoCompletionChange: (id: string, isCompleted: boolean) => void;
};

function TodoList({
    todos,
    onTodoDelete: todoDeleteHandler,
    onTodoCompletionChange: todoCompletionChangeHandler,
}: Props) {
    const inCompletedTodos = todos.reduce(
        (prev, curr) => prev + (curr.completed ? 0 : 1),
        0
    );

    const clearBtnClickHandler = () =>
        todos
            .filter(todo => todo.completed)
            .forEach(todo => todoDeleteHandler(todo.id));
    return (
        <ul className="divide-y-4">
            {todos.filter(todo => todo.show).length !== 0 ? (
                todos
                    .filter(todo => todo.show)
                    .map(todo => (
                        <TodoListItem
                            key={todo.id}
                            todo={todo}
                            onDelete={todoDeleteHandler}
                            onCompleteStatusChange={todoCompletionChangeHandler}
                        />
                    ))
            ) : (
                <Card component="li" className="justify-center">
                    No todo found... winning...
                </Card>
            )}
            <Card
                component="li"
                className="justify-between text-xs font-semibold text-lightGrayishBlue lg:text-base"
            >
                <p>
                    <span>{inCompletedTodos}</span> items left
                </p>
                <button
                    className="hover:text-veryDarkGrayishBlue focus:outline-none"
                    onClick={clearBtnClickHandler}
                >
                    Clear Completed
                </button>
            </Card>
        </ul>
    );
}

export default TodoList;
