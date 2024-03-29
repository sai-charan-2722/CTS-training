import { Component } from '@angular/core';
import { ProfileType } from '../models/ProfileType';

@Component({
  selector: 'app-profiles',
  templateUrl: './profiles.component.html',
  styleUrl: './profiles.component.css'
})
export class ProfilesComponent {
    profiles:ProfileType[]=[
      {
        id:1,
        image:"https://images-eu.ssl-images-amazon.com/images/W/MEDIAX_792452-T1/images/G/31/img22/AmazonBrands/Bikram/Bikram1/QC_Wk-37_372_4._SY232_CB596159142_.jpg",
        heading:"News App using ReactJS(Parsing XML to JSON)",
        para:"Creating a News App using ReactJS(Parsing XML to JSON) Photo from PexelsLive Demo:",
        username:"Mehul Kothari",
        date:"Aug 12, 2020 04:32"
      },
      {
        id:2,
        image:"https://images-eu.ssl-images-amazon.com/images/W/MEDIAX_792452-T1/images/G/31/IMG15/Irfan/GATEWAY/MSO/B07G5J5FYP._SY232_CB667322346_.jpg",
        heading:"Medium-Like Blog App Using Angular 9 and Firebase",
        para:"Creating a Medium-Like Blog App Using Angular 9 and Firebase Photo from PexelsLive Demo:",
        username:"Mehul Kothari",
        date:"July 10, 2020 10:59"
      },
      {
        id:3,
        image:"https://images-eu.ssl-images-amazon.com/images/W/MEDIAX_792452-T1/images/G/31/IMG15/Irfan/GATEWAY/MSO/Appliances-QC-PC-186x116--B08CPQVLZT._SY232_CB667322346_.jpg",
        heading:"COVID 19 Tracker (Statistics) app Using Angular",
        para:"Creating a COVID 19 Tracker(Statistics) app Using Angular Dark from PexelsLive Demo:",
        username:"Mehul Kothari",
        date:"Apr 04, 2020 08:46"
      }
    ]
}
