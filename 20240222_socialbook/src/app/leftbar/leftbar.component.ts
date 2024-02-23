import { Component } from '@angular/core';

@Component({
  selector: 'app-leftbar',
  templateUrl: './leftbar.component.html',
  styleUrl: './leftbar.component.css'
})
export class LeftbarComponent {
  shortcuts = [
    {
      "href": "https://onepiece.fandom.com/wiki/Monkey_D._Luffy",
      "img_url": "https://static.wikia.nocookie.net/onepiece/images/6/6d/Monkey_D._Luffy_Anime_Post_Timeskip_Infobox.png/revision/latest?cb=20200429191518",
      "text": "King of Pirates."
    },
    {
      "href": "https://www.freecodecamp.org/",
      "img_url": "https://www.freecodecamp.org/icons/icon-96x96.png?v=1ee02ee14b68b5c58e542fd196a6dd68",
      "text": "Learn to code."
    },
    {
      "href": "https://www.imdb.com/",
      "img_url": "https://m.media-amazon.com/images/G/01/IMDb/BG_rectangle._CB1509060989_SY230_SX307_AL_.jpg",
      "text": "Movie Recommendation"
    },
    {
      "href": "https://naruto.fandom.com/wiki/Naruto_Uzumaki",
      "img_url": "https://static.wikia.nocookie.net/naruto/images/7/7d/Naruto_Part_II.png/revision/latest?cb=20210811111154",
      "text": "Naruto Anime Community."
    }
  ]
}
