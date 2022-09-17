import RightSide from './rightSide';
import LeftSide from './leftSide';
import Center from './center';
import Navbar from './navbar';
import './App.css';

function App() {
  return (
    <>
    <div className='top'>
      <Navbar />
    </div>

    <div className='bottom'>
      < RightSide />
      < Center />
      < LeftSide />
    </div>
    </>
  );
}

export default App;
