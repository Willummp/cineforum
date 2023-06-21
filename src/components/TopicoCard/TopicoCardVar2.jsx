import ComentarCard from '../ComentarCard/ComentarCard'
import ReactCard from '../ReactCard/ReactCard'
import RespostaCardVar2 from '../RespostaCard/RespostaCardVar2'
import './TopicoCard.css'

export default function TopicoCardVar2() {
	return (

		<div className='topico_card'>
			<div className='topico_card_header'>
				<p className='topico_card_header_name'>@ispeedshow</p>
				<p className='topico_card_header_date'>28/03/2022</p>
			</div>
			<h2 className='topico_card_post_title'>Qual é o melhor filme de ação de todos os tempos?</h2>
			<p className='topico_card_post'>E aí, galera!

				Estou numa discussão acalorada com uns amigos sobre qual é o melhor filme de ação já feito. É uma questão difícil, eu sei, mas estou curioso para saber a opinião de vocês.

				Para mim, "Duro de Matar" sempre será o rei dos filmes de ação. Bruce Willis como John McClane é simplesmente icônico, com suas frases marcantes e ação frenética. É um clássico dos anos 80 que ainda se mantém relevante até hoje.

				Mas sei que há muitas outras opções incríveis por aí! Temos o universo Marvel com seus filmes cheios de ação e super-heróis, como "Vingadores: Ultimato" e "Pantera Negra". Também temos clássicos como "Exterminador do Futuro 2: O Julgamento Final" e "Matrix", que revolucionaram o gênero com efeitos especiais inovadores.

				Então, pessoal, me contem: qual é o melhor filme de ação de todos os tempos na opinião de vocês? Quero saber quais são as suas escolhas e os motivos que as tornam tão especiais. Vamos lá, compartilhem suas preferências e vamos desvendar esse mistério juntos!
			</p>
			<RespostaCardVar2 />
			<ReactCard />
			<ComentarCard />
		</div>

	)
}
