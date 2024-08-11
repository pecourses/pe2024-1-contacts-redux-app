import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import ContactsPage from './pages/ContactsPage';
import Page from './pages/Page';
import PostsPage from './pages/PostsPage';

function App () {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Page />}>
          <Route index element={<h1>Home Page</h1>} />
          <Route path='/contacts' element={<ContactsPage />} />
          <Route path='/posts' element={<PostsPage />} />
          <Route path='*' element={<div>Not Found</div>} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
