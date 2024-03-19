"use client";
import { FC, ReactNode } from "react";

type Props = {
    children: ReactNode;
};
const ContainerSearchAndButton: FC<Props> = ({ children }) => {
    return (
        <div className='flex flex-col sm:flex-row justify-between border border-indigo-500 rounded-lg mb-4'>
            {children}
        </div>
    );
}
export default ContainerSearchAndButton;