
// // //-----------Simple Fetch---------------

import React, { useState, useEffect } from 'react';

function App() {
  const [data, setData] = useState([]);
  const [postData, setPostData] = useState('');
  const [putData, setPutData] = useState('');
  const [putId, setPutId] = useState('');
  const [deleteId, setDeleteId] = useState('');

  const fetchData = async () => {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/comments');
      const json = await response.json();
      setData(json);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handlePost = async () => {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/comments', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ title: postData }),
      });
      const json = await response.json();
      console.log('Post response:', json);
      fetchData();
    } catch (error) {
      console.error('Error posting data:', error);
    }
  };

  const handlePut = async (id) => {
    try {
      const response = await fetch(`https://jsonplaceholder.typicode.com/comments/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ title: putData }),
      });
      const json = await response.json();
      console.log('Put response:', json);
      fetchData();
    } catch (error) {
      console.error('Error updating data:', error);
    }
  };

  const handleDelete = async (id) => {
    try {
      const parsedId = parseInt(id);
      if (isNaN(parsedId)) {
        console.error('Invalid ID:', id);
        return;
      }
  
      if (parsedId < 1 || parsedId > data.length) {
        console.error('ID is out of range:', id);
        return;
      }
  
      const response = await fetch(`https://jsonplaceholder.typicode.com/comments/${parsedId}`, {
        method: 'DELETE',
      });
      const json = await response.json();
      console.log('Delete response:', json);
      fetchData();
    } catch (error) {
      console.error('Error deleting data:', error);
    }
  };



  return (
    <div>
      <h2>POST</h2>
      <input type="text" value={postData} onChange={(e) => setPostData(e.target.value)} />
      <button onClick={handlePost}>Submit</button>

      <h2>PUT</h2>
      <input type="text" value={putData} onChange={(e) => setPutData(e.target.value)} />
      <input type="text" placeholder="Enter ID" value={putId} onChange={(e) => setPutId(e.target.value)} />
      <button onClick={() => handlePut(putId)}>Update</button>

      <h2>Delete</h2>
      <input type="text" placeholder="Enter ID" value={deleteId} onChange={(e) => setDeleteId(e.target.value)} />
      <button onClick={() => handleDelete(deleteId)}>Delete</button>

      <h2>Getting Data</h2>
      <ul>
        {data.map(item => (
          <li key={item.id}>{item.email}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;





// -------------Using Axios---------------

// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// function App() {
//   const [data, setData] = useState([]);
//   const [postData, setPostData] = useState('');
//   const [putData, setPutData] = useState('');
//   const [putId, setPutId] = useState(null);
//   const [deleteId, setDeleteId] = useState(null);

//   const fetchData = async () => {
//     try {
//       const response = await axios.get('https://jsonplaceholder.typicode.com/comments');
//       setData(response.data);
//     } catch (error) {
//       console.error('Error', error);
//     }
//   };

//   useEffect(() => {
//     fetchData();
//   }, []);

//   const handlePost = async () => {
//     try {
//       const response = await axios.post('https://jsonplaceholder.typicode.com/comments', { title: postData });
//       console.log('Response of POST:', response.data);
//       fetchData();
//     } catch (error) {
//       console.error('Error', error);
//     }
//   };

//   const handlePut = async (id) => {
//     try {
//       const response = await axios.put(`https://jsonplaceholder.typicode.com/comments/${id}`, { title: putData });
//       console.log('Response of PUT:', response.data);
//       fetchData();
//     } catch (error) {
//       console.error('Error', error);
//     }
//   };


//   const handleDelete = async (id) => {
//     try {
//       const parsedId = parseInt(id); 
//       if (isNaN(parsedId)) {
//         console.error('id is Invalid:', id);
//         return;
//       }
  
      
//       if (parsedId < 1 || parsedId > data.length) {
//         console.error('ID is out of range:', id);
//         return;
//       }
  
//       const response = await axios.delete(`https://jsonplaceholder.typicode.com/comments/${parsedId}`);
//       console.log('Delete response:', response.data);
//       fetchData();
//     } catch (error) {
//       console.error('Error deleting the data:', error);
//     }
//   };


//   return (
//     <div>
//       <h2>POST</h2>

//       <input type="text" value={postData} onChange={(e) => setPostData(e.target.value)} />
//       < button onClick={handlePost}>Submit</button>
      
//       <h2>PUT</h2>
      
//       <input type="text" value={putData} onChange={(e) => setPutData(e.target.value)} />
//       <input type="text" placeholder="Enter the id" value={putId} onChange={(e) => setPutId(e.target.value)} />
//         <button onClick={() => handlePut(putId)}>Update</button>

//       <h2>Delete</h2>

//       <input type="text" placeholder="Enter the id" value={deleteId} onChange={(e) => setDeleteId(e.target.value)} />
//        <button onClick={() => handleDelete(deleteId)}>Delete</button>

//       <h2>Getting Data</h2>
//       <ul>
//         {data.map(item => (
//           <li key={item.id}>{item.email}</li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default App;
