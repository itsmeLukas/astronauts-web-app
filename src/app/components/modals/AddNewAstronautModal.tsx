"use client";
import React, { FC, useEffect, useState } from "react";
import FormNewAstronaut from "../FormNewAstronaut";
import { errorToast, successToast } from "@/app/utils/toasts";

type Props = {
    isOpen: boolean,
    onClose: () => void,
    onCreated: () => void
};

const AddNewAstronautModal: FC<Props> = ({ isOpen, onClose, onCreated }) => {
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState(false);

    useEffect(() => {
        if (success) {
            successToast("Astronaut created");
            onCreated();
            onClose();
            return;
        }
        if (error) {
            errorToast("Something went wrong");
            onClose();
            return;
        }
    }, [success, error]);

    return (
        <>
            {isOpen ? (
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
                                        Create new astronaut
                                    </h3>
                                    <button
                                        className="p-1 ml-auto border-0 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                                        onClick={onClose}
                                    >
                                        <span className="text-indigo-500 h-6 w-6 text-2xl block outline-none focus:outline-none">
                                            ×
                                        </span>
                                    </button>
                                </div>
                                {/*body*/}
                                <div className="relative p-6 flex-auto">
                                    <FormNewAstronaut onSuccess={setSuccess} onError={setError} />
                                </div>
                                {/*footer*/}
                                <div className="flex items-center justify-end p-6 border-t border-solid border-indigo-500 rounded-b">
                                    <button
                                        className="text-indigo-500 hover:text-white hover:bg-indigo-500 border border-indigo-500 rounded-2xl p-2 outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                        type="button"
                                        onClick={onClose}
                                    >
                                        Close
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                </>
            ) : null}
        </>
    );
}

export default AddNewAstronautModal;