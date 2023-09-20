const PrescriptionsList = ({prescriptions}) => (
    <table className="main-table prescriptions-list box">
        <thead>
            <tr>
                <th>Drugs</th>
                <th>Doctor</th>
                <th>Status</th>
                <th>Expiry Date</th>
            </tr>
        </thead>
        <tbody>
            {prescriptions.length > 0 ? prescriptions.map(prescription => (
                <tr key={prescription.prescription_id}>
                    <td><ul>
                        {prescription.prescription_prescribed_drugs && prescription.prescription_prescribed_drugs.map(drug => (
                            <li key={drug.id}>{drug.name} &#40;{drug.count}&#41;</li>
                        ))}
                    </ul></td>
                    <td>Doctor Doctor</td>
                    <td>{prescription.prescription_status}</td>
                    <td>{prescription.prescription_expiry_date}</td>
                </tr>
            )) : <tr><td colSpan={4}>Couldn't find any prescriptions.</td></tr>}
        </tbody>
    </table>
)

export default PrescriptionsList;