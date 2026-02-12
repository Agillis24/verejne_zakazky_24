import { createHashRouter } from 'react-router-dom';
import { RootLayout } from './components/RootLayout';
import { Home } from './pages/Home';
import { Aktuality } from './pages/Aktuality';
import { ArticleDetail } from './pages/ArticleDetail';
import { VideoDetail } from './pages/VideoDetail';
import { NotFound } from './pages/NotFound';

export const router = createHashRouter([
  {
    path: '/',
    Component: RootLayout,
    children: [
      { index: true, Component: Home },
      { path: 'aktuality', Component: Aktuality },
      { path: 'aktuality/:id', Component: ArticleDetail },
      { path: 'video/:id', Component: VideoDetail },
      { path: '*', Component: NotFound },
    ],
  },
]);