import React from "react";

const Dashboard = ({ user }) => {
  const { name, email } = user;
  return (
    <section className="section">
      <h4>hello, {name} </h4>
    </section>
  );
};
export default Dashboard;
