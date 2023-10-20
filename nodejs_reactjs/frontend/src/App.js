import React, { useEffect, useState } from 'react';

const App = () => {
  const [backendData, setBackendData] = useState([{}]);

  useEffect(() => {
    fetch('http://localhost:5000/api')
      .then((response) => { return response.json() })
      .then((data) => { setBackendData(data) })
      .catch((error) => { console.log(error) });
  }, []);

  return (
    <div>
      {(typeof backendData.users === 'undefined') ? (
        <p>Loading...</p>
      ) : (
        backendData.users.map((user, i) => (
          <p key={i}>{user}</p>
        ))
      )}
    </div>
  );
}

export default App;
