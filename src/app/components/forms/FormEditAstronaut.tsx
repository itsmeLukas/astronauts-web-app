"use client"
import LoaderCircle from '../LoaderCircle';
import { FC, useEffect } from 'react';
import AstronautFormTemplate from './AstronautFormTemplate';
import useEditAstronaut from '@/app/hooks/useEditAstronaut';
import { Astronaut } from '@/app/hooks/useAstronauts';


type Props = {
    astronaut: Astronaut | undefined,
    onSuccess: (value: boolean) => void
    onError: (value: boolean) => void
};

const FormEditAstronaut: FC<Props> = ({ onSuccess, onError, astronaut }) => {
    const { error, isLoading, success, fetchData } = useEditAstronaut();

    useEffect(() => {
        if (success) {
            onSuccess(true);
            return;
        }
        if (error) {
            onError(true);
            return;
        }
    }, [success, error]);


    if (isLoading) return <LoaderCircle />
    return (
        <AstronautFormTemplate
            fetchData={fetchData}
            buttonText="Edit Astronaut"
            astronaut={astronaut}
        />
    );
}
export default FormEditAstronaut;