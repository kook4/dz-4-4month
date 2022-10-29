import './App.css';
import AboutUs from "./aboutUs/AboutUs";
import PortfolioPage from "./portfilioPage/PortfolioPage";
import ContactsPage from "./contactsPages/ContactsPage";

function App () {

  return(
      <>
        <div className="app">
            {/*<AboutUs/>*/}
            <PortfolioPage/>
            <ContactsPage/>
        </div>
      </>
  )
}

export default App;
