import GlobalStyle from './globalStyles';
import Styled from 'styled-components';

import KeyboardTyper from './components/KeyboardTyper';
import SideMenu from './components/Menu/SideMenu';

const MainContainer = Styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  background-color: var(--bg-color);
  justify-content: center;
  align-items: center;

`;

function App() {
  return (
    <>
      <GlobalStyle />
      <MainContainer>
        <KeyboardTyper
          text={
            'etitient trient etine irite nient little rein inite eline elie etine little trient eit etire ininter etin eline nientle'
          }
        />
        <SideMenu />
      </MainContainer>
    </>
  );
}

export default App;
