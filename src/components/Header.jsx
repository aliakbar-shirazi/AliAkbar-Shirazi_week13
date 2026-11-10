import { useState } from "react";

import TabsList from "./TabsList.jsx";
import styles from "./Header.module.css";

function Header({ setShowData, setShowModal, tabsData }) {
  const [isSelected, setIsSelected] = useState(
    localStorage.getItem("selectedTab") || false,
  );
  return (
    <div className={styles.container}>
      <div className={styles.HeaderSection}>
        <h1>Tabs Component With React</h1>
        <div>
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
