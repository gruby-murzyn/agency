
import { Component } from '@angular/core';

@Component({
  selector: 'app-why-choose-us',
  templateUrl: './why-choose-us.component.html',
  styleUrls: ['./why-choose-us.component.scss']
})
export class WhyChooseUsComponent {
  name = 'Angular';
  showCard = false;

  inspiringLeaders = [
    {
      name: 'Solid Foundations',
      img: '/assets/images/solidne-fundamenty.png',
      // tslint:disable-next-line:max-line-length
      text: 'Thanks to belonging to an international organization, which operates since 1988 and has a huge knowledge base, ASTEK Poland enjoys its stable position on the market.',
      shown: false
    },
    {
      name: 'Ambitious Projects',
      img: '/assets/images/ambitne-projekty.png',
      // tslint:disable-next-line:max-line-length
      text: 'Thanks to belonging to an international organization, which operates since 1988 and has a huge knowledge base, ASTEK Poland enjoys its stable position on the market.',
      shown: false
    },
    {
      name: 'Individual approach and friendly atmosphere',
      img: '/assets/images/indywidualny-rozwoj.png',
      // tslint:disable-next-line:max-line-length
      text: 'Thanks to belonging to an international organization, which operates since 1988 and has a huge knowledge base, ASTEK Poland enjoys its stable position on the market.',
      shown: false
    },
    {
      name: 'Famous Brands',
      img: '/assets/images/znane-marki.png',
      // tslint:disable-next-line:max-line-length
      text: 'Thanks to belonging to an international organization, which operates since 1988 and has a huge knowledge base, ASTEK Poland enjoys its stable position on the market.',
      shown: false
    },
    {
      name: 'Inspiring Leaders',
      img: '/assets/images/inspirujacy-liderzy.png',
      // tslint:disable-next-line:max-line-length
      text: 'Thanks to belonging to an international organization, which operates since 1988 and has a huge knowledge base, ASTEK Poland enjoys its stable position on the market.',
      shown: false
    },
    {
      name: 'Flexibility',
      img: '/assets/images/elastycznosc.png',
      // tslint:disable-next-line:max-line-length
      text: 'Thanks to belonging to an international organization, which operates since 1988 and has a huge knowledge base, ASTEK Poland enjoys its stable position on the market.',
      shown: false
    },
    {
      name: 'Extra Benefits',
      img: '/assets/images/dodatkowe-korzysci.png',
      // tslint:disable-next-line:max-line-length
      text: 'Thanks to belonging to an international organization, which operates since 1988 and has a huge knowledge base, ASTEK Poland enjoys its stable position on the market.',
      shown: false
    },
    {
      name: 'Referral System',
      img: '/assets/images/system-polecen.png',
      // tslint:disable-next-line:max-line-length
      text: 'Thanks to belonging to an international organization, which operates since 1988 and has a huge knowledge base, ASTEK Poland enjoys its stable position on the market.',
      shown: false
    },
  ];

  toggleCard(leader: { img: string, name: string, text: string, shown: boolean }) {
    this.inspiringLeaders.map((l) => {
      if (l.name === leader.name) {
        l.shown = !l.shown;
      } else {
        l.shown = false;
      }
    });
  }
}


