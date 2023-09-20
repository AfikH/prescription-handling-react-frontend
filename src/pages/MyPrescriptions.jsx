import { useEffect, useState } from "react";

import PrescriptionsList from "../components/shared/PrescriptionsList";

const MyPrescriptions = () => {
    const [prescriptions, setPrescriptions] = useState([
        {
            prescription_id: 1,
            prescription_prescribed_drugs: [
                { id: 1, name: 'Advil', count: '2 Tabs' },
                { id: 2, name: 'Acamol', count: '1 Tabs' }
            ],
            prescription_status: 'unredeemed',
            prescription_doctor: 1,
            prescription_expiry_date: '01-01-2001',
            prescription_date_created: '01-01-2001'
        },
        {
            prescription_id: 2,
            prescription_prescribed_drugs: [
                { id: 2, name: 'Advil', count: '1 Tab' }
            ],
            prescription_status: 'unredeemed',
            prescription_doctor: 1,
            prescription_expiry_date: '01-01-2001',
            prescription_date_created: '01-01-2001'
        }
    ]);

    const loadPrescriptions = () => {
        
    }

    useEffect(() => {
        loadPrescriptions();
    }, []);

    return(
        <div className="page-my-prescriptions">
            <div className="page-intro">
                <span className="page-title">My Prescriptions</span>
                <div className="page-description">Here you can find your prescribed drugs.</div>
            </div>
            <PrescriptionsList prescriptions={prescriptions} />
        </div>
    )
}

export default MyPrescriptions;