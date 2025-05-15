import React from 'react';
import osuProfileImg from "../assets/Screenshot 2025-05-15 194404.png"

function Hobbies() {
  return (
    <div class="bg-linear-to-bl from-[#8AFF56] to-[#CB56FF]">
      <h1 class="flex text-center justify-center flex-col p-8 text-2xl font-bold py-8">Hobbies and interests</h1>
      <div class="flex flex-col gap-y-20">
        <div class="flex justify-between">
          <div class="ml-50">
            <h2 class="py-2 font-bold text-xl">Gaming:</h2>
            <ul class="pl-6 list-disc">
              <li>osu!</li>
              <li>League of Legends</li>
              <li>Honkai Star Rail</li>
            </ul>
          </div>
          <div class="pr-50">
            <img src={osuProfileImg} alt="osu profile" height="200" width="600" />
          </div>
        </div>
        <div class="ml-50">
          <h2 class="pt-4 pb-2">Music:</h2>
          <ul class="pl-6 list-disc">
            <li>EDM</li>
            <li>Rap (Most of the time emo rap)</li>
            <li>J Rock/J Pop</li>
            <li>K Pop (sometimes)</li>
          </ul>
        </div>
        <div class="ml-50">
          <h2 class="pt-4 pb-2">Anime:</h2>
          <ul class="pl-6 list-disc">
            <li>Mainly enjoy romance anime (Horimiya, Bunny Girl Senpai, Fruits Basket)</li>
            <li>Sometimes endulge in fantasy</li>
            <li>Not too big of a fan of action</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Hobbies