import { Box, Text } from "@chakra-ui/react";
import React from "react";
import LinkItem from "./LinkItem";
import { AiFillYoutube } from "react-icons/ai";
import "../../App.css"
const ViewLinksLogo = ({ avatar, username, email, links }) => {
  return (
    <svg
      width="308"
      height="632"
      viewBox="0 0 308 632"
      fill="none"
      style={{ position: "sticky", left: 0, top: "2rem" }}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M54.5 1H253.5C283.047 1 307 24.9528 307 54.5V577.5C307 607.047 283.047 631 253.5 631H54.5C24.9528 631 1 607.047 1 577.5V54.5C1 24.9528 24.9528 1 54.5 1Z"
        stroke="#737373"
      />
      <path
        d="M12 55.5C12 30.9233 31.9233 11 56.5 11H80.5C86.8513 11 92 16.1487 92 22.5C92 30.5081 98.4919 37 106.5 37H201.5C209.508 37 216 30.5081 216 22.5C216 16.1487 221.149 11 227.5 11H251.5C276.077 11 296 30.9233 296 55.5V576.5C296 601.077 276.077 621 251.5 621H56.5C31.9233 621 12 601.077 12 576.5V55.5Z"
        fill="white"
        stroke="#737373"
      />
      {avatar && (
        <defs>
          <pattern id="avatar" x="0" y="0" height="1" width="1">
            <image
              preserveAspectRatio="xMidYMid slice"
              x="0"
              y="0"
              height="100"
              width="100"
              xlinkHref={avatar}
            ></image>
          </pattern>
        </defs>
      )}
      <circle
        cx="153.5"
        cy="112"
        r="48"
        strokeWidth="4"
        stroke={avatar ? "#7762D9" : ""}
        fill={avatar ? "url(#avatar)" : "#EEEEEE"}
      ></circle>

      {username ? (
        <foreignObject y="185" width="100%" height="32" rx="4">
          <Text
            textAlign="center"
            fontWeight={600}
            color="primary.100"
            fontSize="18px"
          >
            {username}
          </Text>
        </foreignObject>
      ) : (
        <rect x="73.5" y="185" width="160" height="16" rx="8" fill="#EEEEEE" />
      )}
      {email ? (
        <foreignObject y="214" width="100%" height="32" rx="4">
          <Text textAlign="center" color="primary.200" fontSize="15px">
            {email}
          </Text>
        </foreignObject>
      ) : (
        <rect x="117.5" y="214" width="72" height="8" rx="4" fill="#EEEEEE" />
      )}
      <foreignObject width="100%" height="300px" x="0" y="278" rx="4">
        <Box
          display="flex"
          px="2.16rem"
          flexDirection="column"
          gap="1.25rem"
          className="view-links-container"
          mx="4.5px"
        >
          {links.length > 0 &&
            links.map((link) => {
              return (
                <LinkItem
                  label={link.value}
                  background={link.background}
                  icon={link.icon}
                  link={link.link}
                />
              );
            })}
          {links.length < 5 &&
            Array.from({ length: 4 - links.length }).map((_, index) => (
              <Box
                minH="56px"
                width="100%"
                boxSizing="content-box"
                bg="#EEEEEE"
                rounded=".5rem"
                key={index}
              ></Box>
            ))}
        </Box>
      </foreignObject>
    </svg>
  );
};

export default ViewLinksLogo;
