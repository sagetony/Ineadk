import './App.css';
import {
  Routes,
  Route,
  useParams,
  Navigate,
  useLocation,
} from 'react-router-dom';
import { Landing } from './pages/Landing/Landing';
import Login from './pages/Login/Login';
import RoleSelection from './pages/Signup/RoleSelection';
import FreelancerSignUp from './pages/Signup/FreelanceS';
import CompanySignUp from './pages/Signup/CompanyS';
import Dashboard from './pages/Dashboard/Freelancer/Home/Dashboard';
import Footer from './components/Footer/Footer';
import Project from './pages/Dashboard/Freelancer/Projects/Project';
import Message from './pages/Dashboard/Freelancer/Support/Support';
import Profile from './pages/Dashboard/Freelancer/Profile/Profile';
import Support from './pages/Dashboard/Freelancer/Messages/Support';
import Earnings from './pages/Dashboard/Freelancer/Earnings/Earnings';
import Settings from './pages/Dashboard/Freelancer/Settings/Settings';
import { useRole } from './context/RoleContext';
import Dashboard2 from './pages/Dashboard/Company/Home/Dashboard2';
import JobSearchResults from './pages/Search/JobSearchResults';
import { useEffect } from 'react';
import Jobs from './pages/Dashboard/Company/Jobs/Jobs';
import FreelanceSearchResults from './pages/Search/FreelanceSearchResults';
import Message2 from './pages/Dashboard/Company/Support/Support';
// import PrivateRoutes from './routes/PrivateRoutes';
import FreelancerSearchDetails from './pages/Details/FreelancerSearchDetails';
import JobSearchDetails from './pages/Details/JobSearchDetasil';

function App() {
  const { role } = useRole();
  const location = useLocation();
  const searchQuery = new URLSearchParams(location.search).get('query');

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top whenever the route changes
  }, [location.pathname]);

  return (
    <>
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='/login' element={<Login />} />
        <Route path='/role-selection' element={<RoleSelection />} />
        <Route path='/signup/freelancer' element={<FreelancerSignUp />} />
        <Route path='/signup/company' element={<CompanySignUp />} />
        {/* <FREELANCER>  </FREELANCER> */}
        {/* <Route path='/' element={<PrivateRoutes />}> */}
        <Route path='/freelancer/dashboard' element={<Dashboard />} />
        <Route path='/freelancer/projects' element={<Project />}></Route>
        <Route
          path='/search/jobs'
          element={<JobSearchResults searchQuery={searchQuery} />}
        />
        <Route path='/freelancer/support' element={<Message />} />
        <Route path='/freelancer/profile' element={<Profile />} />
        <Route path='/freelancer/earnings' element={<Earnings />} />
        <Route path='/freelancer/settings' element={<Settings />} />
        <Route path='/freelancer/message' element={<Support />} />
        {/* </FREELANCER> */}
        {/* CLIENT */}
        <Route path='/company/dashboard' element={<Dashboard2 />} />
        <Route path='/company/jobs' element={<Jobs />} />
        <Route path='/company/support' element={<Message2 />} />{' '}
        <Route path='/company/message' element={<Message />} />{' '}
        <Route
          path='/search/freelancers'
          element={<FreelanceSearchResults searchQuery={searchQuery} />}
        />
        <Route
          path='/freelancer-details/:id'
          element={<FreelancerSearchDetails />}
        />
        <Route path='/job-details/:id' element={<JobSearchDetails />} />
        {/* </Route> */}
      </Routes>
      <Footer />
    </>
  );
}

export default App;
