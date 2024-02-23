import { Component } from '@angular/core';

@Component({
  selector: 'app-rightbar',
  templateUrl: './rightbar.component.html',
  styleUrl: './rightbar.component.css'
})
export class RightbarComponent {

  events = [ 
    {
      "date":18, "month": "March", "title": "Social Media","loc":"Nagpur"
    },
    {
      "date":22, "month": "June", "title": "Mobile Marketing","loc":"Hyderabad"
    }
  ]
  conversations =[
    {
      "fname": "Yatharth", "lname": "Shende", "img_url":"https://static.wikia.nocookie.net/naruto-onepiece-fairytail/images/5/50/Roronoa_Zoro.png/revision/latest?cb=20161215200705"
    },
    {
      "fname": "Umesh", "lname": "Shelare", "img_url":"https://i.pinimg.com/736x/8c/93/b5/8c93b5b3d18b45e127852eacc74ed027.jpg"  
    },
    {
      "fname": "Soneya", "lname": "Bawankade", "img_url": "https://qph.cf2.quoracdn.net/main-qimg-c8f083a2081b97e6c911b9b69ece634a-lq"
    },
    {
      "fname": "Atharva", "lname": "Nawathe", "img_url":"https://s1.zerochan.net/Brook.600.3368085.jpg"
    }
  ]
}
