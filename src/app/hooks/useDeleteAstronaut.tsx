"use client";
import { useState } from "react";
import { BASE_URL_ASTRONAUTS } from "@/apiConfig";

const useDeleteAstronaut = () => {
    const [isDeleteLoading, setIsDeleteLoading] = useState(false);
    const [error, setError] = useState(false);
    const [success, setSuccess] = useState(false);


    const fetchData = async (astronautId: string) => {
        setIsDeleteLoading(true);
        const response = await fetch(`${BASE_URL_ASTRONAUTS}/${astronautId}`,
            {
                method: 'DELETE',
            }
        );
        if (response.status !== 204) {
            setIsDeleteLoading(false);
            setError(true);
            return;
        }
        setIsDeleteLoading(false);
        setSuccess(true);
    };

    return { isDeleteLoading, error, success, fetchData };
};
export default useDeleteAstronaut;