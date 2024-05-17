import { ThemeProvider } from './context';
import { RouterProvider, createHashRouter } from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { config } from './routes';
const router = createHashRouter(config);


function App() {
  return (
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;
