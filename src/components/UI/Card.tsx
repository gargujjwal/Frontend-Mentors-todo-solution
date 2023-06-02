import { DraggableAttributes } from "@dnd-kit/core";
import { SyntheticListenerMap } from "@dnd-kit/core/dist/hooks/utilities";
import { CSSProperties, LegacyRef, ReactNode } from "react";

type CardProps = {
    component: "div" | "li";
    children: ReactNode[] | ReactNode;
    className?: string;
    style?: CSSProperties;
    listeners?: SyntheticListenerMap;
    attributes?: DraggableAttributes;
    ref?: LegacyRef<HTMLDivElement>;
};

function Card({
    component,
    children,
    className,
    style,
    listeners,
    attributes,
    ref,
}: CardProps) {
    const classes = `flex items-center gap-2 rounded-lg bg-veryLightGray px-5 py-3 ${className}`;
    return component === "div" ? (
        <div
            className={classes}
            style={style}
            ref={ref}
            {...listeners}
            {...attributes}
        >
            {children}
        </div>
    ) : (
        <li className={classes}>{children}</li>
    );
}

export default Card;
