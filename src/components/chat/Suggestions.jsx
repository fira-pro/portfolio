import usePortfolioStore from "../../store";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import LoadingIcon from "../ui/icons/LoadingIcon";
import CheckMarkIcon from "../ui/icons/CheckMarkIcon";
import WritingHandIcon from "../ui/icons/WritingHandIcon";
import { useTheme } from "@emotion/react";
import useMediaQuery from "@mui/material/useMediaQuery";
const Suggestions = ({ scrollToSection = () => {} }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(
    theme.breakpoints.down("sm")
  );
  const {
    sections,
    startStreaming,
    currentStreamingId,
    streamedSections,
  } = usePortfolioStore();
  const isJustStarted = streamedSections.length === 0;

  const handleScrollToOrStream = (sectionId) => {
    if (streamedSections.find((s) => s === sectionId)) {
      scrollToSection(sectionId);
    } else {
      startStreaming(sectionId);
    }
  };

  const getEndIcon = (status) => {
    if (status === "streaming") return <WritingHandIcon />;
    if (status === "loading") return <LoadingIcon />;
    if (status === "completed") return <CheckMarkIcon />;
    return null;
  };

  const suggestionsBoxStyles = isJustStarted
    ? {}
    : {
        borderTopColor: "divider",
        borderTopStyle: "solid",
        borderTopWidth: "0.8px",
      };

  return (
    <Box
      pt={1}
      // mb={1}
      sx={{
        display: "flex",
        flexDirection: "column",
        alignContent: "center",
        justifyContent: "center",
        ...suggestionsBoxStyles,
      }}
    >
      {isJustStarted && (
        <Typography
          color="text.secondary"
          my={2}
          textAlign="center"
        >
          What would you like to know about me?
        </Typography>
      )}
      <Stack
        direction="row"
        flexWrap="wrap"
        spacing={1.5}
        useFlexGap
        justifyContent="center"
      >
        {sections.map((section) => {
          return (
            <Button
              size={isMobile ? "small" : "medium"}
              endIcon={getEndIcon(section.status)}
              key={section.id}
              onClick={() =>
                handleScrollToOrStream(section.id)
              }
              disabled={currentStreamingId !== null}
              variant={
                section.status === "completed" ||
                section.status === "streaming"
                  ? "outlined"
                  : "contained"
              }
              sx={{
                borderColor:
                  section.status === "completed"
                    ? "success.light"
                    : section.status === "loading" ||
                      section.status === "streaming"
                    ? "info.light"
                    : "grey.300",
                px: 2,
                py: 1,
                textTransform: "capitalize",
              }}
            >
              {section.title}
            </Button>
          );
        })}
      </Stack>
      {!isJustStarted && (
        <Typography
          color="textSecondary"
          variant="caption"
          align="center"
          py={1}
        >
          Fira can develop amazing softwares. Check{" "}
          <span
            onClick={() =>
              handleScrollToOrStream("contact")
            }
            style={{
              cursor: "pointer",
              textDecoration: "underline",
            }}
          >
            contact
          </span>{" "}
          info.
        </Typography>
      )}
    </Box>
  );
};

export default Suggestions;
