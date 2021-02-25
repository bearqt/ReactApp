import React from 'react'
import TopListItem from '../TopListItem'
import './TopList.css'

interface Props {
	top: any[]
}

const TopList:React.FC <Props> = ({ top }: {top: any}) => {
	const list = top.map((item: { title: string; img: string; number: number; rating: string }) => {
		return <TopListItem title={item.title}
			img={item.img} number={item.number} rating={item.rating} />
	})
	return (
		<div className="top-list">
			{list}
		</div>
	)
}

export default TopList