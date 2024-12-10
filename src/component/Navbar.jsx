"use client"
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'

export default function Navbar() {
    let [search, setSearch] = useState("")
    let [q, setQ] = useState("All")
    let [language, setLanguage] = useState("hi")
    let router = useRouter()

    let searchParams = useSearchParams()

    function postSearch(e) {
        e.preventDefault()
        router.push(`/?q=${search}&language=${language ?? "hi"}`)
    }

    useEffect(() => {
        setQ(searchParams.get("q") ?? "All")
        setLanguage(searchParams.get("language") ?? "hi")
    })
    return (
        <>
            <nav className="navbar navbar-expand-lg background fixed-top">
                <div className="container-fluid">
                    <Link className="navbar-brand text-light" href={`/?${language ? 'language=' + language : ''}`}>News</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link text-light active" aria-current="page" href={`/?${language ? 'language=' + language : ''}`}>All</Link>
                            </li>
                            <li className="nav-item"><Link className="nav-link text-light" href={`/?q=Politics${language ? '&language=' + language : ''}`}>Politics</Link></li>
                            <li className="nav-item"><Link className="nav-link text-light" href={`/?q=Crime${language ? '&language=' + language : ''}`}>Crime</Link></li>
                            <li className="nav-item"><Link className="nav-link text-light" href={`/?q=Education${language ? '&language=' + language : ''}`}>Education</Link></li>
                            <li className="nav-item"><Link className="nav-link text-light" href={`/?q=Sports${language ? '&language=' + language : ''}`}>Sports</Link></li>
                            <li className="nav-item"><Link className="nav-link text-light" href={`/?q=Cricket${language ? '&language=' + language : ''}`}>Cricket</Link></li>
                            <li className="nav-item"><Link className="nav-link text-light" href={`/?q=Election${language ? '&language=' + language : ''}`}>Election</Link></li>
                            <li className="nav-item"><Link className="nav-link text-light" href={`/?q=Stock${language ? '&language=' + language : ''}`}>Stock</Link></li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle text-light" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Other
                                </a>
                                <ul className="dropdown-menu">
                                    <li><Link className="dropdown-item" href={`/?q=Economics${language ? '&language=' + language : ''}`}>Economics</Link></li>
                                    <li><Link className="dropdown-item" href={`/?q=Science${language ? '&language=' + language : ''}`}>Science</Link></li>
                                    <li><Link className="dropdown-item" href={`/?q=Technology${language ? '&language=' + language : ''}`}>Technology</Link></li>
                                    <li><Link className="dropdown-item" href={`/?q=Entertainment${language ? '&language=' + language : ''}`}>Entertainment</Link></li>
                                    <li><Link className="dropdown-item" href={`/?q=World${language ? '&language=' + language : ''}`}>World</Link></li>
                                    <li><Link className="dropdown-item" href={`/?q=India${language ? '&language=' + language : ''}`}>India</Link></li>
                                </ul>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle text-light" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Language
                                </a>
                                <ul className="dropdown-menu">
                                    <li><Link className="dropdown-item" href={q ? "?q=" + q + "&language=hi" : "?language=hi"}>Hindi</Link></li>
                                    <li><Link className="dropdown-item" href={q ? "?q=" + q + "&language=en" : "?language=en"}>English</Link></li>
                                </ul>
                            </li>
                        </ul>
                        <form className="d-flex" role="search" onSubmit={postSearch}>
                            <input className="form-control me-2" name='search' type="search" onChange={(e) => setSearch(e.target.value)} placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-light" type="submit" >Search</button>
                        </form>
                    </div>
                </div>
            </nav>
            <div style={{ height: 50 }}></div>
        </>
    )
}
