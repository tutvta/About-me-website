import React from "react";
import homeIcon from "../assets/icons8-home.svg"

function NavBar() {
  return (
    <nav class="p-4 flex justify-between">
      <a href="/About-me-website">
        <img src={homeIcon} alt="Home" height="25" width="25"/>
      </a>
      <ul class="flex flex-row">
        <li class="pl-2">
          <a href="/About-me-website/about">About</a>
        </li>
        <li class="pl-2">
          <a href="/About-me-website/hobbies">Hobbies</a>
        </li>
        <li class="pl-2">
          <a href="/About-me-website/experience">Experience</a>
        </li>
      </ul>
    </nav>
  )
}

export default NavBar