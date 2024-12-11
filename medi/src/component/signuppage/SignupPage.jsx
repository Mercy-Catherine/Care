import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./signup.css";  // Make sure your CSS file matches

const SignupPage = () => {
    const [selectedType, setSelectedType] = useState("");  // To keep track of the selected type
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        if (selectedType) {
            // Navigate to the respective signup page based on the selected type
            navigate(`/signup/${selectedType.toLowerCase()}`);
        } else {
            alert("Please select a user type!");  // Alert user if no type is selected
        }
    };

    return (
        <div className="signup-container">
            <form className="signup-form" onSubmit={handleSubmit}>
                <h2>Signup</h2>
                <div className="form-group">
                    <label htmlFor="userType">Select User Type</label>
                    <select
                        id="userType"
                        value={selectedType}
                        onChange={(e) => setSelectedType(e.target.value)}
                        required
                    >
                        <option value="">-- Select User Type --</option>
                        <option value="User">User</option>
                        <option value="Admin">Admin</option>
                        <option value="Doctor">Doctor</option>
                        <option value="Pharmacy">Pharmacy</option>
                    </select>
                </div>
                <button type="submit" className="signup-button">
                    Proceed to Signup
                </button>
            </form>
        </div>
    );
};

export default SignupPage;



