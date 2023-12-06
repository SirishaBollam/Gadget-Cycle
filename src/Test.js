import ButtonUni from "./ButtonUni";
import ButtonGoogle from "./ButtonGoogle";
import FormInput from "./FormInput";
import TwoInputForm from "./TwoInputForm";
import ItemProduct from "./ItemProduct";
import ItemImage1 from './images/ItemImage1.jpg';
import LoginPage from "./LoginPage";
import SignUpPage from "./SignUpPage";
import ForgotPasswordEmail from "./ForgotPasswordEmail";
import ForgotPasswordEnterCode from "./ForgotPasswordEnterCode";
import ForgotPasswordNewPassword from "./ForgotPasswordNewPassword";
import ForgotPasswordFlow from "./ForgotPasswordFlow";
import SelectIndieOrCorp from "./SelectIndiOrCorp";
import BigFormLabelInput from "./BigFormLabelInput";
import AddSubButton from "./AddSubButton";
import IndiCorpForm from "./IndiCorpForm";
import GadgetInfoRow from "./GadgetInfoRow";
import ProductInfoTopPart from "./ProductInfoTopSection";
import TrackLabelInput from "./TrackLabelInput";
import TrackingStatus from './TrackingStatus';
import TrackingNumberCopy from './TrackingNumberCopy';
import TrackingPage from './TrackingPage';
import Content from "./Content";
import CategoryButton from "./CategoryButton";
import GridTest from "./GridTest";
import PaginationItemsDropDown from "./PaginationItemsDropDown";
import Pagination from "./Pagination";
import { useState } from "react";
import ShopPage from "./ShopPage";
import ImageUploadButton from "./ImageUploadInput";
import AdminShop from "./AdminShop";
import DonationsShopBoxKeyValue from "./DonationsShopBoxKeyValue";
import DonationsShopBox from './DonationsShopBox';
import AdminDonationsPage from "./AdminDonationsPage";
import AdminDonationInfoPage from "./AdminDonationInfoPage";
import AdminProductsList from "./AdminProductsList";
import OurTeamSection from "./OurTeamSection";
import TeamRoles from './TeamRoles';
import praneeth from './images/praneeth.png';
import AboutUsPage from "./AboutUsPage";

function Test() {
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(5);
    
    const onPageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
        console.log(pageNumber);
    }

    return (
        <div>
            {/* <ButtonUni height="62px" width="461px" content="Login In"/>
            <ButtonGoogle height="60px" width="461px"/>
            <FormInput height="59.2px" width="461px" placeholder="Password" />
            <TwoInputForm heading="Forgot" subheading="Password?" placeholder1="New Password" placeholder2="Confirm Password" button_content="Continue" />
            <ItemProduct item_img_src={ItemImage1} item_name="GoPro HERO6 4K Action Camera - Black"/> */}
            {/* <LoginPage /> */}
            {/* <SignUpPage /> */}
            {/* <ForgotPasswordEmail /> */}
            {/* <ForgotPasswordEnterCode /> */}
            {/* <ForgotPasswordNewPassword /> */}
            {/* <ForgotPasswordFlow /> */}
            {/* <SelectIndieOrCorp /> */}
            {/* <BigFormLabelInput label="No of gadgets"/> */}
            {/* <AddSubButton content="+" /> */}
            {/* <IndiCorpForm heading="Individual" subheading="to get started"/> */}
            {/* <GadgetInfoRow key_left="brand" value="Apple"/> */}
            {/* <ProductInfoTopPart product_name="MacBook Pro M2 MNEJ3 2022 LLA 13.3 inch"/> */}
            {/* <TrackLabelInput label="Tracking No" /> */}
            {/* <TrackingStatus status_number={2}/> */}
            {/* <TrackingNumberCopy tracking_number_value="23456891085" label_content="Your Fedex Tracking No" width="455px"/> */}
            {/* <TrackingPage /> */}
            {/* <CategoryButton category="Laptop"/> */}
            {/* <GridTest /> */}
            {/* <PaginationItemsDropDown /> */}
            {/* <Pagination totalPages="5" currentPage="1" onPageChange={onPageChange}/> */}
            {/* <ShopPage /> */}
            {/* <ImageUploadButton /> */}
            {/* <AdminShop /> */}
            {/* <DonationsShopBoxKeyValue value="Naren Karri" key_test="Name" /> */}
            {/* <DonationsShopBox key1="Name" Value1="Naren Karri" key2="Date" value2="10/20/2023" key3="Tracking No" value3="20993920201"/> */}
            {/* <AdminDonationsPage /> */}
            {/* <AdminDonationInfoPage /> */}
            {/* <AdminProductsList /> */}
            {/* <OurTeamSection /> */}
            {/* <TeamRoles heading="Praneeth Narisetty" subheading="Product Manager / UI / Dev" img_src={praneeth}/> */}
            <AboutUsPage />
        </div>
    );
}

export default Test;
