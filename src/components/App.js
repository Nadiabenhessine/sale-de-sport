import Cours from './Cours.js';
import Coachs from './Coachs.js';
import Header from './Header.js';
import News from './News.js';
import Contact from './Contact.js';
import Footer from './Footer';
import HeroSection from './HeroSection';
import MasseCorporel from './MasseCorporel';
import CalculMasseCorporel from './CalculMasseCorporel';
import '../styles/App.css'



function App() {
  return (
    <div>
      <Header />
      <HeroSection titre="Réservez votre séance gratuite !"  boutton="Je m'inscris">
          <h3>Découvrez l’un de nos clubs</h3>
      </HeroSection>
      <Cours />
      <Coachs />
      <div className="row">
          <MasseCorporel />
          <CalculMasseCorporel />
      </div>
      <News />
      <HeroSection titre="Prêt pour changer ton corps ?" boutton="Rejoins-nous!"/>
      <Contact/>
      <Footer />
    </div>
  );
}

export default App;
