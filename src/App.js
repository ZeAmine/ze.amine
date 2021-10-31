import Home from "./components/Home/Home";
import "./App.css";

function App() {
  return (
    <>
      <Home />
    </>
  );
}

export default App;

// SI JE CREE DES PAGES
// <Router>
//     <Home />
//     <Switch>
//         <Route path="/" exact component={Home} />
//         <Route path="/a-propos" exact component={About} />
//         <Route path="/projets" exact component={Projects} />
//         <Route path="/contact" exact component={Contact} />
//     </Switch>
// </Router>
