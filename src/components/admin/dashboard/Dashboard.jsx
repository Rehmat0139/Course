import React from "react";
import "./Dashboard.css";
import { MoveUp, MoveDown } from "lucide-react";
import cursor from "../../../image/cursor.png";
import Sidebar from "../Sidebar";
import { ProgressBar } from "react-bootstrap";
import { CChart } from "@coreui/react-chartjs";

const Card = ({ title, qty, qtyPercentage }) => (
  <div className="col-lg-4 col-md-6 col-sm-12 mb-4">
    <div
      className="card"
      style={{
        width: "100%",
        boxShadow: "-2px 0 10px rgba(107,70,200,0.4)",
      }}
    >
      <div className="card-body d-flex align-items-center justify-content-between">
        <div className="p-4 d-flex flex-column">
          <h5 className="card-title">{title}</h5>
          <h6 className="card-subtitle mb-2 text-muted">{qty}</h6>
        </div>
        <div className="d-flex align-items-center fw-bold">
          {qtyPercentage}%
          <p className="ms-2">
            {qtyPercentage > 60 ? (
              <MoveUp style={{ color: "green" }} />
            ) : (
              <MoveDown style={{ color: "red" }} />
            )}
          </p>
        </div>
      </div>
      <p className="fw-bold text-muted text-start px-4">Since Last Month</p>
    </div>
  </div>
);

const Bar = ({ title, value, profit }) => (
  <div className="bar-container">
    <h5>{title}</h5>
    <div className="progress m-4 d-flex flex-column">
      <ProgressBar
        now={profit ? value : 0}
        label={`${value > 100 ? value : `${value}%`}`}
        variant="warning"
      />
    </div>
  </div>
);

const Chart = () => (
  <>
    <CChart
      type="line"
      data={{
        labels: currMonth(),
        datasets: [
          {
            label: "First Batch",
            backgroundColor: "rgba(220, 220, 220, 0.2)",
            borderColor: "rgba(220, 220, 220, 1)",
            pointBackgroundColor: "rgba(220, 220, 220, 1)",
            pointBorderColor: "#fff",
            data: [40, 20, 12, 39, 10, 40, 39, 80, 40],
          },
          {
            label: "Second Batch",
            backgroundColor: "rgba(151, 187, 205, 0.2)",
            borderColor: "rgba(151, 187, 205, 1)",
            pointBackgroundColor: "rgba(151, 187, 205, 1)",
            pointBorderColor: "#fff",
            data: [50, 12, 28, 29, 7, 25, 12, 70, 60],
          },
        ],
      }}
      options={{
        plugins: {
          legend: {
            labels: {
              color: "red",
            },
          },
        },
        scales: {
          x: {
            grid: {
              color: "blue",
            },
            ticks: {
              color: "green",
            },
          },
          y: {
            grid: {
              color: "yellow",
            },
            ticks: {
              color: "pink",
            },
          },
        },
      }}
    />
    <p className="fw-bold text-center mt-3">Views</p>
  </>
);

const Dashboard = () => {
  return (
    <div
      className="container-fluid"
      style={{ cursor: `url(${cursor}), default` }}
    >
      <div className="row">
        <div className="col-md-9">
          <h1 className="text-center mb-5 text-warning">Dashboard</h1>
          <p className="fw-bold text-center">
            Last change was on :{" "}
            <span className="fw-light">
              {new Date().toISOString().split("T")[0]}
            </span>
          </p>
          <div className="container">
            <div className="row justify-content-evenly">
              <Card title={"views"} qty={76} qtyPercentage={65} profit={true} />
              <Card
                title={"Users"}
                qty={130}
                qtyPercentage={84}
                profit={true}
              />
              <Card
                title={"Subscribers"}
                qty={15}
                qtyPercentage={10}
                profit={false}
              />
            </div>
          </div>
          <div
            className="container graph m-4 p-4"
            style={{
              boxShadow: "-2px 0 10px rgba(107,70,200,0.4)",
            }}
          >
            <h3>View Graph</h3>
            <div className="row">
              <div className="col-md-12">
                <Chart />
              </div>
            </div>
          </div>
          <div className="container d-flex">
            <div
              className="m-4 p-2 col-md-7 col-sm-12 col-xs-12 bar-container"
              style={{
                boxShadow: "-2px 0 10px rgba(107,70,200,0.4)",
              }}
            >
              <h4>Progress Bar</h4>
              <div className="mt-4">
                <Bar profit={true} title={"Views"} value={65} />
                <Bar profit={true} title={"Users"} value={84} />
                <Bar profit={true} title={"Subscriber"} value={10} />
              </div>
            </div>
            <div className="col-md-5">
              <h2 className="text-center">Users</h2>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <Sidebar />
        </div>
      </div>
    </div>
  );
};

function currMonth() {
  const labels = [];
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const date = new Date().getMonth();

  const remain = 11 - date;
  console.log(remain);

  for (let i = date; i < months.length; i--) {
    const element = months[i];
    labels.unshift(element);
    if (i === 0) break;
  }
  for (let i = 11; i > remain; i--) {
    if (i === date) break;
    const element = months[i];
    labels.unshift(element);
  }
  return labels;
}

export default Dashboard;
