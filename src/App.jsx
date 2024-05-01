import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import { Provider } from "react-redux";
import store from "./states/store";
import { AppProvider } from "./states/Contet";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import Search from "./components/Search/Search";
const App = () => {
  return (
    <Provider store={store}>
      <AppProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
         
            <Route path="/search" element={<Search />} />
          </Routes>
        </Router>
        <ToastContainer
          position="bottom-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="drak"
        />
      </AppProvider>
    </Provider>
  );
};

export default App;