

import MainPage from '../mainPage/mainPage';

type AppProbs = {
  cardCount: number;
};

function App({cardCount}:AppProbs):JSX.Element {
  return (
    <MainPage cardCount={cardCount}/>
  );
}

export default App;
