import Head from 'next/head';
import { useEffect, useState } from 'react';
import DropdownButton from '../src/components/buttons/DropdownButton';
import List from '../src/components/list/List';
import jsonData from '../src/data/mayoral.json';
import { Data } from '../src/interfaces';
import { SortOrder } from '../src/types';

const Home = (): JSX.Element => {
    const [data, setData] = useState<Data | null>(null);
    const [dataShown, setDataShown] = useState<Data | null>(null);
    const [searchTerm, setSearchTerm] = useState('');
    const [sortOrder, setSortOrder] = useState<SortOrder>('asc');

    useEffect(() => {
        if (jsonData) {
            setData(jsonData);
            setDataShown(jsonData);
        }
    }, []);

    useEffect(() => {
        //Filter data by podcast name and author
        const filterData = () => {
            let filtered: Data =
                {
                    articles:
                        data?.articles?.filter((el) =>
                            el.name
                                .toLowerCase()
                                .includes(searchTerm.toLowerCase())
                        ) || null,
                } || null;

            let sortedList: Data =
                {
                    articles:
                        filtered?.articles?.sort((a, b) =>
                            sortOrder === 'asc'
                                ? a.price - b.price
                                : b.price - a.price
                        ) || null,
                } || null;

            setDataShown(sortedList);
        };

        filterData();
    }, [searchTerm, data, sortOrder]);

    const renderSearcher = () => {
        return (
            <>
                <div className='flex flex-row justify-end py-5'>
                    <DropdownButton onPriceSort={(res) => setSortOrder(res)} />
                    <div className='flex w-1/2 items-center justify-end '>
                        <label className='w-10' htmlFor='article-searcher' />
                        <input
                            className='ml-2 w-3/5 rounded border border-gray-400 py-2 px-4'
                            id='article-searcher'
                            type='text'
                            value={searchTerm}
                            placeholder='Filtrar articulos...'
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                    </div>
                </div>
            </>
        );
    };

    return (
        <>
            <Head>
                <title>Mayoral</title>
                <meta
                    name='viewport'
                    content='width=device-width, initial-scale=1'
                />
                <link rel='icon' href='/favicon.ico' />
            </Head>
            <main>
                <div className='container mx-auto px-4'>
                    {renderSearcher()}
                    <List data={dataShown} />
                </div>
            </main>
        </>
    );
};

export default Home;
