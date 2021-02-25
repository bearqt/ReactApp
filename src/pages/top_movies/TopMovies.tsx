import React from 'react'
import Header from '../../Components/Header'
import TopList from './Components/TopList'
const top: {title: string, actors: string, number: string, rating: number, img: string}[] = [
	{ title: "Iron man", actors: "Robert Downey Jr., Gwyneth Paltrow, Terrence Howard", number: "1) ", rating: 8.5, img: "https://m.media-amazon.com/images/M/MV5BMTczNTI2ODUwOF5BMl5BanBnXkFtZTcwMTU0NTIzMw@@._V1_UX182_CR0,0,182,268_AL_.jpg" },
	{ title: "Avengers: Infinity War", actors: "Robert Downey Jr., Chris Hemsworth, Mark Ruffalo", number: "2) ", rating: 8.4, img: "https://avatars.mds.yandex.net/get-kinopoisk-image/1773646/af92d310-4ae5-4daa-b42c-5bcc380c2e6e/300x450" },
	{ title: "Iron man 2", actors: "Robert Downey Jr., Gwyneth Paltrow, Terrence Howard", number: "3) ", rating: 7.9, img: "https://avatars.mds.yandex.net/get-kinopoisk-image/1599028/555359d8-7866-4113-b0c5-b5e13e3bf1c8/300x450" }
]

const TopMovies:React.FC = () => {
	return (
		<>
			<Header />
			<TopList top={top} />
		</>
	)
}

export default TopMovies