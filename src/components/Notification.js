import React from "react";

const Notification = ({ message }) => {
  return (
    <div>
      <p className="msgStyle">{message}</p>
    </div>
  );
};

export default Notification;
