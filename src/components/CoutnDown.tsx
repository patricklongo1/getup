import { useState, useEffect } from 'react';
import { FaCheckCircle, FaRunning } from 'react-icons/fa';
import styles from '../styles/components/CountDown.module.css'

let countDownTimeout: NodeJS.Timeout

const CountDown: React.FC = () => {
  const [time, setTime] = useState(0.05 * 60);
  const [isActive, setIsActive] = useState(false);
  const [hasFinished, setHasFinished] = useState(false);

  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

  const [minuteLeft, minuteRight] = String(minutes).padStart(2,'0').split('');
  const [secondLeft, secondRight] = String(seconds).padStart(2,'0').split('');

  useEffect(() => {
    if (isActive && time > 0) {
      countDownTimeout = setTimeout(() => {
        setTime(time - 1)
      }, 1000);
    } else if(isActive && time === 0) {
      setHasFinished(true);
      setIsActive(false);
    }
  }, [isActive, time])

  function startCountDown() {
    setIsActive(true);
  }

  function resetCountDown() {
    setIsActive(false); 
    clearTimeout(countDownTimeout);
    setTime(0.05 * 60);
  }


  return (
    <div>
      <div className={styles.countDownContainer}>
        <div>
          <span>{minuteLeft}</span>
          <span>{minuteRight}</span>
        </div>
        <span>:</span>
        <div>
          <span>{secondLeft}</span>
          <span>{secondRight}</span>
        </div>
      </div>

      {hasFinished ? (
        <button
          disabled
          className={styles.countDownButton}
        >
          <div style={{display: 'flex', alignItems: 'center', height: '100%'}}>
            Ciclo concluído
            <FaCheckCircle size="22" color="#4cd62b" style={{marginLeft: '15px'}} />
          </div>
          <div style={{width: '100%', height: '10%', backgroundColor: '#4cd62b', marginTop: 'auto'}} />
        </button>
      ) : (
        <>
          {isActive ? (
            <button
              type="button"
              className={`${styles.countDownButton} ${styles.countDownButtonActive}`}
              onClick={resetCountDown}
            >
              Abandonar ciclo
            </button>
          ) : (
            <button
              type="button"
              className={styles.countDownButton}
              onClick={startCountDown}
            >
              Iniciar um ciclo
              <FaRunning size="22" color="#f2f3f5" style={{marginLeft: '15px'}} />
            </button>
          )}
        </>
      )}
    </div>
  );
}

export default CountDown;