import React from 'react';
import { Spin } from 'antd';

const LoadingPage = () => {
    return (
        <div className="flex items-center justify-center min-h-screen">
            <div className="text-center ">
                <h1 className="mt-2 text-2xl font-semibold text-gray-700">
                    Loading...
                </h1>
                <Spin className="mt-4" tip="Fetching data..." size="large" />
            </div>
        </div>
    );
};

export default LoadingPage;
