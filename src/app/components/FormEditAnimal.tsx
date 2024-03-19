"use client"
import { useForm } from 'react-hook-form';
import ErrorMessage from './ErrorMessage';
import SuccessMessage from './SuccessMessage';
import LoaderCircle from './LoaderCircle';
import { FC, useEffect } from 'react';
import useEditAnimal from '../hooks/useEditAstronaut';
import { Animal } from '../hooks/useAstronauts';
import useEditAstronaut from '../hooks/useEditAstronaut';

export type FormEditAnimalData = {
    name: string,
    type: "cat" | "dog" | "other",
    age: string
}
type Props = {
    animal: Animal | undefined,
    onSuccess: (value: boolean) => void
};

const regex = /^[a-zA-ZáÁčČďĎěĚéÉíÍňŇóÓřŘšŠťŤúÚůŮýÝžŽ -.]+$/

const FormEditAnimal: FC<Props> = ({ animal, onSuccess }) => {
    const { register, handleSubmit, formState: { errors } } = useForm<FormEditAnimalData>();
    const { error, isLoading, success, fetchData } = useEditAstronaut();

    useEffect(() => {
        //console.log("Success:", success);
        if (success) {
            onSuccess(true);
        }
    }, [success]);


    if (isLoading) return <LoaderCircle />
    if (error) return <ErrorMessage message="Something went wrong" />
    if (success) return <SuccessMessage message="Animal edited" />
    return (
        <form onSubmit={handleSubmit((data) => fetchData(data, animal!.id))} className="space-y-4">
            <div>
                <label htmlFor="name" className="text-lg text-gray-700">Name</label>
                <input id="name" defaultValue={animal!.name} {...register('name',
                    {
                        required: true,
                        maxLength: 100,
                        pattern: regex
                    })}
                    className={`w-full p-2 pr-10 border ${!errors.name ? "border-indigo-500" : "border-red-500"} rounded`} />

                {errors.name && <span className="text-red-500 text-xs">This field is required</span>}
            </div>
            <div>
                <label htmlFor="type" className="text-lg text-gray-700">Type</label>
                <select id="type" defaultValue={animal!.type} {...register('type', { required: true })} className={`w-full p-2 pr-10 border ${!errors.type ? "border-indigo-500" : "border-red-500"} rounded`}>
                    <option value="">Select...</option>
                    <option value="cat">Cat</option>
                    <option value="dog">Dog</option>
                    <option value="other">Other</option>
                </select>
                {errors.type && <span className="text-red-500 text-xs">This field is required</span>}
            </div>
            <div>
                <label htmlFor="age" className="text-lg text-gray-700">Age</label>
                <input id="age" defaultValue={animal!.age} {...register('age',
                    {
                        required: true,
                        minLength: 1,
                        maxLength: 3,
                        pattern: /^[1-9][0-9]{0,2}$/
                    })}
                    className={`w-full p-2 pr-10 border ${!errors.age ? "border-indigo-500" : "border-red-500"} rounded`} />

                {errors.age && <span className="text-red-500 text-xs">This field is required, 1-999</span>}
            </div>

            <button
                className="p-2 bg-indigo-500 text-white rounded-lg hover:bg-indigo-300 shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="submit"
            >
                Edit animal
            </button>
        </form>
    );
}
export default FormEditAnimal;