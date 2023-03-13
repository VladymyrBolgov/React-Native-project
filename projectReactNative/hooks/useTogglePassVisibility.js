import { useState } from 'react';

const useTogglePassVisibility = () => {
    const [passwordVisibility, setPasswordVisibility] = useState(true);
    const [variable, setVariable] = useState('Показать');

    const handlePasswordVisibility = () => {
        if (variable === 'Показать') {
            setVariable('Скрыть');
            setPasswordVisibility(!passwordVisibility);
        } else if (variable === 'Скрыть') {
            setVariable('Показать');
            setPasswordVisibility(!passwordVisibility);
        }
    };
    return {
        passwordVisibility,
        variable,
        handlePasswordVisibility
    };
};

export default useTogglePassVisibility;