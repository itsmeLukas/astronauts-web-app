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
import SecondaryButton from '../components/buttons/SecondaryButton';
import { formatDateFromAPI } from "@/app/utils/stringUtils";
import EditAstronautModal from '../components/modals/EditAstronautModal';
import DeleteButton from '../components/buttons/DeleteButton';

const theadTitles = [
    "Name",
    "Surname",
    "Birth date",
    "Superpower",
    "Delete",
    "Edit"
]

const Users = () => {
    const { astronauts, isLoadingAstronauts, errorAstronauts, refresh } = useAstronauts();
    const [currentAstronaut, setCurrentAstronaut] = useState<Astronaut | undefined>(undefined);
    const [searchTerm, setSearchTerm] = useState('');
    const [isOpenAddAstronautModal, setIsOpenAddAstronautModal] = useState(false);
    const [isOpenEditAstronautModal, setIsOpenEditAstronautModal] = useState(false);
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

    const closeEditAstronautModal = () => {
        setIsOpenEditAstronautModal(false);
    };

    const closeDeleteAstronautModal = () => {
        setIsOpenDeleteAstronautModal(false);
    }

    const handleEditClick = (astronautId: string) => {
        const astronaut: Astronaut | undefined = astronauts.find((astronaut) => astronaut.id === astronautId);
        setCurrentAstronaut(astronaut);
        setIsOpenEditAstronautModal(true);
    };

    const handleDeleteClick = (astronautId: string) => {
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
                                    {theadTitles.map((title) => {
                                        return (
                                            <th key={title}
                                                scope="col"
                                                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                            >
                                                {title}
                                            </th>
                                        )
                                    })}
                                </tr>
                            </thead>
                            <tbody className="bg-white  divide-y divide-gray-100">
                                {filteredAstronauts.map((astronaut) => (
                                    <tr key={astronaut.id} className="hover:bg-gray-200">
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
                                            <DeleteButton id={astronaut.id} onClick={() => handleDeleteClick(astronaut.id)} type="button" />
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <SecondaryButton title="Edit" onClick={() => handleEditClick(astronaut.id)} type="button" />
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                        {astronauts.length === 0 && <div className='mt-24'><NoDataMessage message={'No astronauts found'} /></div>}
                        <EditAstronautModal astronaut={currentAstronaut} isOpen={isOpenEditAstronautModal} onClose={closeEditAstronautModal} onEdited={refresh} />
                        <DeleteAstronautModal astronautId={currentAstronaut?.id} isOpen={isOpenDeleteAstronautModal} onClose={closeDeleteAstronautModal} onDeleted={refresh} />
                    </div>
                </div>
            </div>
        </ContainerMain>
    );
};

export default Users;