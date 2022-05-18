import "./App.css";
import  { useEffect, useState } from "react"
import Currency from "./components/Currency";
import Header from "./components/Header";

function App() {
  const [data, setData] = useState([]);
  let myHeaders = new Headers();
  myHeaders.append("apikey", "2UU7CNYRKnyVztS2jG7f8ActrRLfnZ1G");

  let requestOptions = {
    method: "GET",
    redirect: "follow",
    headers: myHeaders,
  };

  const fetchingTheData = async () => {
    try {
      let data = await fetch(
        "https://api.apilayer.com/exchangerates_data/convert?to=USD&from=EUR&amount=5",
        requestOptions
      );
      let response = await data.json();
      setData(response);
    } catch (error) {
      alert(error?.message);
    }
  };
  useEffect(() => {
    fetchingTheData();
  }, []);
  console.log(data);
  return (
    <div className="App">
      <div>
        <Header />
      </div>
      <div>
        <Currency />
      </div>
    </div>
  );
}

export default App;
