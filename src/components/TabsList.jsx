import styles from "./TabsList.module.css";

function TabsList({ tabInfo: { id, tabName, title, text } }) {
  return <button className={styles.tabsBtn}>{tabName}</button>;
}

export default TabsList;
