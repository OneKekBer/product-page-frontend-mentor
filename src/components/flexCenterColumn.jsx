const { default: styled } = require("@emotion/styled");
const { Box } = require("@mui/material");

const FlexCenterColumn = styled(Box)({
    display: "flex",
    flexDirection: "column",
});

export default FlexCenterColumn;
