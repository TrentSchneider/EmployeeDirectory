import React, { useEffect, useState } from 'react';
import axios from "axios";
import APP_ID from "./APPID"

const BASE_URL = 'https://dummyapi.io/data/api';

const API = () => {
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState(null);

    useEffect(() => {
        setLoading(true);
        axios.get(`${BASE_URL}/user`, { headers: { 'app-id': APP_ID } })
            .then(({ data }) => setData(data))
            .catch(console.error)
            .finally(() => setLoading(false));
    }, []);

    return (
        <div>
           {loading && "Loading..."}
           {JSON.stringify(data)}
        </div>
    );
};

export { API };
