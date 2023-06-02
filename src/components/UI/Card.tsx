import { ReactNode } from "react";

type CardProps = {
    component: "div" | "li";
    children: ReactNode[] | ReactNode;
    className?: string;
};

function Card({ component, children, className }: CardProps) {
    const classes = `flex items-center gap-2 rounded-lg bg-veryLightGray px-5 py-3 ${className}`;
    return component === "div" ? (
        <div className={classes}>{children}</div>
    ) : (
        <li className={classes}>{children}</li>
    );
}

export default Card;
