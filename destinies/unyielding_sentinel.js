{
  "dID": "unyielding_sentinel",
  "name": "Unyielding Sentienel",
  "points_remaining": 24,
  "points_spent": 0,
  "autogrants": [
      {"abil_name":"Vigor of Battle", "img":"vigorofbattle", "abil": "+50 hp. Sentinel stance (Active Cooldown: 20secs): 10% healing amp and +50 hp. Enemies you hit gain healing touch for 3 seconds: grants 10 temporary HP to targets they attack.", "passive": false},
      {"abil_name":"Unbreakable", "img":"unbreakable-taken", "abil": "(level 1) +5 sacred bonus to natural armor. You gain the diehard feat. Sentinel stance (Active Cooldown: 20secs): you gain DR 10/epic", "passive": false},
      {"abil_name":"Stand Against the Tide", "img":"standagainstthetide-taken", "abil": "(level 2) +2 Attack. Sentinel stance (Active Cooldown: 20secs) : +1 melee damage, 20% threat generation, 5% fort, +1 reflex/fort/will saves. These bonuses increases while standing still, up to 4 times.", "passive": false},
      {"abil_name":"Stalwart Guardian", "img":"stalwartguardian-taken", "abil": "(level 3) +50 hp. +50 additional hp while in Vigor of Battle stance.", "passive": "passive"},
      {"abil_name":"Heed No Pain", "img":"shrugoff", "abil": "(level 4) +10 physical resistance. +20 additional physical resistance while in Unbreakable stance.", "passive": "passive"},
      {"abil_name":"Steadfast", "img":"untouchable", "abil": "(level 5) +1damage. +1 bonus to reflex/fort/will saves. Can&rsquo;t be knocked down in Stand Against the Tide stance.", "passive": "passive"}
  ],
  "1a": {"abil_name": "Divine Energy Resistance", "required_by": null, "required": 0, "prereq": null, "selected": 0, "img":"divineenergyresistance", "multi": false, "passive": "passive", "ranks": 3, "AP": 1, "abil": {
      "1": "Metamagic: Extend, Quicken, Enlarge.  Spell Resistance: No.  Activation Cost: 225 Spell Points.  Cooldown: 6 seconds.  You and nearby allies gain +35 Enhancement bonus to resist Energy for 1 minute per character level.  (Includes Acid, Cold, Electric, Fire, and Sonic.)",
      "2": "Metamagic: Extend, Quicken, Enlarge.  Spell Resistance: No.  Activation Cost: 150 Spell Points.  Cooldown: 6 seconds.  You and nearby allies gain +35 Enhancement bonus to resist Energy for 1 minute per character level.  (Includes Acid, Cold, Electric, Fire, and Sonic.)",
      "3": "Metamagic: Extend, Quicken, Enlarge.  Spell Resistance: No.  Activation Cost: 75 Spell Points.  Cooldown: 6 seconds.  You and nearby allies gain +35 Enhancement bonus to resist Energy for 1 minute per character level.  (Includes Acid, Cold, Electric, Fire, and Sonic.)"
    }
  },
  "1b": {"abil_name": "Commanding Presence", "required_by": null, "required": 0, "prereq": null, "selected": 0, "img":"commandingpresence", "multi": false, "passive": "passive", "ranks": 3, "AP": 1, "abil": {
      "1": "You generate +50% threat at all times, with melee, ranged, and magical attacks.",
      "2": "You generate +100% threat at all times, with melee, ranged, and magical attacks.",
      "3": "You generate +150% threat at all times, with melee, ranged, and magical attacks."
    }
  },
  "1c": {"abil_name": "Brace for Impact", "required_by": null, "required": 0, "prereq": null, "selected": 0, "img":"braceforimpact", "multi": false, "passive": "passive", "ranks": 2, "AP": 2, "abil": {
      "1": "+20% fortification. +1 reflex/fort/will saves",
      "2": "+40% fortification. +2 reflex/fort/will saves"
    }
  },
  "1d": {"abil_name": "Shield Prowess", "required_by": ["2d"], "required": 0, "prereq": null, "selected": 0, "img":"shieldprowess", "multi": false, "passive": "passive", "ranks": 3, "AP": 1, "abil": {
      "1": "Shield AC contribution increased by 15% ",
      "2": "Shield AC contribution increased by 30%",
      "3": "Shield AC contribution increased by 50%"
    }
  },
  "1e": {"abil_name": "Constitution or Charisma", "required_by": null, "required": 0, "prereq": null, "selected": 0, "img":"chacon", "multi": "multi", "passive": "passive", "ranks": 1, "AP": 2, "abil": {
      "1": {"1": "+1 Constitution", "2": "+1 Charisma"}
    }
  },
  "2a": {"abil_name": "Block Energy", "required_by": null, "required": 0, "prereq": null, "selected": 0, "img":"braceforimpact", "multi": false, "passive": "passive", "ranks": 3, "AP": 1, "abil": {
      "1": "While blocking, you absorb 10% of Acid, Cold, Electric, Fire, Force, Light, and Sonic",
      "1": "While blocking, you absorb 20% of Acid, Cold, Electric, Fire, Force, Light, and Sonic",
      "1": "While blocking, you absorb 30% of Acid, Cold, Electric, Fire, Force, Light, and Sonic"
    }
  },
  "2b": {"abil_name": "Fanaticism", "required_by": null, "required": 4, "prereq": null, "selected": 0, "img":"smitevillainy", "multi": false, "passive": "passive", "ranks": 1, "AP": 2, "abil": {
      "1": "Gain the Smite Evil feat. While you are Unbreakable, weapons you equip gain True Law if you are lawful, and True Chaos if you are chaotic (deals 1d6 damage of that alignement to enemies of different alighements)."
    }
  },
  "2c": {"abil_name": "Endless smiting", "required_by": null, "required": 4, "prereq": null, "selected": 0, "img":"endlesssmiting", "multi": false, "passive": "passive", "ranks": 3, "AP": 1, "abil": {
      "1": "+1 Smite Evil use per rest. Smite evil uses regenerate 10% faster.  Requires one of: Fanaticism, Smite evil",
      "2": "+1 Smite Evil use per rest. Smite evil uses regenerate 20% faster.",
      "3": "+1 Smite Evil use per rest. Smite evil uses regenerate 30% faster."
    }
  },
  "2d": {"abil_name": "Legendary Shield Mastery", "required_by": null, "required": 4, "prereq": "1d", "selected": 0, "img":"legendaryshieldmastery", "multi": false, "passive": "passive", "ranks": 3, "AP": 1, "abil": {
      "1": "While wearing a shield, +5 Physical resistance and 2% Doublestrike.",
      "2": "While wearing a shield, +10 Physical resistance and 4% Doublestrike.",
      "3": "While wearing a shield, +15 Physical resistance and 6% Doublestrike."
    }
  },
  "2e": {"abil_name": "Constitution or Charisma", "required_by": null, "required": 4, "prereq": null, "selected": 0, "img":"chacon", "multi": "multi", "passive": "passive", "ranks": 1, "AP": 2, "abil": {
      "1": {"1": "+1 Constitution", "2": "+1 Charisma"}
    }
  },
  "3a": {"abil_name": "Renewal", "required_by": null, "required": 8, "prereq": null, "selected": 0, "img":"shieldagainstenergy", "multi": false, "passive": "passive", "ranks": 3, "AP": 1, "abil": {
      "1": "(Cooldown: 3secs, 5sp) Heals 1d2 HP per 4 character levels every 2 seconds for 8 seconds. If target is below 50% health, grants celestial shield, which absorbs 30 damage.",
      "2": "(Cooldown: 3secs, 5sp) Heals 1d2 HP per 3 character levels every 2 seconds for 8 seconds. If target is below 50% health, grants celestial shield, which absorbs 40 damage.",
      "3": "(Cooldown: 3secs, 5sp) Heals 1d2 HP per 2 character levels every 2 seconds for 8 seconds. If target is below 50% health, grants celestial shield, which absorbs 50 damage."
    }
  },
  "3b": {"abil_name": "Intolerant Blow", "required_by": null, "required": 8, "prereq": null, "selected": 0, "img":"abidenoevil", "multi": false, "passive": false, "ranks": 1, "AP": 2, "abil": {
      "1": "(Cooldown: 7secs) Melee attack: expand one Smite Evil: Deals +3[W] damage and nearby emenies hate you as if you hit them for 1000 damage each.  Requires one of: Fanaticism, Smite evil"
    }
  },
  "3c": {"abil_name": "Healing Hands", "required_by": null, "required": 8, "prereq": null, "selected": 0, "img":"healinghands", "multi": false, "passive": "passive", "ranks": 1, "AP": 2, "abil": {
      "1": "You gain the Lay on Hands feat. You gain +25 positive spellpower."
    }
  },
  "3d": {"abil_name": "Endless Lay on Hands", "required_by": null, "required": 8, "prereq": null, "selected": 0, "img":"endlesslayonhands", "multi": false, "passive": false, "ranks": 3, "AP": 1, "abil": {
      "1": "+1 lay on hands use per rest. Lay on hands regenerate one use every 3 minutes.  Requires one of: Healing Hands, Lay on Hands",
      "2": "+1 lay on hands use per rest. Lay on hands regenerate one use every 3 minutes and regenerate 10% faster.",
      "3": "+1 lay on hands use per rest. Lay on hands regenerate one use every 3 minutes and regenerate 20% faster."
    }
  },
  "3e": {"abil_name": "Constitution or Charisma", "required_by": null, "required": 8, "prereq": null, "selected": 0, "img":"chacon", "multi": "multi", "passive": "passive", "ranks": 1, "AP": 2, "abil": {
      "1": {"1": "+1 Constitution", "2": "+1 Charisma"}
    }
  },
  "4a": null,
  "4b": {"abil_name": "Spark of Life", "required_by": null, "required": 12, "prereq": null, "selected": 0, "img":"sparkoflifeeternal", "multi": false, "passive": "passive", "ranks": 1, "AP": 2, "abil": {
      "1": "Your armor gains Deathblock, protecting you from death effects "
    }
  },
  "4c": {"abil_name": "Light the Dark", "required_by": null, "required": 12, "prereq": null, "selected": 0, "img":"lightthedarkness", "multi": false, "passive": false, "ranks": 1, "AP": 2, "abil": {
      "1": "Metamagics: Empower Heal, Quicken.  (Cooldown: 12secs) Expand 1 lay on hands: heals 150HP to allies around you and deals that much damage to nearby undead enemies.  This benefits from Positive Spell Power, 50% more than most Spells.  Requires one of: Healing Hands, Lay on Hands."
    }
  },
  "4d": {"abil_name": "Purify Weapon", "required_by": ["5d"], "required": 12, "prereq": null, "selected": 0, "img":"purifyweapon", "multi": false, "passive": "passive", "ranks": 1, "AP": 2, "abil": {
      "1": "If you are Good, weapons you equip gain pure good, dealing 1d6 damage vs. non good targets."
    }
  },
  "4e": {"abil_name": "Constitution or Charisma", "required_by": null, "required": 12, "prereq": null, "selected": 0, "img":"chacon", "multi": "multi", "passive": "passive", "ranks": 1, "AP": 2, "abil": {
      "1": {"1": "+1 Constitution", "2": "+1 Charisma"}
    }
  },
  "5a": {"abil_name": "Hardened", "required_by": null, "required": 16, "prereq": null, "selected": 0, "img":"hardened", "multi": false, "passive": "passive", "ranks": 3, "AP": 1, "abil": {
      "1": "+5 AC",
      "2": "+10 AC",
      "3": "+15 AC"
    }
  },
  "5b": {"abil_name": "Strength of Vitality", "required_by": null, "required": 16, "prereq": null, "selected": 0, "img":"strengthofvitality", "multi": false, "passive": "passive", "ranks": 3, "AP": 1, "abil": {
      "1": "+10% Insight bonus to maximum hit points",
      "2": "+15% Insight bonus to maximum hit points",
      "3": "+20% Insight bonus to maximum hit points"
    }
  },
  "5c": {"abil_name": "Ward Against Evil", "required_by": ["5d"], "required": 16, "prereq": null, "selected": 0, "img":"wardagainstevil", "multi": false, "passive": "passive", "ranks": 3, "AP": 1, "abil": {
      "1": "When you are hit or miss by evil attackers, you have 20% chance to deal 3d6.",
      "2": "When you are hit or miss by evil attackers, you have 20% chance to deal 6d6.",
      "3": "When you are hit or miss by evil attackers, you have 20% chance to deal 10d6."
    }
  },
  "5d": {"abil_name": "Anoint weapon", "required_by": null, "required": 16, "prereq": "4d,5c", "selected": 0, "img":"annointweapon", "multi": false, "passive": "passive", "ranks": 1, "AP": 2, "abil": {
      "1": "If you are good aligned, while you Stand Against the Tide, weapons you equip gain holy dealing 2d6 extra damage vs. evil targets."
    }
  },
  "5e": {"abil_name": "Constitution or Charisma", "required_by": null, "required": 16, "prereq": null, "selected": 0, "img":"chacon", "multi": "multi", "passive": "passive", "ranks": 1, "AP": 2, "abil": {
      "1": {"1": "+1 Constitution", "2": "+1 Charisma"}
    }
  },
  "6a": {"abil_name": "Resurrection", "required_by": null, "required": 20, "prereq": null, "selected": 0, "img":"resurrection", "multi": false, "passive": false, "ranks": 1, "AP": 2, "abil": {
      "1": "Metamgic: Quicken, Eschew Materials, Enlarge.  Spell Resistance: No.  Activation Cost: 15 Spell Points.  Cooldown: 6 seconds.  Resurrects the target, restores half of the target\'s hitpoints, and preserves current spell points."
    }
  },
  "6b": null,
  "6c": {"abil_name": "Undying Vanguard", "required_by": null, "required": 20, "prereq": null, "selected": 0, "img":"undyingvanguard", "multi": false, "passive": false, "ranks": 1, "AP": 2, "abil": {
      "1": "(Cooldown: 5mins) Heal yourself for 1000HP. For 20 seconds you gain 10000 temporary HP.  Usable once per rest."
    }
  },
  "6d": null,
  "6e": {"abil_name": "Constitution or Charisma", "required_by": null, "required": 20, "prereq": null, "selected": 0, "img":"chacon", "multi": "multi", "passive": "passive", "ranks": 1, "AP": 2, "abil": {
      "1": {"1": "+1 Constitution", "2": "+1 Charisma"}
    }
  }
}
