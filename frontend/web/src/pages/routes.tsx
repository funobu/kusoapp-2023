import { createBrowserRouter } from 'react-router-dom';
import HomePage from './Home/Home.tsx';

const router = createBrowserRouter([
  {
    // 待機ページ: ログイン後に表示される
    path: '/',
    element: <HomePage />,
  },
]);

export default router;
