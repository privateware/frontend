import React from "react";
import "./Button.scss";

interface Props {
    onClick?: () => void;
    children: React.ReactNode | string;
    primary?: boolean;
}

export const Button: React.FC<Props> = (props) => {
    return (
        <button type="button" className={props.primary ? "secondary" : "primary"} onClick={props.onClick}>
            {props.children}
        </button>
    );
};

export default Button;
