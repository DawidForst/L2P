import logo from './logo.svg';
import './App.css';
import { Alert } from './Alert';
import clsx from 'clsx'

function App() {

const Button = ({variant, children}) => {

  return <button className={clsx=(`button`, variant)}>
    {children} PrimaryButton </button>
}


  return (
    <div>
   
    <Alert variant="info">
      This is my appiclation!
    </Alert>
    <Alert variant ="error" outlined={true}>
      Please update your email !
    </Alert>
    <Alert variant="succes" elevated={true}>
    Payment received, thank you for you purchase!
    </Alert>
    <Alert variant="warning" outlined={true} elevated={true}>
    Please update your contact information.
    </Alert>
    {/* <Button variant={'primary'}> */}
    </div>
  );
  
}

export default App;
