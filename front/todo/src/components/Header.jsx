import { AppBar, Box } from "@mui/material";

export function Header() {
    return (
        <>
            <Box sx={{ width: "100%", paddingBottom: "1rem" }}>
                <AppBar position="relative">Todo List</AppBar>
            </Box>
        </>
    );
}
