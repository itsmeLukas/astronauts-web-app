"use client";

import React, { FC, useEffect, useState } from "react";
import { errorToast, successToast } from "@/app/utils/toasts";
import BigModalTemplate from "./BigModalTemplate";
import { Astronaut } from "@/app/hooks/useAstronauts";
import FormEditAstronaut from "../forms/FormEditAstronaut";

type Props = {
    astronaut: Astronaut | undefined,
    isOpen: boolean,
    onClose: () => void,
    onEdited: () => void
};

const EditAstronautModal: FC<Props> = ({ astronaut, isOpen, onClose, onEdited }) => {
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState(false);

    useEffect(() => {
        if (success) {
            successToast("Astronaut edited");
            onEdited();
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
                <BigModalTemplate
                    modalTitle="Edit astronaut"
                    onSuccess={setSuccess}
                    onError={setError}
                    onClose={onClose}
                >
                    {<FormEditAstronaut astronaut={astronaut} onSuccess={setSuccess} onError={setError} />}
                </BigModalTemplate>
            ) : null}
        </>
    );
}

export default EditAstronautModal;