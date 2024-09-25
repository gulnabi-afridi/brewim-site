import styles from "./Hero.module.css";
import Image from "next/image";

import Logo from "../../../public/home/bwen-logo.svg";
import X from "../../../public/home/x.svg";
import Telegram from "../../../public/home/telegram.svg";
import Discord from "../../../public/home/discord.svg";
import Dexscreener from "../../../public/home/dexscreener.svg";

const Hero = () => {
  return (
    <div className={` bg-[url('/home/364.gif')] bg-no-repeat bg-cover bg-fixed ${styles.heroMain}`}>
      {/* Top section */}
      <div className={styles.hero}>
   
        <nav className={styles.navbar}>
          <ul>
            <li><a href="#">DISCOVER</a></li>
            <li><a href="#">PROJECT</a></li>
            <li><a href="#">COMMUNITY</a></li>
            <li><a href="#">WTF</a></li>
          </ul>
        </nav>
        <div className={styles.logo}>
          <Image src={Logo} alt="BWEN LOGO" className="logo" />
          <h1 className={styles.tagline}>
            New generation <br /> of memecoins
          </h1>
          <p className={styles.tagline_two}>
            For the community <br /> By the community
          </p>
          <div className={styles.socialIcons}>
            <Image src={X} alt="X LOGO" />
            <Image src={Telegram} alt="Telegram LOGO" />
            <Image src={Discord} alt="Discord LOGO" />
            <Image src={Dexscreener} alt="DexScreener LOGO" />
          </div>
        </div>
      </div>

      {/* Down section */}
      <div className={styles.downSection}>
        <div className={styles.content}></div>
        <span className={styles.bottomRightTextTitle}>
          Thinking Memecoins Differently <br />
        </span>
        <span className={styles.bottomRightTextSubtitle}>
          Babywen opens the new era of <br />
          memecoins, an era with meaning and <br />
          fully inspired by web3 essence
        </span>
      </div>
    </div>
  );
};

export default Hero;
