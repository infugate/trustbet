import React, { useState } from 'react';
import "./CurrentBet.css";
import "./AccountStat.css";
function CurrentBet() {

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
     <h1>Current Bet</h1>
     </div>
      <div className="form-container">
     
        <div>
          <select 
            id="reportType" 
            value={reportType} 
            onChange={(e) => setReportType(e.target.value)} 
          >
         
            <option value="Deposite/Withdraw Reports">Sports </option>
            <option value="Deposite/Withdraw Reports">Casino </option>
   
          </select>
        </div>
        <button onClick={handleSubmit}>Submit</button>
      </div>

      <div className="enties">
        <p>Shows</p>
         <select id="entriesDropdown">
           <option value="10">10</option>
           <option value="20">20</option>
           <option value="30">30</option>
           <option value="40">40</option>
           <option value="50">50</option>
         </select>
         <p>Entris</p>
         

      <div className="main">
      <div className="cont2">
         <input type="radio" id="all" name="option" />
         <label for="all">All</label>

         <input type="radio" id="back" name="option"/>
         <label for="back">Back</label>

         <input type="radio" id="lay" name="option"/>
           <label for="lay">Lay</label>

        </div>


         <div className="cont3">
                <p>Total Bets : 0</p>
                <p>Total Amount : 0</p>

         </div>
      </div>

         <div className="search">
                <label htmlFor="">Search</label>
                <input type="text" placeholder='Search here '/>
         </div>
      </div>
      <table>
        <thead>
          <tr>
            <th>Sports</th>
            <th>Event Name</th>
            <th>Market Name</th>
            <th>Nation</th>
            <th>User Rate</th>
            <th>Amount</th>
            <th>Place Date</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((transaction) => (
            <tr key={transaction.id}>
              <td>{transaction.date}</td>
              <td>{transaction.srNo}</td>
              <td>{transaction.credit}</td>
              <td>{transaction.debit}</td>
              <td>{transaction.pts}</td>
              <td>{transaction.remark}</td>
              <td>{transaction.remark}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default CurrentBet;