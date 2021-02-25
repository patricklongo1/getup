import styles from '../styles/components/Profile.module.css'

const Profile: React.FC = () => {
  return (
    <div className={styles.profileContainer}>
      <img src="https://github.com/patricklongo1.png" alt="Avatar"/>
      <div>
        <strong>Patrick Longo</strong>
        <p>
          <img src="icons/level.svg" alt="level"/>
          Level 1
        </p>
      </div>
    </div>
  );
}

export default Profile;