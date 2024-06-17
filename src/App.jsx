import "./App.css";
import AppRouter from "./Routes/Routes";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { useEffect } from "react";
function App() {
  useEffect(() => {
    // Disable right-click context menu
    document.addEventListener("contextmenu", (event) => {
      event.preventDefault();
    });

    // Hide content when focus is lost
    const handleBlur = () => {
      document.body.style.opacity = 0;
    };

    const handleFocus = () => {
      document.body.style.opacity = 1;
    };

    window.addEventListener("blur", handleBlur);
    window.addEventListener("focus", handleFocus);

    // Disable print screen key
    const handleKeyDown = (event) => {
      if (event.key === "PrintScreen") {
        event.preventDefault();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("contextmenu", (event) => {
        event.preventDefault();
      });
      window.removeEventListener("blur", handleBlur);
      window.removeEventListener("focus", handleFocus);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);
  return (
    <>
      <AppRouter />
      <ToastContainer />
    </>
  );
}

export default App;
