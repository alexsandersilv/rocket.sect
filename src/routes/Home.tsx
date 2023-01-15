import Navbar from "../components/server/Navbar";
import Footer from "../components/server/Footer";

import image from '../assets/img/img1.png';

import '../styles/pages/home.css';

const HomePage = () => (
  <>
    <Navbar />
    <main id="home">
      <img src={image} alt="Imagem de uma mulher de camisa verde ao lado de um notebook" />
      <section>
        <div className="intro">
          <h1 className="title">Your information is <span>Protected</span>?</h1>
          <p>
            Information is fundamental and extremely important.<strong>importance for any</strong>
            <br />
            company.
          </p>
        </div>
        <div className="whoami">
          <h2 className="title"><span id="node">$</span> whoami</h2>
          <p>
            <span>Rocket.sect</span> is a company with the objective of <strong>keeping your data always safe</strong>,
            you can remove all your doubts with our <strong>support 24hrs</strong>.
          </p>
          <p>
            Our company stands out with <strong>end to end encryption</strong> that we make available to customers,
            only 3% of<strong>148.759.09 Clients</strong> ask for refund.
          </p>
          <p>
            <strong>
              <a href="/services">Services</a>
            </strong>
          </p>
        </div>
      </section>
    </main>
    <Footer />
  </>
)

export default HomePage;