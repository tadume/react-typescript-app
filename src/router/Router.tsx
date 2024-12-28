import { FC, memo } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Login } from '../components/pages/Login';
import { HomeRoutes } from './HomeRoutes';

export const Router: FC = memo(() => {
  return (
    <Routes>
      <Route path="/">
        <Route index={true} element={<Login />} />
        <Route path="home">
          {HomeRoutes.map((url) => (
            <Route key={url.path} path={url.path} element={url.element} />
          ))}
        </Route>
      </Route>
    </Routes>
  );
});
