import './styles.css'
import carImg from '../../assets/imagens/car-card 1.png'
export default function Card() {
  return (
    <div className='dsc-card'>
      <img src={carImg} alt='carro' />
      <h3>Lorem ipsum dolor</h3>
    </div>
  );
}