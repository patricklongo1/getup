import Head from 'next/head';
import { GetServerSideProps } from 'next';

import ExperienceBar from "../components/ExperienceBar";
import Profile from '../components/Profile';
import CompletedChallenges from '../components/CompletedChallenges';
import CountDown from '../components/CoutnDown';
import ChallengeBox from "../components/ChallengeBox";

import styles from '../styles/pages/Home.module.css'

import { ChallengesProvider } from '../hooks/ChallengesContext';
import { CountDownProvider } from '../hooks/CountDownContext';

interface HomeProps {
  level: number;
  currentExperience: number;
  challengesCompleted: number;
}

export default function Home(props: HomeProps) {
  return (
    <ChallengesProvider
      level={props.level}
      currentExperience={props.currentExperience}
      challengesCompleted={props.challengesCompleted}
    >
      <div className={styles.container}>   
        <Head>
          <title>Início | GetUp</title>
        </Head>

        <ExperienceBar />

        <CountDownProvider>
          <section>
            <div>
              <Profile />
              <CompletedChallenges />
              <CountDown />
            </div>
            <div>
              <ChallengeBox />
            </div>
          </section>
        </CountDownProvider>
      </div>
    </ChallengesProvider>
  );
}

export const getServerSideProps: GetServerSideProps = async (cxt) => {
  const {level, currentExperience, challengesCompleted} = cxt.req.cookies;
  return {
    props: {
      level: Number(level ?? 1),
      currentExperience: Number(currentExperience ?? 0),
      challengesCompleted: Number(challengesCompleted ?? 0)
    }
  }
}
