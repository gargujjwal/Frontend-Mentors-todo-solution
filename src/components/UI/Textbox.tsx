import { ChangeEventHandler, FocusEventHandler } from "react";

type TextboxProps = {
    text: string;
    onChange: ChangeEventHandler<HTMLInputElement>;
    onBlur?: FocusEventHandler<HTMLInputElement>;
    id?: string;
};

const Textbox = ({ text, onChange, id, onBlur }: TextboxProps) => {
    return (
        <label htmlFor="new-todo" className="grow">
            <input
                type="text"
                className="w-full bg-transparent p-2 text-lightGrayishBlue placeholder:font-bold placeholder:tracking-tight placeholder:text-lightGrayishBlue focus:outline-none"
                placeholder="Create a new todo..."
                id={id}
                value={text}
                onChange={onChange}
                onBlur={onBlur}
            />
        </label>
    );
};

export default Textbox;
