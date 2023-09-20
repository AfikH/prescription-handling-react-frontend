import { useEffect, useState } from "react";

import UsersList from "../components/shared/UsersList";

const Consumers = () => {
    const [users, setUsers] = useState([
        {user_id: 1, user_email: 'John@email', user_first_name: 'John', user_last_name: 'Doe'},
        {user_id: 2, user_email: 'Foo@email', user_first_name: 'Foo', user_last_name: 'Bar'},
        {user_id: 3, user_email: 'Fred@email', user_first_name: 'Fred', user_last_name: 'Rick'}
    ]);

    const loadUsers = () => {

    }

    useEffect(() => {
        loadUsers();
    }, []);

    return(
        <div className="page-consumers">
            <div className="page-intro">
                <span className="page-title">Consumers</span>
                <div className="page-description">Select consumer to view their prescriptions.</div>
            </div>
            <UsersList users={users} showViewPrescriptionsButton={true} />
        </div>
    )
}

export default Consumers;