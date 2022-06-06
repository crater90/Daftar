import React from 'react'

import Select from 'react-select'
import Link from 'next/link'

function SearchBox() {

    const options = [
        { value: 'newDelhi', label: 'New Delhi' },
        { value: 'lucknow', label: 'Lucknow' },
        { value: 'pune', label: 'Pune' },
        { value: 'mumbai', label: 'Mumbai' },
        { value: 'noida', label: 'Noida' },
        { value: 'bangalore', label: 'Bangalore' },
        { value: 'chennai', label: 'Chennai' },
        { value: 'hyderabad', label: 'Hyderabad' },
        { value: 'indore', label: 'Indore' },
    ]

    const customOptionLabel = ({ value, label }) => {
        return (
            <Link href={{ pathname: '/[cities]', query: { cities: `${value}` } }}><a>{label}</a></Link>
        )
    };

    return (
        <div>
            <Select options={options} formatOptionLabel={customOptionLabel} placeholder='Select a city...' maxMenuHeight={200} />
        </div>
    )
}

export default SearchBox