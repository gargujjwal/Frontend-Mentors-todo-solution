import {
    ChangeEventHandler,
    FocusEventHandler,
    FormEventHandler,
    useState,
} from "react";
import Checkbox from "../UI/Checkbox";
import Textbox from "../UI/Textbox";
import { Todo } from "../../types";
import { v4 as uuidv4 } from "uuid";
import Card from "../UI/Card";

const TODO_DEFAULT_VALUE: Todo = {
    id: uuidv4(),
    completed: false,
    text: "",
    show: true,
};

type TodoFormProps = {
    onFormSubmit: (todo: Todo) => void;
};

const TodoForm = ({ onFormSubmit }: TodoFormProps) => {
    const [todo, setTodo] = useState<Todo>(TODO_DEFAULT_VALUE);

    function formInputChangeHandler(
        change: "checkbox" | "text"
    ): ChangeEventHandler<HTMLInputElement> {
        if (change === "checkbox")
            return () =>
                setTodo(prevValue => ({
                    ...prevValue,
                    completed: !prevValue.completed,
                }));

        // text input field
        return ({ target: { value } }) =>
            setTodo(prevValue => ({ ...prevValue, text: value }));
    }

    const formSubmitHandler: FormEventHandler<HTMLFormElement> = ev => {
        ev.preventDefault();

        // basic form validation
        if (todo.text === "") return;

        onFormSubmit(todo);

        // reset the fields again
        setTodo({ ...TODO_DEFAULT_VALUE, id: uuidv4() });
    };

    // submit the form on text box blur event
    const textboxBlurHandler: FocusEventHandler<HTMLInputElement> = ev =>
        ev.target.form?.requestSubmit();

    return (
        <form action="#" onSubmit={formSubmitHandler}>
            <Card component="div">
                <Checkbox
                    checked={todo.completed}
                    onChange={formInputChangeHandler("checkbox")}
                />
                <Textbox
                    text={todo.text}
                    onChange={formInputChangeHandler("text")}
                    onBlur={textboxBlurHandler}
                />
            </Card>
        </form>
    );
};

export default TodoForm;
