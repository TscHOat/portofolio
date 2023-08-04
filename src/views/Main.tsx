import React from "react";
import { Typography, Box, Container } from "@mui/material";
import { Container as ParticlesContainer, Engine } from "tsparticles-engine";
import { loadFull } from "tsparticles";
import Particles from "react-tsparticles";

export default function Main(): JSX.Element {
  const particlesInit = React.useCallback(async (engine: Engine) => {
    console.log(engine);
    await loadFull(engine);
  }, []);

  const particlesLoaded = React.useCallback(
    async (container: ParticlesContainer | undefined) => {
      await console.log(container);
    },
    []
  );

  const refParticle = React.useRef(null);

  return (
    <>
      <Container
        maxWidth="lg"
        id={"main"}
        sx={{
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          "& #particles-js > canvas": {
            zIndex: -1,
            position: "absolute",
            top: 0,
            left: 0,
          },
        }}
      >
        <Box
          sx={{
            backgroundColor:"rgba(255,255,255,0.5)",
            width: "600px",
            p: 4,
            borderRadius: 10,
          }}
        >
          <Typography variant="h1">Hello World!</Typography>
          <Typography
            variant="h2"
            sx={{
              "& a": {
                color: "#000",
                transition: "all .2s ease-in-out",
                ":hover": {
                  color: "#f44336",
                  transition: "all .2s ease-in-out",
                  transform: "scale(2,2)",
                },
                // textDecoration: "none",
              },
            }}
          >
            My name is{" "}
            <b>
              <a href="mailto:taufiqmaulana1101@gmail.com">Taufiq</a>
            </b>{" "}
          </Typography>
          <Box
            sx={{
              maxWidth: "500px",
              mt: 2,
            }}
          >
            <Typography variant="body1">
              I am a full-stack developer with expertise in React and Laravel.
              Over the past three years, I have honed my skills and delivered
              numerous successful projects that combine the power of these
              technologies to create efficient and user-friendly web
              applications.
            </Typography>
          </Box>
        </Box>
        <Particles
          id="particles-js"
          width="100%"
          height="100%"
          init={particlesInit}
          loaded={particlesLoaded}
          params={{
            fullScreen: {
              enable: false,
            },
            backgroundMode: {
              enable: true,
              zIndex: -1,
            },
            fpsLimit: 60,
            interactivity: {
              detectsOn: "canvas",
              events: {
                onClick: {
                  enable: true,
                  mode: "push",
                },
                onHover: {
                  enable: true,
                  mode: "repulse",
                },
              },
            },
            particles: {
              lineLinked: {
                blink: false,
                color: {
                  value: "#2b2b2b",
                },
                consent: false,
                distance: 150,
                enable: true,
                opacity: 0.4,
                width: 1,
              },

              shape: {
                type: "circle",
              },
              rotate: {
                value: 45,
                animation: {
                  enable: true,
                  speed: 10,
                  sync: false,
                },
              },

              color: {
                value: "#f44336",
              },
              size: {
                random: {
                  enable: true,
                  minimumValue: 1,
                },
                value: 10,
              },

              move: {
                speed: 0.1,
                attract: {
                  rotate: {
                    x: 600,
                    y: 1200,
                  },
                },
                enable: true,
                outModes: {
                  default: "bounce",
                  bottom: "bounce",
                  left: "bounce",
                  right: "bounce",
                  top: "bounce",
                },
              },
              number: {
                density: {
                  enable: true,
                  area: 1080,
                },
                value: 100,
              },
              opacity: {
                animation: {
                  enable: true,
                  minimumValue: 0.5,
                  speed: 1.6,
                  sync: false,
                },
                random: {
                  enable: true,
                  minimumValue: 0.1,
                },
                value: 1,
              },
              interactivity: {
                detectsOn: "canvas",
                events: {
                  resize: true,
                },
              },
            },
          }}
        />
      </Container>

      {/* <Container
        ref={refParticle}
        maxWidth="md"
        id={"about"}
        sx={{
          minHeight: "100vh",
          display: "flex",
          "& #particles-js > canvas":{
            position: "relative !important",
          }
        }}
      >
        
      </Container> */}
    </>
  );
}
