import { VFC } from 'react';
import { BrowserRouter, Routes, Route, } from 'react-router-dom';
import { StateProvider } from './context/StateProvider';
import { Layout } from './components/Layout';
import { ClassicalFetchA } from './components/ClassicalFetchA';
import { ClassicalFetchB } from './components/ClassicalFetchB';

const App: VFC = () => {
  return (
  <BrowserRouter>
    <StateProvider>
      <Layout>
        <Routes>
          <Route path="/fetch-a" element={<ClassicalFetchA/>} />
          <Route path="/fetch-b" element={<ClassicalFetchB/>} />
        </Routes>
      </Layout>
    </StateProvider>
  </BrowserRouter>
  )
}

export default App;
