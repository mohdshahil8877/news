"use client"
import React from 'react'
import NewsItem from './NewsItem'
import InfiniteScroll from 'react-infinite-scroll-component';
import { useRouter } from 'next/navigation';

export default function Home({ q, articles, totalResults, page, language }) {
    let router = useRouter()
    return (
        <div className="container-fluid my-3">
            <h5 className='background text-light text-center p-2 text-capitalize'>{q} News Articles</h5>
            <InfiniteScroll
                dataLength={articles?.length} //This is important field to render the next data
                next={() => {
                    router.push(`/?q=${q}&language=${language}&page=${parseInt(page) + 1}`)
                }}
                hasMore={articles?.length < totalResults}
                loader={
                    <div className='my-5 text-center'>
                        <div className="spinner-border" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div>
                    </div>
                }
            >
                <div className="row">
                    {
                        articles?.map((item, index) => {
                            return <NewsItem
                                key={index}
                                title={item.title}
                                description={item.description}
                                source={item.source.name}
                                date={item.publishedAt}
                                url={item.url}
                                pic={item.urlToImage}
                            />
                        })
                    }
                </div>
            </InfiniteScroll>
        </div>
    )
}
