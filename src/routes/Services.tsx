import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Plan from "../components/Plan";

import '../styles/pages/services.css';

const ServicesPage = () => (
  <>
    <Navbar />
    <main id="services">
      <img src="/images/logo.svg" alt="Logo da Rocket Sect" />
      <section>
        <h1 style={{ textAlign: "center" }}>Planos</h1>
        <div className="planos">


        <Plan title="Basico">
          <span>
            Para quem está começando nessa area.
          </span>
            <br />
            <br />
        O plano inclui
            <br />
            <br />
            <ul>
              <li>Crypt MD5</li>
              <li>Proteção a DDoS</li>
              <li>Proteção a XSS</li>
              <li>4 RAM</li>
              <li>50G </li>
              <li className="block">Métricas em Tempo Real</li>
              <li className="block">Compratilhamento ( Para Times )</li>
              <li className="block">3 Servidores</li>
              <li className="block">VPN</li>
              <li className="block">Acesso Vitalicio</li>
            </ul>
            <br />
            <strong>R$: 50,00 </strong>
          </Plan>

          
          <Plan title="Normal">
            <span>
              Para Times e Projetos de medio porte
            </span>
            <br />
                        <br />

            O plano inclui
            <br />
            <br />
            <ul>
              <li>Crypt MD5</li>
              <li>Proteção a DDoS</li>
              <li>Proteção a XSS</li>
              <li>5 RAM</li>
              <li>300G</li>
              <li>Métricas em Tempo Real</li>
              <li>Compratilhamento ( Para Times )</li>
              <li>3 Servidores</li>
              <li>VPN</li>
              <li className="block">Acesso Vitalicio</li>
            </ul>
            <br />
            <strong>R$: 129,99 </strong>
          </Plan>

          <Plan title="Avançado">
            <span>
              Para alcançar o maior desemprenho
            </span>
            <br />
            <br />
            O plano inclui
            <br />
            <br />
            <ul>
              <li>Crypt MD5</li>
              <li>Proteção a DDoS</li>
              <li>Proteção a XSS</li>
              <li>10 RAM</li>
              <li>1 TB </li>
              <li>Métricas em Tempo Real</li>
              <li>Compratilhamento ( Para Times )</li>
              <li>3 Servidores</li>
              <li>VPN</li>
              <li>Acesso Vitalicio</li>
            </ul>
            <br />
            <strong>R$: 329,97 </strong>
          </Plan>
        </div>
      </section>
    </main>
    <Footer />
  </>
)

export default ServicesPage;