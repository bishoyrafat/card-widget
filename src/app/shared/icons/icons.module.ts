import { NgModule } from '@angular/core';

import { FeatherModule } from 'angular-feather';
import { Heart, ArrowLeft, ShoppingCart, Star, PlayCircle, ArrowRight, X} from 'angular-feather/icons';

// Select some icons (use an object, not an array)
const icons = {
  Star,
  Heart,
  ArrowLeft,
  ArrowRight,
  ShoppingCart,
  PlayCircle,
  X

};

@NgModule({
  imports: [
    FeatherModule.pick(icons)
  ],
  exports: [
    FeatherModule
  ]
})
export class IconsModule { }
