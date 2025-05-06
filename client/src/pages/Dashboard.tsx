import { useAuth } from '../context/useAuth';
import styles from './Dashboard.module.scss';

export default function Dashboard() {
  const { user, logout } = useAuth();

  return (
    <div className={styles.dashboard}>
      <div className={styles.card}>
        <h1>Willkommen zurück,</h1>
        <h2>{user?.email}</h2>
        <p>Rolle: <strong>{user?.role}</strong></p>
        <button onClick={logout} className={styles.button}>
          Abmelden
        </button>
      </div>
    </div>
  );
}
