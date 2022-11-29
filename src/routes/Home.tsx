import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

import '../styles/pages/home.css';

const HomePage = () => (
  <>
    <Navbar />
    <main id="home">
      <img src="/images/img1.png" alt="Imagem de uma mulher de camisa verde ao lado de um notebook" />
      <section>
        <h1>Seus dados estão  <span>Protegidos</span>?</h1>
        <br />
        <br />
        <p>
          A informação é fundamental e de extrema <strong>importância para qualquer</strong>
          <br />
          empresa.
        </p>
        <br />
        <br />
        <p>
          Aqui vai um <strong>texto</strong> como se fosse uma empresa de <span>segurança da informação </span>
          apresentando o seu produto e com o texto todo estilizado.
        </p>
      </section>
    </main>
    <Footer />
  </>
)

export default HomePage;