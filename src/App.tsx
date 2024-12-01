import './styles/reset.css';
import './styles/common.css';
import { Header } from './components/header/Header';
import { Outlet } from 'react-router';
import { Footer } from './components/footer/Footer';
import { UserProvider } from './components/context/UserContext';

function App() {
  return (
    <UserProvider>
      <Header />

      <main>
        <Outlet />
      </main>

      <Footer />
    </UserProvider>
  );
}

export default App;
