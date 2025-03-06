import React, { useState } from 'react';
import "./AccountStat.css";
function CasinoSet() {
  const [startDate, setStartDate] = useState('11/12/2024');
  
  const [reportType, setReportType] = useState('Deposite/Withdraw Reports');
  const [transactions, setTransactions] = useState([4845454,5444]); 

  const handleSubmit = () => {
    // Fetch transactions based on selected date range and report type
    // ... (Replace with your API call or data fetching logic)
    // Example:
    // const newTransactions = fetchData(startDate, endDate, reportType);
    // setTransactions(newTransactions);
  };

  return (
    <div className="account-statement-container">
     <div className="stat">
     <h1>Casino Result</h1>
     </div>
      <div className="form-container">
        <div>
          <input 
            type="date" 
            id="startDate" 
            value={startDate} 
            onChange={(e) => setStartDate(e.target.value)} 
          />
        </div>
       
        <div>
          <select 
            id="reportType" 
            value={reportType} 
            onChange={(e) => setReportType(e.target.value)} 
          >
            <option value="Deposite/Withdraw Reports">Deposite/Withdraw Reports</option>
            <option value="Deposite/Withdraw Reports">Sport Report</option>
            <option value="Deposite/Withdraw Reports">Casino Report</option>
            <option value="Deposite/Withdraw Reports">Deposite/Withdraw Reports</option>
            <option value="Deposite/Withdraw Reports">Sport Report</option>
            <option value="Deposite/Withdraw Reports">Casino Report</option>
            <option value="Deposite/Withdraw Reports">Deposite/Withdraw Reports</option>
            <option value="Deposite/Withdraw Reports">Sport Report</option>
            <option value="Deposite/Withdraw Reports">Casino Report</option>
            <option value="Deposite/Withdraw Reports">Deposite/Withdraw Reports</option>
            <option value="Deposite/Withdraw Reports">Sport Report</option>
            <option value="Deposite/Withdraw Reports">Casino Report</option>
            <option value="Deposite/Withdraw Reports">Deposite/Withdraw Reports</option>
            <option value="Deposite/Withdraw Reports">Sport Report</option>
            <option value="Deposite/Withdraw Reports">Casino Report</option>
            <option value="Deposite/Withdraw Reports">Deposite/Withdraw Reports</option>
            <option value="Deposite/Withdraw Reports">Sport Report</option>
            <option value="Deposite/Withdraw Reports">Casino Report</option>
   
          </select>
        </div>
        <button onClick={handleSubmit}>Submit</button>
      </div>

      <div className="enties">
        <p>Show</p>
         <select id="entriesDropdown">
           <option value="10">10</option>
           <option value="20">20</option>
           <option value="30">30</option>
           <option value="40">40</option>
           <option value="50">50</option>
         </select>
         <p>Entris</p>

         <div className="search">
                <label htmlFor="">Search</label>
                <input type="text" placeholder='Search here '/>
         </div>
      </div>
      <table>
        <thead>
          <tr>
            <th>Round ID</th>
            <th>Winner</th>
           
          </tr>
        </thead>
        <tbody>
          {transactions.map((transaction) => (
            <tr key={transaction.id}>
              <td>{transaction.date}</td>
              <td>{transaction.srNo}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default CasinoSet;