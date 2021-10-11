import React from "react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import { Box } from "theme-ui";

const IndexPage = () => {
  return (
    <div>
      <Box>
        <StaticImage
          src="../images/drawers.jpg"
          alt="drawers"
          width="100%"
          height="100%"
        />
      </Box>
      <Box>
        Shift the overall look and feel by adding these wonderful touches to
        furniture in your home Ever been in a room and felt like something was
        missing? Perhaps it felt slightly bare and uninviting. I’ve got some
        simple tips to help you make any room feel complete. Michelle Appleton
        28 Jun 2020 Share
      </Box>

      <div class="attribution">
        Challenge by{" "}
        <Link
          href="https://www.frontendmentor.io?ref=challenge"
          target="_blank"
        >
          Frontend Mentor
        </Link>
        . Coded by <Link href="#">Jeremy Inabnit</Link>.
      </div>
    </div>
  );
};

export default IndexPage;
