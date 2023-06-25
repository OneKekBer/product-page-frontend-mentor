import { Box, Button, Typography, useMediaQuery } from "@mui/material";
import React, { useState } from "react";
import "./main.scss";

import product1 from "../assets/images/image-product-1.jpg";
import product2 from "../assets/images/image-product-2.jpg";
import product3 from "../assets/images/image-product-3.jpg";
import product4 from "../assets/images/image-product-4.jpg";

import { addToCart } from "../store/store.js";

import FlexCenterColumn from "./../components/flexCenterColumn";
import { useDispatch } from "react-redux";
import SwiperComponent from "./swiper";

import "lightbox.js-react/dist/index.css";

import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import "yet-another-react-lightbox/plugins/thumbnails.css";

import plus from "../assets/images/icon-plus.svg";
import minus from "../assets/images/icon-minus.svg";

const Main = () => {
    const [count, setCount] = useState(1);
    const dispatch = useDispatch();

    const [open, setOpen] = useState(false);
    const thumbnailsRef = React.useRef(null);

    const isNonMobileScreen = useMediaQuery("(min-width:996px)");
    const isNonMobileScreen700 = useMediaQuery("(min-width:700px)");

    return (
        <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            className="wrapper"
            flexDirection={isNonMobileScreen ? "row" : "column"}
            gap={10}
        >
            <Box
                width={isNonMobileScreen ? "50%" : "100%"}
                sx={{ cursor: "pointer" }}
                onClick={() => setOpen(true)}
            >
                <SwiperComponent
                    images={[product1, product2, product3, product4]}
                />
            </Box>

            <Lightbox
                open={open}
                // plugins={[Thumbnails]}
                thumbnails={{ ref: thumbnailsRef }}
                close={() => setOpen(false)}
                on={{
                    click: () => {
                        (thumbnailsRef.current?.visible
                            ? thumbnailsRef.current?.hide
                            : thumbnailsRef.current?.show)?.();
                    },
                }}
                slides={[
                    { src: product1 },
                    { src: product2 },
                    { src: product3 },
                    { src: product4 },
                ]}
            />

            <FlexCenterColumn
                alignItems="start"
                gap={2}
                justifyContent="space-around"
            >
                <Typography
                    fontWeight="700"
                    variant="h6"
                    color="hsl(26, 100%, 55%)"
                >
                    SNEAKER COMPANY
                </Typography>
                <Typography variant="h3" fontWeight="700">
                    Fall Limited Edition Sneakers
                </Typography>
                <Typography variant="h7" color="lightGray" fontWeight="700">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Explicabo, perferendis magni laboriosam, cupiditate atque
                    unde eaque dicta, maiores aperiam fugit voluptas recusandae
                    esse tempore nulla magnam! Maiores sapiente sequi ipsam?
                </Typography>
                <Box display="flex" gap={2} alignItems="center">
                    <Typography variant="h4" fontWeight="700">
                        $125.00
                    </Typography>
                    <Box
                        p={1}
                        sx={{
                            color: "hsl(26, 100%, 55%)",
                            background: "hsl(25, 100%, 94%)",
                            borderRadius: "8px",
                        }}
                    >
                        50%
                    </Box>
                </Box>
                <Typography
                    className="discount"
                    variant="h7"
                    color="lightGray"
                    fontWeight="700"
                >
                    $250.00
                </Typography>
                <Box
                    display="flex"
                    width="100%"
                    alignItems="center"
                    justifyContent="space-between"
                >
                    <Box display="flex" className="counter">
                        <Box
                            className="counter__button"
                            onClick={() => setCount(count + 1)}
                        >
                            <img src={plus} />
                        </Box>
                        <Box className="counter__button">
                            {count <= 0 ? setCount(1) : count}
                        </Box>
                        <Box
                            className="counter__button"
                            onClick={() => setCount(count - 1)}
                        >
                            <img src={minus} />
                        </Box>
                    </Box>
                    <Button
                        onClick={() => {
                            dispatch(addToCart("sneaker", count, 125));
                            setCount(1);
                        }}
                        size="large"
                        sx={{
                            width: "40%",
                            color: "white",
                            background: "hsl(26, 100%, 55%)",
                        }}
                    >
                        Add to cart
                    </Button>
                </Box>
            </FlexCenterColumn>
        </Box>
    );
};

export default Main;
