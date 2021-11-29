import { VFC } from 'react';
import { BrowserRouter, Routes, Route, } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'
import { StateProvider } from './context/StateProvider';
import { Layout } from './components/Layout';
import { ReactQueryA } from './components/ReactQueryA';
import { ReactQueryB } from './components/ReactQueryB';
import { ClassicalFetchA } from './components/ClassicalFetchA';
import { ClassicalFetchB } from './components/ClassicalFetchB';
import { MainContext } from './components/MainContext';
import { MainRTKit } from './components/MainRTkit';

const queryClient = new QueryClient({
    // useQueryにここで決めたデフォルトオプションが適用される
    defaultOptions: {
        queries: { 
            retry: false, 
            // fetch関数のリトライをしない
            // デフォルトでは3回までリトライする
            refetchOnWindowFocus: false,　
            // ブラウザがフォーカスされた時に再取得するかどうか
            // 余計なフェッチをしないためにfalseに
        },
    },
});

const App: VFC = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <StateProvider>
          <Layout>
            <Routes>
              <Route path="/" element={<ReactQueryA/>} />
              <Route path="/query-b" element={<ReactQueryB/>} />
              <Route path="/fetch-a" element={<ClassicalFetchA/>} />
              <Route path="/fetch-b" element={<ClassicalFetchB/>} />
              <Route path="/main-context" element={<MainContext/>} />
              <Route path="/main-rtkit" element={<MainRTKit/>} />
            </Routes>
          </Layout>
        </StateProvider>
      </BrowserRouter>
      <ReactQueryDevtools initialIsOpen={false}/>
      {/* サーバー起動時に開発ツールを起動するかどうか */}
    </QueryClientProvider>
  )
}

export default App;
