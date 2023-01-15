import Footer from "../components/server/Footer";
import Navbar from "../components/server/Navbar";
import PlanContainer from "../components/server/PlansContainer";

import '../styles/pages/services.css';

const ServicesPage = () => (
  <>
    <Navbar />
    <main id="services">
      <section>
        <PlanContainer
          title="Basic"
          description="Free plan for 30-day trial, no card required"
          enabledFunctions={[
            "VPN",
            "DDoS Protection",
            "4 RAM",
            "500 G"
          ]}
          disabledFunctions={[
            "Metrics in real time",
            "Server Options",
            "XSS Protection",
            "IP Block",
            "Malicious File Blocking",
            "Server Sharing ( For Teams )"
          ]}
          prince={"Free Trial"}
        />

        <PlanContainer
          title="Normal"
          description="For medium-sized projects"
          enabledFunctions={[
            "VPN",
            "Server Options",
            "DDoS Protection",
            "XSS Protection",
            "Metrics in real time",
            "Malicious File Blocking",
            "IP Block",
            "Server Sharing ( For Teams )",
            "10 RAM",
            "1.5 T"
          ]}
          disabledFunctions={[]}
          prince={"$ 15,00"}
        />

        <PlanContainer
          title="Complete"
          description="For large and ambitious projects"
          enabledFunctions={[
            "VPN",
            "Server Options",
            "DDoS Protection",
            "XSS Protection",
            "Metrics in real time",
            "Malicious File Blocking",
            "IP Block",
            "Server Sharing ( For Teams )",
            "15 RAM",
            "3 T"
          ]}
          disabledFunctions={[]}
          prince={"$ 30,00"}
        />

      </section>
    </main>
    <Footer />
  </>
)

export default ServicesPage;