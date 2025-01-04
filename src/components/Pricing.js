import React, { useState } from "react";

function Pricing() {
  const [selectedPlan, setSelectedPlan] = useState("");

  // Function to handle selecting a plan
  const handleSelectPlan = (plan) => {
    setSelectedPlan(plan);
  };

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h2>Choose Your Plan</h2>
      <div className="pricing-container">
        {/* Basic Plan */}
        <div
          className={`pricing-card ${
            selectedPlan === "basic" ? "selected" : ""
          }`}
          onClick={() => handleSelectPlan("basic")}
          style={{
            padding: "20px",
            borderRadius: "8px",
            backgroundColor: selectedPlan === "basic" ? "#e0f7fa" : "#fff",
            cursor: "pointer",
          }}
        >
          <h3>Basic</h3>
          <p>Price: $2/month</p>
          <p>This is the basic plan with limited features.</p>
          <button>Choose Basic</button>
        </div>

        {/* Standard Plan */}
        <div
          className={`pricing-card ${
            selectedPlan === "standard" ? "selected" : ""
          }`}
          onClick={() => handleSelectPlan("standard")}
          style={{
            padding: "20px",
            borderRadius: "8px",
            backgroundColor: selectedPlan === "standard" ? "#e0f7fa" : "#fff",
            cursor: "pointer",
          }}
        >
          <h3>Standard</h3>
          <p>Price: $5/month</p>
          <p>This plan offers more features and better support.</p>
          <button>Choose Standard</button>
        </div>

        {/* Lifetime Plan */}
        <div
          className={`pricing-card ${
            selectedPlan === "lifetime" ? "selected" : ""
          }`}
          onClick={() => handleSelectPlan("lifetime")}
          style={{
            padding: "20px",
            borderRadius: "8px",
            backgroundColor: selectedPlan === "lifetime" ? "#e0f7fa" : "#fff",
            cursor: "pointer",
          }}
        >
          <h3>Lifetime</h3>
          <p>Price: $10 one-time payment</p>
          <p>This plan provides lifetime access to all features.</p>
          <button>Choose Lifetime</button>
        </div>
      </div>

      {selectedPlan && (
        <div style={{ marginTop: "20px", fontSize: "18px" }}>
          <h3>
            You have selected:{" "}
            {selectedPlan.charAt(0).toUpperCase() + selectedPlan.slice(1)} Plan
          </h3>
          <p>
            We will proceed with the payment of $
            {selectedPlan === "basic"
              ? "2"
              : selectedPlan === "standard"
              ? "5"
              : "10"}
            .
          </p>
        </div>
      )}
    </div>
  );
}

export default Pricing;
