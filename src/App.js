import { GlobalStyle } from '../src/GlobalStyle'
import ListOfCategories from './components/ListOfCategories';
import ListOfPhotoCard from './components/ListOfPhotoCard';

function App() {
  return (
    <>
      <GlobalStyle />
      <ListOfCategories />
      <ListOfPhotoCard/>
    </>
  );
}

export default App;
