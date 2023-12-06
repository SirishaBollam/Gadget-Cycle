import './AdminDonationsPage.css';
import Header from './Header';
import DonationsShopBox from './DonationsShopBox';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import getDonations from './services/getDonations';

function AdminDonationsPage() {
    const [noOfDonations, setNoOfDdonations] = useState(10);
    const [donations, setDonations] = useState([]);

    useEffect(() => {
        const fetchDonations = async () => {
            const allDonations = await getDonations();
            setDonations(allDonations);
        };

        fetchDonations();
    }, []);

    return (
        <div className='admin-donations-page'>
            <Header />
            <div className='admin-donations-page-heading'>
                <h1>Donations</h1>
            </div>  
            {donations.map(donation => (
                <Link key={donation.id} to={`/admindonations/${donation.id}`}>
                    <DonationsShopBox key1="Name" value1={donation.name} key2="Date" value2={donation.date_test} key3="Tracking No" value3={donation.tracking_no} margin_top="33.21px" />
                </Link>
            ))}
        </div>  
    );
}

export default AdminDonationsPage;

// key1="Name" Value1="Naren Karri" key2="Date" value2="10/20/2023" key3="Tracking No" value3="20993920201"
