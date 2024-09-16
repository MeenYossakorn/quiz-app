import { useState, createContext } from "react";
import Menu from "./component/Menu";
import Quiz from "./component/Quiz";
import Score from "./component/Score";
import "./App.css";

export const DataContext = createContext();

function App() {
  const [appState, setAppState] = useState("menu");
  const [score, setScore] = useState(0);

  {
    /* set default ไว้ที่หน้า Menu */
  }
  return (
    <DataContext.Provider value={{ appState, setAppState, score, setScore }}>
      {/*DataContext จะทำส่งตัวแปลและฟังก์ชันให้ทั้ง 3 ตัวใช้งานร่วมกันได้ */}
      <div className="App">
        <h1>Web Development Quiz</h1>
        {appState === "menu" && <Menu />}
        {appState === "quiz" && <Quiz />}
        {appState === "score" && <Score />}
      </div>
    </DataContext.Provider>
  );
}

export default App;
