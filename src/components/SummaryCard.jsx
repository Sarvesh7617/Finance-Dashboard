import { useContext } from "react";
import { AppContext } from "../context/AppContext";

const SummaryCard=({ title, amount })=> {
  const { darkMode } = useContext(AppContext);
  let color = "bg-white";

  if (title === "Income") color = "bg-green-100";
  else if (title === "Expenses") color = "bg-red-100";
  else if (title === "Total Balance") color = "bg-blue-100";
  return (
    <div className={`p-5 rounded-xl shadow-sm ${darkMode ? "bg-gray-800 text-white" : `text-black ${color}`} hover:shadow-lg transition duration-300 cursor-pointer`}>
      <p className="text-gray-500 text-sm">{title}</p>
      <h2 className="text-2xl font-bold mt-2">{amount}</h2>
    </div>
  );
}

export default SummaryCard;