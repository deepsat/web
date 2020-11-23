import { Box, Link, Flex, Spacer, Image, Icon } from "@chakra-ui/react";
import ResponsiveContainer from "./responsiveContainer";
import { useEffect, useState } from "react";
import { MdMenu } from "react-icons/md";
import CustomLink from "./link";
import { useRouter } from "next/router";
const logo = require("../images/logo_horizontal.png?resize&webp");

const MenuItem = ({ href, label, locale, ...props }) => {
  return (
    <CustomLink key={href} {...{ href, locale }} {...props}>
      {label}
    </CustomLink>
  );
};
MenuItem.defaultProps = {};

const LanguageSwitcher = (props) => {
  const router = useRouter();
  return router.locales.map((locale) =>
    locale == router.locale ? null : (
      <Link href={`/${locale}${router.asPath}`} {...props}>
        {locale.toLocaleUpperCase()}
      </Link>
    )
  );
};

const Header = ({ menu }) => {
  const [isTop, setTop] = useState(true);

  const [isOpen, setOpen] = useState(false);
  const toggleOpen = () => setOpen(!isOpen);

  useEffect(() => {
    let onscroll = () => {
      const current = window.scrollY < 10;
      if (current !== isTop) {
        setTop(current);
      }
    };
    document.addEventListener("scroll", onscroll);
    onscroll();
  });

  return (
    <Box
      pos="fixed"
      top="0"
      left="0"
      right="0"
      bg={isTop ? "transparent" : "white"}
      transition="background-color ease-in-out 200ms"
      zIndex="sticky"
    >
      <ResponsiveContainer>
        <Flex px={{ base: 8, md: 16 }} align="center" h="24" pos="relative">
          <CustomLink
            href="/"
            passHref
            transition={
              isTop
                ? "opacity ease-in-out 200ms, visibility 0s 200ms"
                : "opacity ease-in-out 200ms, visibility 0s 0s"
            }
            visibility={isTop ? "hidden" : "initial"}
            opacity={isTop ? "0" : "1"}
          >
            <Image h="10" src={logo} srcSet={logo.srcSet} />
          </CustomLink>
          <Spacer />
          <Icon
            onClick={toggleOpen}
            as={MdMenu}
            w="6"
            h="6"
            display={{ base: "block", md: "none" }}
            color={isTop ? "white" : "brand.default"}
          ></Icon>
          <Flex
            as="nav"
            direction={{ base: "column", md: "row" }}
            position={{ base: "absolute", md: "static" }}
            left="0"
            right="0"
            top="100%"
            bg={{ base: "white", md: "none" }}
            overflowY={{ base: "hidden", md: "initial" }}
            transform={{ base: isOpen ? null : "scaleY(0)", md: "initial" }}
            transformOrigin="top"
            aria-hidden={!isOpen}
            transition="transform ease-in-out 200ms"
          >
            {menu.map((item) => (
              <MenuItem
                {...item}
                ml={{ md: "8" }}
                pl={{ base: "8", md: "0" }}
                pt="4"
                pb="4"
                color={{ base: null, md: isTop ? "white" : null }}
                display="block"
              ></MenuItem>
            ))}
            <LanguageSwitcher
              ml={{ md: "8" }}
              pl={{ base: "8", md: "0" }}
              pt="4"
              pb="4"
              color={{ base: null, md: isTop ? "white" : null }}
              display="block"
            />
          </Flex>
        </Flex>
      </ResponsiveContainer>
    </Box>
  );
};

export default Header;
