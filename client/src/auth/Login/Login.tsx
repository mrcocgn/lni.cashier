import { useState } from "react";
import { useAuth } from "../../context/useAuth";
import styles from "./Login.module.scss";

export default function Login() {
  const { login } = useAuth();
  const [email, setEmail] = useState("");
  const [role, setRole] = useState<"admin" | "staff">("staff");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return alert("Bitte E-Mail eingeben");
    login({ email, role });
  };

  return (
    <div className={styles.loginContainer}>
      <form onSubmit={handleSubmit} className={styles.loginForm}>
        <h2>Login</h2>
        <input
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
          onChange={(e) => setRole(e.target.value as "admin" | "staff")}
          className={styles.select}
        >
          <option value="staff">Mitarbeiter</option>
          <option value="admin">Administrator</option>
        </select>

        <button type="submit" className={styles.button}>
          Einloggen
        </button>
      </form>
    </div>
  );
}
