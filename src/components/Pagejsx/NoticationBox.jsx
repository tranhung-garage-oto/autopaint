import * as React from "react";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import SvgTransparent from "./SvgTransparent";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
    "& .MuiDialogContent-root": {
        padding: theme.spacing(2),
    },
    "& .MuiDialogActions-root": {
        padding: theme.spacing(1),
    },
}));

export default function NoticationBox() {
    const [open, setOpen] = React.useState(false);

    const handleClose = () => {
        setOpen(false);
    };

    React.useEffect(() => {
        setTimeout(() => setOpen(true), 2500);
    }, []);

    return (
        <React.Fragment s>
            <BootstrapDialog
                onClose={handleClose}
                aria-labelledby="customized-dialog-title"
                open={open}
                className=" rounded-xl"
                style={{
                    top: "15%"
                }}
            >
                <IconButton
                    aria-label="close"
                    onClick={handleClose}

                    sx={{
                        position: "absolute",
                        right: 8,
                        top: 8,
                        color: (theme) => theme.palette.grey[500],
                    }}
                >
                    <CloseIcon />
                </IconButton>
                <SvgTransparent />
                {/* <img
                    srcSet="https://salt.tikicdn.com/ts/tikimsp/fa/b1/bf/14f7a473bc2802fe2f21d2e35fd71ad7.png"
                    alt=""
                    className=" p-2 bg-transparent rounded-xl" style={{ width: "100%" }}
                /> */}
            </BootstrapDialog>
        </React.Fragment>
    );
}
