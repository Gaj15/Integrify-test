import './App.css';
import { NavigationBar, Footer } from './components';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';


function App() {
  return (
    <Container>
        <Box my={4}>
          <NavigationBar />
        </Box>
        <Footer />
    </Container>
  );
}

export default App;
