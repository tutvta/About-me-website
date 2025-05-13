import React from 'react';

function About() {
  return (
    <div class="p-4 h-dvh bg-linear-to-br from-[#FFBC7E] to-[#7EC1FF]">
      <h1 class="flex text-center justify-center flex-col p-8 text-2xl font-bold py-8">About Me</h1>
      <p class="py-2">Some information about me other than my name:</p>
      <ul>
        <li>- Degree: Software engineering honours 2nd year</li>
        <li>- Age: 19</li>
        <li>- Interests: Gaming, music and anime</li>
      </ul>
    </div>
  )
}

export default About