import { Link } from "react-router-dom";

const UsersList = ({users, showViewPrescriptionsButton = false}) => (
    <table className="main-table users-list box">
        <thead>
            <tr>
                <th>id</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Email</th>
                {showViewPrescriptionsButton && true && <th></th>}
            </tr>
        </thead>
        <tbody>
            {users.length > 0 ? users.map(user => (
                <tr key={user.user_id}>
                    <td>{user.user_id}</td>
                    <td>{user.user_first_name}</td>
                    <td>{user.user_last_name}</td>
                    <td>{user.user_email}</td>
                    {showViewPrescriptionsButton && true && <td><Link to={`/consumers/prescriptions/${user.user_id}`} className="main-button">View User Prescriptions</Link></td>}
                </tr>
            )) : <tr><td colSpan={4}>Couldn't find any prescriptions.</td></tr>}
        </tbody>
    </table>
)

export default UsersList;