import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function InputField() {
    const [name, setName] = useState("");
    const [number, setNumber] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();

    function handleSubmit(e) {
        e.preventDefault();
        
        // Basic validation: check if fields are filled
        if (!name || !number) {
            setError("Please fill in both fields.");
            return;
        }
        
        // Clear the error if validation passes
        setError("");

        // Programmatically navigate to the map page, passing the name and number
        navigate("/openlayersmap", { state: { name, number } });
    }

    return (
        <div style={styles.container}>
            <form onSubmit={handleSubmit} style={styles.form}>
                <h2>Enter Your Details</h2>

                {/* Name Input */}
                <input
                    type="text"
                    placeholder="Enter First Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    style={styles.input}
                />
                <br />

                {/* Number Input */}
                <input
                    type="number"
                    placeholder="Enter your number"
                    value={number}
                    onChange={(e) => setNumber(e.target.value)}
                    style={styles.input}
                />
                <br />
                
                {/* Error Message */}
                {error && <p style={styles.error}>{error}</p>}

                {/* Submit Button */}
                <button type="submit" style={styles.button}>Submit</button>
            </form>
        </div>
    );
}

const styles = {
    container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(255, 255, 255, 0.2)', // Slightly transparent background
        backdropFilter: 'blur(10px)', // Adds blur for glassy effect
        padding: '20px',
        borderRadius: '10px',

    },
    form: {
        backgroundColor: 'rgba(255, 255, 255, 0.4)', // More transparent form background
        padding: '20px',
        borderRadius: '10px',
        boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
        width: '300px',
        textAlign: 'center',
        backdropFilter: 'blur(10px)', // Adds blur inside form for glassy look
    },
    input: {
        width: '90%',
        padding: '10px',
        marginBottom: '10px',
        borderRadius: '5px',
        border: '1px solid #ccc',
    },
    button: {
        padding: '10px 20px',
        backgroundColor: '#007bff',
        color: '#fff',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
        width: '100%',
    },
    error: {
        color: 'red',
        marginBottom: '10px',
    },
};
