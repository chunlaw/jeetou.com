import { Container, SxProps, Theme } from "@mui/material";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

const Layout = () => {
  return (
    <Container maxWidth="xl" fixed sx={rootSx}>
      <Header />
      <Outlet />
      <Footer />
    </Container>
  );
};

export default Layout;

const rootSx: SxProps<Theme> = {
  display: "flex",
  flex: 1,
  flexDirection: "column",
  justifyContent: "space-between",
  height: "100%",
};
