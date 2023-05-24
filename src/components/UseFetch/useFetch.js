import React, { useEffect, useState } from 'react';

export default function useFetch(url) {
    const [data, setData] = useState(null);

    useEffect(() => {
        fetch(url)
            .then((res) => {
                return res.json();
            })
            .then((data) => {
                setData(data);
            });
    }, [url]);
    return { data };
}
