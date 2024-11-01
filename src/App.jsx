import "./App.css";
import AppRouter from "./Routes/Routes";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { useEffect, useState } from "react";
import Loading from "./pages/loading/Loading";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // مثال على محاكاة وقت التحميل
    const timer = setTimeout(() => setLoading(false), 2000); // مثلاً 2 ثانية

    return () => clearTimeout(timer);
  }, []);
  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <>
          {" "}
          <AppRouter />
          <ToastContainer />
        </>
      )}
    </>
  );
}

export default App;
