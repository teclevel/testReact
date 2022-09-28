import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './components/pages/layout/layout';
import AboutPage from './components/pages/about-page/about-page';
import DocumentsPage from './components/pages/documents-page/documents-page';
import ExpertPage from './components/pages/expert-page/expert-page';
import MainPage from './components/pages/main-page/main-page';
import PublicationPage from './components/pages/publications-page/publications-page';
import StatisticPage from './components/pages/statistic-page/statistic-page';
import { AppRoute } from './const';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={AppRoute.Main} element={<Layout/>}>
          <Route index element={<MainPage />}/>
          <Route path={AppRoute.Statistic} element={<StatisticPage />}/>
          <Route path={AppRoute.Documents} element={<DocumentsPage />}/>
          <Route path={AppRoute.Expert} element={<ExpertPage />}/>
          <Route path={AppRoute.Publication} element={<PublicationPage />}/>
          <Route path={AppRoute.About} element={<AboutPage />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
