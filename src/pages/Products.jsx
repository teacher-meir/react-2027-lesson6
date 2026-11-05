import React from 'react'

export default function Products() {
    const arr = [
        { id: 1, name: 'a' },
        { id: 2, name: 'b' },
        { id: 3, name: 'c' },
        { id: 4, name: 'd' },
    ];

    return (
        <ul>
           {arr.map(item => <li>{item}</li>)} 
        </ul>
    )
}
