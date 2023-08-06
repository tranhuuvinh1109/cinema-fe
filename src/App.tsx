import './App.css';
import { RouterProvider } from 'react-router-dom';
import route from './route';
import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient();
function App () {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={route} />
    </QueryClientProvider>
  );
}

export default App;
