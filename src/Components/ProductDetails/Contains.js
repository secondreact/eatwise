import React from 'react';

import eggs from '../../icons/contains-green/eggs-green.svg';
import fats from '../../icons/contains-green/fats-green.svg';
import fish from '../../icons/contains-green/fish-green.svg';
import gluten from '../../icons/contains-green/gluten-green.svg';
import lactose from '../../icons/contains-green/lactose-green.svg';
import nuts from '../../icons/contains-green/nuts-green.svg';
import peanuts from '../../icons/contains-green/peanuts-green.svg';
import sugar from '../../icons/contains-green/sugar-green.svg';
import vegan from '../../icons/contains-green/vegan-green.svg';
import { EggIcon, FishIcon, FatsIcon, GlutenIcon, LactoseIcon } from '../../shared/icons';






export default function Contains() {
  return (
    <div>
      <EggIcon/>
      <FatsIcon/>
      <FishIcon/>
      <GlutenIcon/>
      <LactoseIcon/>
      
      <img src={nuts}/>
      <img src={peanuts}/>
      <img src={sugar}/>
      <img src={vegan}/>
    </div>
  )
}
