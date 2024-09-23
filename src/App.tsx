import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';
import CommunityPage from './pages/community/page';
import HomePage from './pages/page';
import RecruitPage from './pages/recruit/page';
import theme from './styles/theme';
import Layout from '@/components/layout/Layout';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: 'recruit',
        element: <RecruitPage />,
      },
      {
        path: 'community',
        element: <CommunityPage />,
      },
    ],
  },
]);

function App() {
  return (
    <ChakraProvider theme={theme}>
      <RouterProvider router={router} />
    </ChakraProvider>
  );
}

export default App;
