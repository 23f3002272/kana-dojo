export type ClickSoundId =
  | 'click'
  | 'beep'
  | 'pop'
  | 'nk-creams'
  | 'typewriter'
  | 'osu'
  | 'hitmarker'
  | 'sine'
  | 'sawtooth'
  | 'square'
  | 'triangle'
  | 'pentatonic'
  | 'wholetone'
  | 'fist-fight'
  | 'rubber-keys'
  | 'fart'
  | 'pulse-soft'
  | 'fm-glass'
  | 'analog-thock'
  | 'bit-crunch'
  | 'woodblock'
  | 'marimba-mini'
  | 'kalimba-tine'
  | 'bubble-pop'
  | 'laser-pew-micro'
  | 'vinyl-tick'
  | 'hollow-clack'
  | 'zen-bell-short'
  | 'typebar-metal'
  | 'spring-click'
  | 'heartbeat-tap'
  | 'glitch-blip'

export interface ClickSoundOption {
  id: ClickSoundId;
  label: string;
  monkeytypeId: string | null;
  sourceType: 'file' | 'synthetic-generated';
  variants: string[];
}

export const DEFAULT_CLICK_SOUND_ID: ClickSoundId = 'nk-creams';

export const CLICK_SOUND_OPTIONS: ClickSoundOption[] = [
  {
    id: 'click',
    label: 'click',
    monkeytypeId: '1',
    sourceType: 'file',
    variants: [
      'click1_1',
      'click1_2',
      'click1_3',
    ],
  },
  {
    id: 'beep',
    label: 'beep',
    monkeytypeId: '2',
    sourceType: 'file',
    variants: [
      'click2_1',
      'click2_2',
      'click2_3',
    ],
  },
  {
    id: 'pop',
    label: 'pop',
    monkeytypeId: '3',
    sourceType: 'file',
    variants: [
      'click3_1',
      'click3_2',
      'click3_3',
    ],
  },
  {
    id: 'nk-creams',
    label: 'nk creams',
    monkeytypeId: '4',
    sourceType: 'file',
    variants: [
      'click4_1',
      'click4_11',
      'click4_2',
      'click4_22',
      'click4_3',
      'click4_33',
      'click4_4',
      'click4_44',
      'click4_5',
      'click4_55',
      'click4_6',
      'click4_66',
    ],
  },
  {
    id: 'typewriter',
    label: 'typewriter',
    monkeytypeId: '5',
    sourceType: 'file',
    variants: [
      'click5_1',
      'click5_11',
      'click5_2',
      'click5_22',
      'click5_3',
      'click5_33',
      'click5_4',
      'click5_44',
      'click5_5',
      'click5_55',
      'click5_6',
      'click5_66',
    ],
  },
  {
    id: 'osu',
    label: 'osu',
    monkeytypeId: '6',
    sourceType: 'file',
    variants: [
      'click6_1',
      'click6_11',
      'click6_2',
      'click6_22',
      'click6_3',
      'click6_33',
    ],
  },
  {
    id: 'hitmarker',
    label: 'hitmarker',
    monkeytypeId: '7',
    sourceType: 'file',
    variants: [
      'click7_1',
      'click7_11',
      'click7_2',
      'click7_22',
      'click7_3',
      'click7_33',
    ],
  },
  {
    id: 'sine',
    label: 'sine',
    monkeytypeId: '8',
    sourceType: 'synthetic-generated',
    variants: [
      'sine_01',
      'sine_02',
      'sine_03',
      'sine_04',
      'sine_05',
      'sine_06',
      'sine_07',
      'sine_08',
      'sine_09',
      'sine_10',
    ],
  },
  {
    id: 'sawtooth',
    label: 'sawtooth',
    monkeytypeId: '9',
    sourceType: 'synthetic-generated',
    variants: [
      'sawtooth_01',
      'sawtooth_02',
      'sawtooth_03',
      'sawtooth_04',
      'sawtooth_05',
      'sawtooth_06',
      'sawtooth_07',
      'sawtooth_08',
      'sawtooth_09',
      'sawtooth_10',
    ],
  },
  {
    id: 'square',
    label: 'square',
    monkeytypeId: '10',
    sourceType: 'synthetic-generated',
    variants: [
      'square_01',
      'square_02',
      'square_03',
      'square_04',
      'square_05',
      'square_06',
      'square_07',
      'square_08',
      'square_09',
      'square_10',
    ],
  },
  {
    id: 'triangle',
    label: 'triangle',
    monkeytypeId: '11',
    sourceType: 'synthetic-generated',
    variants: [
      'triangle_01',
      'triangle_02',
      'triangle_03',
      'triangle_04',
      'triangle_05',
      'triangle_06',
      'triangle_07',
      'triangle_08',
      'triangle_09',
      'triangle_10',
    ],
  },
  {
    id: 'pentatonic',
    label: 'pentatonic',
    monkeytypeId: '12',
    sourceType: 'synthetic-generated',
    variants: [
      'pentatonic_01',
      'pentatonic_02',
      'pentatonic_03',
      'pentatonic_04',
      'pentatonic_05',
      'pentatonic_06',
      'pentatonic_07',
      'pentatonic_08',
    ],
  },
  {
    id: 'wholetone',
    label: 'wholetone',
    monkeytypeId: '13',
    sourceType: 'synthetic-generated',
    variants: [
      'wholetone_01',
      'wholetone_02',
      'wholetone_03',
      'wholetone_04',
      'wholetone_05',
      'wholetone_06',
      'wholetone_07',
      'wholetone_08',
    ],
  },
  {
    id: 'fist-fight',
    label: 'fist fight',
    monkeytypeId: '14',
    sourceType: 'file',
    variants: [
      'click14_1',
      'click14_2',
      'click14_3',
      'click14_4',
      'click14_5',
      'click14_6',
      'click14_7',
      'click14_8',
    ],
  },
  {
    id: 'rubber-keys',
    label: 'rubber keys',
    monkeytypeId: '15',
    sourceType: 'file',
    variants: [
      'click15_1',
      'click15_2',
      'click15_3',
      'click15_4',
      'click15_5',
    ],
  },
  {
    id: 'fart',
    label: 'fart',
    monkeytypeId: '16',
    sourceType: 'file',
    variants: [
      'click16_1',
      'click16_10',
      'click16_11',
      'click16_2',
      'click16_3',
      'click16_4',
      'click16_5',
      'click16_6',
      'click16_7',
      'click16_8',
      'click16_9',
    ],
  },
  {
    id: 'pulse-soft',
    label: 'pulse soft',
    monkeytypeId: null,
    sourceType: 'synthetic-generated',
    variants: [
      'pulse-soft_01',
      'pulse-soft_02',
      'pulse-soft_03',
      'pulse-soft_04',
      'pulse-soft_05',
      'pulse-soft_06',
      'pulse-soft_07',
      'pulse-soft_08',
      'pulse-soft_09',
      'pulse-soft_10',
    ],
  },
  {
    id: 'fm-glass',
    label: 'fm glass',
    monkeytypeId: null,
    sourceType: 'synthetic-generated',
    variants: [
      'fm-glass_01',
      'fm-glass_02',
      'fm-glass_03',
      'fm-glass_04',
      'fm-glass_05',
      'fm-glass_06',
      'fm-glass_07',
      'fm-glass_08',
      'fm-glass_09',
      'fm-glass_10',
    ],
  },
  {
    id: 'analog-thock',
    label: 'analog thock',
    monkeytypeId: null,
    sourceType: 'synthetic-generated',
    variants: [
      'analog-thock_01',
      'analog-thock_02',
      'analog-thock_03',
      'analog-thock_04',
      'analog-thock_05',
      'analog-thock_06',
      'analog-thock_07',
      'analog-thock_08',
      'analog-thock_09',
      'analog-thock_10',
    ],
  },
  {
    id: 'bit-crunch',
    label: 'bit crunch',
    monkeytypeId: null,
    sourceType: 'synthetic-generated',
    variants: [
      'bit-crunch_01',
      'bit-crunch_02',
      'bit-crunch_03',
      'bit-crunch_04',
      'bit-crunch_05',
      'bit-crunch_06',
      'bit-crunch_07',
      'bit-crunch_08',
      'bit-crunch_09',
      'bit-crunch_10',
    ],
  },
  {
    id: 'woodblock',
    label: 'woodblock',
    monkeytypeId: null,
    sourceType: 'synthetic-generated',
    variants: [
      'woodblock_01',
      'woodblock_02',
      'woodblock_03',
      'woodblock_04',
      'woodblock_05',
      'woodblock_06',
      'woodblock_07',
      'woodblock_08',
      'woodblock_09',
      'woodblock_10',
    ],
  },
  {
    id: 'marimba-mini',
    label: 'marimba mini',
    monkeytypeId: null,
    sourceType: 'synthetic-generated',
    variants: [
      'marimba-mini_01',
      'marimba-mini_02',
      'marimba-mini_03',
      'marimba-mini_04',
      'marimba-mini_05',
      'marimba-mini_06',
      'marimba-mini_07',
      'marimba-mini_08',
      'marimba-mini_09',
      'marimba-mini_10',
    ],
  },
  {
    id: 'kalimba-tine',
    label: 'kalimba tine',
    monkeytypeId: null,
    sourceType: 'synthetic-generated',
    variants: [
      'kalimba-tine_01',
      'kalimba-tine_02',
      'kalimba-tine_03',
      'kalimba-tine_04',
      'kalimba-tine_05',
      'kalimba-tine_06',
      'kalimba-tine_07',
      'kalimba-tine_08',
      'kalimba-tine_09',
      'kalimba-tine_10',
    ],
  },
  {
    id: 'bubble-pop',
    label: 'bubble pop',
    monkeytypeId: null,
    sourceType: 'synthetic-generated',
    variants: [
      'bubble-pop_01',
      'bubble-pop_02',
      'bubble-pop_03',
      'bubble-pop_04',
      'bubble-pop_05',
      'bubble-pop_06',
      'bubble-pop_07',
      'bubble-pop_08',
      'bubble-pop_09',
      'bubble-pop_10',
    ],
  },
  {
    id: 'laser-pew-micro',
    label: 'laser pew micro',
    monkeytypeId: null,
    sourceType: 'synthetic-generated',
    variants: [
      'laser-pew-micro_01',
      'laser-pew-micro_02',
      'laser-pew-micro_03',
      'laser-pew-micro_04',
      'laser-pew-micro_05',
      'laser-pew-micro_06',
      'laser-pew-micro_07',
      'laser-pew-micro_08',
      'laser-pew-micro_09',
      'laser-pew-micro_10',
    ],
  },
  {
    id: 'vinyl-tick',
    label: 'vinyl tick',
    monkeytypeId: null,
    sourceType: 'synthetic-generated',
    variants: [
      'vinyl-tick_01',
      'vinyl-tick_02',
      'vinyl-tick_03',
      'vinyl-tick_04',
      'vinyl-tick_05',
      'vinyl-tick_06',
      'vinyl-tick_07',
      'vinyl-tick_08',
      'vinyl-tick_09',
      'vinyl-tick_10',
    ],
  },
  {
    id: 'hollow-clack',
    label: 'hollow clack',
    monkeytypeId: null,
    sourceType: 'synthetic-generated',
    variants: [
      'hollow-clack_01',
      'hollow-clack_02',
      'hollow-clack_03',
      'hollow-clack_04',
      'hollow-clack_05',
      'hollow-clack_06',
      'hollow-clack_07',
      'hollow-clack_08',
      'hollow-clack_09',
      'hollow-clack_10',
    ],
  },
  {
    id: 'zen-bell-short',
    label: 'zen bell short',
    monkeytypeId: null,
    sourceType: 'synthetic-generated',
    variants: [
      'zen-bell-short_01',
      'zen-bell-short_02',
      'zen-bell-short_03',
      'zen-bell-short_04',
      'zen-bell-short_05',
      'zen-bell-short_06',
      'zen-bell-short_07',
      'zen-bell-short_08',
      'zen-bell-short_09',
      'zen-bell-short_10',
    ],
  },
  {
    id: 'typebar-metal',
    label: 'typebar metal',
    monkeytypeId: null,
    sourceType: 'synthetic-generated',
    variants: [
      'typebar-metal_01',
      'typebar-metal_02',
      'typebar-metal_03',
      'typebar-metal_04',
      'typebar-metal_05',
      'typebar-metal_06',
      'typebar-metal_07',
      'typebar-metal_08',
      'typebar-metal_09',
      'typebar-metal_10',
    ],
  },
  {
    id: 'spring-click',
    label: 'spring click',
    monkeytypeId: null,
    sourceType: 'synthetic-generated',
    variants: [
      'spring-click_01',
      'spring-click_02',
      'spring-click_03',
      'spring-click_04',
      'spring-click_05',
      'spring-click_06',
      'spring-click_07',
      'spring-click_08',
      'spring-click_09',
      'spring-click_10',
    ],
  },
  {
    id: 'heartbeat-tap',
    label: 'heartbeat tap',
    monkeytypeId: null,
    sourceType: 'synthetic-generated',
    variants: [
      'heartbeat-tap_01',
      'heartbeat-tap_02',
      'heartbeat-tap_03',
      'heartbeat-tap_04',
      'heartbeat-tap_05',
      'heartbeat-tap_06',
      'heartbeat-tap_07',
      'heartbeat-tap_08',
      'heartbeat-tap_09',
      'heartbeat-tap_10',
    ],
  },
  {
    id: 'glitch-blip',
    label: 'glitch blip',
    monkeytypeId: null,
    sourceType: 'synthetic-generated',
    variants: [
      'glitch-blip_01',
      'glitch-blip_02',
      'glitch-blip_03',
      'glitch-blip_04',
      'glitch-blip_05',
      'glitch-blip_06',
      'glitch-blip_07',
      'glitch-blip_08',
      'glitch-blip_09',
      'glitch-blip_10',
    ],
  },
];

export const CLICK_SOUND_OPTIONS_BY_ID: Record<ClickSoundId, ClickSoundOption> =
  CLICK_SOUND_OPTIONS.reduce((acc, option) => {
    acc[option.id] = option;
    return acc;
  }, {} as Record<ClickSoundId, ClickSoundOption>);

export function getClickSoundVariantBaseUrls(id: ClickSoundId): string[] {
  const option = CLICK_SOUND_OPTIONS_BY_ID[id];
  if (!option) return [];
  return option.variants.map(variant => `/sounds/monkeytype-pack/${option.id}/${variant}`);
}
