import { useContext } from 'react';
import { ChallengesContext } from '../hooks/ChallengesContext';
import styles from '../styles/components/CompletedChallenges.module.css'

const CompletedChallenges: React.FC = () => {
  const { challengesCompleted } = useContext(ChallengesContext)

  return (
    <div className={styles.completedChallengesContainer}>
      <span>Desafios Completos:</span>
      <span>{challengesCompleted}</span>
    </div>
  );
}

export default CompletedChallenges;