import { ToastContainer } from "react-toastify";
import AuthContextProvider from "./contexts/AuthContextProvider";
import BlogContextProvider from "./contexts/BlogContextProvider";
import AppRouter from "./router/AppRouter";


function App() {
  return (
    <div>
      <AuthContextProvider>
        <BlogContextProvider>
          <AppRouter />
          <ToastContainer />
        </BlogContextProvider>
      </AuthContextProvider>
    </div>
  );
}

export default App;
