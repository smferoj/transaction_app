import React, { useState } from "react";

const Income = () => {
  const [incomeTransactions, setIncomeTransactions] = useState([]);
  const [newIncome, setNewIncome] = useState(0);

  const handleAddIncome = () => {
    if (newIncome !== 0) {
      setIncomeTransactions([...incomeTransactions, newIncome]);
      setNewIncome(0);
    }
  };

  return (
<div className="bg-white p-4 shadow-md pt-5">
  <h2 className="text-3xl text-center text-green-500 font-semibold mb-4">Incomes</h2>
  <ul>
    {incomeTransactions.map((transaction, index) => (
      <li key={index} className="mb-2 text-green-600">
        + {transaction}
      </li>
    ))}
  </ul>
  <div className="mt-4">
    <input
      type="number"
      value={newIncome}
      onChange={(e) => setNewIncome(parseFloat(e.target.value))}
      className="block w-full border-gray-300 rounded-lg px-3 py-2"
    />
    <button
      onClick={handleAddIncome}
      className="mt-2 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-200"
    >
      Add Income
    </button>
  </div>
</div>

  );
};

export default Income;