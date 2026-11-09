import styles from "./TabsList.module.css";

function TabsList({
  tabInfo,
  setShowData: { setShowData },
  isSelected,
  setIsSelected,
}) {
  const selectTabHandler = () => {
    setShowData(tabInfo);
    setIsSelected(tabInfo.id);
  };

  return (
    <button
      onClick={selectTabHandler}
      className={`${isSelected && styles.selectedBtn} ${styles.tabsBtn}`}
    >
      {tabInfo.tabName}
    </button>
  );
}

export default TabsList;
