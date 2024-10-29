import logo from './logo.svg';
import './App.css';
import Header from './Header';
import HomeSection from './HomeSection';
import PricingSection from './PricingSection';
import SponserSection from './SponserSection';

function App() {
  return (
    <div className="App">
      <Header />
      <HomeSection />
      <PricingSection />
      <SponserSection />
    </div>
  );
}

export default App;
