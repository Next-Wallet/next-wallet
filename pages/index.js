import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Next Wallet</title>
        <meta name="description" content="An API Powered Server Side Wallet" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://github.com/Next-Wallet">Next Wallet</a>
        </h1>

        <h2 className={styles.description}>An API Powered Server Side Wallet</h2>

        <div className={styles.grid}>
          <a className={styles.card} href="">
            <h2>Overview</h2>
            <p>Server side wallets for web3 developers.</p>
          </a>

          <a className={styles.card} href="https://github.com/Next-Wallet/next-wallet">
            <h2>Open Source</h2>
            <p>Fork and customize your logic.</p>
          </a>

          <a className={styles.card} href="https://documenter.getpostman.com/view/1292391/UzXKWJp4">
            <h2>Standard APIs</h2>
            <p>POST to send ERC20s, 721s & 1155s.</p>
          </a>

          <a className={styles.card} href="https://chainlist.org/">
            <h2>EVM Agnostic</h2>
            <p>Configure send to tokens on any chain.</p>
          </a>
        </div>
      </main>
    </div>
  );
}
