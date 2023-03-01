import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom'
import LoginIndex from './Pages/Login/LoginIndex';
import Dashboard from './Pages/Dashboard/Dashboard';
import ProtectedRoute from './Components/ProtectedRoute/ProtectedRoute';
import LandingPageIndex from './Pages/PublicPages/LandingPageIndex';
import Redirect from './Pages/404/Redirect';
import PageNotFound from './Pages/404/PageNotFound';
import HeaderIndex from './Components/Header/HeaderIndex';
import AboutUs from './Pages/PublicPages/AboutUs';
import ContactUs from './Pages/PublicPages/ContactUs';
import { useEffect, useState } from 'react';
import ForgetPassword from './Pages/Login/ForgetPassword';
import Logout from './Pages/Login/Logout';
import StudyCenterList from './Pages/StudyCenter/StudyCenterList';
import IndexCourses from './Pages/Courses/IndexCourses';
import SingleCourseView from './Pages/Courses/SingleCourseView';
import Register from './Pages/Login/Register';
import AuthIndex from './Components/Auth/AuthIndex';
import HideHeaderRoute from './Components/ProtectedRoute/FilterHeaderRoute.js';
import FilterHeaderRoute from './Components/ProtectedRoute/FilterHeaderRoute.js';
import FilterSidebar from './Components/ProtectedRoute/FilterSidebar';
import FilterSidebar2 from './Components/ProtectedRoute/FilterSidebar2';
import FilterFooterRoute from './Components/ProtectedRoute/FilterFooterRoute';
import StudentDahboard from './Pages/Student/StudentDahboard';
import CurrentAffairsList from './Pages/Admin/CurrentAffairs.js/CurrentAffairsList';
import CourseList from './Pages/Admin/ManageCourses/CourseList';
import StudentsList from './Pages/Admin/ManageStudents/StudentsList';
import TeachersList from './Pages/Admin/ManageTeachers/TeachersList';
import FilterStudentRoute from './Components/ProtectedRoute/FilterStudentRoute';
import Faq from './Pages/PublicPages/Faq';
import MainLandingPageIndex from './Pages/LandingPage/MainLandingPageIndex';
import CourseDetailsIndex from './Pages/Courses/CourseDetailsIndex';
import CartIndex from './Pages/Cart/CartIndex';
import { cartCountContext } from './Components/Common/Context/CartCountContext';
import AllCourses from './Pages/Courses/AllCourses';
import OrderHistory from './Pages/Cart/OrderHistory';
import Profile from './Pages/Profile/Profile';
import Certification from './Pages/Certification/Certification';
import BoughtCoursesList from './Pages/Student/MyCourses/BoughtCoursesList';
import CertificateIndex from './Pages/Student/Cerificate/CertificateIndex';
import PlayCourse from './Pages/Student/MyCourses/PlayCourse';
import StripeIndex from './Pages/Payment/Stripe/StripeIndex';
import AddNewCourse from './Pages/Admin/ManageCourses/AddNewCourse';

function App() {
  const [cartItemCount, setCartItemCount] = useState(0)

  const { isLogedIn, user, bearerHeader } = AuthIndex();

  const cartValue = {
    updateCartCount: (value) => { setCartItemCount(value) },
    cartCount: cartItemCount
  }


  return (
    <>
      <cartCountContext.Provider value={cartValue}>

        <div className='grid grid-cols-12 bg-white'>
          <div className={`col-span-12  h-full`}>

            <Routes>
              <Route element={<FilterHeaderRoute />}>  {/* Show Header */}

                <Route element={<FilterSidebar2 />} > {/* Show Sidebar */}
                  <Route element={<ProtectedRoute />} > {/* Admin Private Routes */}

                    <Route exact path="/dashboard" element={<Dashboard />} />
                    <Route exact path="/CenterList" element={<StudyCenterList />} />
                    <Route exact path="/CurrentAffairs" element={<CurrentAffairsList />} />
                    
                    <Route exact path="/CourseList" element={<CourseList />} />
                    <Route exact path="/CourseList/add" element={<AddNewCourse />} />


                    <Route exact path="/StudentsList" element={<StudentsList />} />
                    <Route exact path="/TeachersList" element={<TeachersList />} />
                  </Route>


                  <Route element={<FilterStudentRoute />} > {/* Student Private Routes */}
                    <Route path="/StudentDahboard" element={<StudentDahboard />} />
                    <Route path="/order-history" element={<OrderHistory />} />
                    <Route path="/my-courses" element={<BoughtCoursesList />} />
                    <Route path="/play" element={<PlayCourse />} />
                    <Route path="/certificates" element={<CertificateIndex />} />
                  </Route>
                </Route>

                <Route element={<FilterFooterRoute />} > Show Footer

                  {/* <Route path="/courses" element={<IndexCourses />} /> */}
                  <Route path="/courses/:id" element={<SingleCourseView />} />

                  {/* <Route path="/" element={<LandingPageIndex />} /> */}

                  {/* ADDED ROUTES BY TALIB FOR LANDING PAGE*/}
                  <Route path="/" element={<MainLandingPageIndex />} />
                  {/* ADDED ROUTES BY TALIB FOR SINGLE COURSE DETAILS PAGE */}
                  <Route exact path="/course-details/:courseName/:courseId" element={<CourseDetailsIndex />} />
                  {/* ADDED ROUTES BY TALIB FOR COURSES PAGE */}
                  <Route path="/courses" element={<AllCourses />} />
                  {/* ADDED ROUTES BY TALIB FOR PROFILE PAGE */}
                  <Route path="/profile" element={<Profile />} />
                  {/* ADDED ROUTES BY TALIB FOR PROFILE PAGE */}
                  <Route path="/certification" element={<Certification />} />

                  <Route path="/test" element={<StripeIndex />} />
                  <Route path="/cart" element={<CartIndex />} />
                  <Route path="/contact" element={<ContactUs />} />
                  <Route path="/about" element={<AboutUs />} />
                  <Route path="/faq" element={<Faq />} />
                </Route>
              </Route>

              {/* </Route> Show Header */}


              <Route path="/login" element={<LoginIndex title="Login" />} />
              <Route path="/register" element={<Register title="Sign Up" />} />
              <Route path="/logout" element={<Logout />} />
              <Route path="/forgotPassword" element={<ForgetPassword title="Forgot Password" />} />

              {/* Page Not Found Pages */}
              <Route path="*" element={<Redirect />} />
              <Route path="/error" element={<PageNotFound />} />

            </Routes>
          </div>
        </div>
      </cartCountContext.Provider>
    </>
  );
}

export default App;