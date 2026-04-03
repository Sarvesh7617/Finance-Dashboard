import { useContext } from "react";
import RoleSwitcher from "../components/RoleSwitcher.jsx";
import SummaryCard from "../components/SummaryCard";
import TransactionTable from "../components/TransactionTable.jsx";
import {transactions} from "../data/mockdata.js";
import { AppContext } from "../context/AppContext.jsx";
import Charts from "../components/Charts";
import Insights from "../components/Insights.jsx";
import DarkModeToggle from "../components/DarkModeToggle.jsx";

const Dashboard=()=> {
    const { darkMode } = useContext(AppContext);
    const {role}=useContext(AppContext);
    // Calculations
    const totalIncome = transactions
    .filter(t => t.type === "income")
    .reduce((acc, t) => acc + t.amount, 0);

    const totalExpenses = transactions
    .filter(t => t.type === "expense")
    .reduce((acc, t) => acc + t.amount, 0);

    const totalBalance = totalIncome - totalExpenses
  return (
    <div className={`space-y-6 transition-colors duration-300 ${darkMode ? "bg-gray-900 text-white min-h-screen p-6" : "bg-gray-100 text-black min-h-screen p-6"} min-h-screen p-6`}>
      <h1 className="text-2xl font-semibold">Dashboard</h1>
        <DarkModeToggle/>
      <RoleSwitcher/>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <SummaryCard title="Total Balance" amount={`₹${totalBalance}`} />
        <SummaryCard title="Income" amount={`₹${totalIncome}`} />
        <SummaryCard title="Expenses" amount={`₹${totalExpenses}`} />
      </div>
      <TransactionTable transactions={transactions} isAdmin={role==='admin'}/>
      <Charts transactions={transactions}/>
      <Insights transactions={transactions}/>
    </div>
  );
}

export default Dashboard;