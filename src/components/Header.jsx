import { useState } from "react";

import tabsData from "../constants/tabData.js";
import TabsList from "./TabsList.jsx";
import styles from "./Header.module.css";

function Header(setShowData) {
  const [isSelected, setIsSelected] = useState(
    localStorage.getItem("selectedTab") || false,
  );
  return (
    <div className={styles.container}>
      <h1>Tabs Component With React</h1>
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
