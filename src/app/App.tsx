import { RouterProvider } from 'react-router';
import { router } from './routes';
import useAnalytics from './useAnalytics'

export default function App() {
  useAnalytics()

  return <RouterProvider router={router} />;
}