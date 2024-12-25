import './App.css';
import axios from 'axios';
import { useEffect, useState } from 'react';

function App() {
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState([]);
    const url = "https://jsonplaceholder.typicode.com/posts";

    const refreshHandler = () => {
        fetchInfo();
    };

    const fetchInfo = () => {
        setLoading(true);
        axios.get(url)
            .then((response) => {
                setData(response.data);
                setLoading(false);
            })
            .catch((error) => {
                console.error("Error fetching data:", error);
                setLoading(false);
            });
    };

    useEffect(() => {
        fetchInfo();
    }, []);

    return (
        <div className="App">
            <button onClick={refreshHandler}>Refresh</button>
            <h1 style={{ color: "green" }}>Fetching</h1>
            <center>
                {loading ? (
                    <p>Loading...</p>
                ) : (
                    data.map((dataObj) => (
                        <div
                            key={dataObj.id}
                            style={{
                                width: "15em",
                                backgroundColor: "#CD8FFD",
                                padding: 10,
                                borderRadius: 10,
                                marginBlock: 10,
                            }}
                        >
                            <p style={{ fontSize: 20, color: 'white' }}>{dataObj.title}</p>
                            <p style={{ color: 'white' }}>{dataObj.body}</p>
                        </div>
                    ))
                )}
            </center>
        </div>
    );
}

export default App;
