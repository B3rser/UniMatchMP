import React from "react";
import { Box, Typography } from "@mui/material";
import { ErrorOutline, ReportProblemOutlined, CheckCircleOutline, InfoOutline } from "@mui/icons-material";

export const FeedbackMessage = React.forwardRef(
    ({ variantF = "info", title = "Name", message }, ref) => {
        const variantConfig = {
            error: {
                color: "var(--error-300)",
                icon: <ErrorOutline fontSize="small" />,
            },
            warning: {
                color: "var(--warning-300)",
                icon: <ReportProblemOutlined fontSize="small" />,
            },
            success: {
                color: "var(--success-300)",
                icon: <CheckCircleOutline fontSize="small" />,
            },
            info: {
                color: "var(--info-200)",
                icon: <InfoOutline fontSize="small" />,
            },
        };

        const { color, icon } = variantConfig[variantF];

        return (
            <Box
                ref={ref}
                variant="outlined"
                sx={{
                    border: `2px solid ${color}`,
                    borderRadius: 2,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "left",
                    minWidth: 300,
                }}
            >
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "space-between",
                        alignItems: "center",
                        minWidth: 300,
                        p: "10px 10px",
                        color: { color }
                    }}
                >
                    <Typography fontWeight="bold">
                        {title}
                    </Typography>
                    {icon}
                </Box>
                <Typography sx={{ p: "0px 15px 8px 15px" }}>{message}</Typography>
            </Box>
        );
    });
