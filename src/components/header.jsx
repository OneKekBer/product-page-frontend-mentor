import {
    Box,
    Button,
    Divider,
    IconButton,
    Menu,
    MenuItem,
    Typography,
    useMediaQuery,
} from "@mui/material";
import React, { useState } from "react";

import avatar from "../assets/images/image-avatar.png";

import logo from "../assets/images/logo.svg";
import cart from "../assets/images/icon-cart.svg";

import FlexAround from "./flexAround";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart } from "../store/store";

import ClearIcon from "@mui/icons-material/Clear";
import MenuIcon from "@mui/icons-material/Menu";

import plus from "../assets/images/icon-plus.svg";
import minus from "../assets/images/icon-minus.svg";

const Header = () => {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    const isNonMobileScreen700 = useMediaQuery("(min-width:700px)");

    const items = useSelector((state) => state);
    const dispatch = useDispatch();

    return (
        <Box
            borderBottom="1px solid gray"
            pt={3}
            pb={3}
            mb={15}
            display="flex"
            alignItems="center"
            justifyContent="space-between"
        >
            <Box
                display="flex"
                alignItems="center"
                justifyContent="space-around"
                width={isNonMobileScreen700 ? "auto" : "100%"}
                gap={isNonMobileScreen700 ? 5 : 1}
            >
                {isNonMobileScreen700 ? null : (
                    <Box>
                        <IconButton>
                            <MenuIcon />
                        </IconButton>
                    </Box>
                )}
                <Box>
                    <img src={logo} alt="logo" />
                </Box>
                {isNonMobileScreen700 ? (
                    <FlexAround gap={3}>
                        <Typography color="gray" variant="h6">
                            Collection
                        </Typography>
                        <Typography color="gray" variant="h6">
                            Men
                        </Typography>
                        <Typography color="gray" variant="h6">
                            Woman
                        </Typography>
                        <Typography color="gray" variant="h6">
                            About
                        </Typography>
                        <Typography color="gray" variant="h6">
                            Contact
                        </Typography>
                    </FlexAround>
                ) : (
                    <Box></Box>
                )}
            </Box>

            <FlexAround gap={2}>
                <IconButton
                    id="btn"
                    id="basic-button"
                    aria-controls={open ? "basic-menu" : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? "true" : undefined}
                    onClick={handleClick}
                >
                    <img src={cart} alt="cart" />
                </IconButton>
                {isNonMobileScreen700 ? (
                    <IconButton>
                        <img width="40px" src={avatar} alt="ava" />
                    </IconButton>
                ) : null}

                <Menu
                    id="basic-menu"
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    MenuListProps={{
                        "aria-labelledby": "basic-button",
                    }}
                >
                    <Box
                        sx={{
                            padding: "20px 40px 20px 40px",
                        }}
                    >
                        <Typography variant="h5">Cart</Typography>
                        <Divider />
                        {items.length === 0 ? (
                            <Box>Cart is empty</Box>
                        ) : (
                            <Box>
                                {items.map((item) => {
                                    return (
                                        <Box>
                                            <Box>
                                                {item.title} x{item.count} - $
                                                {item.price * item.count}
                                                <IconButton
                                                    onClick={() => {
                                                        dispatch(
                                                            removeFromCart(
                                                                item.id
                                                            )
                                                        );
                                                    }}
                                                >
                                                    <ClearIcon />
                                                </IconButton>
                                            </Box>
                                            <Button
                                                variant="contained"
                                                size="small"
                                            >
                                                Buy
                                            </Button>
                                            {/* {items.map((item) => {
                                                const allPrice =
                                                    item.price * item.count;
                                                return <Box>{allPrice}</Box>;
                                            })} */}
                                        </Box>
                                    );
                                })}
                            </Box>
                        )}
                    </Box>
                </Menu>
                <Box></Box>
            </FlexAround>
        </Box>
    );
};

export default Header;
