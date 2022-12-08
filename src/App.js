import { Routes, BrowserRouter, Route } from 'react-router-dom';
import Login from './components/Login/Login';
import Signup from './components/Signup/Signup';
import Welcome from './components/Welcome/WelForStud/Welcome';
import ShowInfo from './components/ShowInfo/ShowInfo';
import ScanQR from './components/ScanQR/ScanQR';
import ReviewQR from './components/PreviewQR/PreviewQR';
import Infor from './components/Infor/Infor';
import GenerateQR from './components/GenereteQR/GenerateQR';
import Files from './components/Files/Files';
import Course1 from './components/Course/Course1/Course1';
import Course2 from './components/Course/Course2/Course2';
import Notification from './components/Notification/forStud/Notification';
import WelcomeForTeach from './components/Welcome/WelForTeach/WelcomeForTeach';
import Choose1 from './components/Choose/Choose1/Choose1';
import Choose2 from './components/Choose/Choose2/Choose2';
import NotificationForTeach from './components/Notification/forTeach/NotificationForTeach';

const App = () => {
  return (
      <BrowserRouter>
        <Routes>
            <Route path='/' element={<Login/>}/>
            <Route path='login' element={<Login/>}/>
            <Route path="signup" element={<Signup/>}/>
            <Route path="welcome" element={<Welcome/>}/>
            <Route path="welcomeforteach" element={<WelcomeForTeach/>}/>
            <Route path="showinfo" element={<ShowInfo/>}/>
            <Route path="infor" element={<Infor/>}/>
            <Route path="scanqr" element={<ScanQR/>}/>
            <Route path="reviewqr" element={<ReviewQR/>}/>
            <Route path="notification" element={<Notification/>}/>
            <Route path="notificationforteach" element={<NotificationForTeach/>}/>
            <Route path="generateqr" element={<GenerateQR/>}/>
            <Route path="files" element={<Files/>}/>
            <Route path="course1" element={<Course1/>}/>
            <Route path="course2" element={<Course2/>}/>
            <Route path="choose1" element={<Choose1/>}/>
            <Route path="choose2" element={<Choose2/>}/>
        </Routes>
      </BrowserRouter>
  );
}

export default App;
