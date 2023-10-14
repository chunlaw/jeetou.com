import { Box, Grid, Paper, SxProps, Theme, Typography } from "@mui/material";
import { useCallback, useContext } from "react";
import AppContext from "../../AppContext";

export default function ImageGrid() {
  const { searchStr, results, loadNext } = useContext(AppContext);

  const handleScroll = useCallback(() => {
    const el = document.getElementById("content");
    const bottom =
      el?.scrollHeight ??
      0 < (el?.scrollTop ?? 0) + (el?.clientHeight ?? 0) + 10;
    if (bottom) {
      loadNext();
    }
  }, [loadNext]);

  return (
    <Box sx={resultsSx}>
      <Paper sx={{ py: 1 }}>
        <Typography variant="body1">
          搵到{results.count}張關於 {searchStr} 嘅截圖
        </Typography>
      </Paper>
      <Grid
        id="content"
        container
        sx={{ overflow: "scroll" }}
        onScroll={handleScroll}
        rowGap={1}
      >
        {results.results.map(({ get_image_url }, idx) => (
          <Grid
            item
            key={`${get_image_url}-${idx}`}
            xs={12}
            sm={12}
            md={6}
            sx={{ justifyContent: "center" }}
          >
            <Box
              component="img"
              src={get_image_url}
              sx={{
                display: "block",
                height: "auto",
                width: "auto",
                maxWidth: { xs: "100%", sm: "100%", md: "98%", lg: "98%" },
              }}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

const resultsSx: SxProps<Theme> = {
  display: "flex",
  flexDirection: "column",
  overflow: "hidden",
  gap: 2,
  flex: 1,
};
