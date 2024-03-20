"use client";

import { useState } from "react";
import { BASE_URL_ASTRONAUTS } from "@/apiConfig";
import { FormAstronautData } from "../components/forms/AstronautFormTemplate";

const useCreateNewAstronaut = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(false);
    const [success, setSuccess] = useState(false);

    const fetchData = async (formData: FormAstronautData) => {
        console.log("formData", formData);
        setIsLoading(true);
        const response = await fetch(BASE_URL_ASTRONAUTS,
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            }
        );
        if (response.status !== 201) {
            setIsLoading(false);
            setError(true);
            return;
        }
        setIsLoading(false);
        setSuccess(true);
    };
    return { isLoading, error, success, fetchData };
};
export default useCreateNewAstronaut;