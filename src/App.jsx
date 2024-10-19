import React from "react";
import SneakerBlock from "./components/SneakerBlock/SneakerBlock";
import SneakerPanel from "./components/SneakerPanel/SneakerPanel";
import Header from "./components/Header/Header";

import "./App.scss";

function App() {
  const [items, setItems] = React.useState([]);

  React.useEffect(() => {
    fetch("https://67096832af1a3998baa16c52.mockapi.io/sneaker-react-app")
      .then((res) => res.json())
      .then((json) => setItems(json));
  }, []);

  return (
    <>
      <div className="wrapper-content">
        <Header />
        <SneakerPanel />
        <div className="centred-items">
          {items.map((item) => (
            <SneakerBlock
              key={item.id}
              name={item.title}
              imageUrl={item.imageUrl}
              price={item.price}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
