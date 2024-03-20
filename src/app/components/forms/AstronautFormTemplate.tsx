"use client"
import React, { FC, use, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import PrimaryButton from '../buttons/PrimaryButton';
import { Astronaut } from '@/app/hooks/useAstronauts';
import { formatDateToYYYYMMDD } from '@/app/utils/stringUtils';

export type FormAstronautData = {
    id?: string,
    name: string,
    surname: string,
    birthDate: string,
    superpower: string
}

type Props = {
    fetchData: (formData: FormAstronautData, astronautId?: string | undefined) => void,
    buttonText: string,
    astronaut?: Astronaut
};

const regex = /^[a-zA-ZáÁčČďĎěĚéÉíÍňŇóÓřŘšŠťŤúÚůŮýÝžŽ -.]+$/;

const AstronautFormTemplate: FC<Props> = ({ fetchData, buttonText, astronaut }) => {
    const { register, setValue, handleSubmit, formState: { errors } } = useForm<FormAstronautData>();

    useEffect(() => {
        if (astronaut) {
            setValue('name', astronaut.name);
            setValue('surname', astronaut.surname);
            setValue('birthDate', formatDateToYYYYMMDD(astronaut.birthDate));
            setValue('superpower', astronaut.superpower);
        }
    }, [astronaut]);

    return (
        <form onSubmit={handleSubmit((data) => fetchData(data, astronaut?.id))} className="space-y-4">
            <div>
                <label htmlFor="name" className="text-lg text-gray-700">Name</label>
                <input id="name" {...register('name',
                    {
                        required: true,
                        maxLength: 100,
                        pattern: regex,
                    })}
                    className={`w-full p-2 pr-10 border ${!errors.name ? "border-indigo-500" : "border-red-500"} rounded`} />

                {errors.name && <span className="text-red-500 text-xs">This field is required</span>}
            </div>
            <div>
                <label htmlFor="surname" className="text-lg text-gray-700">Surname</label>
                <input id="surname" {...register('surname',
                    {
                        required: true,
                        maxLength: 100,
                        pattern: regex
                    })}
                    className={`w-full p-2 pr-10 border ${!errors.surname ? "border-indigo-500" : "border-red-500"} rounded`} />

                {errors.surname && <span className="text-red-500 text-xs">This field is required</span>}
            </div>
            <div>
                <label htmlFor="birthDate" className="text-lg text-gray-700">Birth date</label>
                <input id="birthDate" type='date' {...register('birthDate',
                    {
                        required: true,
                    })}
                    className={`w-full p-2 pr-10 border ${!errors.birthDate ? "border-indigo-500" : "border-red-500"} rounded`} />

                {errors.birthDate && <span className="text-red-500 text-xs">This field is required</span>}
            </div>
            <div>
                <label htmlFor="superpower" className="text-lg text-gray-700">Superpower</label>
                <input id="superpower" {...register('superpower',
                    {
                        required: true,
                        maxLength: 100,
                        pattern: regex
                    })}
                    className={`w-full p-2 pr-10 border ${!errors.superpower ? "border-indigo-500" : "border-red-500"} rounded`} />

                {errors.superpower && <span className="text-red-500 text-xs">This field is required</span>}
            </div>
            <PrimaryButton type='submit' title={buttonText} />
        </form>
    );
};

export default AstronautFormTemplate;