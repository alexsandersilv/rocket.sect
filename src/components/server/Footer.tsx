import padlock from '../../assets/img/padlock.svg';
const Footer = () => (
  <>
  <footer>
    <div className="line"></div>
    Feito com 💚 por <a href="https://github.com/alexsandersilv" target="_blank">Alex Sander</a>
  </footer>

  <img className="padlock" src={padlock} alt="Imagem de um cadeado branco" />
  </>
)

export default Footer;