import './App.css';
import Home from './Home';
import Test from './Test';
import TrackingPage from './TrackingPage';
import LoginPage from './LoginPage';
import SignUpPage from './SignUpPage';
import ForgotPasswordFlow from './ForgotPasswordFlow';
import ShopPage from './ShopPage';
import AboutUsPage from './AboutUsPage';
import SelectIndieOrCorp from './SelectIndiOrCorp';
import AdminShop from './AdminShop';
import { BrowserRouter as Router, Switch, Route, Link, Routes } from 'react-router-dom';
import AdminDonationsPage from './AdminDonationsPage';
import AdminDonationInfoPage from './AdminDonationInfoPage';
import AdminProductsList from './AdminProductsList';
import ProductInfoPage from './ProductInfoPage';
import IndiCorpForm from './IndiCorpForm';
import { AuthProvider } from './services/authContext';
import ThankYouTrackingNo from './ThankYouTrackingNo';

function App() {
  return (
    <div className="App">
      <Router>
        <AuthProvider>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/trackyourimpact" element={<TrackingPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignUpPage />} />
            <Route path="/forgotpassword" element={<ForgotPasswordFlow />} />
            <Route path="/donate" element={<SelectIndieOrCorp />} />
            <Route path="/donate/:donatorType" element={<IndiCorpForm />} />
            <Route path="/aboutus" element={<AboutUsPage />} />
            <Route path="/shop" element={<ShopPage />} />
            <Route path="/shop/:productId" element={<ProductInfoPage />} /> 
            <Route path="/test" element={<Test />} />
            <Route path="/admindonations" element={<AdminDonationsPage />} />
            <Route path="/admindonations/:donationId" element={<AdminDonationInfoPage />} />
            <Route path="/adminshop" element={<AdminProductsList />} />
            <Route path="/adminshop/:productId" element={<AdminShop />} /> 
            <Route path="/thankyou" element={<ThankYouTrackingNo />} />
          </Routes>
        </AuthProvider>
      </Router>
    </div>
  );
}

export default App;
