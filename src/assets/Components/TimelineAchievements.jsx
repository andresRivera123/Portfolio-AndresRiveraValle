import { Code, Fastfood, Games, Grade, LaptopChromebook, School, VideogameAsset, VideogameAssetOff, VideogameAssetSharp } from "@mui/icons-material";
import {
  Timeline,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineItem,
  TimelineOppositeContent,
  TimelineSeparator,
} from "@mui/lab";
import { Typography } from "@mui/material";

export default function TimelineAchievements() {
  return (
    <Timeline position="alternate">
      <TimelineItem>
        <TimelineOppositeContent
          sx={{ m: "auto 0" }}
          align="right"
          variant="body2"
          color="text.secondary"
        >
          2017
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot color="primary">
            <LaptopChromebook />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: "12px", px: 2 }}>
          <Typography
            sx={{ fontSize: { xs: "17px", sm: "20px" }, fontWeight: "400" }}
            component="span"
          >
            Empiezo la universidad
          </Typography>
          <Typography
            sx={{ fontSize: { xs: "12px", sm: "15px" }, fontWeight: "300" }}
          >
            Ingenieria en Software
          </Typography>
        </TimelineContent>
      </TimelineItem>

      <TimelineItem>
        <TimelineOppositeContent
          sx={{ m: "auto 0" }}
          align="right"
          variant="body2"
          color="text.secondary"
        >
          2017-2023
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot color="primary">
            <Code/>
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: "12px", px: 2 }}>
          <Typography
            sx={{ fontSize: { xs: "17px", sm: "20px" }, fontWeight: "400" }}
            component="span"
          >
            Programar y programar...
          </Typography>
          <Typography
            sx={{ fontSize: { xs: "12px", sm: "15px" }, fontWeight: "300" }}
          >
            HTML, CSS, JAVASCRIPT, JAVA, C++, C#, DART AND FRAMEWORKS
          </Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent
          sx={{ m: "auto 0" }}
          align="right"
          variant="body2"
          color="text.secondary"
        >
          2022
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot color="primary">
            <VideogameAsset/>
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: "12px", px: 2 }}>
          <Typography
            sx={{ fontSize: { xs: "17px", sm: "20px" }, fontWeight: "400" }}
            component="span"
          >
            1er lugar - Concurso de desarollo de videojuegos
          </Typography>
          <Typography
            sx={{ fontSize: { xs: "12px", sm: "15px" }, fontWeight: "300" }}
          >
            GamerFest/Espe-l
          </Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent
          sx={{ m: "auto 0" }}
          align="right"
          variant="body2"
          color="text.secondary"
        >
          2023
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot color="primary">
            <VideogameAssetSharp/>
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: "12px", px: 2 }}>
          <Typography
            sx={{ fontSize: { xs: "17px", sm: "20px" }, fontWeight: "400" }}
            component="span"
          >
            2do lugar - Concurso de desarollo de videojuegos
          </Typography>
          <Typography
            sx={{ fontSize: { xs: "12px", sm: "15px" }, fontWeight: "300" }}
          >
            GamerFest/Espe-l
          </Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent
          sx={{ m: "auto 0" }}
          align="right"
          variant="body2"
          color="text.secondary"
        >
          Proximamente...
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot color="primary">
            <School/>
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: "12px", px: 2 }}>
          <Typography
            sx={{ fontSize: { xs: "17px", sm: "20px" }, fontWeight: "400" }}
            component="span"
          >
            Graduación
          </Typography>
          <Typography
            sx={{ fontSize: { xs: "12px", sm: "15px" }, fontWeight: "300" }}
          >
            Agosto-2023
          </Typography>
        </TimelineContent>
      </TimelineItem>
    </Timeline>
  );
}
