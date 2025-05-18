import React from "react";
import githubLogo from "../assets/github-mark.svg"
import instagramLogo from "../assets/icons8-instagram.svg"

function Home() {
  return (
    <div class="p-4 h-dvh bg-linear-to-br from-[#FFBC7E] to-[#7EC1FF]">
      <h1 class="flex text-center justify-center flex-col p-8 text-2xl font-bold py-8">Home</h1>
      <div class="flex flex-col">
        <p class="ml-10 mr-10 md:ml-50 md:mr-50">
          Hi, I'm Matthew Thai. I used a <a href="https://www.canva.com/colors/color-wheel/" target="_blank"
          class="underline decoration-solid text-blue-500">colour wheel</a> to get the colours for the backgrounds to
          try and fit in with the "Opposites attract" theme. This portfolio website was built using HTML, TailwindCSS
          and React. I'm still fairly new to this so there aren't many overly crazy elements in this website. I also
          used Vite for the scaffolding for this website.
        </p>
        <div class="flex justify-center flex-row p-20 gap-5">
          <a href="https://github.com/tutvta" target="_blank">
            <img src={githubLogo} alt="github link" height="50" width="50"/>
          </a>
          <a href="https://www.instagram.com/yellofelloxd/" target="_blank">
            <img src={instagramLogo} alt="instagram link" height="50" width="50"/>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Home