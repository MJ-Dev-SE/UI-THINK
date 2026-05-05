import { AppProvider } from './context/AppContext';
import { MainLayout } from './components/templates/MainLayout';

function App() {
  return (
    <AppProvider>
      <MainLayout />
    </AppProvider>
  );
}

export default App;
