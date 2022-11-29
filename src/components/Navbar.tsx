"use client";

import logo from '../../public/images/logo.svg'

const Navbar = () => (
  <nav>
    <a href="/">
      <img src={logo} alt="Logo da Rocket Sect" />
    </a>
    <ul>
      <li>
        <a href="/">Home</a>
      </li>
      <li>
        <a href="services">Serviços</a>
      </li>
      <li>
        <a href="mailto:alexssilva.contato@gmail.com">Contato</a>
      </li>
    </ul>
  </nav>
)

export default Navbar