import { ChangeEventHandler } from "react";

type CheckboxProps = {
    checked: boolean;
    onChange: ChangeEventHandler<HTMLInputElement>;
};

function Checkbox({ onChange, checked }: CheckboxProps) {
    return (
        <label className="relative aspect-square w-6">
            <input
                type="checkbox"
                className="peer sr-only"
                onChange={onChange}
                checked={checked}
            />
            <span className="absolute inset-0 rounded-full border-2 hover:border-check-startColor peer-checked:border-0 peer-checked:bg-gradient-to-r peer-checked:from-check-startColor peer-checked:to-check-endColor peer-checked:after:absolute peer-checked:after:left-1/2 peer-checked:after:top-1/2 peer-checked:after:h-3.5 peer-checked:after:w-1.5 peer-checked:after:-translate-x-1/2 peer-checked:after:-translate-y-1/2 peer-checked:after:rotate-45 peer-checked:after:border-0 peer-checked:after:border-b-[3px] peer-checked:after:border-r-[3px] peer-checked:after:border-white"></span>
        </label>
    );
}

export default Checkbox;
