import React, { useEffect, useState } from "react";
import { Box, useColorMode, Text, Link as ChakraLink } from "@chakra-ui/react";
import ReactMarkdown from "react-markdown";
import gfm from "remark-gfm";
import { createUseStyles } from "react-jss";
import useIsomorphicLayoutEffect from "./useIsomorphicLayoutEffect";
import { SERVER_URL } from "./constants";
import { colors } from "./colors";

interface StyleProps {
  [prop: string]: string;
}

interface Props {}

export const Markdown: React.FC<Props> = () => {
  const [readme, setReadme] = useState<string | undefined>();
  const { colorMode } = useColorMode();
  const linkColor = {
    light: colors.nebula[500],
    dark: colors.nebula[200],
  };
  const codeColor = {
    light: colors.solstice as string,
    dark: colors.proton as string,
  };
  const bordColor = {
    light: colors.telluric as string,
    dark: colors.nova as string,
  };
  const bgColor = {
    light: colors.asteroid as string,
    dark: colors.cosmos as string,
  };

  const [styleProps, setStyleProps] = useState<StyleProps>();

  const useStyles = createUseStyles({
    markdown: (props) => ({
      width: "100%",
      padding: "2rem",
      "& a": {
        color: props.linkColor,
      },
      "& a:hover": {
        textDecoration: "underline",
      },
      "& p": { marginBottom: "1rem" },
      "& h1": {
        fontSize: "2.5rem",
        fontWeight: "bold",
        lineHeight: "normal",
        marginBottom: "2rem",
      },
      "& h2": { fontSize: "2rem", fontWeight: "bold", marginBottom: "1rem" },
      "& h3": { fontSize: "1.35rem", marginBottom: "1rem" },
      "& code": {
        color: props.codeColor,
        backgroundColor: props.bgColor,
      },
      "& pre": {
        color: props.codeColor,
        backgroundColor: props.bgColor,
        padding: "1rem",
        border: "1px solid",
        borderColor: props.bordColor,
        overflow: "scroll",
        marginBottom: "1rem",
      },
      "& table": {
        color: props.codeColor,
        backgroundColor: props.bgColor,
        padding: "1rem",
        border: "1px solid",
        borderColor: props.bordColor,
        overflow: "scroll",
        marginBottom: "1rem",
      },
      "& th": {
        padding: ".5rem",
        border: "1px solid",
        borderColor: props.bordColor,
      },
      "& td": {
        padding: ".5rem",
        border: "1px solid",
        borderColor: props.bordColor,
      },
    }),
  });

  const Markdown = ({ ...props }) => {
    const classes = useStyles(props);
    return (
      <Box className={classes.markdown} mt="4rem" maxWidth="48rem">
        {readme && <ReactMarkdown plugins={[gfm]} source={readme} />}
      </Box>
    );
  };

  Markdown.defaultProps = {
    linkColor: linkColor[colorMode],
    bordColor: bordColor[colorMode],
    bgColor: bgColor[colorMode],
    codeColor: codeColor[colorMode],
  };

  useIsomorphicLayoutEffect(() => {
    setStyleProps({
      linkColor: linkColor[colorMode],
      bordColor: bordColor[colorMode],
      bgColor: bgColor[colorMode],
      codeColor: codeColor[colorMode],
    });
  }, [colorMode]);

  useEffect(() => {
    (async () => {
      const response = await fetch(`${SERVER_URL}/readme`);
      const text = await response.text();
      setReadme(text);
    })();
  }, []);

  return (
    <>
      <Markdown styleProps={styleProps} />
      <Text m="2rem" fontSize="md">
        This page has been autogenerated from README.md using{" "}
        <ChakraLink
          color={linkColor[colorMode]}
          href="https://remarkjs.github.io/react-markdown/"
        >
          react-markdown
        </ChakraLink>{" "}
        and{" "}
        <ChakraLink
          color={linkColor[colorMode]}
          href="https://cssinjs.org/react-jss/"
        >
          react-jss
        </ChakraLink>
      </Text>
    </>
  );
};
