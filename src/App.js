import styled from 'styled-components';
import Acordeon from './component/Acordeon';

const Container = styled.main`

  width: 100vw;
  height: 100vh;
  background: rgb(13,228,126);
  background: linear-gradient(45deg, rgba(13,228,126,1) 0%, rgba(0,149,255,1) 100%);
  display: flex;
  justify-content: center;
  align-items: center;

`;

function App() {
  return (
    <Container>
      <Acordeon/>
    </Container>
  );
}

export default App;
