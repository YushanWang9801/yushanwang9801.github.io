import {
  Container,
  Grid,
  Stack,
  Typography,
} from "@mui/material";

import { useEffect, useState } from "react";
import AppTree from "./AppTree";

import { Routes, Route, useNavigate, Navigate } from "react-router-dom";
import AppButtons from "./AppButtons";
import MDContainer from "../components/MDContainer";
import Home from "../pages/Home";
import { pages } from "../pages/pages";
import usePageTracking from "../hooks/usePageTracking";
import { isBrowser } from "react-device-detect";

// import useLocalStorage from 'use-local-storage';
// import HeaderWang from "../comp/HeaderWang";

interface Page {
  index: number;
  name: string;
  route: string;
}

function initVisiblePageIndexs(pages: Page[]) {
  const tabs : number[] = [];
  for (let i = 0; i < pages.length; i++) {
    const page = pages[i];
    tabs.push(page.index);
  }
  return tabs;
}

export default function BlogVScode(theme: string) {
  const navigate = useNavigate();
  const [expanded,] = useState(isBrowser);
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const [currentComponent, setCurrentComponent] = useState("");
  const [visiblePageIndexs, setVisiblePageIndexs] = useState(
    initVisiblePageIndexs(pages)
  );
  const [visiblePages, setVisiblePages] = useState(pages);
  usePageTracking();

  const deletedIndex = visiblePages.find(
    (x) => !visiblePageIndexs.includes(x.index)
  )?.index;

  useEffect(() => {
    const newPages: Page[] = [];

    for (const index of visiblePageIndexs) {
      const page = pages.find((x) => x.index === index);
      if (page) newPages.push(page);
    }
    setVisiblePages(newPages);

    if (visiblePageIndexs.length === 0) {
      setSelectedIndex(-1);
      navigate("/");
    } else if (
      deletedIndex === selectedIndex &&
      deletedIndex > Math.max(...visiblePageIndexs)
    ) {
      setSelectedIndex(Math.max(...visiblePageIndexs));
      const page = pages.find(
        (x) => x.index === Math.max(...visiblePageIndexs)
      );
      if (page) navigate(page.route);
    } else if (
      deletedIndex === selectedIndex &&
      deletedIndex < Math.max(...visiblePageIndexs)
    ) {
      setSelectedIndex(Math.min(...visiblePageIndexs));
      const page = pages.find(
        (x) => x.index === Math.min(...visiblePageIndexs)
      );
      if (page) navigate(page.route);
    } else {
    }
  }, [visiblePageIndexs, navigate, deletedIndex, selectedIndex]);


  return (
        <div className="vscode">
          <Container
            sx={{ m: 0, p: 0, overflowY: "hidden", height: "888px" }}
            maxWidth={false}
            disableGutters
          >
            <Grid container sx={{ overflow: "auto", overflowY: "hidden" }}>
              <Grid container sx={{ overflow: "auto" }}>
                {expanded && (
                  <Grid
                    item
                    sx={{
                      backgroundColor: "var(--accent)",
                      width: 220,
                    }}
                  >
                    <Stack sx={{ mt: 1 }}>
                      <Typography
                        variant="caption"
                        fontFamily= "Optima, 'Comic Sans MS', 'Comic Sans', cursive, Roboto, Helvetica, Arial, sans-serif"
                        fontSize = "18px"
                        color="var(--primary)"
                        sx={{ ml:4}}
                      >
                        Explore My Blogs 
                      </Typography>
                      <AppTree
                        pages={pages}
                        selectedIndex={selectedIndex}
                        setSelectedIndex={setSelectedIndex}
                        currentComponent={currentComponent}
                        setCurrentComponent={setCurrentComponent}
                        visiblePageIndexs={visiblePageIndexs}
                        setVisiblePageIndexs={setVisiblePageIndexs}
                        theme={theme}
                      />
                    </Stack>
                  </Grid>
                )}

                <Grid item xs zeroMinWidth>
                  <Grid
                    sx={{
                      height: "33px",
                    }}
                  >
                    <AppButtons
                      // pages={pages}
                      pages={visiblePages}
                      selectedIndex={selectedIndex}
                      setSelectedIndex={setSelectedIndex}
                      currentComponent={currentComponent}
                      setCurrentComponent={setCurrentComponent}
                      visiblePageIndexs={visiblePageIndexs}
                      setVisiblePageIndexs={setVisiblePageIndexs}
                      theme ={theme}
                    />
                  </Grid>

                  <Grid
                    sx={{
                      scrollBehavior: "smooth",
                      // overflow: 'scroll',
                      overflowY: "auto",
                      height: `calc(100vh - 20px - 33px)`,
                    }}
                  >
                    <Routes>
                      <Route
                        path="/blog"
                        element={<Home setSelectedIndex={setSelectedIndex} />}
                      />
                      {pages.map(({ index, name, route }) => (
                                <Route
                                  key={index}
                                  path={`/blog${route}`}
                                  element={<MDContainer path={`./pages/${name}`} />}
                                />
                              ))}
                      <Route path="*" element={<Navigate to="/" replace />} />
                    </Routes>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Container>
        </div>
  );
}
