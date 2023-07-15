import { Grid, IconButton, Link } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import MailOutlineIcon from "@mui/icons-material/MailOutline";

export default function IconsGrid() {
  const handleEmailClick = () => {
    window.location.href = "mailto:carlosandresriveravalle@gmail.com";
  };
  const handleWhatsAppClick = () => {
    const message = encodeURIComponent("Hola Andy :D");
    const phoneNumber = "0984579517";

    window.location.href = `https://wa.me/${phoneNumber}?text=${message}`;
  };

  return (
    <Grid container justifyContent="center" alignItems="center" height="100%">
      <Grid item xs={3} sm={3}>
        <Link
          href="https://github.com/andresRivera123"
          target="_blank"
          rel="noopener noreferrer"
        >
          <IconButton
            sx={{ color: "black", "&:hover": { transform: "scale(1.2)" } }}
          >
            <GitHubIcon fontSize="large" />
          </IconButton>
        </Link>
      </Grid>
      <Grid item xs={3} sm={3}>
        <Link
          href="https://github.com/andresRivera123"
          target="_blank"
          rel="noopener noreferrer"
        >
          <IconButton
            sx={{
              color: "black",
              "&:hover": { transform: "scale(1.2)" },
            }}
          >
            <LinkedInIcon fontSize="large" />
          </IconButton>
        </Link>
      </Grid>
      <Grid item xs={3} sm={3}>
        <IconButton
          onClick={handleWhatsAppClick}
          sx={{ color: "black", "&:hover": { transform: "scale(1.2)" } }}
        >
          <WhatsAppIcon fontSize="large" />
        </IconButton>
      </Grid>
      <Grid item xs={3} sm={3}>
        <IconButton
          onClick={handleEmailClick}
          sx={{ color: "black", "&:hover": { transform: "scale(1.2)" } }}
        >
          <MailOutlineIcon fontSize="large" />
        </IconButton>
      </Grid>
    </Grid>
  );
}
