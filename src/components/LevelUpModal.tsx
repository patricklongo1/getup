import { useContext } from 'react';
import { ChallengesContext } from '../hooks/ChallengesContext';
import styles from '../styles/components/LevelUpModal.module.css';

const LevelUpModal: React.FC = () => {
  const { level, closeLevelUpModa } = useContext(ChallengesContext);

  return(
    <div className={styles.overlay}>
      <div className={styles.container}>
        <header>{level}</header>
        <strong>Parabéns</strong>
        <p>Você alcançou um novo level</p>

        <button type="button" onClick={closeLevelUpModa}>
          <img src="/icons/close.svg" alt="Fechar"/>
        </button>
      </div>
    </div>
  );
}

export default LevelUpModal;