import React, { Fragment, useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { routes } from './Routes';
import AppPage from './components/AppPage';
import "./App.scss";
import AOS from "aos";
import "aos/dist/aos.css";
import Loading from './components/Pagejsx/Loading'
import NoticationBox from './components/Pagejsx/NoticationBox';
import OnlinePhone from './components/Pagejsx/OnlinePhone';
const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true)
    setIsLoading(false)
  }, [])

  React.useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);

  return (
    <div className='max-w-[1250px] mx-auto bg-white dark:bg-gray-900 dark:text-white duration-200 MobiA-Auto'>
      <Loading isLoading={isLoading}>
        <Router basename="/autopaint">
          <NoticationBox />
          <OnlinePhone />
          <Routes>
            {routes.map((route) => {
              const Page = route.page
              const Layout = route.isShowHeader ? AppPage : Fragment
              return (
                <Route key={route.path} path={route.path} element={
                  <Layout>
                    <Page />
                  </Layout>
                } />
              )
            })}
          </Routes>
        </Router>
      </Loading>
    </div>
  )
}

export default App