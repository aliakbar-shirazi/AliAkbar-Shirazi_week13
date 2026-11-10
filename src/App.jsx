import { useState } from "react";
import Header from "./components/Header";
import TabBody from "./components/TabBody";
import AddTab from "./components/AddTab";
import Overlay from "./components/Overlay";

function App() {
  const [showData, setShowData] = useState(
    JSON.parse(localStorage.getItem("showData")) || {},
  );
  const [tabsData, setTabsData] = useState(
    JSON.parse(localStorage.getItem("tabsData")) || [],
  );
  const [showModal, setShowModal] = useState(false);

  return (
    <div>
      <AddTab
        showModal={showModal}
        setShowModal={setShowModal}
        setTabsData={setTabsData}
      />
      <Overlay showModal={showModal} />
      <Header
        setShowData={setShowData}
        setShowModal={setShowModal}
        tabsData={tabsData}
      />
      <TabBody data={showData} />
    </div>
  );
}

export default App;
