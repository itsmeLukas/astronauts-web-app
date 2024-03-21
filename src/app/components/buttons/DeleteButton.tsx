"use client";
import { FC } from "react";

type Props = {
    id?: string,
    onClick: () => void,
    type: "button" | "submit" | "reset"
};
const DeleteButton: FC<Props> = ({ onClick, type, id }) => {
    return (
        <button
            id={id}
            onClick={onClick}
            type={type}
            className="rounded-full p-2 text-indigo-500 hover:text-white hover:bg-indigo-500 border border-indigo-500">
            <svg xmlns="http://www.w3.org/2000/svg" id="delete" x="0" y="0" version="1.1" viewBox="0 0 29 29" className="h-6" >
                <path fill="currentColor" d="M10 3v3h9V3a1 1 0 0 0-1-1h-7a1 1 0 0 0-1 1z"></path>
                <path fill="currentColor" d="M4 5v1h21V5a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1zM6 8l1.812 17.209A2 2 0 0 0 9.801 27H19.2a2 2 0 0 0 1.989-1.791L23 8H6zm4.577 16.997a.999.999 0 0 1-1.074-.92l-1-13a1 1 0 0 1 .92-1.074.989.989 0 0 1 1.074.920l1 13a1 1 0 0 1-.92 1.074zM15.5 24a1 1 0 0 1-2 0V11a1 1 0 0 1 2 0v13zm3.997.077a.999.999 0 1 1-1.994-.154l1-13a.985.985 0 0 1 1.074-.92 1 1 0 0 1 .92 1.074l-1 13z"></path>
            </svg>
        </button>
    );
}
export default DeleteButton;