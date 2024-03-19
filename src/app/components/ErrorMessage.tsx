"use client";
import React, { FC } from 'react';

type Props = {
    message: string
}

const ErrorMessage: FC<Props> = ({ message }) => {
    return (
        <div className="flex items-start justify-center content-center">
            <div className="error bg-red-500 p-4 rounded-md">
                <h2 className="text-white text-xl font-bold mb-2">Error</h2>
                <p className="text-white">{message}</p>
            </div>
        </div>
    );
};

export default ErrorMessage;