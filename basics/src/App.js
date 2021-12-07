import Fcomponent from './Fcomponent';
import Ccomponent from './Ccomponent';
import CcCounter from './CcCounter'
import Menu from './Menu';

function App() {
  return (
    <div>
      
        <Fcomponent name="Alex" />
        <Ccomponent number={[ 1, 2, 3 ]} />
        <Menu />

        <CcCounter />

    </div>
  )
}

export default App;
