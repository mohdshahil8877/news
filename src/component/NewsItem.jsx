import Link from 'next/link'
import React from 'react'

export default function NewsItem(props) {
    return (
        <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6">
            <div className="card">
                <img src={props.pic??"/images/noimage.jpeg"} height={200} width="100%" className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{props.title}</h5>
                    <div className='source-date'>
                        <p>{props.source}</p>
                        {/* <p>{new Date(props.date).toLocaleDateString()}</p> */}
                    </div>
                    <p className="card-text">{props.description}</p>
                    <Link href={props.url} target='_blank' rel='noreferrer' className="btn btn-primary w-100 background">Read Full Article</Link>
                </div>
            </div>
        </div>
    )
}
