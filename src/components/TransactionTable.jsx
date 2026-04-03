import { useContext, useState } from "react";
import { AppContext } from "../context/AppContext";

const TransactionTable=({ transactions, isAdmin })=> {
  const [search, setSearch] = useState("");
  const { darkMode } = useContext(AppContext);

  const filtered = transactions.filter(t =>
    t.category.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className={`p-5 rounded-xl shadow-sm mt-6 ${darkMode ? "bg-gray-900 text-white border-white border-2" : "bg-white text-black"}`}>
      <h2 className="text-xl font-semibold mb-4">Transactions</h2>

      <input
        type="text"
        placeholder="Search by category"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className={`mb-4 p-2 border border-gray-300 rounded w-full ${darkMode ? "bg-gray-900 text-white" : "bg-white text-black"}`}
      />

      <div className="overflow-x-auto">
        <table className="min-w-full table-auto">
          <thead>
            <tr className={`${darkMode ? "bg-gray-900 text-white" : "bg-white text-black"}`}>
              <th className="px-4 py-2 text-left">Date</th>
              <th className="px-4 py-2 text-left">Category</th>
              <th className="px-4 py-2 text-left">Type</th>
              <th className="px-4 py-2 text-left">Amount</th>
              {isAdmin && <th className="px-4 py-2 text-left">Actions</th>}
            </tr>
          </thead>
          <tbody>
            {filtered.map(t => (
              <tr key={t.id} className="border-b">
                <td className="px-4 py-2">{t.date}</td>
                <td className="px-4 py-2">{t.category}</td>
                <td className="px-4 py-2 capitalize">{t.type}</td>
                <td className="px-4 py-2">₹{t.amount}</td>
                {isAdmin && (
                  <td className="px-4 py-2 space-x-2">
                    <button className="text-blue-500 hover:underline">Edit</button>
                    <button className="text-red-500 hover:underline">Delete</button>
                  </td>
                )}
              </tr>
            ))}
            {filtered.length === 0 && (
              <tr>
                <td colSpan={isAdmin ? 5 : 4} className="text-center py-4 text-gray-500">
                  No transactions found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default TransactionTable;