"use client";
import { FC, ReactNode } from "react";

type Props = {
    children: ReactNode;
};

const ContainerMain: FC<Props> = ({ children }) => {
    return (
        <div className="flex flex-col justify-center my-12 w-11/12 lg:w-2/3 mx-auto">
            {children}
        </div>
    );
};
export default ContainerMain;