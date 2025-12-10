
import React, { useState, useMemo } from 'react';
import { Swords, Play, Filter, Zap, Shield, MousePointer2, Keyboard, RotateCcw, Video, ChevronDown, User, Search, Youtube, GraduationCap } from 'lucide-react';

// --- TYPES ---

type SkillType = 'martial' | 'special' | 'light' | 'charged' | 'heavy' | 'heavy_charged' | 'conversion' | 'mystic' | 'defensive';

interface ComboStep {
  label: string;
  type: SkillType;
  note?: string;      // Tooltip text
  badge?: string;     // Number badge (e.g. "1")
  cancel?: boolean;   // If true, shows "xx" transition instead of ">"
  imgAlt?: string;    // Name of the mystic skill (used for tooltip/label)
}

interface Combo {
  id: string;
  title: string;
  description?: string;
  primaryWeapon: string;
  secondaryWeapon: string;
  difficulty: number; // 1-3
  steps: ComboStep[];
  hasVideo?: boolean;
  videoUrl?: string;
  author?: string;
}

// --- DATA ---

const SKILL_LEGEND = [
  { label: 'Q', type: 'martial', desc: 'Martial Art' },
  { label: '~', type: 'special', desc: 'Special' },
  { label: 'LMB', type: 'light', desc: 'Light Attack' },
  { label: 'LMB (Hold)', type: 'charged', desc: 'Light Attack (Charged)' },
  { label: 'R', type: 'heavy', desc: 'Heavy Attack' },
  { label: 'R (Hold)', type: 'heavy_charged', desc: 'Heavy Attack (Charged)' },
  { label: 'TAB', type: 'conversion', desc: 'Dual-Weapon Skill' },
  { label: 'M', type: 'mystic', desc: 'Mystic Skill' },
  { label: 'E', type: 'defensive', desc: 'Parry' },
  { label: 'SCR', type: 'defensive', desc: 'Weapon Scroll' },
] as const;

const COMBOS_DATA: Combo[] = [
  {
    id: '6c223d1c',
    title: '(To Be Confirmed) Inkwell Fan into Strategic Sword Combo',
    primaryWeapon: 'Inkwell Fan',
    secondaryWeapon: 'Strategic Sword',
    difficulty: 2,
    hasVideo: true,
    videoUrl: 'https://youtu.be/XGc14p_iY5s?t=611',
    author: 'Anonymous',
    steps: [
      { label: '~', type: 'special' },
      { label: 'SCR', type: 'defensive' },
      { label: 'R', type: 'heavy' },
      { label: 'R', type: 'heavy' },
      { label: 'R', type: 'heavy' },
      { label: 'Q', type: 'martial' },
      { label: 'Q', type: 'martial', badge: '1' },
      { label: 'R', type: 'heavy' },
      { label: 'R', type: 'heavy' },
      { label: 'R', type: 'heavy' },
      { label: 'TAB', type: 'conversion' },
      { label: 'M', type: 'mystic', imgAlt: 'Talon Strike' }
    ]
  },
  {
    id: '836d23c0',
    title: 'Heavenquaker Spear into Nameless Spear Combo',
    primaryWeapon: 'Heavenquaker Spear',
    secondaryWeapon: 'Nameless Spear',
    difficulty: 3,
    hasVideo: true,
    videoUrl: 'https://youtu.be/yz6hnp_RFso?t=223',
    author: 'Anonymous',
    steps: [
      { label: 'Q', type: 'martial' },
      { label: 'LMB', type: 'light' },
      { label: '~', type: 'special', cancel: true, note: 'Cancel after 2nd hit' },
      { label: 'E', type: 'defensive' },
      { label: 'M', type: 'mystic', imgAlt: 'Free Morph', cancel: true, note: 'Cancel after first hit' },
      { label: 'LMB (Hold)', type: 'charged' },
      { label: 'M', type: 'mystic', imgAlt: 'Free Morph', cancel: true, note: 'Cancel after first hit' },
      { label: 'E', type: 'defensive' },
      { label: 'LMB (Hold)', type: 'charged', cancel: true },
      { label: 'E', type: 'defensive' },
      { label: 'SCR', type: 'defensive' },
      { label: 'Q', type: 'martial' },
      { label: 'M', type: 'mystic', imgAlt: 'Soaring Spin' },
      { label: 'M', type: 'mystic', imgAlt: "Dragon's Breath" }
    ]
  },
  {
    id: '66dd038c',
    title: 'Nameless Spear into Heavenquaker Spear Combo',
    primaryWeapon: 'Heavenquaker Spear',
    secondaryWeapon: 'Nameless Spear',
    difficulty: 2,
    hasVideo: true,
    videoUrl: 'https://youtu.be/yz6hnp_RFso?t=143',
    author: 'Anonymous',
    steps: [
      { label: 'Q', type: 'martial' },
      { label: 'M', type: 'mystic', imgAlt: "Lion's Roar" },
      { label: 'M', type: 'mystic', imgAlt: 'Yaksha Rush' },
      { label: 'SCR', type: 'defensive' },
      { label: 'R (Hold)', type: 'heavy_charged', cancel: true },
      { label: 'Q', type: 'martial' },
      { label: 'M', type: 'mystic', imgAlt: 'Free Morph', cancel: true, note: 'Cancel after first hit' },
      { label: 'E', type: 'defensive' },
      { label: 'R (Hold)', type: 'heavy_charged', cancel: true },
      { label: '~', type: 'special' },
      { label: 'M', type: 'mystic', imgAlt: "Dragon's Breath" }
    ]
  },
  {
    id: 'ca789541',
    title: 'Infernal Twinblades Combo into Strategic Sword 2',
    primaryWeapon: 'Infernal Twinblades',
    secondaryWeapon: 'Strategic Sword',
    difficulty: 1,
    hasVideo: true,
    videoUrl: 'https://youtu.be/bS-3OJvyvFQ?t=137',
    author: 'Anonymous',
    steps: [
      { label: 'Q', type: 'martial' },
      { label: 'LMB', type: 'light' },
      { label: 'LMB', type: 'light' },
      { label: 'LMB', type: 'light' },
      { label: 'LMB', type: 'light' },
      { label: 'Q', type: 'martial' },
      { label: 'LMB', type: 'light' },
      { label: 'LMB', type: 'light' },
      { label: 'LMB', type: 'light' },
      { label: 'LMB', type: 'light' },
      { label: 'Q', type: 'martial' },
      { label: 'LMB', type: 'light' },
      { label: 'LMB', type: 'light' },
      { label: 'LMB', type: 'light' },
      { label: 'LMB', type: 'light' },
      { label: 'TAB', type: 'conversion' },
      { label: 'Q', type: 'martial' },
      { label: 'M', type: 'mystic', imgAlt: 'Free Morph' }
    ]
  },
  {
    id: 'e7b380d3',
    title: 'Infernal Twinblades Combo into Strategic Sword',
    primaryWeapon: 'Infernal Twinblades',
    secondaryWeapon: 'Strategic Sword',
    difficulty: 1,
    hasVideo: true,
    videoUrl: 'https://youtu.be/bS-3OJvyvFQ?t=91',
    author: 'Anonymous',
    steps: [
      { label: 'Q', type: 'martial' },
      { label: 'LMB', type: 'light' },
      { label: 'LMB', type: 'light' },
      { label: 'LMB', type: 'light' },
      { label: 'LMB', type: 'light' },
      { label: 'Q', type: 'martial' },
      { label: 'LMB', type: 'light' },
      { label: 'LMB', type: 'light' },
      { label: 'LMB', type: 'light' },
      { label: 'LMB', type: 'light' },
      { label: 'Q', type: 'martial' },
      { label: 'LMB', type: 'light' },
      { label: 'LMB', type: 'light' },
      { label: 'LMB', type: 'light' },
      { label: 'LMB', type: 'light' },
      { label: 'TAB', type: 'conversion' },
      { label: 'Q', type: 'martial' },
      { label: 'Q', type: 'martial', badge: '1' },
      { label: '~', type: 'special' }
    ]
  },
  {
    id: 'a53bc70d',
    title: 'Infernal Twinblades Basic Combo',
    primaryWeapon: 'Infernal Twinblades',
    secondaryWeapon: 'Mortal Rope Dart',
    difficulty: 1,
    hasVideo: true,
    videoUrl: 'https://youtu.be/99K0H3j33yg?t=607',
    author: 'Anonymous',
    steps: [
      { label: 'Q', type: 'martial' },
      { label: 'LMB', type: 'light' },
      { label: 'LMB', type: 'light' },
      { label: 'LMB', type: 'light' },
      { label: 'LMB', type: 'light' },
      { label: 'Q', type: 'martial' },
      { label: 'LMB', type: 'light' },
      { label: 'LMB', type: 'light' },
      { label: 'LMB', type: 'light' },
      { label: 'LMB', type: 'light' },
      { label: 'Q', type: 'martial' },
      { label: 'LMB', type: 'light' },
      { label: 'LMB', type: 'light' },
      { label: 'LMB', type: 'light' },
      { label: 'LMB', type: 'light' }
    ]
  },
  {
    id: '445fc500',
    title: 'Mortal Rope Dart Opener into Infernal Twinblades Combo',
    primaryWeapon: 'Mortal Rope Dart',
    secondaryWeapon: 'Infernal Twinblades',
    difficulty: 3,
    hasVideo: true,
    videoUrl: 'https://youtu.be/99K0H3j33yg?t=585',
    author: 'Anonymous',
    steps: [
      { label: 'R', type: 'heavy' },
      { label: '~', type: 'special' },
      { label: 'Q', type: 'martial' },
      { label: 'SCR', type: 'defensive' },
      { label: 'Q', type: 'martial' },
      { label: 'LMB', type: 'light' },
      { label: 'LMB', type: 'light' },
      { label: 'LMB', type: 'light' },
      { label: 'LMB', type: 'light' },
      { label: 'Q', type: 'martial' },
      { label: 'LMB', type: 'light' },
      { label: 'LMB', type: 'light' },
      { label: 'LMB', type: 'light' },
      { label: 'LMB', type: 'light' },
      { label: 'TAB', type: 'conversion' },
      { label: 'Q', type: 'martial' },
      { label: 'Q', type: 'martial', badge: '1' },
      { label: '~', type: 'special' }
    ]
  },
  {
    id: 'a77604f0',
    title: 'Strategic Sword Opened with Nameless Sword',
    primaryWeapon: 'Nameless Sword',
    secondaryWeapon: 'Strategic Sword',
    difficulty: 3,
    hasVideo: true,
    videoUrl: 'https://youtu.be/99K0H3j33yg?t=543',
    author: 'Anonymous',
    steps: [
      { label: 'R (Hold)', type: 'heavy_charged', cancel: true, note: 'Cancel after pop-up' },
      { label: 'E', type: 'defensive' },
      { label: 'M', type: 'mystic', imgAlt: 'Leaping Toad', cancel: true, note: 'Cancel after hit' },
      { label: 'E', type: 'defensive' },
      { label: 'LMB', type: 'light' },
      { label: 'Q', type: 'martial' },
      { label: 'Q', type: 'martial', badge: '1' },
      { label: 'R', type: 'heavy' },
      { label: 'R', type: 'heavy' },
      { label: '~', type: 'special' },
      { label: 'R (Hold)', type: 'heavy_charged' },
      { label: '~', type: 'special' },
      { label: 'SCR', type: 'defensive' },
      { label: '~', type: 'special' }
    ]
  },
  {
    id: '2fdd745f',
    title: 'Nameless Sword Opener with Strategic Sword',
    primaryWeapon: 'Nameless Sword',
    secondaryWeapon: 'Strategic Sword',
    difficulty: 3,
    hasVideo: true,
    videoUrl: 'https://youtu.be/99K0H3j33yg?t=523',
    author: 'Anonymous',
    steps: [
      { label: 'Q', type: 'martial' },
      { label: 'LMB', type: 'light' },
      { label: 'TAB', type: 'conversion' },
      { label: 'LMB', type: 'light' },
      { label: 'Q', type: 'martial' },
      { label: 'Q', type: 'martial', badge: '1' },
      { label: 'R', type: 'heavy' },
      { label: 'R', type: 'heavy' },
      { label: '~', type: 'special' },
      { label: 'R (Hold)', type: 'heavy_charged' },
      { label: '~', type: 'special' },
      { label: 'SCR', type: 'defensive' },
      { label: '~', type: 'special' }
    ]
  },
  {
    id: '54903c20',
    title: 'Less than 3 bleeds Strategic Sword opener',
    primaryWeapon: 'Heavenquaker Spear',
    secondaryWeapon: 'Strategic Sword',
    difficulty: 3,
    hasVideo: true,
    videoUrl: 'https://youtu.be/99K0H3j33yg?t=479',
    author: 'Anonymous',
    steps: [
      { label: 'R (Hold)', type: 'heavy_charged', cancel: true },
      { label: 'E', type: 'defensive' },
      { label: 'SCR', type: 'defensive' },
      { label: 'R (Hold)', type: 'heavy_charged' },
      { label: 'Q', type: 'martial' },
      { label: 'TAB', type: 'conversion' },
      { label: 'Q', type: 'martial' },
      { label: 'Q', type: 'martial', badge: '1' },
      { label: 'R', type: 'heavy' },
      { label: 'R', type: 'heavy' },
      { label: '~', type: 'special' }
    ]
  },
  {
    id: '1a2c83cf',
    title: '3+ Bleed Strategic Sword Charge Opener',
    primaryWeapon: 'Heavenquaker Spear',
    secondaryWeapon: 'Strategic Sword',
    difficulty: 3,
    hasVideo: true,
    videoUrl: 'https://youtu.be/99K0H3j33yg?t=455',
    author: 'Anonymous',
    steps: [
      { label: 'R (Hold)', type: 'heavy_charged', cancel: true },
      { label: 'E', type: 'defensive' },
      { label: 'M', type: 'mystic', imgAlt: 'Leaping Toad', cancel: true },
      { label: 'E', type: 'defensive' },
      { label: 'LMB', type: 'light' },
      { label: 'Q', type: 'martial' },
      { label: 'Q', type: 'martial', badge: '1' },
      { label: 'R', type: 'heavy' },
      { label: 'R', type: 'heavy' },
      { label: '~', type: 'special' },
      { label: 'R (Hold)', type: 'heavy_charged' },
      { label: '~', type: 'special' },
      { label: 'R (Hold)', type: 'heavy_charged' }
    ]
  },
  {
    id: '2e418a5b',
    title: 'Heavenquaker Spear and Strategic Sword Combo 2',
    primaryWeapon: 'Heavenquaker Spear',
    secondaryWeapon: 'Strategic Sword',
    difficulty: 3,
    hasVideo: true,
    videoUrl: 'https://youtu.be/99K0H3j33yg?t=420',
    author: 'Anonymous',
    steps: [
      { label: 'R (Hold)', type: 'heavy_charged' },
      { label: 'Q', type: 'martial' },
      { label: 'TAB', type: 'conversion' },
      { label: 'Q', type: 'martial' },
      { label: 'Q', type: 'martial', badge: '1' },
      { label: 'R', type: 'heavy' },
      { label: 'R', type: 'heavy' },
      { label: '~', type: 'special' },
      { label: 'R (Hold)', type: 'heavy_charged' },
      { label: '~', type: 'special' },
      { label: 'R (Hold)', type: 'heavy_charged' }
    ]
  },
  {
    id: '6c9d5db4',
    title: 'Heavenquaker Spear and Strategic Sword Combo',
    primaryWeapon: 'Heavenquaker Spear',
    secondaryWeapon: 'Strategic Sword',
    difficulty: 3,
    hasVideo: true,
    videoUrl: 'https://youtu.be/99K0H3j33yg?t=377',
    author: 'Anonymous',
    steps: [
      { label: 'LMB', type: 'light' },
      { label: 'LMB', type: 'light' },
      { label: 'Q', type: 'martial' },
      { label: 'TAB', type: 'conversion' },
      { label: 'Q', type: 'martial' },
      { label: 'Q', type: 'martial', badge: '1' },
      { label: 'R', type: 'heavy' },
      { label: 'R', type: 'heavy' },
      { label: '~', type: 'special' },
      { label: 'R (Hold)', type: 'heavy_charged' },
      { label: '~', type: 'special' },
      { label: 'R (Hold)', type: 'heavy_charged' },
      { label: '~', type: 'special' },
      { label: 'R (Hold)', type: 'heavy_charged' }
    ]
  },
  {
    id: 'd8bcd0ef',
    title: 'Nameless Sword and Strategic Sword Extendable Combo',
    primaryWeapon: 'Nameless Sword',
    secondaryWeapon: 'Strategic Sword',
    difficulty: 3,
    hasVideo: false,
    author: 'Anonymous',
    steps: [
      { label: 'Q', type: 'martial' },
      { label: 'Q', type: 'martial', badge: '1', cancel: true },
      { label: 'E', type: 'defensive' },
      { label: 'Q', type: 'martial', badge: '2' },
      { label: 'R', type: 'heavy' },
      { label: 'R', type: 'heavy' },
      { label: 'M', type: 'mystic', imgAlt: 'Leaping Toad', cancel: true },
      { label: 'E', type: 'defensive' },
      { label: 'SCR', type: 'defensive' }
    ]
  },
  {
    id: '062f4b3a',
    title: 'Nameless Spear into Heavenquaker Spear Combo',
    primaryWeapon: 'Heavenquaker Spear',
    secondaryWeapon: 'Nameless Spear',
    difficulty: 3,
    hasVideo: true,
    videoUrl: 'https://youtu.be/99K0H3j33yg?t=355',
    author: 'Anonymous',
    steps: [
      { label: 'Q', type: 'martial' },
      { label: 'M', type: 'mystic', imgAlt: "Lion's Roar" },
      { label: 'SCR', type: 'defensive' },
      { label: 'M', type: 'mystic', imgAlt: 'Yaksha Rush' },
      { label: 'R (Hold)', type: 'heavy_charged' },
      { label: 'Q', type: 'martial' },
      { label: '~', type: 'special', cancel: true },
      { label: 'E', type: 'defensive' },
      { label: '~', type: 'special', cancel: true },
      { label: 'E', type: 'defensive' },
      { label: '~', type: 'special', cancel: true },
      { label: 'E', type: 'defensive' }
    ]
  },
  {
    id: '5e650ad9',
    title: 'No Vitality/Qi Heavenquaker Spear Combo',
    primaryWeapon: 'Heavenquaker Spear',
    secondaryWeapon: 'Nameless Spear',
    difficulty: 3,
    hasVideo: true,
    videoUrl: 'https://youtu.be/99K0H3j33yg?t=336',
    author: 'Anonymous',
    steps: [
      { label: 'LMB', type: 'light' },
      { label: 'LMB', type: 'light' },
      { label: 'Q', type: 'martial' },
      { label: 'LMB', type: 'light' },
      { label: '~', type: 'special', cancel: true },
      { label: 'E', type: 'defensive' },
      { label: 'SCR', type: 'defensive' },
      { label: 'Q', type: 'martial' },
      { label: 'SCR', type: 'defensive' },
      { label: 'R (Hold)', type: 'heavy_charged' },
      { label: '~', type: 'special' }
    ]
  },
  {
    id: 'a81050f2',
    title: 'Heavenquaker Spear Standard Combo',
    primaryWeapon: 'Heavenquaker Spear',
    secondaryWeapon: '',
    difficulty: 3,
    hasVideo: true,
    videoUrl: 'https://youtu.be/99K0H3j33yg?t=314',
    author: 'Anonymous',
    steps: [
      { label: 'LMB', type: 'light' },
      { label: 'LMB', type: 'light' },
      { label: 'Q', type: 'martial' },
      { label: 'LMB', type: 'light' },
      { label: '~', type: 'special', cancel: true },
      { label: 'E', type: 'defensive' },
      { label: 'M', type: 'mystic', imgAlt: 'Free Morph', cancel: true },
      { label: 'E', type: 'defensive' },
      { label: 'R (Hold)', type: 'heavy_charged' },
      { label: '~', type: 'special' }
    ]
  },
  {
    id: '0c779341',
    title: 'No Vitality/Qi Nameless Sword Combo',
    primaryWeapon: 'Nameless Spear',
    secondaryWeapon: 'Nameless Sword',
    difficulty: 3,
    hasVideo: true,
    videoUrl: 'https://youtu.be/99K0H3j33yg?t=235',
    author: 'Anonymous',
    steps: [
      { label: 'Q', type: 'martial' },
      { label: 'Q', type: 'martial', badge: '1' },
      { label: 'E', type: 'defensive' },
      { label: 'Q', type: 'martial', badge: '2' },
      { label: 'SCR', type: 'defensive' },
      { label: 'LMB', type: 'light' },
      { label: 'TAB', type: 'conversion' },
      { label: 'SCR', type: 'defensive' },
      { label: 'Q', type: 'martial' },
      { label: 'M', type: 'mystic', imgAlt: 'Soaring Spin' }
    ]
  },
  {
    id: '5310e33d',
    title: 'Standard Nameless Sword Combo',
    primaryWeapon: 'Nameless Spear',
    secondaryWeapon: 'Nameless Sword',
    difficulty: 3,
    hasVideo: true,
    videoUrl: 'https://youtu.be/99K0H3j33yg?t=216',
    author: 'Anonymous',
    steps: [
      { label: 'Q', type: 'martial' },
      { label: 'Q', type: 'martial', badge: '1', cancel: true },
      { label: 'E', type: 'defensive' },
      { label: 'Q', type: 'martial', badge: '2' },
      { label: 'R', type: 'heavy' },
      { label: 'R', type: 'heavy', cancel: true },
      { label: 'M', type: 'mystic', imgAlt: 'Leaping Toad', cancel: true },
      { label: 'E', type: 'defensive' },
      { label: 'SCR', type: 'defensive' },
      { label: 'Q', type: 'martial' },
      { label: '~', type: 'special' }
    ]
  },
  {
    id: '3e27091d',
    title: 'Simplest Nameless Sword Starter',
    primaryWeapon: 'Nameless Spear',
    secondaryWeapon: 'Nameless Sword',
    difficulty: 3,
    hasVideo: true,
    videoUrl: 'https://youtu.be/99K0H3j33yg?t=197',
    author: 'Anonymous',
    steps: [
      { label: 'Q', type: 'martial' },
      { label: 'M', type: 'mystic', imgAlt: 'Free Morph', cancel: true },
      { label: 'E', type: 'defensive' },
      { label: 'SCR', type: 'defensive' },
      { label: 'Q', type: 'martial' },
      { label: '~', type: 'special' }
    ]
  },
  {
    id: '52aad96b',
    title: 'Nameless Spear Stun Combo',
    primaryWeapon: 'Nameless Spear',
    secondaryWeapon: 'Nameless Sword',
    difficulty: 3,
    hasVideo: true,
    videoUrl: 'https://youtu.be/99K0H3j33yg?t=104',
    author: 'Anonymous',
    steps: [
      { label: 'Q', type: 'martial' },
      { label: 'M', type: 'mystic', imgAlt: 'Drunken Poet' },
      { label: 'M', type: 'mystic', imgAlt: 'Drunken Poet' },
      { label: 'TAB', type: 'conversion' },
      { label: 'Q', type: 'martial' },
      { label: 'Q', type: 'martial', badge: '1', cancel: true },
      { label: 'E', type: 'defensive' },
      { label: 'Q', type: 'martial', badge: '2' },
      { label: 'R', type: 'heavy' },
      { label: 'R', type: 'heavy' },
      { label: 'M', type: 'mystic', imgAlt: 'Leaping Toad', cancel: true },
      { label: 'E', type: 'defensive' },
      { label: '~', type: 'special' }
    ]
  },
  {
    id: '6a377f2d',
    title: 'Nameless into Strategic Combo',
    primaryWeapon: 'Nameless Sword',
    secondaryWeapon: 'Strategic Sword',
    difficulty: 3,
    hasVideo: false,
    author: 'Anonymous',
    steps: [
      { label: 'Q', type: 'martial' },
      { label: 'Q', type: 'martial', badge: '1' },
      { label: 'E', type: 'defensive' },
      { label: 'Q', type: 'martial', badge: '2' },
      { label: 'LMB', type: 'light' },
      { label: 'LMB', type: 'light' },
      { label: 'TAB', type: 'conversion' },
      { label: 'LMB', type: 'light' },
      { label: 'LMB', type: 'light' },
      { label: 'Q', type: 'martial' },
      { label: 'Q', type: 'martial', badge: '1' },
      { label: 'R', type: 'heavy' },
      { label: 'R', type: 'heavy', cancel: true },
      { label: 'M', type: 'mystic', imgAlt: 'Leaping Toad', cancel: true },
      { label: 'E', type: 'defensive' },
      { label: 'LMB', type: 'light' },
      { label: 'LMB', type: 'light' }
    ]
  }
];

// --- STYLING CONSTANTS ---

const SKILL_STYLES: Record<SkillType, string> = {
  martial: 'bg-orange-600 border-orange-500 text-white',
  special: 'bg-fuchsia-600 border-fuchsia-500 text-white',
  light: 'bg-sky-600 border-sky-500 text-white',
  charged: 'bg-sky-800 border-sky-600 text-sky-100',
  heavy: 'bg-red-600 border-red-500 text-white',
  heavy_charged: 'bg-red-800 border-red-600 text-red-100',
  conversion: 'bg-amber-500 border-amber-400 text-stone-900',
  mystic: 'bg-pink-600 border-pink-500 text-white',
  defensive: 'bg-emerald-600 border-emerald-500 text-white',
};

// --- COMPONENTS ---

const SkillKey: React.FC<{ 
  label?: string; 
  type: SkillType; 
  note?: string; 
  badge?: string; 
  cancel?: boolean; 
  imgAlt?: string;
}> = ({ label, type, note, badge, cancel, imgAlt }) => {
  
  // Logic to determine display label
  let displayLabel = label;
  if (!displayLabel && type === 'mystic') {
     displayLabel = 'M'; // Default for mystic if only image provided
  }
  
  // If we have an image alt but no explicit note, use the alt as the note (tooltip)
  const displayNote = note || imgAlt;

  return (
    <div className="flex items-center gap-0.5">
        <div className="relative group cursor-help">
            <div className={`
                w-12 h-12 rounded-lg border-b-4 
                flex items-center justify-center font-bold text-sm shadow-md transition-transform hover:scale-105
                ${SKILL_STYLES[type]}
            `}>
                <span className="text-center leading-none px-1 break-words w-full">
                    {displayLabel}
                </span>
                
                {/* Badge (e.g. "1") */}
                {badge && (
                    <span className="absolute -top-2 -right-2 w-5 h-5 bg-wwm-green text-stone-900 text-xs font-bold rounded-full flex items-center justify-center border-2 border-stone-900 z-10">
                        {badge}
                    </span>
                )}
            </div>

            {/* Tooltip */}
            {(displayNote || imgAlt) && (
                <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-max max-w-[200px] px-3 py-1.5 bg-stone-800 border border-stone-700 text-stone-200 text-xs rounded shadow-xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-50">
                    <p className="font-bold text-wwm-green mb-0.5">{imgAlt || (type === 'mystic' ? 'Mystic Skill' : 'Note')}</p>
                    {displayNote && <p>{displayNote}</p>}
                </div>
            )}
        </div>

        {/* Transition Arrow or Cancel Marker */}
        {cancel ? (
             <div className="flex items-center mx-0.5 relative group cursor-help">
                <span className="text-xs font-bold text-red-500 animate-pulse">xx</span>
                {/* Cancel Tooltip */}
                 <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-max px-2 py-1 bg-stone-800 text-red-400 text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-50">
                    Animation Cancel
                </div>
             </div>
        ) : (
            <span className="text-stone-600 font-bold text-lg mx-0.5 opacity-50">&gt;</span>
        )}
    </div>
  );
};

const ComboCard: React.FC<{ combo: Combo }> = ({ combo }) => {
  return (
    <div className="bg-stone-900 rounded-xl border border-stone-800 overflow-hidden hover:border-wwm-green/30 transition-colors shadow-lg group">
      
      {/* Card Header */}
      <div className="p-4 md:p-6 border-b border-stone-800 flex flex-col md:flex-row md:items-start justify-between gap-4">
        <div className="flex-1 min-w-0">
            <div className="flex items-start justify-between">
                <h3 className="font-semibold text-lg text-stone-200 truncate pr-4" title={combo.title}>
                    {combo.title}
                </h3>
                 {/* Difficulty Icons */}
                <div className="flex gap-0.5 shrink-0 mt-1 md:mt-0">
                    {[1, 2, 3].map((i) => (
                        <Zap 
                            key={i} 
                            size={16} 
                            className={i <= combo.difficulty ? "text-wwm-green fill-wwm-green" : "text-stone-700"} 
                        />
                    ))}
                </div>
            </div>
            
            <div className="flex items-center gap-2 mt-2 text-sm text-stone-500">
                <span>{combo.primaryWeapon}</span>
                <span className="text-wwm-green font-bold">+</span>
                <span>{combo.secondaryWeapon || 'None'}</span>
            </div>
        </div>
      </div>

      {/* Steps Visualization */}
      <div className="p-6 bg-stone-950/30 overflow-x-auto">
        <div className="flex flex-wrap items-center gap-y-4 gap-x-1 min-w-max">
            {combo.steps.map((step, idx) => (
                <SkillKey 
                    key={idx} 
                    label={step.label} 
                    type={step.type} 
                    note={step.note} 
                    badge={step.badge}
                    cancel={step.cancel}
                    imgAlt={step.imgAlt}
                />
            ))}
        </div>
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between px-6 py-3 border-t border-stone-800 bg-stone-900/50">
        <div className="flex items-center gap-2 text-xs text-stone-500">
            <User size={12} />
            <span>{combo.author}</span>
        </div>
        
        <div className="flex items-center gap-4">
            {combo.hasVideo && (
                <a 
                    href={combo.videoUrl || '#'} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className={`flex items-center gap-1.5 text-xs font-medium transition-colors ${combo.videoUrl ? 'text-wwm-green hover:underline' : 'text-stone-600 cursor-not-allowed'}`}
                >
                    <Video size={14} />
                    <span>Watch Video</span>
                </a>
            )}
        </div>
      </div>
    </div>
  );
};

const VideoCard: React.FC<{ id: string; title?: string }> = ({ id, title }) => (
    <div className="bg-stone-900 rounded-xl overflow-hidden shadow-lg border border-stone-800 hover:border-wwm-green/30 transition-colors">
        <div className="aspect-video w-full bg-stone-950 relative">
            <iframe
                className="absolute inset-0 w-full h-full"
                src={`https://www.youtube.com/embed/${id}`}
                title={title || "YouTube video player"}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
            />
        </div>
        {title && <div className="p-3 text-sm font-medium text-stone-300 bg-stone-900/80">{title}</div>}
    </div>
);


// --- MAIN TAB COMPONENT ---

export const PvpTab: React.FC = () => {
    const [subTab, setSubTab] = useState<'COMBOS' | 'VIDEOS'>('COMBOS');
    const [weaponFilter, setWeaponFilter] = useState<string>('All');
    const [videoFilter, setVideoFilter] = useState<boolean>(false);
    const [sortOrder, setSortOrder] = useState<'latest' | 'oldest'>('latest');

    // Extract unique weapons for filter
    const allWeapons = useMemo(() => {
        const weapons = new Set<string>();
        COMBOS_DATA.forEach(c => {
            if(c.primaryWeapon) weapons.add(c.primaryWeapon);
            if(c.secondaryWeapon) weapons.add(c.secondaryWeapon);
        });
        return Array.from(weapons).sort();
    }, []);

    const filteredCombos = useMemo(() => {
        let result = [...COMBOS_DATA];
        
        if (weaponFilter !== 'All') {
            result = result.filter(c => c.primaryWeapon === weaponFilter || c.secondaryWeapon === weaponFilter);
        }

        if (videoFilter) {
            result = result.filter(c => c.hasVideo);
        }

        // Sort (Assuming original array order is 'Latest' somewhat, or just reverse it)
        // Since we don't have date fields, let's assume array index 0 is newest.
        if (sortOrder === 'oldest') {
            result.reverse();
        }

        return result;
    }, [weaponFilter, videoFilter, sortOrder]);


    return (
        <div className="w-full h-full bg-stone-950 flex flex-col">
            
            {/* Sub-Tabs Header */}
            <div className="flex border-b border-stone-800 bg-stone-900 shrink-0">
                <button
                    onClick={() => setSubTab('COMBOS')}
                    className={`flex-1 py-3 px-2 md:px-4 text-sm font-bold tracking-wider transition-colors flex items-center justify-center gap-2 ${
                        subTab === 'COMBOS' 
                        ? 'text-wwm-green border-b-2 border-wwm-green bg-stone-800/50' 
                        : 'text-stone-500 hover:text-stone-300 hover:bg-stone-800/30'
                    }`}
                >
                    <Swords size={18} />
                    <span>Combos</span>
                </button>
                <button
                    onClick={() => setSubTab('VIDEOS')}
                    className={`flex-1 py-3 px-2 md:px-4 text-sm font-bold tracking-wider transition-colors flex items-center justify-center gap-2 ${
                        subTab === 'VIDEOS' 
                        ? 'text-wwm-green border-b-2 border-wwm-green bg-stone-800/50' 
                        : 'text-stone-500 hover:text-stone-300 hover:bg-stone-800/30'
                    }`}
                >
                    <Youtube size={18} />
                    <span>PVP Videos</span>
                </button>
            </div>

            <div className="flex-1 overflow-y-auto">
                <div className="container mx-auto px-4 py-8 pb-32 max-w-7xl">
                    
                    {subTab === 'COMBOS' ? (
                        <div className="animate-in fade-in duration-300">
                             {/* --- LEGEND SECTION --- */}
                            <section className="mb-8">
                                <div className="p-5 bg-stone-900 rounded-xl border border-stone-800 shadow-md">
                                    <h3 className="text-sm font-bold text-stone-200 mb-4 flex items-center gap-2 uppercase tracking-wider">
                                        <Keyboard size={16} className="text-wwm-green" /> Skill Legend
                                    </h3>
                                    <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
                                        {SKILL_LEGEND.map((skill) => (
                                            <div key={skill.type + skill.label} className="flex items-center gap-3">
                                                <div className={`
                                                    w-10 h-10 rounded-lg border-b-2 flex items-center justify-center font-bold text-xs shadow-sm text-center p-1
                                                    ${SKILL_STYLES[skill.type]}
                                                `}>
                                                    {skill.label}
                                                </div>
                                                <span className="text-xs text-stone-400 font-medium">{skill.desc}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </section>

                            {/* --- WEAPON FILTERS --- */}
                            <section className="mb-6 space-y-4">
                                <div>
                                    <h3 className="text-sm font-medium text-stone-500 mb-3 flex items-center gap-2">
                                        <Filter size={14} /> Filter by Weapon
                                    </h3>
                                    <div className="flex flex-wrap gap-2">
                                        <button 
                                            onClick={() => setWeaponFilter('All')}
                                            className={`
                                                inline-flex items-center justify-center px-4 py-2 text-xs font-bold rounded-lg transition-all border
                                                ${weaponFilter === 'All' 
                                                    ? 'bg-wwm-green text-stone-900 border-wwm-green shadow-lg shadow-emerald-900/20' 
                                                    : 'bg-stone-900 text-stone-500 border-stone-800 hover:border-stone-600 hover:text-stone-300'}
                                            `}
                                        >
                                            All
                                        </button>
                                        {allWeapons.map(w => (
                                            <button 
                                                key={w}
                                                onClick={() => setWeaponFilter(w)}
                                                className={`
                                                    inline-flex items-center justify-center px-4 py-2 text-xs font-bold rounded-lg transition-all border
                                                    ${weaponFilter === w
                                                        ? 'bg-wwm-green text-stone-900 border-wwm-green shadow-lg shadow-emerald-900/20' 
                                                        : 'bg-stone-900 text-stone-500 border-stone-800 hover:border-stone-600 hover:text-stone-300'}
                                                `}
                                            >
                                                {w}
                                            </button>
                                        ))}
                                    </div>
                                </div>
                                
                                {/* --- CONTROLS ROW --- */}
                                <div className="flex flex-wrap items-center justify-between gap-4 p-4 bg-stone-900/50 rounded-xl border border-stone-800">
                                    {/* Additional Filters */}
                                    <div>
                                        <h3 className="text-[10px] font-bold text-stone-500 uppercase tracking-widest mb-2">Options</h3>
                                        <button 
                                            onClick={() => setVideoFilter(!videoFilter)}
                                            className={`
                                                inline-flex items-center gap-2 px-3 py-1.5 rounded-md text-xs font-medium transition-colors border
                                                ${videoFilter 
                                                    ? 'bg-stone-800 border-wwm-green text-wwm-green' 
                                                    : 'bg-stone-950 border-stone-800 text-stone-400 hover:border-stone-600'}
                                            `}
                                        >
                                            <Video size={14} /> Has Video
                                        </button>
                                    </div>

                                    {/* Sort */}
                                    <div>
                                        <h3 className="text-[10px] font-bold text-stone-500 uppercase tracking-widest mb-2">Sort By</h3>
                                        <div className="relative">
                                            <select 
                                                className="appearance-none bg-stone-950 border border-stone-800 text-stone-300 text-xs rounded-md px-3 py-1.5 pr-8 focus:outline-none focus:border-wwm-green cursor-pointer w-32"
                                                value={sortOrder}
                                                onChange={(e) => setSortOrder(e.target.value as any)}
                                            >
                                                <option value="latest">Latest</option>
                                                <option value="oldest">Oldest</option>
                                            </select>
                                            <ChevronDown className="absolute right-2 top-1/2 -translate-y-1/2 text-stone-500 pointer-events-none" size={14} />
                                        </div>
                                    </div>
                                </div>
                            </section>

                            {/* --- COMBO LIST --- */}
                            <section>
                                <div className="flex items-center justify-between mb-4">
                                    <h3 className="text-xl font-bold text-stone-100">
                                        PVP Combos <span className="text-stone-500 font-normal text-sm ml-2">({filteredCombos.length})</span>
                                    </h3>
                                </div>

                                <div className="grid grid-cols-1 gap-6">
                                    {filteredCombos.map(combo => (
                                        <ComboCard key={combo.id} combo={combo} />
                                    ))}

                                    {filteredCombos.length === 0 && (
                                        <div className="flex flex-col items-center justify-center py-20 text-stone-500 border border-dashed border-stone-800 rounded-xl bg-stone-900/30">
                                            <Search size={48} className="mb-4 opacity-50" />
                                            <p className="text-lg font-medium">No combos found matching your filters.</p>
                                            <button 
                                                onClick={() => { setWeaponFilter('All'); setVideoFilter(false); }}
                                                className="mt-4 text-wwm-green hover:underline text-sm"
                                            >
                                                Clear Filters
                                            </button>
                                        </div>
                                    )}
                                </div>
                            </section>
                        </div>
                    ) : (
                        <div className="space-y-8 animate-in fade-in duration-300">
                             <section>
                                <div className="flex items-center gap-3 mb-4 pb-2 border-b border-stone-800">
                                    <GraduationCap className="text-wwm-green" size={24} />
                                    <h3 className="text-xl font-bold text-stone-100">PVP Basics</h3>
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                    <VideoCard id="4UFzw-Q39pQ" title="Combat Fundamentals" />
                                    <VideoCard id="DhhUnD1wmX4" title="Movement & Positioning" />
                                    <VideoCard id="TCLlK21RVw0" title="Countering & Parry Basics" />
                                </div>
                            </section>

                            <section>
                                <div className="flex items-center gap-3 mb-4 pb-2 border-b border-stone-800">
                                    <Swords className="text-red-500" size={24} />
                                    <h3 className="text-xl font-bold text-stone-100">Advanced Techniques</h3>
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                    <VideoCard id="DMR8UN4gEaY" title="Animation Cancelling Guide" />
                                    <VideoCard id="d9WyWI6RRL4" title="Advanced Combo Strings" />
                                    <VideoCard id="Xh_xT8Aduu8" title="High Level PVP Strategy" />
                                </div>
                            </section>
                        </div>
                    )}

                </div>
            </div>
        </div>
    );
};
