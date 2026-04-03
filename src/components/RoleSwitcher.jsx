import { useContext } from "react";
import { AppContext } from "../context/AppContext";

function RoleSwitcher() {
  const { role, setRole } = useContext(AppContext);

  return (
    <div className="mb-6 flex items-center space-x-4">
      <span className="font-medium">Role:</span>
      <select
        value={role}
        onChange={(e) => setRole(e.target.value)}
        className="p-2 border border-gray-300 rounded"
      >
        <option value="viewer">Viewer</option>
        <option value="admin">Admin</option>
      </select>
    </div>
  );
}

export default RoleSwitcher;