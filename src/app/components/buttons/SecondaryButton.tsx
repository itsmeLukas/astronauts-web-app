"use client";
import { FC } from "react";

type Props = {
    title: string,
    id?: string,
    onClick: () => void,
    type: "button" | "submit" | "reset"
};
const SecondaryButton: FC<Props> = ({ title, onClick, type, id }) => {
    return (
        <button
            className="text-indigo-500 hover:text-white hover:bg-indigo-500 border border-indigo-500 rounded-2xl p-2 outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
            type={type}
            onClick={onClick}
            id={id}
        >
            {title}
        </button>
    );
}
export default SecondaryButton;