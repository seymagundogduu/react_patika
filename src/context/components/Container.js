
import {useTheme} from '../ThemeContext'
import Button from './Button';
import Footer from './Footer';
import Header from './Header';
import Profile from './Profile';



function Container() {
    const {theme} = useTheme();

  return (
    <div className={`app ${theme}`}>
   
      <Header/>
      <hr/>
      <Button/>
      <hr/>
      <Profile/>
      <hr/>
      <Footer />

  
  </div>
  )
}

export default Container