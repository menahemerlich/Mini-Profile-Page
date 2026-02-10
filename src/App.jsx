import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import ProfileCard from './components/ProfileCard'

function App() {
  return (
    <div className='body'>
      <Header />
      <main>
        <ProfileCard avatar='../public/profil.jpg' name='Menahem Erlich' description='A student trying to show that he knows how to do something' personType='Student' />
        <ProfileCard avatar='../public/2.webp' name='Etty Erlich' description='e0556735893@gmail.com' personType='Teacher' />
        <ProfileCard avatar='../public/3.webp' name='Shaindy Erlich' description='scheindi@gmail.com' personType='Friend' />
        <ProfileCard avatar='../public/4.webp' name='Israel Erlich' description='ierlich@gmail.com' personType='Friend' />
      </main>
      <Footer/>
    </div>
  )
}

export default App
