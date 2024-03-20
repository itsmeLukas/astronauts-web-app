"use client"
import LoaderCircle from '../LoaderCircle';
import useCreateNewAstronaut from '../../hooks/useCreateNewAstronaut';
import { FC, useEffect } from 'react';
import AstronautFormTemplate from './AstronautFormTemplate';


type Props = {
    onSuccess: (value: boolean) => void
    onError: (value: boolean) => void
};

const FormNewAstronaut: FC<Props> = ({ onSuccess, onError }) => {
    const { error, isLoading, success, fetchData } = useCreateNewAstronaut();

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
            buttonText="Create Astronaut"
        />
    );
}
export default FormNewAstronaut;