import React from "react";
import styles from "./style";

const App = () => (
  <div className="bg-primary w-full overflow-hidden">
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>Navbar</div>
    </div>
    <div className={`bg-primary ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>Hero</div>
    </div>
    <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        Stats Business Billing CardDeal Testinomials Clients CTA Footer
      </div>
    </div>
    <p class="bg-red-200 text-red-700 p-4 text-center font-bold">
      👨‍💻 Currently under construction! 🚧 <br />
      Just me tinkering with the code. Stay tuned for updates! 🚀
    </p>
  </div>
);

export default App;
