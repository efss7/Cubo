import {GlobalState} from "./global/State"
import {Dashboard} from "./pages/dashboard/Dashboard"

function App() {
  return (
     
    <GlobalState>
    <Dashboard/>
    </GlobalState>
  );
}

export default App;
