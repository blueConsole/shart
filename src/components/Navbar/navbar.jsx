import React from "react";
import { styled } from "@mui/material/styles";
import { AppBar, Grid, Stack, Toolbar, Typography } from "@mui/material";
import { NavLink, Link } from "react-router-dom";
import "./navbar.css"
import LogoutButton from "../Logout/logout";
import HomeIcon from '@mui/icons-material/Home';
import AccountBoxIcon from '@mui/icons-material/AccountBox';

const StyledAppBar = styled(AppBar)({
    opacity: 0.5,
    transition: "opacity 0.2s ease-in-out",
    "&:hover": {
        opacity: 1,
    },
});

const linkStyles = {
    textDecoration: "none",
    color: "white"
};

const Navbar = () => {
    return (
        <StyledAppBar position="fixed">
            <Toolbar sx={{ backgroundColor: "#121212" }} >
                <Grid container spacing={2} alignItems="center">
                    <Grid item container xs={4} justifyContent="flex-start">
                        <Link to={"/"} style={linkStyles}>
                            <Typography variant="h6">
                                SHART
                            </Typography>
                        </Link>
                    </Grid>
                    <Grid item xs={8} container justifyContent="flex-end">
                        <Stack direction="row" spacing={2} sx={{ color: "white" }} alignItems="center">
                            <NavLink
                                exact
                                to="/"
                                className="nav-link"
                                activeClassName="nav-link-active"
                            >
                                <HomeIcon />
                            </NavLink>

                            <NavLink
                                to="/profile"
                                className="nav-link"
                                activeClassName="nav-link-active"
                            >
                                <AccountBoxIcon />
                            </NavLink>

                            <LogoutButton className="nav-link"
                                activeClassName="nav-link-active" />
                        </Stack>
                    </Grid>
                </Grid>
            </Toolbar>
        </StyledAppBar>
    );
};

export default Navbar;
