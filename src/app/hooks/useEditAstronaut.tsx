"use client";

import { useState } from "react";
import { BASE_URL_ASTRONAUTS } from "@/apiConfig";
import { FormEditAnimalData } from "../components/FormEditAnimal";

const useEditAstronaut = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(false);
    const [success, setSuccess] = useState(false);


    const fetchData = async (formData: FormEditAnimalData, astronautId: string) => {
        setIsLoading(true);
        const response = await fetch(`${BASE_URL_ASTRONAUTS}/${astronautId}`,
            {
                method: 'PATCH',
                body: JSON.stringify(formData)
            }
        );
        if (response.status !== 200) {
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