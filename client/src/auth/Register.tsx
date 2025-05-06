import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/useAuth';
import styles from './Register.module.scss';

export default function Register() {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [role, setRole] = useState<'admin' | 'staff'>('staff');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return alert('Bitte E-Mail eingeben');

    // Temporäre Registrierung → Login + Weiterleitung
    login({ email, role });
    navigate('/dashboard');
  };

  return (
    <div className={styles.registerContainer}>
      <form onSubmit={handleSubmit} className={styles.registerForm}>
        <h2>Registrieren</h2>

        <label htmlFor="email">E-Mail-Adresse</label>
        <input
          id="email"
          type="email"
          placeholder="E-Mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={styles.input}
        />

        <label htmlFor="role">Rolle auswählen</label>
        <select
          id="role"
          value={role}
          onChange={(e) => setRole(e.target.value as 'admin' | 'staff')}
          className={styles.select}
        >
          <option value="staff">Mitarbeiter</option>
          <option value="admin">Administrator</option>
        </select>

        <button type="submit" className={styles.button}>Registrieren</button>
      </form>
    </div>
  );
}
