import { ToastContainer } from "react-toastify";
import AuthContextProvider from "./contexts/AuthContextProvider";
import AppRouter from "./router/AppRouter";


function App() {
  return (
    <div>
    <AuthContextProvider>
      <AppRouter/>
      <ToastContainer/>
    </AuthContextProvider>
    </div>
  );
}

export default App;
