import "./App.css";
import Header from "./components/Header";
import Card from "./components/Card";
import data from "./data";

function App() {
  const cards = data.map((item) => {
    return (
      <Card
        key={item.id}
        id={item.id}
        image={item.image}
        title={item.title}
        account={item.account}
        description={item.description}
      />
    );
  });
  return (
    <div>
      <Header />
      <div className="container">{cards}</div>
    </div>
  );
}

export default App;
