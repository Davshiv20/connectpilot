import { Layout, Menu } from 'antd';
import { useNavigate, Routes, Route } from 'react-router-dom';
import { MessageForm } from './components/MessageGenerator/MessageForm';
import { ROUTES } from './constants/routes';

const { Header, Content } = Layout;

function App() {
  const navigate = useNavigate();

  return (
    <Layout className="min-h-screen bg-gray-50">
      <Header className="flex items-center px-4 bg-white shadow-md">
        
        <Menu
          mode="horizontal"
          defaultSelectedKeys={['1']}
          onClick={({ key }) => navigate(key)}
          className="flex-1 border-none"
          items={[
            { key: ROUTES.MAIN, label: 'Message Generator' },
            { key: ROUTES.TEMPLATES, label: 'Templates' },
            { key: ROUTES.HISTORY, label: 'History' },
            { key: ROUTES.SETTINGS, label: 'Settings' },
          ]}
        />
      </Header>
      <Content className="p-6 max-w-4xl mx-auto w-full">
        <Routes>
          <Route path={ROUTES.MAIN} element={<MessageForm />} />
          <Route path={ROUTES.TEMPLATES} element={
            <div className="bg-white p-6 rounded-lg shadow">Templates Page (Coming Soon)</div>
          } />
          <Route path={ROUTES.HISTORY} element={
            <div className="bg-white p-6 rounded-lg shadow">History Page (Coming Soon)</div>
          } />
          <Route path={ROUTES.SETTINGS} element={
            <div className="bg-white p-6 rounded-lg shadow">Settings Page (Coming Soon)</div>
          } />
        </Routes>
      </Content>
    </Layout>
  );
}

export default App;
