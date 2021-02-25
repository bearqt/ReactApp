import React from 'react'
import NewsCard from '../NewsCard/NewsCard'
import './News.css'
import { CardColumns } from 'reactstrap'

interface Props {
    data: any[]
}

const News:React.FC<Props> = ({ data }) => {
    return (
        <CardColumns className="wrap">
            {data.map((item: any) => {
        return <NewsCard title={item.title} text={item.text} date={item.date} img={item.img} key={item.key} />
    })}
        </CardColumns>
    )
}

export default News