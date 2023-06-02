import { DndContext, DragEndEvent, closestCenter } from "@dnd-kit/core";
import { Todo } from "../../types";
import Card from "../UI/Card";
import TodoListItem from "./TodoListItem";
import {
    SortableContext,
    arrayMove,
    verticalListSortingStrategy,
} from "@dnd-kit/sortable";

type Props = {
    todos: Todo[];
    onTodoDelete: (id: string) => void;
    onTodoCompletionChange: (id: string, isCompleted: boolean) => void;
    onTodoRearrange: (todo: (todo: Todo[]) => Todo[]) => void;
};

function TodoList({
    todos,
    onTodoDelete: todoDeleteHandler,
    onTodoCompletionChange: todoCompletionChangeHandler,
    onTodoRearrange,
}: Props) {
    const inCompletedTodos = todos.reduce(
        (prev, curr) => prev + (curr.completed ? 0 : 1),
        0
    );

    const clearBtnClickHandler = () =>
        todos
            .filter(todo => todo.completed)
            .forEach(todo => todoDeleteHandler(todo.id));

    const dragEndHandler = ({
        active: { id: activeID },
        over,
    }: DragEndEvent) => {
        if (!over) return;
        const { id: overID } = over;

        if (activeID === overID) return;
        onTodoRearrange(todos => {
            const activeIndex = todos.findIndex(todo => todo.id === activeID);
            const overIndex = todos.findIndex(todo => todo.id === overID);
            return arrayMove(todos, activeIndex, overIndex);
        });
    };

    return (
        <DndContext
            collisionDetection={closestCenter}
            onDragEnd={dragEndHandler}
        >
            <SortableContext
                items={todos}
                strategy={verticalListSortingStrategy}
            >
                <ul className="divide-y-4">
                    {todos.filter(todo => todo.show).length !== 0 ? (
                        todos
                            .filter(todo => todo.show)
                            .map(todo => (
                                <TodoListItem
                                    key={todo.id}
                                    todo={todo}
                                    onDelete={todoDeleteHandler}
                                    onCompleteStatusChange={
                                        todoCompletionChangeHandler
                                    }
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
            </SortableContext>
        </DndContext>
    );
}

export default TodoList;
