import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { Fragment } from 'react';

import DefaultLayout from './components/Layout/DefalutLayout';
import {publicRouters} from'./routers'


function App() {
  return (
    <BrowserRouter>
      <Routes>
          {publicRouters.map((route,index) =>{
            let LayoutDefalut = DefaultLayout

            if(route.layout){
              LayoutDefalut = route.layout
            }
            else if(route.layout === null){
              route.layout = Fragment
            }

           const Page = route.Component
           return <Route 
              key={index}
              path={route.path}
              element={<LayoutDefalut><Page/></LayoutDefalut>}
            />
          })}
          
      </Routes>
    </BrowserRouter>
  );
}

export default App;
