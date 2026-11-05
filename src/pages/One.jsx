import React from 'react'
import { useParams, useSearchParams } from 'react-router';

export default function One() {
    // :id - פרמטר דינמי בנתיב
    const { id } = useParams();

    // פרמטרים של חיפוש לא חובה ?
    const searchParams = useSearchParams();

    return (
        <div>One {id}</div>
    )
}
