import styles from "./TabsList.module.css";

function TabsList({ tabInfo, setShowData: { setShowData } }) {
  return (
    <button onClick={() => setShowData(tabInfo)} className={styles.tabsBtn}>
      {tabInfo.tabName}
    </button>
  );
}

export default TabsList;
