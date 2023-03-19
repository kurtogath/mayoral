import cls from 'classnames';
import Image from 'next/image';
import React from 'react';
import { Article } from '../../types';
import { numeric, percentage } from '../../utils';

const Card: React.FC<Article> = ({
    name,
    price,
    oldPrice,
    discount,
    colours,
    src,
}): JSX.Element => {
    return (
        <div className='flex  flex-col items-center justify-center rounded-md bg-white p-1 shadow shadow-blue-400 drop-shadow-lg'>
            <Image
                src={src}
                alt={name}
                width={200}
                height={300}
                className='image-article mb-3'
                priority
            />
            <p className='mb-2 w-full truncate px-5 text-center font-semibold text-gray-800'>
                {name}
            </p>
            <p className='mb-2 text-lg text-gray-400 line-through'>
                {numeric(oldPrice)}
            </p>
            <p
                className={cls('mb-2 text-lg text-gray-700', {
                    ['text-red-500']: discount,
                })}
            >
                {numeric(price)}
                <span>{percentage(discount)}</span>
            </p>
            <button className='bg-indigo-500 py-2 px-4  text-white hover:bg-indigo-600'>
                AÑADIR
            </button>
        </div>
    );
};

export default Card;
