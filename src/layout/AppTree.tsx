import * as React from "react";
import TreeView from "@mui/lab/TreeView";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import TreeItem from "@mui/lab/TreeItem";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { VscMarkdown } from "react-icons/vsc";

interface Page {
  index: number;
  name: string;
  route: string;
  // coverImage: string;
}

interface Props {
  pages: {
    index: number;
    name: string;
    route: string;
    // coverImage: string;
  }[];
  selectedIndex: number;
  setSelectedIndex: React.Dispatch<React.SetStateAction<number>>;
  currentComponent: string;
  setCurrentComponent: React.Dispatch<React.SetStateAction<string>>;
  visiblePageIndexs: number[];
  setVisiblePageIndexs: React.Dispatch<React.SetStateAction<number[]>>;
  theme: string;
}

export default function AppTree({
  pages,
  selectedIndex,
  setSelectedIndex,
  currentComponent,
  setCurrentComponent,
  visiblePageIndexs,
  setVisiblePageIndexs,
  theme, 
}: Props) {
  const navigate = useNavigate();
  let { pathname } = useLocation();

  const page: Page = pages.find((x) => x.route === pathname)!;

  useEffect(() => {
    if (page) {
      setSelectedIndex(page.index);
    }
  }, [page, setSelectedIndex]);

  function renderTreeItemBgColor(index: number) {
    return selectedIndex === index ? "var(--background)" : "var(--accent)";
  }

  return (
    <TreeView
      aria-label="file system navigator"
      defaultCollapseIcon={<ExpandMoreIcon />}
      defaultExpandIcon={<ChevronRightIcon />}
      defaultExpanded={["-1"]}
      color={"var(--background)"}
    >
      <TreeItem
        nodeId="-1"
        label="Home"
        color= "var(--background)"
        onClick={() => {
          navigate("/old_blog");
          setSelectedIndex(-1);
        }}
        sx ={{maxWidth: "220px", overflowX:"hidden"}}
      >
        {pages.map(({ index, name, route }) => (
          <TreeItem
            key={index}
            nodeId={index.toString()}
            label={name}
            sx={{
              color: "var(--secondary)",
              backgroundColor: renderTreeItemBgColor(index),
              "&& .Mui-selected": {
                backgroundColor: renderTreeItemBgColor(index),
              },
            }}
            icon={<VscMarkdown color="var(--secondary)" />}
            onClick={() => {
              if (!visiblePageIndexs.includes(index)) {
                const newIndexs = [...visiblePageIndexs, index];
                setVisiblePageIndexs(newIndexs);
              }
              navigate(`/old_blog${route}`);
              setSelectedIndex(index);
              setCurrentComponent("tree");
            }}
          />
        ))}
      </TreeItem>
    </TreeView>
  );
}
