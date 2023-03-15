
import { getAuth, signOut } from 'firebase/auth';
import LogoutIcon from '@mui/icons-material/Logout';
import { Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const LogoutButton = () => {
    const navigate = useNavigate();
    const handleLogout = async () => {
        const auth = getAuth();

        try {
            await signOut(auth);
            console.log('User signed out successfully!');
            navigate('/login')
        } catch (error) {
            console.error('Error signing out user:', error);
        }
    };

    return (

        <div onClick={handleLogout}>

            <Typography sx={{ cursor: "pointer" }}>

                <LogoutIcon />
            </Typography>
        </div>
    );
};

export default LogoutButton;
