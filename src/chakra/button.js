

export const Button = {
  baseStyle: {
    borderRadius: "7px",
    fontSize: "15px",
    fontWeight: 700,
    _focus: {
      boxShadow: "none",
    },
  },
  sizes: {
    sm: {
      fontSize: "8pt",
    },
    md: {
      fontSize: "15px",
    },
  },
  variants: {
    solid: {
      color: "white",
      bg: "#633BFE",
      _hover: {
        opacity: 0.7,
        color: "white",
        bg: "#633BFE",
      },
    },
    outline: {
      color: "#7762D9",
      border: "1px solid",
      borderColor: "#7762D9",
      _hover: {
        bg: "#EFECFD",
      },
    },
    solidSecondary: {
      color: "#7762D9",
      bg: "#EFECFD",
      _hover: {
        color: "#7762D9",
        bg: "#EFECFD",
      },
    },
    ghost: {
      color: "#989898",
      _hover: {
        color: "#7762D9",
        bg: "none",
      },
    },
    menu: {
      color: "#3A3A3A",
      fontSize: "18px",
      fontWeight: 500,
      display: "flex",
      justify: "space-between",
      _focus: {
        boxShadow: "3px 3px 4px brand.100",
      },
      _expanded: {
        boxShadow: "3px 3px 4px brand.100",
      },
    },
  },
};
