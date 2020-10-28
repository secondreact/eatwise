import React from 'react';
import eggs from '../../icons/contains-red/eggs-red.svg';
import fats from '../../icons/contains-red/fats-red.svg';
import fish from '../../icons/contains-red/fish-red.svg';
import gluten from '../../icons/contains-red/gluten-red.svg';
import lactose from '../../icons/contains-red/lactose-red.svg';
import nuts from '../../icons/contains-red/nuts-red.svg';
import peanuts from '../../icons/contains-red/peanuts-red.svg';
import sugar from '../../icons/contains-red/sugar-red.svg';
import vegan from '../../icons/contains-red/vegan-red.svg';

export default function AllergensSection() {
  return (
    <div>
      <img src={eggs}/>
      <img src={fats}/>
      <img src={fish}/>
      <img src={gluten}/>
      <img src={lactose}/>
      <img src={nuts}/>
      <img src={peanuts}/>
      <img src={sugar}/>
      <img src={vegan}/>
    </div>
  )
}
