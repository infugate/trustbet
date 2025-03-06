// import React, { useState } from 'react';
// import "./AccountStat.css";
// function AccountStat() {
//   const [startDate, setStartDate] = useState('11/12/2024');
//   const [endDate, setEndDate] = useState('18/12/2024');
//   const [reportType, setReportType] = useState('Deposite/Withdraw Reports');
//   const [transactions, setTransactions] = useState([4845454,5444]); 

//   const handleSubmit = () => {
//     // Fetch transactions based on selected date range and report type
//     // ... (Replace with your API call or data fetching logic)
//     // Example:
//     // const newTransactions = fetchData(startDate, endDate, reportType);
//     // setTransactions(newTransactions);
//   };

//   return (
//     <div className="account-statement-container">
//      <div className="stat">
//      <h1>Account Statement</h1>
//      </div>
//       <div className="form-container">
//         <div>
//           <label htmlFor="startDate">Start Date:</label>
//           <input 
//             type="date" 
//             id="startDate" 
//             value={startDate} 
//             onChange={(e) => setStartDate(e.target.value)} 
//           />
//         </div>
//         <div>
//           <label htmlFor="endDate">End Date:</label>
//           <input 
//             type="date" 
//             id="endDate" 
//             value={endDate} 
//             onChange={(e) => setEndDate(e.target.value)} 
//           />
//         </div>
//         <div>
//           <label htmlFor="reportType">Report Type:</label>
//           <select 
//             id="reportType" 
//             value={reportType} 
//             onChange={(e) => setReportType(e.target.value)} 
//           >
//             <option value="Deposite/Withdraw Reports">Deposite/Withdraw Reports</option>
//             <option value="Deposite/Withdraw Reports">Sport Report</option>
//             <option value="Deposite/Withdraw Reports">Casino Report</option>
   
//           </select>
//         </div>
//         <button onClick={handleSubmit}>Submit</button>
//       </div>

//       <div className="enties">
//         <p>Shows</p>
//          <select id="entriesDropdown">
//            <option value="10">10</option>
//            <option value="20">20</option>
//            <option value="30">30</option>
//            <option value="40">40</option>
//            <option value="50">50</option>
//          </select>
//          <p>Entris</p>

//          <div className="search">
//                 <label htmlFor="">Search</label>
//                 <input type="text" placeholder='Search here '/>
//          </div>
//       </div>
//       <table>
//         <thead>
//           <tr>
//             <th>Date</th>
//             <th>Sr No</th>
//             <th>Credit</th>
//             <th>Debit</th>
//             <th>Pts</th>
//             <th>Remark</th>
//           </tr>
//         </thead>
//         <tbody>
//           {transactions.map((transaction) => (
//             <tr key={transaction.id}>
//               <td>{transaction.date}</td>
//               <td>{transaction.srNo}</td>
//               <td>{transaction.credit}</td>
//               <td>{transaction.debit}</td>
//               <td>{transaction.pts}</td>
//               <td>{transaction.remark}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// }

// export default AccountStat;



import React, { useState } from 'react';
import "./AccountStat.css";

function AccountStat() {
  const [startDate, setStartDate] = useState('11/12/2024');
  const [endDate, setEndDate] = useState('18/12/2024');
  const [reportType, setReportType] = useState('Deposite/Withdraw Reports');
  const [transactions, setTransactions] = useState([4845454, 5444]); 

  const handleSubmit = () => {
    // Fetch transactions based on selected date range and report type
    // Example:
    // const newTransactions = fetchData(startDate, endDate, reportType);
    // setTransactions(newTransactions);
  };

  return (
    <div className="account-statement-container">
      <div className="stat">
        <h1>Account Statement</h1>
      </div>
      <div className="form-container">
        <div>
          <label htmlFor="startDate">Start Date:</label>
          <input 
            type="date" 
            id="startDate" 
            value={startDate} 
            onChange={(e) => setStartDate(e.target.value)} 
          />
        </div>
        <div>
          <label htmlFor="endDate">End Date:</label>
          <input 
            type="date" 
            id="endDate" 
            value={endDate} 
            onChange={(e) => setEndDate(e.target.value)} 
          />
        </div>
        <div>
          <label htmlFor="reportType">Report Type:</label>
          <select 
            id="reportType" 
            value={reportType} 
            onChange={(e) => setReportType(e.target.value)} 
          >
            <option value="Deposite/Withdraw Reports">Deposite/Withdraw Reports</option>
            <option value="Sport Report">Sport Report</option>
            <option value="Casino Report">Casino Report</option>
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
        <p>Entries</p>

        <div className="search">
          <label htmlFor="">Search</label>
          <input type="text" placeholder="Search here" />
        </div>
      </div>
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Sr No</th>
            <th>Credit</th>
            <th>Debit</th>
            <th>Pts</th>
            <th>Remark</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((transaction, index) => (
            <tr key={index}>
              <td>{transaction}</td>
              <td>{index + 1}</td>
              <td>{transaction * 0.5}</td> {/* Sample data */}
              <td>{transaction * 0.3}</td> {/* Sample data */}
              <td>{transaction * 0.2}</td> {/* Sample data */}
              <td>Sample Remark</td> {/* Sample data */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default AccountStat;
