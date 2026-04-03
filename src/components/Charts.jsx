import { useContext } from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, PieChart, Pie, Cell, ResponsiveContainer } from "recharts";
import { AppContext } from "../context/AppContext";

const Charts=({ transactions })=> {
  const { darkMode } = useContext(AppContext);
  // Prepare data for spending by category
  const categoryData = [];
  const categoryMap = {};

  transactions.forEach(t => {
    if (t.type === "expense") {
      if (!categoryMap[t.category]) categoryMap[t.category] = 0;
      categoryMap[t.category] += t.amount;
    }
  });

  for (let key in categoryMap) {
    categoryData.push({ name: key, value: categoryMap[key] });
  }

  const COLORS = ["#FF6384", "#36A2EB", "#FFCE56", "#4BC0C0", "#9966FF"];

  // Prepare data for monthly trend
  const monthMap = {};
  transactions.forEach(t => {
    const month = new Date(t.date).toLocaleString("default", { month: "short" });
    if (!monthMap[month]) monthMap[month] = 0;
    monthMap[month] += t.type === "income" ? t.amount : -t.amount;
  });

  const trendData = Object.keys(monthMap).map(month => ({ month, balance: monthMap[month] }));

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
      {/* Pie Chart: Spending by Category */}
      <div className={`p-5 rounded-xl transition hover:shadow-md ${darkMode ? "bg-gray-800 text-white" : "bg-white text-black"}`}>
        <h2 className="text-xl font-semibold mb-4">Spending by Category</h2>
        <ResponsiveContainer width="100%" height={250}>
          <PieChart>
            <Pie data={categoryData} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={80} fill="#8884d8" label>
              {categoryData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </div>

      {/* Bar Chart: Monthly Trend */}
      <div className={`p-5 rounded-xl transition hover:shadow-md ${darkMode ? "bg-gray-800 text-white" : "bg-white text-black"}`}>
        <h2 className="text-xl font-semibold mb-4">Monthly Balance Trend</h2>
        <ResponsiveContainer width="100%" height={250}>
          <BarChart data={trendData}>
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="balance" fill="#36A2EB" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default Charts;