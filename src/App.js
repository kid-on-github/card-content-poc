import "./App.css";
import Card from "./components/Card";
import CardWrapper from "./components/CardWrapper";
function App() {
  return (
    <div className="App">
      <CardWrapper>
        <Card>
          <h1>Page 5</h1>
        </Card>

        <Card>
          <h1>Page 4</h1>
        </Card>

        <Card>
          <h1>Page 3</h1>
        </Card>

        <Card>
          <h1>Page 2</h1>
        </Card>

        <Card>
          <h1>Page 1</h1>
        </Card>
      </CardWrapper>
    </div>
  );
}

export default App;
