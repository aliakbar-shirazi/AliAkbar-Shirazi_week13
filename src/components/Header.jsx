import tabsData from "../constants/tabData.js";
import TabsList from "./TabsList.jsx";
import styles from "./Header.module.css";

function Header() {
  return (
    <div className={styles.container}>
      <h1>Tabs Component With React</h1>
      <div>
        {tabsData.map((tab) => (
          <TabsList key={tab.id} tabInfo={tab} />
        ))}
      </div>
    </div>
  );
}

export default Header;
