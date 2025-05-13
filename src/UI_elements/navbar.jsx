import React from "react";

function NavBar() {
  return (
    <nav class="p-4 flex justify-between border-2 border-black rounded-none">
      <a href="/" class="text-xl font-bold">Home</a>
      <ul class="flex flex-row">
        <li class="pl-2">
          <a href="/about">About</a>
        </li>
        <li class="pl-2">
          <a href="/hobbies">Hobbies</a>
        </li>
        <li class="pl-2">
          <a href="/experience">Experience</a>
        </li>
      </ul>
    </nav>
  )
}

export default NavBar