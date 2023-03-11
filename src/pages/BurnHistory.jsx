import React, { useState } from "react";
import LineChart from "../components/LineChart";
import { SlingData } from "../Data";
import Tables from "../components/Tables";

const BurnHistory = () => {
//   const [slingData, setSlingData] = useState({
//     labels: SlingData.map((data) => data.percentage),

//     datasets: [
//       {
//         label: "Burn Gained",
//         data: SlingData.map((data) => data.burntAmount),
//         backgroundColor: ["red"],
//       },
//     ],
//   });

  

  return (
    <div>
      <h1>Burn History</h1>
      <div className="container center">
        <div style={{ width: 700 }}>
          {/* <LineChart chartData={slingData} /> */}
        </div>
      </div>
      <div>
        <Tables
          tableTitle={"Burn Transactions"}
          tableClass={"data-table-history"}
          pagination={true}
        />
      </div>
    </div>
  );
};

export default BurnHistory;
