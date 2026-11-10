import { useState } from "react";
import Header from "./components/Header";
import TabBody from "./components/TabBody";
import AddTab from "./components/AddTab";
import Overlay from "./components/Overlay";
import Alert from "./components/Alert";

function App() {
  const [showData, setShowData] = useState(
    JSON.parse(localStorage.getItem("showData")) || {},
  );
  const [tabsData, setTabsData] = useState(
    JSON.parse(localStorage.getItem("tabsData")) || [],
  );
  const [showModal, setShowModal] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");

  return (
    <div>
      <Alert alertMessage={alertMessage} setAlertMessage={setAlertMessage} />
      <AddTab
        showModal={showModal}
        setShowModal={setShowModal}
        setTabsData={setTabsData}
        setAlertMessage={setAlertMessage}
      />
      <Overlay showModal={showModal} />
      <Header
        setShowData={setShowData}
        setShowModal={setShowModal}
        tabsData={tabsData}
        setTabsData={setTabsData}
        setAlertMessage={setAlertMessage}
      />
      <TabBody data={showData} />
    </div>
  );
}

export default App;
