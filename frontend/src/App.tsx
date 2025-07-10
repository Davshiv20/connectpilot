import { Layout, Menu } from 'antd';
import { useNavigate, Routes, Route } from 'react-router-dom';
import { MessageForm } from './components/MessageGenerator/MessageForm';
import { ROUTES } from './constants/routes';

const { Header, Content } = Layout;

function App() {
  const navigate = useNavigate();

  return (
    <>
      <div style={{ border: '2px' , padding: '8px' }}>
        <Menu
          mode="horizontal"
          defaultSelectedKeys={['1']}
          onClick={({ key }) => navigate(key)}
          style={{ flex: 1 }}
          items={[
            { key: ROUTES.MAIN, label: 'Message Generator' },
            { key: ROUTES.TEMPLATES, label: 'Templates' },
            { key: ROUTES.HISTORY, label: 'History' },
            { key: ROUTES.SETTINGS, label: 'Settings' },
          ]}
        />
      </div>
      <Content style={{ padding: '24px', maxWidth: '896px', margin: '0 auto', width: '100%' }}>
        <Routes>
          <Route path={ROUTES.MAIN} element={<MessageForm />} />
          <Route path={ROUTES.TEMPLATES} element={
            <div style={{ backgroundColor: 'white', padding: '24px', borderRadius: '8px', boxShadow: '0 1px 3px rgba(0,0,0,0.1)' }}>Templates Page (Coming Soon)</div>
          } />
          <Route path={ROUTES.HISTORY} element={
            <div style={{ backgroundColor: 'white', padding: '24px', borderRadius: '8px', boxShadow: '0 1px 3px rgba(0,0,0,0.1)' }}>History Page (Coming Soon)</div>
          } />
          <Route path={ROUTES.SETTINGS} element={
            <div style={{ backgroundColor: 'white', padding: '24px', borderRadius: '8px', boxShadow: '0 1px 3px rgba(0,0,0,0.1)' }}>Settings Page (Coming Soon)</div>
          } />
        </Routes>
      </Content>
    </>
  );
}

export default App;
