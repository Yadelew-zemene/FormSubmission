
import './App.css';
import UserInputInformation from './components/UserInputInformation';
import UserChoices from './components/UserChoices';
import UserFileData from './components/UserFileData';
import UserSubmisionOrReset from './components/UserSubmisionOrReset';
  document.body.classList.add("dark");
<button
  style={{
    position: "fixed",
    top: "15px",
    right: "20px",
    padding: "8px 14px",
    cursor: "pointer"
  }}
  onClick={() => document.body.classList.toggle("dark")}
>
  🌙 Dark Mode
</button>

function App() {
  return (
    <>
      <header className="App-header">
      </header>
      <UserInputInformation />
      <UserChoices />
      <UserFileData />
      <UserSubmisionOrReset/>

      
    
    </>
      
   
  );
  
}

export default App;
