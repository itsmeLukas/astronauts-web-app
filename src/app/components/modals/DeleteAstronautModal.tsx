"use client";
import ErrorMessage from "@/app/components/ErrorMessage";
import LoaderCircle from "@/app/components/LoaderCircle";
import SuccessMessage from "@/app/components/SuccessMessage";
import useDeleteAstronaut from "@/app/hooks/useDeleteAstronaut";
import { errorToast, successToast } from "@/app/utils/toasts";
import React, { FC, useEffect } from "react";
import PrimaryButton from "../buttons/PrimaryButton";

type Props = {
    astronautId: string | undefined,
    isOpen: boolean,
    onClose: () => void,
    onDeleted: () => void
};

const DeleteAstronautModal: FC<Props> = ({ astronautId, isOpen, onClose, onDeleted }) => {
    const { isDeleteLoading, error, success, fetchData } = useDeleteAstronaut();

    useEffect(() => {
        if (success) {
            successToast("Astronaut was deleted");
            onDeleted();
            onClose();
            return;
        }
        if (error) {
            errorToast("Error deleting astronaut");
            onClose();
            return;
        }
    }, [success]);

    return (
        <>
            {isOpen ? (
                <>
                    <div
                        className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
                    >
                        <div className="relative w-auto my-6 mx-auto max-w-3xl">
                            {/*content*/}
                            <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                                {/*header*/}
                                <div className="flex items-start justify-between p-5 border-b border-solid border-indigo-500 rounded-t">
                                    <h3 className="text-2xl font-semibold">
                                        Delete Astronaut
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
                                <div className="relative p-6 flex-auto text-lg">
                                    {isDeleteLoading && <LoaderCircle />}
                                    {(!isDeleteLoading && !error && !success) && <p>Are you sure you want to delete this astronaut?</p>}
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
                                    {(!success && !error && !isDeleteLoading) &&
                                        (<PrimaryButton
                                            title="Delete"
                                            type="button"
                                            onClickHandleAstronautId={fetchData}
                                            astronautId={astronautId}
                                        />)}
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

export default DeleteAstronautModal;

