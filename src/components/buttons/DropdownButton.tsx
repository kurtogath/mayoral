import React, { useState } from 'react';
import { SortOrder } from '../../types';

interface Props {
    onPriceSort: (sortType: SortOrder) => void;
}

const DropdownButton: React.FC<Props> = ({ onPriceSort }) => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [order, setOrder] = useState<SortOrder>('asc');

    const handleSortOptionClick = (sortType: SortOrder) => {
        onPriceSort(sortType);
        setIsOpen(false);
        setOrder(sortType);
    };

    return (
        <div className='dropdown'>
            <button
                className='dropdown__button'
                onClick={() => setIsOpen(!isOpen)}
                aria-haspopup='true'
                aria-expanded={isOpen ? 'true' : 'false'}
            >
                {`${
                    order === 'desc'
                        ? 'Precio descendente'
                        : 'Precio ascendente'
                }`}
                <span className='dropdown__arrow'>&#9662;</span>
            </button>
            {isOpen && (
                <ul className='dropdown__list'>
                    <li>
                        <button
                            className='dropdown__item'
                            onClick={() => handleSortOptionClick('asc')}
                        >
                            Precio ascendente
                        </button>
                    </li>
                    <li>
                        <button
                            className='dropdown__item'
                            onClick={() => handleSortOptionClick('desc')}
                        >
                            Precio descendente
                        </button>
                    </li>
                </ul>
            )}
        </div>
    );
};

export default DropdownButton;
