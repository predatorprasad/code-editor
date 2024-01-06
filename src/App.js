import Home from "./components/Home";
import './App.css';

import DataProvider from './context/DataProvider';

function App() {
  return (
    <div>
      <DataProvider>
        <Home />
      </DataProvider>
    </div>
  );
}

export default App;
