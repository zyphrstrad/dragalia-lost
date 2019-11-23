import { MIGHT_DICT } from 'data';

const calcAdventurerMight = adventurer => {
  const { might, rarity, ex = '4', mana = '50' } = adventurer;
  const { adventurerSkill, coAbility, fs } = MIGHT_DICT;

  const skillMight = adventurerSkill[mana];

  let abilityMight;
  if (mana === '0') {
    abilityMight = 0;
  } else {
    const index = ['10', '20', '30', '40', '45', '50'].indexOf(mana);
    abilityMight = might[index];
  }

  let fsKey;
  if (mana >= 40) {
    fsKey = '40';
  } else if (mana >= 10) {
    fsKey = '10';
  }

  const fsMight = fs[fsKey] || 0;

  const exMight = coAbility[rarity][ex];

  return skillMight + abilityMight + fsMight + exMight;
};

const calcWeaponMight = weapon => {
  const { skill, might = 0, unbind = '4' } = weapon;
  const stage = unbind === '4' ? 0 : 1;
  const skillMight = skill ? MIGHT_DICT.itemSkill[stage] : 0;
  return skillMight + might;
};

const calcDragonMight = dragon => {
  const { bond = '30', might, unbind = '4' } = dragon;
  console.log(unbind === '4');
  const stage = unbind === '4' ? 0 : 1;
  return MIGHT_DICT.itemSkill[stage] + might[stage] + bond * 10;
};

const calcWyrmprintMight = wyrmprint => {
  const { might, unbind = '4' } = wyrmprint;

  let stage = 2;
  if (unbind === '4') {
    stage = 0;
  } else if (unbind >= 2) {
    stage = 1;
  }

  return might[stage];
};

const calcMight = (itemKey, item) => {
  switch (itemKey) {
    case 'adventurer':
      return calcAdventurerMight(item);
    case 'weapon':
      return calcWeaponMight(item);
    case 'dragon':
      return calcDragonMight(item);
    case 'wyrmprint1':
    case 'wyrmprint2':
      return calcWyrmprintMight(item);
    default:
      return 0;
  }
};

export default calcMight;
