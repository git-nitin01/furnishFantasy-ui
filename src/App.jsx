import "./App.css";
import AppRouter from "./routes";
import { DataProvider } from "./Context/DataContext";

function App() {

  console.log("App")
  return (
    <DataProvider>
      <div>
        <AppRouter />
      </div>
    </DataProvider>    
  );
}

export default App;
