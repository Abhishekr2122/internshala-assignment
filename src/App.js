import "./app.css";
import Header from "./components/Header";
import Main from "./components/Main";
// import Login from "./pages/Login";

function App() {
  return (
    <div className="App">
      {/* <Login /> */}
      <section id="section-1">
        <Header />
        <Main />
      </section>
    </div>
  );
}

export default App;
