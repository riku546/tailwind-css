import React from "react";
import perplexityLogo from "../../perplexityLogo.png";
import Image from "next/image";

const Header = () => {
  return (
    <div class="py-3 border-b border-zinc-700">
      <Image src={perplexityLogo}></Image>
    </div>
  );
};

export default Header;
