import './App.scss';
import { Container } from '@material-ui/core';
import FutureOccupancyReport from "./components/FutureOccupancyReport";

function App() {
  return (
    <Container maxWidth={false} disableGutters className="mainContainer">
      <FutureOccupancyReport />
    </Container>
  );
}

export default App;