import React, { useState } from 'react';

interface ArrayProps {
    value: number;
    name: string;

}

interface SelectBoxProps {
    patternList: Array<ArrayProps>;
    onselectInputChange: (value: any) => void;
}

const SelectBox: React.FC<SelectBoxProps> = ({ patternList, onselectInputChange }) => {

    const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const selectedValue = parseInt(event.target.value, 10);
        onselectInputChange(selectedValue);
    };
    return (
        <>
            <select onChange={handleSelectChange}>
                {patternList &&
                    patternList.map((item) => (
                        <option key={item.value} value={item.value}>
                            {item.name}
                        </option>
                    ))}
            </select>
        </>
    );
};

export default SelectBox;
