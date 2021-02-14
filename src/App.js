import './App.css';
import Navigation from './components/Navigation/Navigation';
import 'bootstrap/dist/css/bootstrap.min.css';
import ScrollToTop from "react-scroll-to-top";
import { ReactComponent as UpArrow } from './images/upArrow.svg'

function App() {
  return (
    <div className="">
      <ScrollToTop smooth component={<UpArrow />} />
      <Navigation />
    </div>
  );
}

export default App;
