import NavigationBar from "./components/NavigationBar";
import Speisekarte from "./components/Speisekarte";

import styles from "./App.module.css";

function App() {
  return (
    <div className={styles["app"]}>
      <NavigationBar />
      <Speisekarte />
    </div>
  );
}

export default App;
