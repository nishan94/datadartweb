'use client'
import { Box, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import { useRouter } from "next/navigation";

export const GradientBox = ({ imageSrc, cardName, route }) => {
    const router = useRouter();

    const handleClick = () => {
        router.push(route);
    };
    return (
        <Box
            sx={{
                position: "relative",
                width: 366,
                height: 187,
                bgcolor: "white",
                borderRadius: "8.54px",
                overflow: "hidden",
                background:
                    "linear-gradient(270deg, rgb(183,2,209) 0%, rgb(3,140,255) 100%)",
            }}
            onClick={() => handleClick()}
        >

            <Typography variant="h6" component="div" sx={{
                fontFamily: "Poppins, Helvetica", fontWeight: "normal", color: "white", fontSize: "20.6px", letterSpacing: "0.11px", lineHeight: "30px", whiteSpace: "nowrap", position: "absolute",
                top: 146,
                left: 22,
            }} > {cardName} </Typography>



            <Box
                sx={{
                    position: "absolute",
                    width: 191,
                    height: 191,
                    top: 3,
                    left: 175,
                    mixBlendMode: "luminosity",
                }}
            >
                <Box
                    sx={{
                        position: "relative",
                        height: 184,
                        backgroundImage: "url('/background.png')",
                        backgroundSize: "100% 100%",
                    }}
                >
                    <Image
                        style={{
                            position: "absolute",
                            top: 31,
                            left: 8,
                        }}
                        width={141}
                        height={140}
                        alt="Illustration"
                        src={imageSrc}
                    />
                </Box>
            </Box>
        </Box>
    )
}
