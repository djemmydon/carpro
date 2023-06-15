"use client"

import { useRouter } from "next/navigation";
import { useState } from "react";
import styles from "../styles/navbar.module.css";


function Search() {
    const router = useRouter()

    const [searchQuery, setSearchQuery] = useState("")
    const OnSearch = (e) => {
        e.preventDefault()
        
        const encodedSearch = encodeURI(searchQuery)
        router.push(`/search?q=${encodedSearch}`)
    }
    return (
        <form action=""
        onSubmit={OnSearch}
            className={styles.searchBody} >
            <input
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className={styles.search}
                type="text"
                placeholder="Search for Cars" />
            <button type="submit">Search</button>
    </form>
    )
}
export default Search