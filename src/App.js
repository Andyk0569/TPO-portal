import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import NavBar from "./Components/common/NavBar";
import Footer from "./Components/common/Footer";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import ForgotPassword from "./pages/ForgotPassword";
import ResetPassword from "./pages/ResetPassword";
import VerifyOtp from "./pages/VerifyOtp";
import About from "./pages/About";
import ContactUs from "./pages/ContactUs";
import LoadingBar from "react-top-loading-bar";
import { setProgress } from "./slices/loadingBarSlice";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import Dashboard from "./pages/Dashboard";
import OpenRoute from "./Components/core/Auth/OpenRoute";
import PrivateRoute from "./Components/core/Auth/PrivateRoute";
import MyProfile from "./Components/core/Dashboard/MyProfile";
import Setting from "./Components/core/Dashboard/Settings";
import EnrollledCourses from "./Components/core/Dashboard/EnrolledCourses";
import Cart from "./Components/core/Dashboard/Cart/index";
import { ACCOUNT_TYPE } from "./utils/constants";
import AddCourse from "./Components/core/Dashboard/AddCourse/index";
import MyCourses from "./Components/core/Dashboard/MyCourses/MyCourses";
import EditCourse from "./Components/core/Dashboard/EditCourse.jsx/EditCourse";
import Catalog from "./pages/Catalog";
import ScrollToTop from "./Components/ScrollToTop";
import CourseDetails from "./pages/CourseDetails";
import SearchCourse from "./pages/SearchCourse";
import ViewCourse from "./pages/ViewCourse";
import VideoDetails from "./Components/core/ViewCourse/VideoDetails";
import PurchaseHistory from "./Components/core/Dashboard/PurchaseHistory";
import InstructorDashboard from "./Components/core/Dashboard/InstructorDashboard/InstructorDashboard";
import { RiWifiOffLine } from "react-icons/ri";
import AdminPannel from "./Components/core/Dashboard/AdminPannel";
import ForStudents from "./pages/ForStudents";
import ForRecruiters from "./pages/ForRecruiters";
import ResumeTemplate from "./Components/core/Dashboard/ResumeTemplate"
import TestPage from "./Components/core/Dashboard/TestPage";
import AppliedJobsPage from "./Components/core/Dashboard/AppliedJobsPage";
import AvailableJobsPage from "./Components/core/Dashboard/AvailableJobsPage";

function App() {
  // console.log = function () {};
  const user = useSelector((state) => state.profile.user);
  const progress = useSelector((state) => state.loadingBar);
  const dispatch = useDispatch();
  return (
    <div className=" w-screen min-h-screen bg-richblack-900 flex flex-col font-inter">
      <LoadingBar
        color=" white"
        height={1.4}
        progress={progress}
        onLoaderFinished={() => dispatch(setProgress(0))}
      />
      <NavBar setProgress={setProgress}></NavBar>
      {!navigator.onLine && (
        <div className="bg-red-500 flex text-white text-center p-2 bg-richblack-300 justify-center gap-2 items-center">
          <RiWifiOffLine size={22} />
          Please check your internet connection.
          <button
            className="ml-2 bg-richblack-500 rounded-md p-1 px-2 text-white"
            onClick={() => window.location.reload()}
          >
            Retry
          </button>
        </div>
      )}
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/catalog/:catalog" element={<Catalog />} />

        <Route
          path="/login"
          element={
            <OpenRoute>
              <Login />
            </OpenRoute>
          }
        />

        <Route
          path="/signup"
          element={
            <OpenRoute>
              <Signup />
            </OpenRoute>
          }
        />

        <Route path="/forgot-password" element={<ForgotPassword />} />

        <Route path="/update-password/:id" element={<ResetPassword />} />

        <Route path="/verify-email" element={<VerifyOtp />} />

        <Route path="/about" element={<About />} />

        <Route path="/For-students" element={<ForStudents/>} />
        
        <Route path="/For-Recruiters" element={<ForRecruiters/>} />

        <Route path="/contact" element={<ContactUs />} />

        <Route path="/courses/:courseId" element={<CourseDetails />} />

        <Route path="/search/:searchQuery" element={<SearchCourse />} />

        <Route
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        >
          <Route path="/dashboard" element={<MyProfile />} />
          <Route path="dashboard/settings" element={<Setting />} />
          {user?.accountType === ACCOUNT_TYPE.STUDENT && (
            <>
              <Route path="dashboard/cart" element={<Cart />} />
              <Route
                path="dashboard/enrolled-courses"
                element={<EnrollledCourses />}
              />
              <Route
                path="dashboard/purchase-history"
                element={<PurchaseHistory />}
              />
              <Route 
                path="/dashboard/resume-templates"
                element={ <ResumeTemplate />}
              />

              <Route 
                path="/dashboard/test"
                element={ <TestPage />}
              />

              <Route 
                path="/dashboard/applied-jobs"
                element={ <AppliedJobsPage />}
              />

              <Route 
                path="/dashboard/available-jobs"
                element={ <AvailableJobsPage />}
              />



            </>
          )}
          
          {user?.accountType === ACCOUNT_TYPE.INSTRUCTOR && (
            <>
              <Route path="dashboard/add-course" element={<AddCourse />} />
              <Route path="dashboard/my-courses" element={<MyCourses />} />
              <Route
                path="dashboard/edit-course/:courseId"
                element={<EditCourse />}
              />
              <Route
                path="dashboard/instructor"
                element={<InstructorDashboard />}
              />
            </>
          )}
          {user?.accountType === ACCOUNT_TYPE.ADMIN && (
            <>
              <Route path="dashboard/admin-panel" element={<AdminPannel />} />
            </>
          )}
        </Route>

        <Route
          element={
            <PrivateRoute>
              <ViewCourse />
            </PrivateRoute>
          }
        >
          {user?.accountType === ACCOUNT_TYPE.STUDENT && (
            <>
              <Route
                path="/dashboard/enrolled-courses/view-course/:courseId/section/:sectionId/sub-section/:subsectionId"
                element={<VideoDetails />}
              />
            </>
          )}
        </Route>

        <Route path="*" element={<Home />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
