import { Component, OnInit } from '@angular/core';

import { Hero } from '../hero';

@Component({
  selector: 'app-hero-form',
  templateUrl: './hero-form.component.html',
  styleUrls: ['./hero-form.component.scss']
})
export class HeroFormComponent implements OnInit {

  powers = ['Really Smart', 'Super Flexible', 'Super Hot', 'Weather Changer'];
  submitted = false;

  model = new Hero(18, "Hero 1", this.powers[0], 'Chuck Overstreet')

  ngOnInit(): void {
  }

  newHero(): void{
    this.model = new Hero(24, '', '');
  }

  onSubmit(): void {
    this.submitted = true;
  }

  showFormControls(form: any): void{
    return form && form.controls.name && form.controls.name.value;
  }

}
