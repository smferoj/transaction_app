import React, { useState } from "react";

const Expenses = () => {
  const [expenseTransactions, setExpenseTransactions] = useState([]);
  const [newExpense, setNewExpense] = useState(0);

  const handleAddExpense = () => {
    if (newExpense !== 0) {
      setExpenseTransactions([...expenseTransactions, newExpense]);
      setNewExpense(0);
    }
  };

  return (
    <div className="bg-white rounded-lg p-4 shadow-md">
  <h2 className="text-3xl text-center text-red-600 font-semibold mb-4">Expenses</h2>
  <ul>
    {expenseTransactions.map((transaction, index) => (
      <li key={index} className="mb-2 text-red-600">
        - {transaction}
      </li>
    ))}
  </ul>
  <div className="mt-4">
    <input
      type="number"
      value={newExpense}
      onChange={(e) => setNewExpense(parseFloat(e.target.value))}
      className="block w-full border-gray-300 rounded-lg px-3 py-2"
    />
    <button
      onClick={handleAddExpense}
      className="mt-2 bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 focus:outline-none focus:ring focus:ring-red-200"
    >
      Add Expense
    </button>
  </div>
</div>
  );
};

export default Expenses;