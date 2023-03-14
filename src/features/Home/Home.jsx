import React from "react";
import "./ParallaxPage.css";
import { Typography } from "@mui/material";
import Navbar from "../../components/Navbar/navbar";

const Home = () => {
    const landingStyle = {
        backgroundAttachment: "fixed",
        backgroundImage: 'url("https://wallpapercave.com/wp/wp4754485.jpg")',
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        height: "100vh",
        width: "100%",
        position: "relative"
    };

    const contentStyle = {
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        textAlign: "center",
        color: "white"
    };

    const data = [
        {
            title: "Art 1",
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis posuere risus et odio bibendum, vel blandit mauris congue.",
            image: "https://wallpapercave.com/wp/wp4982787.jpg"
        },
        {
            title: "Art 2",
            description:
                "Duis eget nunc vel mauris bibendum iaculis a et odio. Etiam convallis enim sit amet velit venenatis hendrerit.",
            image: "https://wallpapercave.com/wp/wp4982816.jpg"
        },
        {
            title: "Art 3",
            description:
                "Nam vel arcu eget nulla eleifend iaculis in non nulla. Nullam rhoncus elit non elit tincidunt, non bibendum justo euismod.",
            image: "https://wallpapercave.com/wp/wp4982830.jpg"
        }
    ];

    return (
        <div>
            <Navbar />
            <div style={landingStyle}>
                <div style={contentStyle}>
                    <Typography variant="h1">SHART</Typography>
                    <Typography>Share Your Art</Typography>
                </div>
            </div>
            {data.map((item, index) => (
                <div
                    key={index}
                    className="art-item"
                    style={{ backgroundImage: `url(${item.image})` }}
                >
                    <div className="art-content">
                        <Typography variant="h2">{item.title}</Typography>
                        <Typography>{item.description}</Typography>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Home;
