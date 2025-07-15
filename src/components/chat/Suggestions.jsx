import usePortfolioStore from "../../store";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
const Suggestions = () => {
  const {
    sections,
    startStreaming,
    currentStreamingId,
    streamedSections,
  } = usePortfolioStore();
  const isJustStarted = streamedSections.length === 0;

  const handleScrollToContact = () => {
    if (streamedSections.find((s) => s === "contact")) {
      const userMessageElement = document.querySelector(
        "[data-user-message=contact]"
      );
      if (userMessageElement) {
        userMessageElement?.scrollIntoView({
          behavior: "smooth",
        });
      }
    } else {
      startStreaming("contact");
    }
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
        {sections.map((section) => (
          <Button
            key={section.id}
            onClick={() => startStreaming(section.id)}
            disabled={currentStreamingId !== null}
            variant="outlined"
            sx={{
              borderRadius: 2,
              borderColor:
                section.status === "completed"
                  ? "success.light"
                  : section.status === "loading" ||
                    section.status === "streaming"
                  ? "info.light"
                  : "grey.300",
              backgroundColor:
                section.status === "completed"
                  ? "success.lighter"
                  : section.status === "loading" ||
                    section.status === "streaming"
                  ? "info.lighter"
                  : "grey.100",
              color:
                section.status === "completed"
                  ? "success.dark"
                  : section.status === "loading" ||
                    section.status === "streaming"
                  ? "info.dark"
                  : "grey.800",
              opacity:
                currentStreamingId !== null ? 0.5 : 1,
              cursor:
                currentStreamingId !== null
                  ? "not-allowed"
                  : "pointer",
              transition: "background 0.2s, border 0.2s",
              px: 2,
              py: 1,
              textTransform: "none",
            }}
          >
            {section.title}
            {section.status === "loading" && " ⏳"}
            {section.status === "streaming" && " ✍️"}
            {section.status === "completed" && " ✅"}
          </Button>
        ))}
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
            onClick={handleScrollToContact}
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
