import { Component, Input } from '@angular/core';
import { AdvantageType } from '../../types/advantage.type';
import { TextReducePipe } from '../../pipes/text-reduce-pipe-pipe';

@Component({
  selector: 'advantages-components',
  imports: [TextReducePipe],
  templateUrl: './advantages-components.html',
  styleUrl: './advantages-components.scss',
})
export class AdvantagesComponents {
  @Input() advantage: AdvantageType;
  @Input() i!: number;
  constructor() {
    this.advantage = {
      title: '',
      info: '',
    };
  }
}
