"use client";
import { BASE_URL_ASTRONAUTS } from '@/apiConfig';
import { useState, useEffect } from 'react';

export type Astronaut = {
    id: string,
    name: string,
    surname: string,
    birthDate: string,
    superpower: string
}

const useAstronauts = () => {
    const [astronauts, setAstronauts] = useState<Astronaut[]>([]);
    const [isLoadingAstronauts, setIsLoadingAstronauts] = useState(false);
    const [errorAstronauts, setErrorAstronauts] = useState(false);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        setIsLoadingAstronauts(true);
        const response = await fetch(BASE_URL_ASTRONAUTS);
        if (response.status !== 200) {
            setIsLoadingAstronauts(false);
            setErrorAstronauts(true);
            return;
        }
        const data: Astronaut[] = await response.json();
        setAstronauts(data);
        setIsLoadingAstronauts(false);
    };

    const refresh = () => {
        fetchData();
    }

    return { astronauts, isLoadingAstronauts, errorAstronauts, refresh };
};

export default useAstronauts;