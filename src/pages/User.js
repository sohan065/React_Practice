import React from 'react';
import { useSearchParams } from 'react-router-dom';

export default function User() {
    const [searchParam, setSearchParam] = useSearchParams();

    return <div>{searchParam.get('id')}</div>;
}
