"use client";

import React, { FC, useEffect, useState } from "react";
import { errorToast, successToast } from "@/app/utils/toasts";
import BigModalTemplate from "./BigModalTemplate";
import FormNewAstronaut from "../forms/FormNewAstronaut";

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
                <BigModalTemplate
                    modalTitle="Create new astronaut"
                    onSuccess={setSuccess}
                    onError={setError}
                    onClose={onClose}
                >
                    {<FormNewAstronaut onSuccess={setSuccess} onError={setError} />}
                </BigModalTemplate>
            ) : null}
        </>
    );
}

export default AddNewAstronautModal;