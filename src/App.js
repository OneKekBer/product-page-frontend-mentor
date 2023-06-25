import { Box, useMediaQuery } from "@mui/material";
import Header from "./components/header";
import Main from "./scences/main";

function App() {
    const isNonMobileScreen = useMediaQuery("(min-width:996px)");

    return (
        <Box
            sx={{
                padding: isNonMobileScreen ? "20px 100px" : "20px 30px",
            }}
            className="App"
        >
            <Header />
            <Main />
        </Box>
    );
}

export default App;
