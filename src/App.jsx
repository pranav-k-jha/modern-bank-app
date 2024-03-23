import React from "react";
import styles from "./style";
import {
  Navbar,
  Billing,
  CardDeal,
  Business,
  Clients,
  CTA,
  Stats,
  Footer,
  Testimonials,
  Hero,
} from "./components";

const App = () => (
  <div className="bg-primary w-full overflow-hidden">
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Navbar />
      </div>
    </div>
    <div className="mt-4 w-full flex-center bg-gradient-to-r from-blue-500 to-purple-800 rounded-lg p-4 animate-pulse">
        <p className="text-center text-white">👨‍💻 Currently under construction... 🚧 <br />
Just me tinkering with the code. Stay tuned for updates! 🚀</p>
      </div>
    <div className={`bg-primary ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Hero />
      </div>
    </div>
    
    <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Stats /> <Business /> <Billing /> <CardDeal /> <Testimonials />{" "}
        <Clients /> <CTA /> <Footer />
      </div>
    </div>
    
  </div>
);

export default App;
