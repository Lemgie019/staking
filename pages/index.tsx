import type { NextPage } from "next";
import { useRouter } from "next/router";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  const router = useRouter();

  return (
    <div className={styles.container}>
      {/* Top Section */}
      <h1 className={styles.h2Text}>CG ROBODOGZ STAKING</h1>
      <div className={styles.nftBoxGrid}>
        <div
          className={styles.optionSelectBox}
          role="button"
          onClick={() => router.push(`/mint`)}
        >
          {/* Mint a new NFT */}
            <img src={`/icons/drop.png`} alt="drop" />
            <h2 className={styles.h2Text2}>Mint a new ROBODOGZ</h2>

        </div>

        <div
          className={styles.optionSelectBox}
          role="button"
          onClick={() => router.push(`/stake`)}
        >
          {/* Staking an NFT */}
          <img src={`/icons/token.png`} alt="drop" />
          <h2 className={styles.h2Text2}>Stake Your ROBODOGZ</h2>

        </div>
      </div>
    </div>
  );
};

export default Home;
