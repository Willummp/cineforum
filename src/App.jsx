import './App.css'
import Navbar from './components/Navbar/Navbar'
import TopicoCardVar2 from './components/TopicoCard/TopicoCardVar2'
import TopicoCard from './components/TopicoCard/TopicoCard'

export default function App() {
	return (
		<div className='frame'>
			<Navbar/>
			<TopicoCard />
			<TopicoCardVar2/>
		</div>
	)
}
