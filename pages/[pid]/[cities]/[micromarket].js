import { useRouter } from 'next/router'
import React from 'react'

function Micromarket() {
    const router = useRouter();
    console.log(router.query);
    return (
        <div>this is my micromarket.</div>
    )
}

export default Micromarket