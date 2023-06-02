import { ChangeEventHandler } from "react";
import CrossIcon from "../../assets/icon-cross.svg";
import { Todo } from "../../types";
import Card from "../UI/Card";
import Checkbox from "../UI/Checkbox";

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
    const todoCheckChangeHandler: ChangeEventHandler<HTMLInputElement> = ev => {
        const { checked } = ev.target;
        onCompleteStatusChange(todo.id, checked);
    };
    const todoDeleteBtnHandler = () => onDelete(todo.id);
    return (
        <Card
            component="li"
            className="gap-3.5 rounded-sm first:rounded-t-lg last:rounded-b-lg"
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
        </Card>
    );
};

export default TodoListItem;
