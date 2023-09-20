const PrescriptionForm = () => {
    return(
        <form action="" className="box prescription-form">
            <div className="form-intro">
                <span className="form-title">Prescription</span>
                <span className="form-description">Fill in the prescription details.</span>
            </div>
            <input type="date" className="form-input" />
            <button type="submit" className="form-button">Login</button>
        </form>
    )
}

export default PrescriptionForm;