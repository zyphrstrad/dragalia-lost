const halidom = {
  adventurer_Flame_altar_0: { id: '100401', type: 'altar', level: 35 },
  adventurer_Flame_altar_1: { id: '100401', type: 'altar', level: 35 },
  adventurer_Flame_eventE_0: { id: '102001', type: 'eventE', level: 30 },
  adventurer_Flame_slime_0: { id: '101901', type: 'slime', level: 15 },
  adventurer_Water_altar_0: { id: '100402', type: 'altar', level: 35 },
  adventurer_Water_altar_1: { id: '100402', type: 'altar', level: 35 },
  adventurer_Water_eventE_0: { id: '101601', type: 'eventE', level: 30 },
  adventurer_Water_eventE_1: { id: '101801', type: 'eventE', level: 30 },
  adventurer_Water_slime_0: { id: '101902', type: 'slime', level: 15 },
  adventurer_Wind_altar_0: { id: '100403', type: 'altar', level: 35 },
  adventurer_Wind_altar_1: { id: '100403', type: 'altar', level: 35 },
  adventurer_Wind_eventE_0: { id: '101101', type: 'eventE', level: 30 },
  adventurer_Wind_slime_0: { id: '101903', type: 'slime', level: 15 },
  adventurer_Light_altar_0: { id: '100404', type: 'altar', level: 35 },
  adventurer_Light_altar_1: { id: '100404', type: 'altar', level: 35 },
  adventurer_Light_eventE_0: { id: '100901', type: 'eventE', level: 30 },
  adventurer_Light_eventE_1: { id: '101501', type: 'eventE', level: 35 },
  adventurer_Light_slime_0: { id: '101904', type: 'slime', level: 15 },
  adventurer_Shadow_altar_0: { id: '100405', type: 'altar', level: 35 },
  adventurer_Shadow_altar_1: { id: '100405', type: 'altar', level: 35 },
  adventurer_Shadow_eventE_0: { id: '101701', type: 'eventE', level: 30 },
  adventurer_Shadow_slime_0: { id: '101905', type: 'slime', level: 15 },
  Sword_dojo_0: { id: '100501', type: 'dojo', level: 35 },
  Sword_dojo_1: { id: '100501', type: 'dojo', level: 35 },
  Blade_dojo_0: { id: '100502', type: 'dojo', level: 35 },
  Blade_dojo_1: { id: '100502', type: 'dojo', level: 35 },
  Dagger_dojo_0: { id: '100503', type: 'dojo', level: 35 },
  Dagger_dojo_1: { id: '100503', type: 'dojo', level: 35 },
  Axe_dojo_0: { id: '100504', type: 'dojo', level: 35 },
  Axe_dojo_1: { id: '100504', type: 'dojo', level: 35 },
  Lance_dojo_0: { id: '100505', type: 'dojo', level: 35 },
  Lance_dojo_1: { id: '100505', type: 'dojo', level: 35 },
  Bow_dojo_0: { id: '100506', type: 'dojo', level: 35 },
  Bow_dojo_1: { id: '100506', type: 'dojo', level: 35 },
  Wand_dojo_0: { id: '100507', type: 'dojo', level: 35 },
  Wand_dojo_1: { id: '100507', type: 'dojo', level: 35 },
  Staff_dojo_0: { id: '100508', type: 'dojo', level: 35 },
  Staff_dojo_1: { id: '100508', type: 'dojo', level: 35 },
  Dagger_Bow_eventW_0: { id: '101301', type: 'eventW', level: 30 },
  dragon_Flame_fafnir_0: { id: '101001', type: 'fafnir', level: 0 },
  dragon_Water_fafnir_0: { id: '101002', type: 'fafnir', level: 0 },
  dragon_Wind_fafnir_0: { id: '101003', type: 'fafnir', level: 0 },
  dragon_Light_fafnir_0: { id: '101004', type: 'fafnir', level: 0 },
  dragon_Shadow_fafnir_0: { id: '101005', type: 'fafnir', level: 0 },
};

export const HALIDOM_LIST = Object.keys(halidom);

const initHalidom = {
  ...halidom,
  smithy: 9,
  dragontree: 27,
  dracolith: 100,
  rupie: 120,
};

export default initHalidom;

export const HALIDOM_TYPES = ['altar', 'slime', 'event', 'fafnir', 'dojo'];

export const HALIDOM_VALUES = {
  altar: [
    [0, 0],
    [0.5, 0.5],
    [1, 0.5],
    [1, 1],
    [1.5, 1],
    [1.5, 1.5],
    [2, 1.5],
    [2, 2],
    [2.5, 2],
    [2.5, 2.5],
    [3, 2.5],
    [3, 3],
    [3.5, 3],
    [3.5, 3.5],
    [4, 3.5],
    [4, 4],
    [4.5, 4],
    [4.5, 4.5],
    [5, 4.5],
    [5, 5],
    [5.5, 5],
    [5.5, 5.5],
    [6, 5.5],
    [6, 6],
    [6.5, 6],
    [6.5, 6.5],
    [7, 6.5],
    [7, 7],
    [7.5, 7],
    [7.5, 7.5],
    [8, 7.5],
    [8, 8],
    [8.5, 8],
    [8.5, 8.5],
    [9, 8.5],
    [9, 9],
  ],
  dojo: [
    [0, 0],
    [3, 3],
    [3.5, 3],
    [3.5, 3.5],
    [4, 3.5],
    [4, 4],
    [4.5, 4],
    [4.5, 4.5],
    [5, 4.5],
    [5, 5],
    [5.5, 5],
    [5.5, 5.5],
    [6, 5.5],
    [6, 6],
    [6.5, 6],
    [6.5, 6.5],
    [8, 8],
    [8, 8.5],
    [8.5, 8.5],
    [8.5, 9],
    [9, 9],
    [9, 9.5],
    [9.5, 9.5],
    [9.5, 10],
    [10, 10],
    [10, 10.5],
    [10.5, 10.5],
    [10.5, 11],
    [11, 11],
    [11, 11.5],
    [11.5, 11.5],
    [14, 14],
    [14.5, 14],
    [14.5, 14.5],
    [15, 14.5],
    [15, 15],
  ],
  eventE: [
    [0, 0],
    [1, 0],
    [1.5, 0],
    [1.5, 0.5],
    [2, 0.5],
    [2, 1],
    [2.5, 1],
    [2.5, 1.5],
    [3, 1.5],
    [3, 2],
    [3.5, 2],
    [3.5, 2.5],
    [4, 2.5],
    [4, 3],
    [4.5, 3],
    [4.5, 3.5],
    [5, 3.5],
    [5, 4],
    [5.5, 4],
    [5.5, 4.5],
    [6, 4.5],
    [6, 5],
    [6.5, 5],
    [6.5, 5.5],
    [7, 5.5],
    [7, 6],
    [7.5, 6],
    [7.5, 6.5],
    [8, 6.5],
    [8, 7],
    [8.5, 7],
    [8.5, 7.5],
    [9, 7.5],
    [9, 8],
    [9.5, 8],
    [9.5, 8.5],
  ],
  eventW: [
    [0, 0],
    [0.5, 0.5],
    [0.8, 0.5],
    [0.8, 0.8],
    [1.1, 0.8],
    [1.1, 1.1],
    [1.4, 1.1],
    [1.4, 1.4],
    [1.7, 1.4],
    [1.7, 1.7],
    [2, 1.7],
    [2, 2],
    [2.3, 2],
    [2.3, 2.3],
    [2.6, 2.3],
    [2.6, 2.6],
    [2.9, 2.6],
    [2.9, 2.9],
    [3.2, 2.9],
    [3.2, 3.2],
    [3.5, 3.2],
    [3.5, 3.5],
    [3.8, 3.5],
    [3.8, 3.8],
    [4.1, 3.8],
    [4.1, 4.1],
    [4.4, 4.1],
    [4.4, 4.4],
    [4.7, 4.4],
    [4.7, 4.7],
    [5, 5],
  ],
  fafnir: [
    [0, 0],
    [3, 3],
    [3.5, 3],
    [3.5, 3.5],
    [4, 3.5],
    [4, 4],
    [4.5, 4],
    [4.5, 4.5],
    [5, 4.5],
    [5, 5],
    [5.5, 5],
    [5.5, 5.5],
    [6, 5.5],
    [6, 6],
    [6.5, 6],
    [6.5, 6.5],
    [8, 8],
    [8, 8.5],
    [8.5, 8.5],
    [8.5, 9],
    [9, 9],
    [9, 9.5],
    [9.5, 9.5],
    [9.5, 10],
    [10, 10],
    [10, 10.5],
    [10.5, 10.5],
    [10.5, 11],
    [11, 11],
    [11, 11.5],
    [11.5, 11.5],
  ],
  slime: [
    [0, 0],
    [0.5, 0.5],
    [1, 0.5],
    [1, 1],
    [1.5, 1],
    [1.5, 1.5],
    [2, 1.5],
    [2, 2],
    [2.5, 2],
    [2.5, 2.5],
    [3, 2.5],
    [3, 3],
    [3.5, 3],
    [3.5, 3.5],
    [4, 3.5],
    [4, 4],
  ],
};
