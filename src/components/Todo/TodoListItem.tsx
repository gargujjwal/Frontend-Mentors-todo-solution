import { ChangeEventHandler } from "react";
import CrossIcon from "../../assets/icon-cross.svg";
import { Todo } from "../../types";
import Checkbox from "../UI/Checkbox";

import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

type TodoListItemProps = {
    todo: Todo;
    onCompleteStatusChange: (id: string, isCompleted: boolean) => void;
    onDelete: (id: string) => void;
};

const TodoListItem = ({
    todo,
    onCompleteStatusChange,
    onDelete,
}: TodoListItemProps) => {
    const { attributes, listeners, setNodeRef, transform, transition } =
        useSortable({
            id: todo.id,
            transition: {
                duration: 150, // milliseconds
                easing: "cubic-bezier(0.25, 1, 0.5, 1)",
            },
        });

    const todoCheckChangeHandler: ChangeEventHandler<HTMLInputElement> = ev => {
        const { checked } = ev.target;
        onCompleteStatusChange(todo.id, checked);
    };
    const todoDeleteBtnHandler = () => onDelete(todo.id);
    return (
        <div
            className="flex items-center gap-3.5 rounded-sm bg-veryLightGray px-5 py-3 first:rounded-t-lg last:rounded-b-lg"
            style={{ transform: CSS.Transform.toString(transform), transition }}
            ref={setNodeRef}
            {...attributes}
            {...listeners}
        >
            <Checkbox
                checked={todo.completed}
                onChange={todoCheckChangeHandler}
            />
            <p
                className={`grow text-sm font-semibold md:text-base lg:text-lg ${
                    todo.completed
                        ? "text-lightGrayishBlue line-through"
                        : "text-veryDarkGrayishBlue"
                }`}
            >
                {todo.text}
            </p>
            <button
                className="w-10 rounded-full p-3 hover:bg-veryLightGrayishBlue focus:outline-none"
                onClick={todoDeleteBtnHandler}
            >
                <img
                    src={CrossIcon}
                    className="h-full w-full"
                    alt="cross icon"
                />
            </button>
        </div>
    );
};

export default TodoListItem;
