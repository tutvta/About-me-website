import React from 'react';

function About() {
  return (
    <div class="p-4 h-dvh bg-linear-to-bl from-[#FF0049] to-[#00FFB6]">
      <h1 class="flex text-center justify-center flex-col p-8 text-2xl font-bold py-8">About Me</h1>
      <div class="ml-10 md:ml-50">
        <p class="py-2">Some information about me other than my name:</p>
        <ul class="pl-6 list-disc">
          <li>Degree: Software engineering honours 2nd year</li>
          <li>Age: 19</li>
          <li>Interests: Gaming, music and anime</li>
        </ul>
      </div>
    </div>
  )
}

export default About