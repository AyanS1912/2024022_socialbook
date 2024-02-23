  import { Component } from '@angular/core';

  @Component({
    selector: 'app-main-content',
    templateUrl: './main-content.component.html',
    styleUrl: './main-content.component.css'
  })
  export class MainContentComponent {

    stories = [
        {
          "profile_img_url": "https://i.postimg.cc/JDp85vzM/issei-hyoudou-the-red-dragon-emperor-9zyn0pnhj4plbycs.webp[/img][/url]",
          "fname": "Yatharth",
          "lname": "Shende",
          "story_img_url": "https://wallpapers.com/images/hd/mirrored-zoro-one-piece-artwork-fp27jlwxqfz2viwm.webp",
        },
        {
          "profile_img_url": "https://i.postimg.cc/WD6ThhRD/sanji-on-couch-zda7bvpzavll77v2.webp",
          "fname": "Umesh",
          "lname": "Shelare",
          "story_img_url": "https://wallpapers.com/images/high/minimalist-sanji-pycjq5etf3k6xarf.webp",
        },
        {
          "profile_img_url": "https://i.postimg.cc/0jTzBHxZ/zeke-yeager-1920-x-1080-wallpaper-vgxkulyccezk560h.webp",
          "fname": "Sumit",
          "lname": "Banwakade",
          "story_img_url": "https://wallpapers.com/images/high/zeke-yeager-1242-x-1360-wallpaper-clfarhkehgffsrlt.webp",
        },
        {
          "profile_img_url": "https://i.postimg.cc/63CLcRCk/issei-hyoudou-the-red-dragon-emperor-9zyn0pnhj4plbycs.webp",
          "fname": "Atharva",
          "lname": "Nawathe",
          "story_img_url": "https://wallpapers.com/images/high/issei-hyoudou-high-school-dxd-red-95tx0cp4kpgo2hrh.webp",
        }
    ]

    user = [
      {
        "profile_img_url": "https://i.postimg.cc/wjPCwg9Y/asta-black-clover-4k-devil-liebe-7ce5zu1qbfcsvki0.webp",
        "fname": "Ayan",
        "lname": "Sheikh",
      }]
    posts =[
      {
        "profile_img_url": "https://wallpapers.com/images/high/black-clover-asta-dt6z7vvr7de15g6k.webp",
        "profile_fname": "Ayan",
        "profile_lname": "Sheikh",
        "post_timestamp": new Date(),
        "post_caption": "Not giving up i my magic!!",
        "post_img_url": "https://wallpapers.com/images/hd/asta-black-clover-4k-demon-liebe-shift-6soi0azlfx7een8k.jpg",
        "comment_count": 124500,
        "like_count": 4800,
        "share_count": 2350078555
      },
      {
        "profile_img_url": "https://wallpapers.com/images/hd/zoro-s-jolly-roger-flag-eqpyyywkm453rrbq.webp",
        "profile_fname": "Yatharth",
        "profile_lname": "Shende",
        "post_timestamp": new Date(),
        "post_caption": "I'm not gonna run away, I never go back on my word! That's my nindo: my ninja way!",
        "post_img_url": "https://wallpapers.com/images/hd/mirrored-zoro-one-piece-artwork-fp27jlwxqfz2viwm.webp",
        "comment_count": 5672,
        "like_count": 23000,
        "share_count": 10800489
      },
      {
        "profile_img_url": "https://i.postimg.cc/C1NdwHDH/sanji-on-couch-zda7bvpzavll77v2.webp",
        "profile_fname": "Umesh",
        "profile_lname": "Shelare",
        "post_timestamp": new Date(),
        "post_caption": "I don't want to conquer anything. I just think the guy with the most freedom in this whole ocean... is the Pirate King!",
        "post_img_url": "https://wallpapers.com/images/high/minimalist-sanji-pycjq5etf3k6xarf.webp",
        "comment_count": 124475,
        "like_count": 4800004,
        "share_count": 234445
      },
      {
        "profile_img_url": "https://i.postimg.cc/0jTzBHxZ/zeke-yeager-1920-x-1080-wallpaper-vgxkulyccezk560h.webp",
        "profile_fname": "Sumit",
        "profile_lname": "Banwakade",
        "post_timestamp": new Date(),
        "post_caption": "I am the hope of the universe. I am the answer to all living things that cry out for peace.",
        "post_img_url": "https://wallpapers.com/images/high/zeke-yeager-1242-x-1360-wallpaper-clfarhkehgffsrlt.webp",
        "comment_count": 789,
        "like_count": 320025,
        "share_count": 155500
      },
      // {
      //   "profile_img_url": "https://i.postimg.cc/63CLcRCk/issei-hyoudou-the-red-dragon-emperor-9zyn0pnhj4plbycs.webp",
      //   "profile_fname": "Atharva",
      //   "profile_lname": "Nawathe",
      //   "post_timestamp": new Date(),
      //   "post_caption": "If you win, you live. If you lose, you die. If you don't fight, you can't win!",
      //   "post_img_url": "https://wallpapers.com/images/high/issei-hyoudou-high-school-dxd-red-95tx0cp4kpgo2hrh.webp",
      //   "comment_count": 2152550,
      //   "like_count": 8900,
      //   "share_count": 375025
      // }
    ]

    formatcount = function formatCount(count: number): string {
      if( count > 1000000000){
        return (count/1000000000).toFixed(2)+'B+'
      }
      else if (count >= 1000000) {
          return (count / 1000000).toFixed(2) + 'M+';
      } else if (count >= 1000) {
          return (count / 1000).toFixed(2) + 'K+';
      } else {
          return count.toString();
      }
    }

    formatDate = function formatDate(date: Date): string {
      const months: string[] = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
      const month: string = months[date.getMonth()];
      const day: number = date.getDate();
      const year: number = date.getFullYear();
      let hours: number = date.getHours();
      let minutes: number | string = date.getMinutes();
      const ampm: string = hours >= 12 ? 'PM' : 'AM';
      const strTime: string = hours + ':' + minutes + ' ' + ampm;
      return month + ' ' + day + ' ' + year + ', ' + strTime;
  }
  }
  
