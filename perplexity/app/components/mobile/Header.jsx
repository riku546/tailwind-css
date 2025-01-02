import React from "react";
import perplexityLogo from "../../perplexityLogo.png";
import Image from "next/image";

const Header = () => {
  return (
    <div class="w-40 sm:w-44 flex items-center space-x-3 ">
      <Image src={perplexityLogo}></Image>
    </div>
  );
};

export default Header;
