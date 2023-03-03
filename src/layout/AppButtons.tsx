import { Button, Box, Paper } from "@mui/material";
import React from "react";
import { VscMarkdown, VscChromeClose } from "react-icons/vsc";
import { useNavigate } from "react-router-dom";
import { Container } from "@mui/system";

interface Props {
  pages: {
    index: number;
    name: string;
    route: string;
  }[];
  selectedIndex: number;
  setSelectedIndex: React.Dispatch<React.SetStateAction<number>>;
  currentComponent: string;
  setCurrentComponent: React.Dispatch<React.SetStateAction<string>>;
  visiblePageIndexs: number[];
  setVisiblePageIndexs: React.Dispatch<React.SetStateAction<number[]>>;
  theme: string;
}

export default function AppButtons({
  pages,
  selectedIndex,
  setSelectedIndex,
  // currentComponent,
  setCurrentComponent,
  visiblePageIndexs,
  setVisiblePageIndexs,
  theme,
}: Props) {
  const navigate = useNavigate();
  // const [selectedIndex, setSelectedIndex] = useState(-1);
  function renderButtonBgColor(index: number) {
      return selectedIndex === index ? "var(--background)" : "var(--accent)";
  }

  function renderButtonColor(index: number) {
      return selectedIndex === index ? "var(--secondary)" : "var(--secondary)";
  }

  function renderCloseButtonBgColor(index: number) {
      return selectedIndex === index ? "var(--primary)" : "var(--secondary)";
  }

  function renderCloseButtonColor(index: number) {
      return selectedIndex === index ? "var(--secondary)" : "var(--background)";
  }

  function renderCloseButtonHoverBgColor(index: number) {
    if (theme === "dark") {
      return selectedIndex === index ? "#333c43" : "#333c43";
    } else {
      return selectedIndex === index ? "#e6e4e5" : "#dadada";
    }
  }

  function renderCloseButtonHoverColor(index: number) {
    if (theme === "dark") {
      return selectedIndex !== index ? "#817d7a" : "#white";
    } else {
      return selectedIndex === index ? "#44434b" : "#92938e";
    }
  }

  function renderPageButton(index: number, name: string, route: string) {
    return (
      <Box
        key={index}
        sx={{
          display: "inline-block",
          borderRight: 1,
          borderColor: theme === "dark" ? "#252525" : "#f3f3f3",
        }}
      >
        <Button
          key={index}
          disableRipple
          disableElevation
          disableFocusRipple
          onClick={() => {
            setSelectedIndex(index);
            setCurrentComponent("button");
            navigate(route);
          }}
          sx={{
            borderRadius: 0,
            px: 2,
            textTransform: "none",
            backgroundColor: renderButtonBgColor(index),
            color: renderButtonColor(index),
            "&.MuiButtonBase-root:hover": {
              bgcolor: renderButtonBgColor(index),
            },
            transition: "none",
            pb: 0.2,
          }}
        >
          <Box
            sx={{ color: "var(--secondary)", width: 20, height: 20, mr: 0.4, ml: -1 }}
          >
            <VscMarkdown />
          </Box>
          {name}
          <Box
            component={Paper}
            sx={{
              ml: 1,
              mr: -1,
              backgroundColor: renderCloseButtonBgColor(index),
              color: renderCloseButtonColor(index),
              "&.MuiPaper-root:hover": {
                bgcolor: renderCloseButtonHoverBgColor(index),
                color: renderCloseButtonHoverColor(index),
              },
              width: 20,
              height: 20,
              transition: "none",
            }}
            elevation={0}
            onClick={(e: any) => {
              e.stopPropagation();
              setVisiblePageIndexs(
                visiblePageIndexs.filter((x) => x !== index)
              );
            }}
          >
            <VscChromeClose />
          </Box>
        </Button>
      </Box>
    );
  }

  return (
    <Container
      maxWidth={false}
      disableGutters
      sx={{
        display: "inline-block",
        overflowX: "auto",
        overflowY: "hidden",
        whiteSpace: "nowrap",
        backgroundColor: "var(--accent)",
        "&::-webkit-scrollbar": {
          height: "3px",
        },
        "&::-webkit-scrollbar-thumb": {
          backgroundColor:
            theme === "dark" ? "#535353" : "#8c8c8c",
        },
        "&::-webkit-darkScrollbar-thumb": {
          backgroundColor:
            theme === "dark" ? "#ffffff" : "#8c8c8c",
        },
      }}
    >
      {pages.map(({ index, name, route }) =>
        renderPageButton(index, name, route)
      )}
    </Container>
  );
}
