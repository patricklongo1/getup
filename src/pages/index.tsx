import ExperienceBar from "../components/ExperienceBar";
import Profile from '../components/Profile';
import CompletedChallanges from '../components/CompletedChallanges';
import CountDown from '../components/CoutnDown';

import Head from 'next/head';

import styles from '../styles/pages/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>   
      <Head>
        <title>Início | GetUp</title>
      </Head>

      <ExperienceBar />

      <section>
        <div>
          <Profile />
          <CompletedChallanges />
          <CountDown />
        </div>
        <div>

        </div>
      </section>
    </div>
  );
}
