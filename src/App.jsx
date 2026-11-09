import { useState } from "react";
import Header from "./components/Header";
import TabBody from "./components/TabBody";

function App() {
  const [showData, setShowData] = useState({});
  return (
    <div>
      <Header setShowData={setShowData} />
      <TabBody data={showData} />
    </div>
  );
}

export default App;
