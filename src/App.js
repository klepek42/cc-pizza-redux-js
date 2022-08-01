import NavigationBar from "./components/NavigationBar";
import Speisekarte from "./components/Speisekarte";

import styles from "./App.module.css";

const App = () => (
  <div className={styles["app"]}>
    <NavigationBar />
    <Speisekarte />
  </div>
);

export default App;
