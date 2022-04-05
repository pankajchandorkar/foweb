import './App.scss';
import { Container } from '@material-ui/core';
import FutureOccupancyReport from "./components/FutureOccupancyReport";
import { makeStyles } from "@material-ui/styles";

function App() {

  const useStyles = makeStyles({
    mainContainer: {
     // border:"solid 1px red"
    }
  });

  const classes = useStyles();

  return (
    <Container maxWidth={false} disableGutters className={classes.mainContainer}>
      <FutureOccupancyReport />
    </Container>
  );
}

export default App;
