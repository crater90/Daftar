import React from 'react'

import Select from 'react-select'

function SearchBox({ onChange }) {

    const secondaryOptions = [
        { value: 'new-delhi', label: 'New Delhi' },
        { value: 'visakhapatnam', label: 'Visakhapatnam' },
        { value: 'jodhpur', label: 'Jodhpur' },
        { value: 'mumbai', label: 'Mumbai' },
        { value: 'noida', label: 'Noida' },
        { value: 'bangalore', label: 'Bangalore' },
        { value: 'chennai', label: 'Chennai' },
        { value: 'hyderabad', label: 'Hyderabad' },
        { value: 'indore', label: 'Indore' },
        { value: 'kanpur', label: 'Kanpur' },
        { value: 'allahabad', label: 'Allahabad' },
        { value: 'jamshedpur', label: 'Jamshedpur' },
        { value: 'nashik', label: 'Nashik' },
        { value: 'bir', label: 'Bir' },
        { value: 'mysore', label: 'Mysore' },
        { value: 'vijaywada', label: 'Vijaywada' },
        { value: 'mangalore', label: 'Mangalore' },
        { value: 'guwahati', label: 'Guwahati' },
        { value: 'lucknow', label: 'Lucknow' },
        { value: 'dehradun', label: 'Dehradun' },
        { value: 'nagpur', label: 'Nagpur' },
        { value: 'coimbatore', label: 'Coimbatore' },
        { value: 'bhopal', label: 'Bhopal' },
        { value: 'bhubaneswar', label: 'Bhubaneswar' },
        { value: 'trivandrum', label: 'Trivandrum' },
        { value: 'udaipur', label: 'Udaipur' },
        { value: 'dharmshala', label: 'Dharmshala' },
        { value: 'ranchi', label: 'Ranchi' },
        { value: 'raipur', label: 'Raipur' },
        { value: 'patna', label: 'Patna' },
        { value: 'cochin', label: 'Cochin' },
        { value: 'jabalpur', label: 'Jabalpur' },
        { value: 'pondicherry', label: 'Pondicherry' },
        { value: 'agra', label: 'Agra' },
        { value: 'jammu', label: 'Jammu' },
        { value: 'kota', label: 'Kota' },
        { value: 'meerut', label: 'Meerut' },
        { value: 'goa', label: 'Goa' },
        { value: 'ahmedabad', label: 'Ahmedabad' },
        { value: 'vadodara', label: 'Vadodara' },
        { value: 'surat', label: 'Surat' },
        { value: 'chandigarh', label: 'Chandigarh' },
        { value: 'gurgaon', label: 'Gurgaon' },
        { value: 'pune', label: 'Pune' },
        { value: 'faridabad', label: 'Faridabad' },
        { value: 'kolkata', label: 'Kolkata' },
        { value: 'jaipur', label: 'Jaipur' },
    ]
    // const customOptionLabel = ({ value, label }) => {
    //     return (
    //         <Link href={{ pathname: '/[cities]', query: { cities: `${value}` } }}><a>{label}</a></Link>
    //     )
    // };

    return (
        <div>
            <Select className='font-Roboto' options={secondaryOptions} onChange={onChange} placeholder='Select a city...' maxMenuHeight={200} />
        </div>
    )
}

export default SearchBox