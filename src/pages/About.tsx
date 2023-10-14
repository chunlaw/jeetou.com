import { Grid, Link, SxProps, Theme, Typography } from "@mui/material";

export default function () {
  return (
    <Grid sx={rootSx} container>
      <Grid sx={{ py: 1, textAlign: "left" }} md={12} lg={6}>
        <Typography variant="h6" fontWeight="bold">
          什麽是截圖道
        </Typography>
        <br />
        <Typography variant="body1">一個比你搵截圖嘅地方。</Typography>
        <Typography variant="body1">用圖回 message，回留言。</Typography>
      </Grid>
      <Grid sx={{ py: 1, textAlign: "left" }} md={12} lg={6}>
        <Typography variant="h6" fontWeight="bold">
          聯絡方法
        </Typography>
        <br />
        <Typography variant="body1">電郵：whhone@gmail.com</Typography>
        <Typography variant="body1">
          Facebook：{" "}
          <Link href="https://www.facebook.com/jeetoudo/">jeetoudo</Link>
        </Typography>
        <Typography variant="body1">
          Github：{" "}
          <Link href="https://github.com/whhone/jeetou.com">
            whhone/jeetou.com
          </Link>
        </Typography>
      </Grid>
    </Grid>
  );
}

const rootSx: SxProps<Theme> = {
  display: "flex",
  flexDirection: "column",
  gap: 3,
  py: 2,
  px: 1,
  flex: 1,
};
