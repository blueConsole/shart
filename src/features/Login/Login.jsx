import { useState } from "react";
import { auth } from "../../Firebase/firebase";
import { signInWithPopup, GoogleAuthProvider, FacebookAuthProvider } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import { Button, TextField, Typography, Box, Grid, Stack } from "@mui/material";
import { Link } from 'react-router-dom';
import { motion } from "framer-motion";
import { animation } from "../../utils/animation";
import { useNavigate } from 'react-router-dom';



const Login = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);
    const [user] = useAuthState(auth);
    const navigate = useNavigate();

    const handleLogin = async (event) => {
        event.preventDefault();
        try {
            await auth.signInWithEmailAndPassword(email, password);
        } catch (error) {
            setError(error.message);
        }
    };

    const handleGoogleSignIn = async () => {
        const provider = new GoogleAuthProvider();
        try {
            await signInWithPopup(auth, provider);

            alert(auth.currentUser.displayName)
            navigate("/")
        } catch (error) {
            setError(error.message);
        }
    };

    const handleFacebookSignIn = async () => {
        const provider = new FacebookAuthProvider();
        try {
            await signInWithPopup(auth, provider);
        } catch (error) {
            setError(error.message);
        }
    };

    return (

        <Grid container sx={{
            height: "100vh",
            display: "flex",
            flexDirection: "row",
        }}>
            <Grid item md={8} xs sx={{
                height: "100%",
                backgroundImage: "url(https://source.unsplash.com/random/800x800)",
                backgroundSize: "cover",
                backgroundPosition: "center",
                display: "flex",
                alignItems: "center",
                justifyContent: "center"
            }}>
                <Typography variant="h1" sx={{ color: "white" }}>SHART</Typography>
            </Grid>

            <Grid item xs>
                <motion.div initial="hidden"
                    animate="visible"
                    exit="exit"
                    variants={animation.easeDown}>

                    <Box sx={{
                        height: "80%",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        padding: 4,
                    }}>
                        <Typography variant="h4" gutterBottom>
                            Login
                        </Typography>
                        <form className="login-form" onSubmit={handleLogin}>

                            <Stack sx={{ padding: 5 }} alignItems={"center"}>

                                <TextField
                                    id="email"
                                    label="Email"
                                    type="email"
                                    variant="filled"
                                    value={email}
                                    onChange={(event) => setEmail(event.target.value)}
                                    required
                                    className="login-input"
                                    sx={{ marginBottom: 2 }}
                                />
                                <TextField
                                    id="password"
                                    label="Password"
                                    type="password"
                                    variant="filled"
                                    value={password}
                                    onChange={(event) => setPassword(event.target.value)}
                                    required
                                    className="login-input"
                                    sx={{ marginBottom: 2 }}
                                />
                                <Button
                                    type="submit"
                                    variant="contained"
                                    color="primary"
                                    className="login-button"
                                    sx={{ marginBottom: 2, width: "60%" }}

                                >
                                    Sign in
                                </Button>
                                <Link to='/register'>

                                    <Typography variant="caption">Forgot Password</Typography>
                                </Link>
                                {error && <p className="login-error">{error}</p>}
                            </Stack>

                        </form>
                        <div className="login-alt-signin">
                            <Button
                                variant="outlined"
                                color="primary"
                                className="login-alt-signin-btn"
                                onClick={handleGoogleSignIn}
                            >
                                Sign in with Google
                            </Button>
                            <Button
                                variant="outlined"
                                color="primary"
                                className="login-alt-signin-btn"
                                onClick={handleFacebookSignIn}
                            >
                                Sign in with Facebook
                            </Button>
                        </div>
                    </Box>
                </motion.div>
            </Grid>
        </Grid>

    );
};

export default Login;
