import "./App.css"; // Archivo de estilos CSS
import { BrowserRouter as Router } from "react-router-dom";
import RoutesApp from "./routes/RoutesApp";
import { ThemeProvider } from "./themes/ThemeContext";

const App = () => {
  return (
    <ThemeProvider>
      <Router>
        <RoutesApp />
      </Router>
    </ThemeProvider>
  );
};

export default App;
