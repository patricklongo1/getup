import { useContext } from 'react';
import { ChallengesContext } from '../hooks/ChallengesContext';
import { CountDownContext } from '../hooks/CountDownContext';
import styles from '../styles/components/ChallengeBox.module.css'

const ChallengeBox: React.FC = () => {
  const { activeChallenge, resetChallenge, completeChallenge } = useContext(ChallengesContext)
  const { resetCountDown } = useContext(CountDownContext);

  function HandleChallengeSuccess() {
    completeChallenge();
    resetCountDown();
  }

  function HandleChallengeFail() {
    resetChallenge();
    resetCountDown();
  }

  return (
    <div className={styles.challengeBoxContainer} >
      {activeChallenge ? (
        <div className={styles.challengeActive} >
          <header>Ganhe {activeChallenge.amount} xp</header>
          <main>
            <img src={`icons/${activeChallenge.type}.svg`} alt=""/>
            <strong>Novo desafio!</strong>
            <p>
              {activeChallenge.description}
            </p>
          </main>

          <footer>
            <button
              type="button"
              className={styles.challengeFailButton}
              onClick={HandleChallengeFail}
            >
              Falhei
            </button>

            <button
              type="button"
              className={styles.challengeCompleteButton}
              onClick={HandleChallengeSuccess}
            >
              Completei
            </button>
          </footer>
        </div>
      ) : (
        <div className={styles.challengeNotActive} >
          <strong>Finalize um ciclo para receber um desafio</strong>
          <p>
            <img src="icons/level-up.svg" alt="level up" />
            Avance de level completando desafios
          </p>
        </div>
      )}
    </div>
  );
}

export default ChallengeBox;