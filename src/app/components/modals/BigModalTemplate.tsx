"use client";

import { FC } from "react";
import SecondaryButton from "../buttons/SecondaryButton";
import ThirdButtonCloseX from "../buttons/ThirdButtonCloseX";

type Props = {
    modalTitle: string,
    onSuccess: (value: boolean) => void,
    onError: (value: boolean) => void,
    onClose: () => void,
    children: React.ReactNode
};

const BigModalTemplate: FC<Props> = ({ modalTitle, onClose, children }) => {
    return (
        <>
            <div
                className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
            >
                <div className="relative w-96 h-96 my-6 mx-auto">
                    {/*content*/}
                    <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                        {/*header*/}
                        <div className="flex items-start justify-between p-5 border-b border-solid border-indigo-500 rounded-t">
                            <h3 className="text-2xl font-semibold">
                                {modalTitle}
                            </h3>
                            <ThirdButtonCloseX title="×" onClick={onClose} type="button" />
                        </div>
                        {/*body*/}
                        <div className="relative p-6 flex-auto">
                            {children}
                        </div>
                        {/*footer*/}
                        <div className="flex items-center justify-end p-6 border-t border-solid border-indigo-500 rounded-b">
                            <SecondaryButton title="Close" onClick={onClose} type="button" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
    )
}
export default BigModalTemplate;