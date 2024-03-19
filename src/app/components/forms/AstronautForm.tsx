import React from 'react';
import { useForm, UseFormRegister, UseFormRegisterReturn } from 'react-hook-form';
import PrimaryButton from '../buttons/PrimaryButton';
import { FormAstronautData } from '../FormNewAstronaut';

type Props = {
    fetchData: (formData: FormAstronautData) => void
};

const regex = /^[a-zA-ZáÁčČďĎěĚéÉíÍňŇóÓřŘšŠťŤúÚůŮýÝžŽ -.]+$/;

const AstronautForm: React.FC<Props> = ({ fetchData }) => {
    const { register, handleSubmit, formState: { errors } } = useForm<FormAstronautData>();

    return (
        <form onSubmit={handleSubmit((data) => fetchData(data))} className="space-y-4">
            <div>
                <label htmlFor="name" className="text-lg text-gray-700">Name</label>
                <input id="name" {...register('name',
                    {
                        required: true,
                        maxLength: 100,
                        pattern: regex
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
            <PrimaryButton type='submit' title="Create astronaut" />
        </form>
    );
};

export default AstronautForm;