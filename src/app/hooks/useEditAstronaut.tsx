"use client";

import { useState } from "react";
import { BASE_URL_ASTRONAUTS } from "@/apiConfig";
import { FormAstronautData } from "../components/forms/AstronautFormTemplate";

const useEditAstronaut = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(false);
    const [success, setSuccess] = useState(false);


    const fetchData = async (formData: FormAstronautData, astronautId: string | undefined) => {
        setIsLoading(true);
        const newFormData = {
            ...formData,
            id: astronautId
        };
        const response = await fetch(`${BASE_URL_ASTRONAUTS}/${astronautId}`,
            {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(newFormData)
            }
        );
        if (response.status !== 204) {
            setIsLoading(false);
            setError(true);
            return;
        }
        setIsLoading(false);
        setSuccess(true);
    };
    return { isLoading, error, success, fetchData };
};
export default useEditAstronaut;