import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import User from './components/User';


function App() {
  return (
 <>
 <User 
 name="Şeyma"  
 surname ="Gündoğdu"  
 isLoggedIn= {true}
 age = {23} 
 friends={['Ahmet' , 'Ayşe' , 'Fatma']}
 address={{
  title: "Ereğli/Zonguldak",
  zip: 5
 }}
 />

 </>
  );
}

export default App;
