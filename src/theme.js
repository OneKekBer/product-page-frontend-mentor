export const themeSettings = (mode) => {
    return {
        palette: {
            mode: mode,
            ...(mode === "light"
                ? {
                      primary: {
                          main: "#FFFFFF",
                          white: "#FFFFFF",
                          black: "#0C0C0C",
                          purple: "#CF2DB4",
                          blue: "#5CE1E6",
                          red: "#FF5757",
                          yellow: "#FDFDB9",
                          lightYellow: "#F5F5DC",
                      },
                      background: {},
                  }
                : {
                      primary: {
                          main: "#FFFFFF",
                      },
                  }),
        },
        typography: {
            fontSize: 16,

            fontWeight: "bold",
            color: "white",
            h1: {
                fontSize: "20px",

                "@media (max-width:992px)": {
                    fontSize: "20px",
                },
                "@media (max-width:600px)": {
                    fontSize: "10px",
                },
                "@media (max-width:400px)": {
                    fontSize: "10px",
                },
            },
            h2: {
                fontSize: "40px",

                "@media (max-width:992px)": {
                    fontSize: "30px",
                },
                "@media (max-width:600px)": {
                    fontSize: "50px",
                },
                "@media (max-width:400px)": {
                    fontSize: "30px",
                },
            },
            h3: {
                fontSize: "60px",

                "@media (max-width:992px)": {
                    fontSize: "40px",
                },
                "@media (max-width:600px)": {
                    fontSize: "40px",
                },
                "@media (max-width:400px)": {
                    fontSize: "30px",
                },
            },
            h4: {
                fontSize: "50px",

                "@media (max-width:992px)": {
                    fontSize: "50px",
                },
                "@media (max-width:600px)": {
                    fontSize: "30px",
                },
                "@media (max-width:400px)": {
                    fontSize: "20px",
                },
            },
            h5: {
                fontSize: "40px",

                "@media (max-width:992px)": {
                    fontSize: "30px",
                },
                "@media (max-width:600px)": {
                    fontSize: "25px",
                },
                "@media (max-width:400px)": {
                    fontSize: "20px",
                },
            },
            h6: {
                fontSize: "20px",

                "@media (max-width:992px)": {
                    fontSize: "15px",
                },
                "@media (max-width:600px)": {
                    fontSize: "25px",
                },
                "@media (max-width:400px)": {
                    fontSize: "20px",
                },
            },

            text1: {
                fontSize: "50px",
                "@media (max-width:992px)": {
                    fontSize: "50px",
                },
                "@media (max-width:600px)": {
                    fontSize: "40px",
                },
                "@media (max-width:400px)": {
                    fontSize: "30px",
                },
            },
            text2: {
                fontSize: "30px",
                "@media (max-width:992px)": {
                    fontSize: "30px",
                },
                "@media (max-width:600px)": {
                    fontSize: "25px",
                },
                "@media (max-width:400px)": {
                    fontSize: "20px",
                },
            },
        },
    };
};
