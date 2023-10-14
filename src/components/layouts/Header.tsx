import {
  Box,
  SxProps,
  TextField,
  Theme,
  Toolbar,
  Typography,
} from "@mui/material";
import "../../App.css";
import { useContext, useEffect } from "react";
import AppContext from "../../AppContext";
import { useNavigate, useParams } from "react-router-dom";

const Header = () => {
  const { setSearchStr } = useContext(AppContext);
  const { q } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    setSearchStr(q ?? "");
  }, [q]);

  return (
    <Toolbar sx={rootSx}>
      <Typography variant="h5" sx={{ flex: 1, textAlign: "left" }}>
        截圖道
      </Typography>
      <Box sx={{ flex: 1 }}>
        <TextField
          placeholder="輸入對白，例如「一萬年」"
          variant="standard"
          value={q}
          onChange={({ target: { value } }) => navigate(value)}
          fullWidth
        />
      </Box>
    </Toolbar>
  );
};

export default Header;

const rootSx: SxProps<Theme> = {
  display: "flex",
  gap: 3,
  filter: "invert",
};
