import  React from 'react'
import {observer} from 'mobx-react'
import Header from '../../Components/Header'
import News from './Components/News'
import MyNewsStore from '../stores/MyNewsStore'


const Home:React.FC = () => {
	const store = React.useMemo(() => new MyNewsStore(), [])
	React.useEffect(() => {
		store.getData()
	}, [store])
	return (
		<>
			<Header />
			<News data={store.data} />
		</>
	)
}

export default observer(Home)