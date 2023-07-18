import { Box, styled, Typography, Link } from "@mui/material";
import { GitHub, Instagram, Email } from "@mui/icons-material";

const Banner = styled(Box)`
  background-image: url(https://www.wallpapertip.com/wmimgs/23-236943_us-wallpaper-for-website.jpg);
  width: 100%;
  height: 50vh;
  background-position: left 0px bottom 0px;
  background-size: cover;
`;

const Wrapper = styled(Box)`
  padding: 20px;
  & > h3,
  & > h5 {
    margin-top: 50px;
  }
`;

const Text = styled(Typography)`
  color: #878787;
`;

const About = () => {
  return (
    <Box>
      <Banner />
      <Wrapper>
        <Typography variant="h3">Pankaj Programmer</Typography>
        <Text variant="h5">
          I'm a Software Engineer based in India. I've built websites, desktop
          applications and corporate software.
          <br />
          If you are interested, you can view some of my favorite projects here:
          <Box component="span" style={{ marginLeft: 5 }}>
            <Link
              href="https://github.com/pankaj7073"
              color="inherit"
              target="_blank"
            >
              <GitHub style={{ marginBottom: -5 }} />
            </Link>
          </Box>
        </Text>
        <Text variant="h5">
          Need something built or simply want to have chat? Reach out to me on:
          <Box component="span" style={{ marginLeft: 5 }}>
            <Link
              href="https://www.instagram.com/pankajvaishnav128/?next=%2Fpankajvaishnav128%2F"
              color="inherit"
              target="_blank"
            >
              <Instagram style={{ marginBottom: -5 }} />
            </Link>
          </Box>{" "}
          <br />
          or send me an Email:
          <Link
            href="mailto:pankajvaishnav128@gmail.com?Subject=This is a subject"
            target="_blank"
            color="inherit"
          >
            <Email style={{ marginBottom: -5 }} />
          </Link>
          .
        </Text>
      </Wrapper>
    </Box>
  );
};

export default About;
