import React, { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

const MainComponent = React.lazy(() => import(/* webpackChunkName: "MainPage" */ './pages/Main'));
const IssuesComponent = React.lazy(
  () => import(/* webpackChunkName: "RepositoryIssuesPage" */ './pages/RepositoryIssues')
);

const App = () => {
  return (
    <Suspense fallback={<div>loading...</div>}>
      <Routes>
        <Route path="/" element={<MainComponent />}></Route>
        <Route path="/issues" element={<IssuesComponent />}></Route>
      </Routes>
    </Suspense>
  );
};

export default App;
