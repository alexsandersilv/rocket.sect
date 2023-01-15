import logo from '../../assets/img/logo.svg';

const Navbar = () => (
  <nav>
    <a href="/">
      <img src={logo} alt="Logotype of Rocket.sect" />
    </a>
    <ul>
      <li>
        <a href="/">Home</a>
      </li>
      <li>
        <a href="/services">Services</a>
      </li>
      <li>
        <a href="mailto:alexssilva.contato@gmail.com">Contact</a>
      </li>
    </ul>
  </nav>
)

export default Navbar