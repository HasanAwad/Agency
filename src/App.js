import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import GlobalStyle from "./globalStyles";
import { Navbar } from "./components";
import Theme from "./Theme";
function App() {
  return (
    <Theme>
      <Router>
        <GlobalStyle />
        <Navbar />
      </Router>
    </Theme>
  );
}

export default App;
