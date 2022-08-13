import React, { useState, useEffect } from "react";
import { useRouter } from 'next/router';
import { Jelly } from "@uiball/loaders";

function Loading() {
    const router = useRouter();

    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const handleStart = (url) => (url !== router.asPath) && setLoading(true);
        const handleComplete = (url) => (url === router.asPath) && setLoading(false);

        router.events.on('routeChangeStart', handleStart)
        router.events.on('routeChangeComplete', handleComplete)
        router.events.on('routeChangeError', handleComplete)

        return () => {
            router.events.off('routeChangeStart', handleStart)
            router.events.off('routeChangeComplete', handleComplete)
            router.events.off('routeChangeError', handleComplete)
        }
    })

    return loading && (
        <div className='w-screen h-screen flex items-center justify-center fixed text-xl top-0 left-0 bg-white z-40'>
            <Jelly size={50} color='#6b7280' />
        </div>
    );
}

export default Loading