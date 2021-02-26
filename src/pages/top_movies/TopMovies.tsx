import React from 'react'
import Header from '../../Components/Header'
import TopList from './Components/TopList'
const top: {title: string, actors: string, number: string, rating: number, img: string}[] = [
	{ title: "Iron man", actors: "Robert Downey Jr., Gwyneth Paltrow, Terrence Howard", number: "1) ", rating: 8.5, img: "https://m.media-amazon.com/images/M/MV5BMTczNTI2ODUwOF5BMl5BanBnXkFtZTcwMTU0NTIzMw@@._V1_UX182_CR0,0,182,268_AL_.jpg" },
	{ title: "Avengers: Infinity War", actors: "Robert Downey Jr., Chris Hemsworth, Mark Ruffalo", number: "2) ", rating: 8.4, img: "https://avatars.mds.yandex.net/get-kinopoisk-image/1773646/af92d310-4ae5-4daa-b42c-5bcc380c2e6e/300x450" },
	{ title: "Iron man 2", actors: "Robert Downey Jr., Gwyneth Paltrow, Terrence Howard", number: "3) ", rating: 7.9, img: "https://avatars.mds.yandex.net/get-kinopoisk-image/1599028/555359d8-7866-4113-b0c5-b5e13e3bf1c8/300x450" },
	{ title: "Spider-Man: Homecoming", actors: "Robert Downey Jr., Gwyneth Paltrow, Terrence Howard", number: "4) ", rating: 7.8, img: "https://upload.wikimedia.org/wikipedia/en/f/f9/Spider-Man_Homecoming_poster.jpg" },
	{ title: "Guardians of the Galaxy", actors: "Robert Downey Jr., Gwyneth Paltrow, Terrence Howard", number: "5) ", rating: 7.6, img: "https://www.vintagemovieposters.co.uk/wp-content/uploads/2020/11/IMG_0754-scaled.jpeg" },
	{ title: "Thor: Ragnarok", actors: "Robert Downey Jr., Gwyneth Paltrow, Terrence Howard", number: "6) ", rating: 7.6, img: "https://m.media-amazon.com/images/I/51JpwNN7BuL._AC_.jpg" },
	{ title: "Doctor Strange", actors: "Robert Downey Jr., Chris Hemsworth, Mark Ruffalo", number: "7) ", rating: 7.5, img: "https://nerdnarration.files.wordpress.com/2017/02/doctor-strange-poster.jpg" },
	{ title: "Captain America: The First Avenger", actors: "Robert Downey Jr., Gwyneth Paltrow, Terrence Howard", number: "8) ", rating: 7.5, img: "https://static.wikia.nocookie.net/ironman/images/c/ca/P8205710_v_v8_aj.jpg/revision/latest?cb=20191202172249" },
	{ title: "Black Panther", actors: "Robert Downey Jr., Gwyneth Paltrow, Terrence Howard", number: "9) ", rating: 7.3, img: "https://www.ajc.com/resizer/u-Ezfz6D7rVFFzDBs0jgTPT-Fwk=/1066x600/cloudfront-us-east-1.images.arcpublishing.com/ajc/FPU7WA5QYVFSXFYUA24COGBEPE.jpg" },
	{ title: "Ant-Man", actors: "Robert Downey Jr., Gwyneth Paltrow, Terrence Howard", number: "10) ", rating: 7.2, img: "https://upload.wikimedia.org/wikipedia/en/7/75/Ant-Man_poster.jpg" }
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