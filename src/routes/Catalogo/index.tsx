import './styles.css'
import Cabecalho from '../../componentes/Cabecalho';
import Header from '../../componentes/Header';
import Card from '../../componentes/Card';
import CardComent from '../../componentes/CardComent';


export default function Catalogo() {
  return (
    <>
      <div className='dsc-header-container'>
        <Header />
      </div>

      <main className='dsc-catalogo-main'>
        <section id='dsc-catalog-section' className='dsc-container'>
          <div className='dsc-cabecalho-container'>
            <Cabecalho />
          </div>
          <div className='dsc-catalog-cards-container'>
            <Card />
            <Card />
          </div>
        </section>
        <section className='dsc-section-container'>
          <div className='dsc-section-coment'>
            O que estão dizendo
          </div>

          <div className='dsc-CardComent'>
            <CardComent />
            <CardComent />
            <CardComent />
            <CardComent />
            <CardComent />
            <CardComent />
          </div>


        </section>

      </main>
      <footer>
        <div className='dsc-footer-container'>

          <div>@dscarrostop</div>
          <div className='dsc-div-rua'>Rua da Pipoca, 150</div>

        </div>

      </footer>


    </>
  )
}