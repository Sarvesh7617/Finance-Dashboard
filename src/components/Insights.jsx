import { useContext } from "react";
import { AppContext } from "../context/AppContext";

const Insights=({ transactions })=>{
  const { darkMode } = useContext(AppContext);
  // Highest spending category
  const expenseMap = {};
  transactions.forEach(t => {
    if (t.type === "expense") {
      if (!expenseMap[t.category]) expenseMap[t.category] = 0;
      expenseMap[t.category] += t.amount;
    }
  });
  const highestSpendingCategory = Object.keys(expenseMap).reduce((a, b) => (expenseMap[a] > expenseMap[b] ? a : b), null);

  // Monthly comparison (current month vs previous month)
  const monthMap = {};
  transactions.forEach(t => {
    const month = new Date(t.date).toLocaleString("default", { month: "short" });
    if (!monthMap[month]) monthMap[month] = 0;
    monthMap[month] += t.type === "income" ? t.amount : -t.amount;
  });
  const months = Object.keys(monthMap);
  const lastMonth = months[months.length - 2] || 0;
  const currentMonth = months[months.length - 1];
  const currentBalance = monthMap[currentMonth] || 0;
  const previousBalance = monthMap[lastMonth] || 0;
  const balanceDiff = currentBalance - previousBalance;

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6">
      <div className={`p-5 rounded-xl shadow-sm ${darkMode ? "bg-gray-900 text-white border-white border-1" : "bg-white text-black"}`}>
        <h3 className="font-semibold">Highest Spending Category</h3>
        <p className="text-xl mt-2">{highestSpendingCategory || "N/A"}</p>
      </div>
      <div className={`p-5 rounded-xl shadow-sm ${darkMode ? "bg-gray-900 text-white border-white border-1" : "bg-white text-black"}`}>
        <h3 className="font-semibold">Current Month Balance</h3>
        <p className="text-xl mt-2">₹{currentBalance}</p>
      </div>
      <div className={`p-5 rounded-xl shadow-sm ${darkMode ? "bg-gray-900 text-white border-white border-1" : "bg-white text-black"}`}>
        <h3 className="font-semibold">Change from Previous Month</h3>
        <p className="text-xl mt-2">{balanceDiff >= 0 ? `+₹${balanceDiff}` : `-₹${Math.abs(balanceDiff)}`}</p>
      </div>
    </div>
  );
}

export default Insights;