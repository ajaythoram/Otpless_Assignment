import React, { useEffect, useState } from 'react';

const Dashboard = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const storedUserData = JSON.parse(localStorage.getItem('userDetails')) || [];
    // For demonstration purposes, you can select the first user in the array
    const currentUser = storedUserData[0];
    setData(currentUser);
    console.log(data);
  }, []);

  return (
    <div>
      {data ? (
        <>
          <h2>Welcome back, {data.name}!</h2>
          <p>Username: {data.username}</p>
          <p>Email: {data.email}</p>
          <p>Mobile : {data.phoneNumber}</p>
        </>
      ) : (
        <p>User not found.</p>
      )}
    </div>
  );
};

export default Dashboard;
