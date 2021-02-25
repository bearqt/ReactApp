import React from 'react'
import { Media } from 'reactstrap';
import './TopListItem.css'

interface Props {
	title: string,
	number: number, 
	rating: string, 
	img: string
}

const TopListItem:React.FC <Props> = ({ title, number, rating, img }) => {
	return (
		<Media className="media-item">
			<Media left href="#">
				<Media object src={img} alt="Generic placeholder image" className="image" />
			</Media>
			<Media body>
				<Media heading classname="movie-name">
					{number + title}
					<div className="rating">{rating}</div>
				</Media>

			</Media>
		</Media>
	)
}

export default TopListItem