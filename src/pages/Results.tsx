import {
  Box,
  CircularProgress,
  SxProps,
  Theme,
  Typography,
} from "@mui/material";
import { useContext } from "react";
import AppContext from "../AppContext";
import ImageGrid from "../components/results/ImageGrid";

const Results = () => {
  const { searchStr, isLoading, results } = useContext(AppContext);

  if (searchStr === "") {
    return <Typography variant="h3">輸入對白，例如「一萬年」</Typography>;
  }

  return (
    <Box sx={rootSx}>
      {isLoading && <CircularProgress size={64} />}
      {isLoading === false && results.count === 0 && (
        <Typography variant="body1">查無結果</Typography>
      )}
      {isLoading === false && results.count > 0 && <ImageGrid />}
    </Box>
  );
};

export default Results;

const rootSx: SxProps<Theme> = {
  overflow: "hidden",
  flex: 1,
  display: "flex",
  justifyContent: "center",
};
