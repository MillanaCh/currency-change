import "./App.css";
import { useEffect, useState } from "react";
import Currency from "./components/Currency";
import Header from "./components/Header";

function App() {
  const [data, setData] = useState([]);
  const [input1, setInput1] = useState();
  const [input2, setInput2] = useState();
  const [select1, setSelect1] = useState("USD");
  const [select2, setSelect2] = useState("USD");
  const [rates, setRates] = useState([]);

  let myHeaders = new Headers();
  myHeaders.append("apikey", "CR2n86eeiYYQniaCAZFt0tnCHwCHyP8l");

  let requestOptions = {
    method: "GET",
    redirect: "follow",
    headers: myHeaders,
  };

  // const fetchingTheData = async () => {
  //   try {
  //     let data = await fetch(
  //       "https://api.apilayer.com/fixer/latest?base=USD&symbols=EUR,USD,UAH",
  //       requestOptions
  //     );
  //     let response = await data.json();
  //     setData(response);
  //     setRates(response.rates);
  //   } catch (error) {
  //     alert(error?.message);
  //   }
  // };
  // useEffect(() => {
  //   fetchingTheData();
  // }, []);

  function handleInput1Change(input1) {
    setInput2(((input1 * rates[select2]) / rates[select1]).toFixed(2));
    setInput1(input1);
  }

  function handleSelect1Change(select1) {
    setInput2(((input1 * rates[select2]) / rates[select1]).toFixed(2));
    setSelect1(select1);
  }

  function handleInput2Change(input2) {
    setInput1(((input2 * rates[select2]) / rates[select1]).toFixed(2));
    setInput2(input2);
  }

  function handleSelect2Change(select2) {
    setInput1(((input2 * rates[select1]) / rates[select2]).toFixed(2));
    setSelect2(select2);
  }
  return (
    <div className="App">
      <header className="main-header">
        <Header data={data} rates={rates} />
      </header>
      <div className="main-body">
        <div className="currency-part">
          <Currency
            rates={Object.keys(rates)}
            input={input1}
            select={select1}
            onChangeInput={handleInput1Change}
            onChangeSelect={handleSelect1Change}
          />
        </div>
        <div className="currency-part">
          <Currency
            rates={Object.keys(rates)}
            input={input2}
            select={select2}
            onChangeInput={handleInput2Change}
            onChangeSelect={handleSelect2Change}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
