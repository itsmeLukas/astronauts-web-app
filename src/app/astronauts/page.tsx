"use client";

import React, { useState } from 'react';
import SkeletonLoaderTable from '../components/SkeletonLoaderTable';
import ErrorMessage from '../components/ErrorMessage';
import SearchBar from '../components/SearchBar';
import NoDataMessage from '../components/NoDataMessage';
import useAstronauts, { Astronaut } from '../hooks/useAstronauts';
import AddNewAstronautModal from '../components/modals/AddNewAstronautModal';
import DeleteAstronautModal from '../components/modals/DeleteAstronautModal';
import ContainerMain from '../components/containers/ContainerMain';
import ContainerSearchAndButton from '../components/containers/ContainerSearchAndButton';
import PrimaryButton from '../components/buttons/PrimaryButton';
//import EditAnimalModal from '../components/modals/EditAnimalModal';

const Users = () => {
    const { astronauts, isLoadingAstronauts, errorAstronauts, refresh } = useAstronauts();
    const [currentAstronaut, setCurrentAstronaut] = useState<Astronaut | undefined>(undefined);
    const [searchTerm, setSearchTerm] = useState('');
    const [isOpenAddAstronautModal, setIsOpenAddAstronautModal] = useState(false);
    // const [isOpenEditAnimalModal, setIsOpenEditAnimalModal] = useState(false);
    const [isOpenDeleteAstronautModal, setIsOpenDeleteAstronautModal] = useState(false);

    const filteredAstronauts = astronauts.filter((astronaut) =>
        astronaut.surname.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const handleSearchChange = (value: string) => {
        setSearchTerm(value);
    };

    const handleClearSearch = () => {
        setSearchTerm('');
    };

    const closeAddAstronautModal = () => {
        setIsOpenAddAstronautModal(false);
    };

    // const closeEditAnimalModal = () => {
    //     setIsOpenEditAnimalModal(false);
    // };

    const closeDeleteAstronautModal = () => {
        setIsOpenDeleteAstronautModal(false);
    }

    // const handleEditClick = (animalId: string) => {
    //     //console.log(userId);
    //     const animal: Animal | undefined = animals.find((animal) => animal.id === animalId);
    //     setCurrentAnimal(animal);
    //     setIsOpenEditAnimalModal(true);
    // };

    const handleDeleteClick = (astronautId: string) => {
        console.log("handleDeleteClick", astronautId);
        const astronaut: Astronaut | undefined = astronauts.find((astronaut) => astronaut.id === astronautId);
        setCurrentAstronaut(astronaut);
        setIsOpenDeleteAstronautModal(true);
    };

    if (isLoadingAstronauts) return <SkeletonLoaderTable />;
    if (errorAstronauts) return (
        <ContainerMain>
            <ErrorMessage message="Error fetching astronauts" />
        </ContainerMain>
    );

    return (
        <ContainerMain>
            <ContainerSearchAndButton>
                <SearchBar searchTerm={searchTerm} onSearchChange={handleSearchChange} onClearSearch={handleClearSearch} />
                <PrimaryButton type='button' title="Add astronaut" onClick={() => setIsOpenAddAstronautModal(true)} />
                <AddNewAstronautModal isOpen={isOpenAddAstronautModal} onClose={closeAddAstronautModal} onCreated={refresh} />
            </ContainerSearchAndButton>
            <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                    <div className="shadow-md shadow-indigo-300 overflow-hidden border-b border-gray-200 sm:rounded-lg">
                        <table className="min-w-full divide-y divide-gray-200">
                            <thead className="bg-gray-200">
                                <tr>
                                    <th
                                        scope="col"
                                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                    >
                                        Name
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                    >
                                        Surname
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                    >
                                        Birth date
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                    >
                                        Superpower
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                    >
                                        Delete
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                    >
                                        Edit
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-100">
                                {filteredAstronauts.map((astronaut) => (
                                    <tr key={astronaut.id} className="hover:bg-gray-100 transition-colors duration-200">
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <div className="text-sm text-gray-900">{astronaut.name}</div>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <div className="text-sm text-gray-500">{astronaut.surname}</div>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <div className="text-sm text-gray-500">{formatDateFromAPI(astronaut.birthDate)}</div>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <div className="text-sm text-gray-500">{astronaut.superpower}</div>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <button
                                                id={astronaut.id}
                                                onClick={(event) => handleDeleteClick(event.currentTarget.id)}
                                                className="rounded-full p-2 text-indigo-500 hover:text-white hover:bg-indigo-500 border border-indigo-500">
                                                <svg xmlns="http://www.w3.org/2000/svg" id="delete" x="0" y="0" version="1.1" viewBox="0 0 29 29" className="h-6" >
                                                    <path fill="currentColor" d="M10 3v3h9V3a1 1 0 0 0-1-1h-7a1 1 0 0 0-1 1z"></path>
                                                    <path fill="currentColor" d="M4 5v1h21V5a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1zM6 8l1.812 17.209A2 2 0 0 0 9.801 27H19.2a2 2 0 0 0 1.989-1.791L23 8H6zm4.577 16.997a.999.999 0 0 1-1.074-.92l-1-13a1 1 0 0 1 .92-1.074.989.989 0 0 1 1.074.920l1 13a1 1 0 0 1-.92 1.074zM15.5 24a1 1 0 0 1-2 0V11a1 1 0 0 1 2 0v13zm3.997.077a.999.999 0 1 1-1.994-.154l1-13a.985.985 0 0 1 1.074-.92 1 1 0 0 1 .92 1.074l-1 13z"></path>
                                                </svg>
                                            </button>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <button
                                                //id={animal.id}
                                                //onClick={(event) => handleEditClick(event.currentTarget.id)}
                                                className="text-indigo-500 hover:text-white hover:bg-indigo-500 border border-indigo-500 rounded-xl py-2 px-4">
                                                Edit
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                        {astronauts.length === 0 && <div className='mt-24'><NoDataMessage message={'No astronauts found'} /></div>}
                        {/* <EditAnimalModal animal={currentAnimal} isOpen={isOpenEditAnimalModal} onClose={closeEditAnimalModal} onEdited={refresh} /> */}
                        <DeleteAstronautModal astronautId={currentAstronaut?.id} isOpen={isOpenDeleteAstronautModal} onClose={closeDeleteAstronautModal} onDeleted={refresh} />
                    </div>
                </div>
            </div>
        </ContainerMain>
    );
};

export default Users;

function formatDateFromAPI(dateFromAPI: string): string {
    const date = new Date(dateFromAPI);
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    const formattedDate = (day < 10 ? '0' : '') + day + '.' + (month < 10 ? '0' : '') + month + '.' + year;
    return formattedDate;
}