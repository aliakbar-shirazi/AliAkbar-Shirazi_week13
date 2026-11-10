import { v4 } from "uuid";
import { useState } from "react";
import styles from "./AddTab.module.css";

function AddTab({ showModal, setTabsData, setShowModal, setAlertMessage }) {
  const [newTab, setNewTab] = useState({ tabName: "", title: "", text: "" });
  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    setNewTab((prev) => ({ ...prev, [name]: value }));
  };

  const addHandler = () => {
    if (!newTab.tabName || !newTab.title || !newTab.text) {
      setAlertMessage("Please Enter valid data!");
      return;
    }
    const newData = { ...newTab, id: v4() };
    setTabsData((tabs) => {
      const result = [...tabs, newData];
      localStorage.setItem("tabsData", JSON.stringify(result));
      return result;
    });
    setNewTab({ tabName: "", title: "", text: "" });
    setShowModal(false);
  };

  const cancelHandel = () => {
    setNewTab({ tabName: "", title: "", text: "" });
    setShowModal(false);
  };

  return (
    <div className={showModal ? styles.container : styles.hide}>
      <label htmlFor="tabName">tab name:</label>
      <input
        type="text"
        id="tabName"
        name="tabName"
        value={newTab.tabName}
        onChange={handleChange}
      />
      <label htmlFor="title">title:</label>
      <input
        type="text"
        id="title"
        name="title"
        value={newTab.title}
        onChange={handleChange}
      />
      <label htmlFor="text">text:</label>
      <textarea
        rows={5}
        id="text"
        name="text"
        value={newTab.text}
        onChange={handleChange}
      ></textarea>
      <div className={styles.buttonsSection}>
        <button onClick={addHandler}>save</button>
        <button onClick={cancelHandel}>cancel</button>
      </div>
    </div>
  );
}

export default AddTab;
