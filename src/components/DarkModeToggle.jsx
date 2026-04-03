import { useContext } from "react";
import { AppContext } from "../context/AppContext";

const DarkModeToggle=()=> {
  const { darkMode, setDarkMode } = useContext(AppContext);

  return (
    <div className="mb-4">
      <label className="flex items-center space-x-2 cursor-pointer">
        <span>Dark Mode</span>
        <input
          type="checkbox"
          checked={darkMode}
          onChange={() => setDarkMode(!darkMode)}
          className="toggle-checkbox"
        />
      </label>
    </div>
  );
}

export default DarkModeToggle;