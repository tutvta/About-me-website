import React from "react";
import githubLogo from "../assets/github-mark.svg"
import instagramLogo from "../assets/icons8-instagram.svg"
import viteLogo from "../../public/vite.svg"
import reactLogo from "../assets/react.svg"
import tailwindLogo from "../assets/tailwindcss-mark.d52e9897.svg"

function Home() {
  return (
    <div class="p-4 h-dvh bg-linear-to-br from-[#FFBC7E] to-[#7EC1FF]">
      <h1 class="flex text-center justify-center flex-col p-8 text-2xl font-bold py-8">Home</h1>
      <div class="flex justify-between">
        <div class="pl-20 flex flex-col">
          <h1 class="pb-4">Socials:</h1>
          <a href="https://github.com/tutvta">
            <img src={githubLogo} alt="github link" target="_blank"/>
          </a>
          <a href="https://www.instagram.com/yellofelloxd/" class="pt-4">
            <img src={instagramLogo} alt="instagram link" target="_blank"/>
          </a>
        </div>
        <p class="ml-50 mr-50">
          Hi, I'm Matthew Thai. I used a <a href="https://www.canva.com/colors/color-wheel/" target="_blank"
          class="underline decoration-solid text-blue-500">colour wheel</a> to get the colours for the backgrounds to
          try and fit in with the "Opposites attract" theme. This portfolio website was built using HTML, TailwindCSS
          and React. I'm still fairly new to this so there aren't many overly crazy elements in this website. I also
          used Vite for the scaffolding for this website.
        </p>
        <div class="pr-20">
          <h1 class="pb-4">Stuff I used:</h1>
          <div class="flex flex-col gap-8">
            <img src={viteLogo} alt="vite logo" width="150" height="150" />
            <img src={reactLogo} alt="react logo" width="150" height="150" />
            <img src={tailwindLogo} alt="react logo" width="150" height="150" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home