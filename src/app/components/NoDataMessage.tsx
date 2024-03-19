"use client";

import { FC } from "react";

type Props = {
    message: string
}

const NoDataMessage: FC<Props> = ({ message }) => {
    return (
        <div>
            <div className="flex items-start justify-center mb-52">
                <div className="bg-gray-200 p-4 rounded-md">
                    <h2 className="text-gray-500 text-xl font-bold">{message}</h2>
                </div>
            </div>
        </div>
    );
};
export default NoDataMessage;