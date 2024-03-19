import React from 'react';

type Props = {
    title: string,
    onClick?: () => void,
    onClickHandleAstronautId?: (astronautId: string) => void,
    astronautId?: string,
    type: "button" | "submit" | "reset"
};

const PrimaryButton: React.FC<Props> = ({ title, onClick, onClickHandleAstronautId, astronautId, type }) => {

    const handleButtonClick = () => {
        if (onClick) {
            onClick();
            return;
        }
        if (onClickHandleAstronautId && astronautId) {
            onClickHandleAstronautId(astronautId);
        }
    };

    return (
        <button type={type} onClick={handleButtonClick} className="p-2 m-2 bg-indigo-500 text-white rounded-lg hover:bg-indigo-300">
            {title}
        </button>
    );
};

export default PrimaryButton;