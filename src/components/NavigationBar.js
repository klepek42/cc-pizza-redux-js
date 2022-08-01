import styles from "./NavigationBar.module.css";

const NavigationBar = () => {
  return (
    <div className={styles["navbar"]}>
      <span className={styles["navbar-text"]}>Pizzeria Mario 🇮🇹</span>
    </div>
  );
};

export default NavigationBar;
