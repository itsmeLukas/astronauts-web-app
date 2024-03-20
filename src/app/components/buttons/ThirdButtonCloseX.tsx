"use client"
import { FC } from "react";

type Props = {
    title: string,
    onClick: () => void,
    type: "button" | "submit" | "reset"
};
const ThirdButtonCloseX: FC<Props> = ({ title, onClick, type }) => {
    return (
        <button
            className="p-1 ml-auto border-0 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
            type={type}
            onClick={onClick}
        >
            <span className="text-indigo-500 h-6 w-6 text-2xl block outline-none focus:outline-none">
                {title}
            </span>
        </button>
    );
}
export default ThirdButtonCloseX;