import { ConfigProvider } from 'antd';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomePage from './pages/page';


const router = createBrowserRouter([
  {
    path: '/',
    element: <></>,
    children: [
      {
        index: true,
        element: <HomePage/>
      }
    ]
  }
])


function App() {
  return <ConfigProvider>      
      <RouterProvider router={router} />
  </ConfigProvider>;
}

export default App;
