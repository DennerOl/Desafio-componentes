import './styles.css'
import Cabecalho from '../../componentes/Cabecalho';
import Header from '../../componentes/Header';
import Card from '../../componentes/Card';


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
        <section>
          <div className='dsc-section-coment'>
            O que estão dizendo
          </div>
        </section>

      </main>

    </>
  )
}