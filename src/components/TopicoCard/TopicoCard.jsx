import ComentarCard from '../ComentarCard/ComentarCard'
import ReactCard from '../ReactCard/ReactCard'
import RespostaCard from '../RespostaCard/RespostaCard'
import './TopicoCard.css'

export default function TopicoCard() {
	return (

		<div className='topico_card'>
			<div className='topico_card_header'>
				<p className='topico_card_header_name'>@willummp</p>
				<p className='topico_card_header_date'>26/03/2022</p>
			</div>
			<h2 className='topico_card_post_title'>Recomendações de Filmes de Suspense Psicológico</h2>
			<p className='topico_card_post'>Oi pessoal!
				Estou em busca de filmes de suspense psicológico que me deixem intrigado e à beira do assento. Adoro histórias que mexem com a mente e nos fazem questionar a realidade. Quais filmes desse gênero vocês recomendam? Estou em busca de tramas envolventes, personagens complexos e reviravoltas surpreendentes. Agradeço antecipadamente pelas sugestões! Vamos compartilhar nossas descobertas cinematográficas e mergulhar juntos nesse mundo intrigante do suspense psicológico.</p>
			<RespostaCard />
			<ReactCard />
			<ComentarCard />
		</div>

	)
}
