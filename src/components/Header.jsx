import { useState } from "react";

import TabsList from "./TabsList.jsx";
import styles from "./Header.module.css";

function Header({ setShowData, setShowModal, tabsData, setTabsData }) {
  const [isSelected, setIsSelected] = useState(
    localStorage.getItem("selectedTab") || false,
  );
  const deleteHandler = (id) => {
    if (!id) return;
    const result = tabsData.filter((tab) => tab.id !== id);
    setTabsData(result);
    setShowData({});
    localStorage.setItem("tabsData", JSON.stringify(result));
    localStorage.removeItem("showData");
  };
  return (
    <div className={styles.container}>
      <div className={styles.HeaderSection}>
        <h1>Tabs Component With React</h1>
        <div>
          <button
            className={styles.deleteButton}
            onClick={() => deleteHandler(isSelected)}
          >
            Delete
          </button>
          <button
            className={styles.addButton}
            onClick={() => setShowModal(true)}
          >
            Add
          </button>
        </div>
      </div>
      <div>
        {tabsData.map((tab) => (
          <TabsList
            key={tab.id}
            tabInfo={tab}
            setShowData={setShowData}
            isSelected={isSelected === tab.id}
            setIsSelected={setIsSelected}
          />
        ))}
      </div>
    </div>
  );
}

export default Header;
