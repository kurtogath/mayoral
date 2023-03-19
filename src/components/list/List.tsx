import React from 'react';
import { Data } from '../../interfaces';

import Card from '../card/Card';

interface ListProps {
    data: Data | null;
}

const List: React.FC<ListProps> = ({ data }) => {
    return (
        <div className='mt-12 grid grid-cols-2 gap-14 sm:grid-cols-2 md:grid-cols-4'>
            {data?.articles ? (
                data.articles.map((article, index) => (
                    <Card
                        key={index}
                        src={article.src}
                        name={article.name}
                        price={article.price}
                        oldPrice={article.oldPrice}
                        discount={article.discount}
                        colours={article.colours}
                    />
                ))
            ) : (
                <div />
            )}
        </div>
    );
};

export default List;
