import { Box, Typography } from "@mui/material";
import { theme } from "../../theme";
import IconsGrid from "./IconsGrid";

export default function Footer() {
  return (
    <Box
      display="flex"
      flexDirection="row"
      sx={{
        height: "100%",
        backgroundColor: theme.palette.primary.main,
        textAlign: "center",
        justifyContent: "space-between",
      }}
    >
      <Box sx={{ display: { xs: "none", sm: "flex" }, flexGrow: 1 }}>
        <IconsGrid />
      </Box>
      <Box sx={{ flexGrow: 1, margin: "auto 0" }}>
        <Box>
          <Typography>|Buscando la creatividad absoluta|</Typography>
          <Typography>Derechos reservados @AndresRiveraValle | 2023</Typography>
        </Box>
      </Box>
    </Box>
  );
}
