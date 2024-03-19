"use client";
import React, { FC } from 'react';

type Props = {
    message: string
}

const SuccessMessage: FC<Props> = ({ message }) => {
    return (
        <div className="flex items-start justify-center">
            <div className="error bg-green-600 p-4 rounded-md">
                <h2 className="text-white text-xl font-bold mb-2">Success</h2>
                <p className="text-white">{message}</p>
            </div>
        </div>
    );
};

export default SuccessMessage;