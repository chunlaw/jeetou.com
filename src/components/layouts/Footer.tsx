import { Box, Button, SxProps, Theme } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();

  return (
    <Box sx={rootSx}>
      <Button
        onClick={() => {
          navigate("/p/about");
        }}
        size="small"
        variant="text"
      >
        關於
      </Button>
    </Box>
  );
};

export default Footer;

const rootSx: SxProps<Theme> = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};
