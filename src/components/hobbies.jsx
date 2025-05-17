import React from 'react';
import osuProfileImg from "../assets/Screenshot 2025-05-15 194404.png"
import deathRaceForLoveAlbumCover from "../assets/Juice_Wrld_-_Death_Race_for_Love.png" 
import elmaAlbumCover from "../assets/Yorushika_-_Elma.png"
import lilacAlbumCover from "../assets/IU_-_Lilac.png"
import fruitsBasketS3 from "../assets/Season_3_Poster_2.webp"
import bunnyGirlSenpaiMoviePoster from "../assets/Rascal_does_not_dream_of_a_dreaming_girl.jpg"

function Hobbies() {
  return (
    <div class="bg-linear-to-bl from-[#8AFF56] to-[#CB56FF]">
      <h1 class="flex text-center justify-center flex-col p-8 text-2xl font-bold py-8">Hobbies and interests</h1>
      <div class="flex flex-col gap-y-25 pb-20">
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
        <div class="flex justify-between">
          <div class="ml-50">
            <h2 class="pt-4 pb-2 font-bold text-xl">Music:</h2>
            <ul class="pl-6 list-disc">
              <li>EDM</li>
              <li>Rap (Most of the time emo rap)</li>
              <li>J Rock/J Pop</li>
              <li>K Pop (sometimes)</li>
            </ul>
          </div>
          <div class="pr-50 flex flex-row gap-4">
            <img src={deathRaceForLoveAlbumCover} alt="Death Race for Love by Juice Wrld" height="200" width="200"/>
            <img src={elmaAlbumCover} alt="Elma by Yorushika" height="200" width="200"/>
            <img src={lilacAlbumCover} alt="Lilac by IU" height="200" width="200"/>
          </div>
        </div>
        <div class="flex justify-between">
          <div class="ml-50">
            <h2 class="pt-4 pb-2 font-bold text-xl">Anime:</h2>
            <ul class="pl-6 list-disc">
              <li>Mainly enjoy romance anime (Horimiya, Bunny Girl Senpai, Fruits Basket)</li>
              <li>Sometimes endulge in fantasy</li>
              <li>Not too big of a fan of action</li>
            </ul>
          </div>
          <div class="pr-50 flex flex-row gap-10">
            <img src={fruitsBasketS3} alt="Fruits Basket Season 3" height="271" width="200"/>
            <img src={bunnyGirlSenpaiMoviePoster} alt="Bunny Girl Senpai Movie" height="271" width="200"/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hobbies