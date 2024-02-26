import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  user = [
    {
      "profile_img_url": "https://i.postimg.cc/j29TTZx1/black-clover-asta-dt6z7vvr7de15g6k.webp",
      "fname": "Ayan",
      "lname": "Sheikh",
    }]

    settingsMenuToggle() {
      const settingsmenu = document.querySelector(".settings-menu") as HTMLElement;
      settingsmenu.classList.toggle("settings-menu-height");
    }

    darkBtnClick() {
      const darkBtn = document.getElementById("dark-btn") as HTMLElement;  
    }
}
