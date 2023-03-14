import React, { useState } from "react";
import { motion } from "framer-motion";
import { getAuth, GoogleAuthProvider, FacebookAuthProvider } from "firebase/auth";
import { Box, Button, TextField, Typography } from "@mui/material";
import "./Register.css";

const Register = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [username, setUsername] = useState("");
    const [birthdate, setBirthdate] = useState("");
    const [gender, setGender] = useState("");
    const [error, setError] = useState(null);

    const handleRegister = async (event) => {
        event.preventDefault();
        const auth = getAuth();
        try {
            await auth.createUserWithEmailAndPassword(email, password);
        } catch (error) {
            setError(error.message);
        }
    };

    const handleGoogleSignIn = async () => {
        const provider = new GoogleAuthProvider();
        const auth = getAuth();

        try {
            await auth.signInWithPopup(provider);
        } catch (error) {
            setError(error.message);
        }
    };

    const handleFacebookSignIn = async () => {
        const provider = new FacebookAuthProvider();
        const auth = getAuth();

        try {
            await auth.signInWithPopup(provider);
        } catch (error) {
            setError(error.message);
        }
    };

    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                height: "100%",
            }}
        >
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
                className="register-container"
            >
                <Typography variant="h4" component="h2" mb={4}>
                    Register
                </Typography>
                <form onSubmit={handleRegister}>
                    <TextField
                        type="text"
                        label="Username"
                        required
                        value={username}
                        onChange={(event) => setUsername(event.target.value)}
                        sx={{ marginBottom: 2 }}
                    />
                    <TextField
                        type="email"
                        label="Email"
                        required
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}
                        sx={{ marginBottom: 2 }}
                    />
                    <TextField
                        type="password"
                        label="Password"
                        required
                        value={password}
                        onChange={(event) => setPassword(event.target.value)}
                        sx={{ marginBottom: 2 }}
                    />
                    <TextField
                        type="text"
                        label="First Name"
                        required
                        value={firstName}
                        onChange={(event) => setFirstName(event.target.value)}
                        sx={{
                            marginBottom: 2
                        }}
                    />
                    <TextField
                        type="text"
                        label="Last Name"
                        required
                        value={lastName}
                        onChange={(event) => setLastName(event.target.value)}
                        sx={{ marginBottom: 2 }}
                    />
                    <TextField
                        type="date"
                        label="Birthdate"
                        required
                        value={birthdate}
                        onChange={(event) => setBirthdate(event.target.value)}
                        sx={{ marginBottom: 2 }}
                    />
                    <TextField
                        select
                        label="Gender"
                        required
                        value={gender}
                        onChange={(event) => setGender(event.target.value)}
                        sx={{ marginBottom: 2 }}
                    >
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="other">Other</option>
                    </TextField>
                    {error && (
                        <Typography variant="body1" color="error" sx={{ marginBottom: 2 }}>
                            {error}
                        </Typography>
                    )}
                    <Button type="submit" variant="contained" sx={{ marginBottom: 2 }}>
                        Register
                    </Button>
                </form>
                <Box sx={{ display: "flex", flexDirection: "column" }}>
                    <Typography variant="body1" mb={1}>
                        Or register with:
                    </Typography>
                    <Box sx={{ display: "flex", gap: 1 }}>
                        <Button variant="outlined" onClick={handleGoogleSignIn}>
                            Google
                        </Button>
                        <Button variant="outlined" onClick={handleFacebookSignIn}>
                            Facebook
                        </Button>
                    </Box>
                </Box>
            </motion.div>
        </Box>
    );
};

export default Register;





