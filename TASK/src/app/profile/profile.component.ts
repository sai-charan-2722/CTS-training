import { Component, Input } from '@angular/core';
import { ProfileType } from '../models/ProfileType';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {
    @Input() profile:ProfileType = {};
}

interface prof{
  id?:number;
  image?:string;
  heading?:string;
  para?:string;
  username?:string;
  date?:string
}
