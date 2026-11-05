import React from 'react'
import { Link, Outlet } from 'react-router';

export default function Products() {
    const arr = [
        { id: 1, name: 'a' },
        { id: 2, name: 'b' },
        { id: 3, name: 'c' },
        { id: 4, name: 'd' },
    ];

    return (<div>
        <ul>
            {arr.map(item => <li key={item.id}>
                {/* משרשר את טו לניתוב שכבר נמצא בו */}
                {/* כברירת מחדל מחליף את קומפוננטת רשימה בעמוד מוצר בודד */}
                <Link to={item.id + ''}>{item.name}</Link>
            </li>)}
        </ul>
        {/* יפתח כאן את כל הקומפוננטות המקוננות */}
        <Outlet />
    </div>
    )
}
