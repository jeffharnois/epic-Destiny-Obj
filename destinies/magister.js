{
  "dID": "magister",
  "name": "Magister",
  "1a": {"abil_name": "Sigil of Warding", "required": 0, "prereq": null, "multi": false, "passive": false, "ranks": 3, "AP": 1, "abil": {
      "1": "(Cooldown: 30 secs) Inscribes a sigil for 60 seconds. Grants 1DR/- and 5 Physical Resistance Rating. Only one sigil active per caster.", 
      "2": "(Cooldown: 30 secs) Inscribes a sigil for 60 seconds. Grants 2DR/- and 10 Physical Resistance Rating. Only one sigil active per caster.",
      "3": "(Cooldown: 30 secs) Inscribes a sigil for 60 seconds. Grants 3DR/- and 15 Physical Resistance Rating. Only one sigil active per caster."
    }
  },
  "1b": {"abil_name": "Imperceptible Casting", "required": 0, "prereq": null, "multi": false, "passive": false, "ranks": 1, "AP": 1, "abil": {
      "1": "(Cooldown: 1min) For the next 10 seconds spell threat is reduced to 5% of its normal amount "
    }
  },
  "1c": {"abil_name": "Unearthly Reactions", "required": 0, "prereq": null, "multi": false, "passive": "passive", "ranks": 3, "AP": 1, "abil": {
      "1": "+1 dodge, +2 reflex", 
      "2": "+2 dodge, +4 reflex",
      "3": "+3 dodge, +6 reflex"
    }
  },
  "1d": {"abil_name": "Impregnable Mind", "required": 0, "prereq": null, "multi": false, "passive": "passive", "ranks": 3, "AP": 1, "abil": {
      "1": "+2 concentration, +2 will", 
      "2": "+4 concentration, +4 will",
      "3": "+6 concentration, +6 will"
    }
  },
  "1e": {"abil_name": "Intelligence or Charisma", "required": 0, "prereq": null, "multi": "multi", "passive": "passive", "ranks": 1, "AP": 2, "abil": {
      "1": {"1": "+1 Intelligence", "2": "+1 Charisma"}
    }
  },
  "2a": {"abil_name": "Sigil of Lifeshielding", "required": 4, "prereq": null, "multi": false, "passive": false, "ranks": 3, "AP": 1, "abil": {
      "1": "(Cooldown: 30 secs) Inscribes a sigil for 60 seconds. Grants deathward to allies within radius and inflicts 1d6 light damage every 2 second to undeads. Only one sigil active per caster.", 
      "2": "(Cooldown: 30 secs) Inscribes a sigil for 60 seconds. Grants deathward to allies within radius and inflicts 2d6 light damage every 2 second to undeads. Only one sigil active per caster.",
      "3": "(Cooldown: 30 secs) Inscribes a sigil for 60 seconds. Grants deathward to allies within radius and inflicts 3d6 light damage every 2 second to undeads. Only one sigil active per caster."
    }
  },
  "2b": {"abil_name": "Fade Into the Weave", "required": 4, "prereq": [{"req": "1b", "tier": 1}], "multi": false, "passive": false, "ranks": 3, "AP": 1, "abil": {
      "1": "(Cooldown: 2 minutes) Triggers a diplomacy effect and renders you invisible for 10 seconds (invisibility is not broken by casting or attacking)"
    }
  },
  "2c": null,
  "2d": {"abil_name": "Spell School Specialist", "required": 4, "prereq": null, "multi": "multi", "passive": "passive", "ranks": 3, "AP": 1, "abil": {
      "1": {"1": "+1 Abjuration DC", "2": "+1 Conjuration DC", "3": "+1 Divination DC", "4": "+1 Enchantment DC", "5": "+1 Evocation DC", "6": "+1 Illusion DC", "7": "+1 Necromancy DC", "8": "+1 Transmutation DC" }, 
      "2": "+2 {{multi}} DC",
      "3": "+3 {{multi}} DC"
    }
  },
  "2e": {"abil_name": "Intelligence or Charisma", "required": 4, "prereq": null, "multi": "multi", "passive": "passive", "ranks": 1, "AP": 2, "abil": {
      "1": {"1": "+1 Intelligence", "2": "+1 Charisma"}
    }
  },
  "3a": {"abil_name": "Sigil of Energy Negation", "required": 8, "prereq": null, "multi": false, "passive": false, "ranks": 3, "AP": 1, "abil": {
      "1": "(Cooldown: 30 secs) Inscribes a sigil for 60 seconds. Grants 20 stacking fire, cold, electricity and acid resistance to allies within radius. Only one sigil active per caster.", 
      "2": "(Cooldown: 30 secs) Inscribes a sigil for 60 seconds. Grants 40 stacking fire, cold, electricity and acid resistance to allies within radius. Only one sigil active per caster.",
      "3": "(Cooldown: 30 secs) Inscribes a sigil for 60 seconds. Grants 60 stacking fire, cold, electricity and acid resistance to allies within radius. Only one sigil active per caster."
    }
  },
  "3b": {"abil_name": "Variable Resistance", "required": 8, "prereq": [{"req": "3a", "tier": 1}], "multi": false, "passive": "passive", "ranks": 3, "AP": 1, "abil": {
      "1": "Whenever you take elemental damage, gain +10 resistance to this type of damage for 1 minute. Stacks up to 3 times. Stack cleared if you take a different elemental damage.", 
      "2": "Whenever you take elemental damage, gain +10 resistance to this type of damage for 2 minutes. Stacks up to 3 times. Stack cleared if you take a different elemental damage.",
      "3": "Whenever you take elemental damage, gain +10 resistance to this type of damage for 3 minutes. Stacks up to 3 times. Stack cleared if you take a different elemental damage."
    }
  },
  "3c": {"abil_name": "Piercing Spellcraft", "required": 8, "prereq": null, "multi": false, "passive": "passive", "ranks": 3, "AP": 1, "abil": {
      "1": "+1 to spell penetration", 
      "2": "+2 to spell penetration",
      "3": "+3 to spell penetration"
    }
  },
  "3d": {"abil_name": "Spell School Augmentation", "required": 8, "prereq": [{"req": "2d", "tier": 1}], "multi": false, "passive": "passive", "ranks": 3, "AP": 1, "abil": {
      "1": "Chosen school spells have 5% chance to reduce target <save depending on school> by 10 for 10 seconds.", 
      "2": "Chosen school spells have 10% chance to reduce target <save depending on school> by 10 for 20 seconds.",
      "3": "Chosen school spells have 15% chance to reduce target <save depending on school> by 10 for 30 seconds."
    }
  }, 
  "3e": {"abil_name": "Intelligence or Charisma", "required": 8, "prereq": null, "multi": "multi", "passive": "passive", "ranks": 1, "AP": 2, "abil": {
      "1": {"1": "+1 Intelligence", "2": "+1 Charisma"}
    }
  },
  "4a": {"abil_name": "Sigil of Battering Spellcraft", "required": 12, "prereq": null, "multi": false, "passive": false, "ranks": 3, "AP": 1, "abil": {
      "1": "Inscribes a sigil for 60 seconds. Grants +15 stacking spellpower to allies within radius. Only one sigil active per caster ", 
      "2": "Inscribes a sigil for 60 seconds. Grants +30 stacking spellpower to allies within radius. Only one sigil active per caster ",
      "3": "Inscribes a sigil for 60 seconds. Grants +45 stacking spellpower to allies within radius. Only one sigil active per caster "
    }
  },
  "4b": {"abil_name": "Nullmagic Guard", "required": 12, "prereq": null, "multi": false, "passive": "passive", "ranks": 3, "AP": 1, "abil": {
      "1": "When you take damage, there is a 3% chance that a burst of antimagic energy expands from your body. Nearby enemies are subject to a Dispel Magic effect, which may strip them of their magical protections, and will render them unable to cast spells and lose 3 Spell Resistance for 10 seconds. ", 
      "2": "When you take damage, there is a 4% chance that a burst of antimagic energy expands from your body. Nearby enemies are subject to a Dispel Magic effect, which may strip them of their magical protections, and will render them unable to cast spells and lose 3 Spell Resistance for 20 seconds. ",
      "3": "When you take damage, there is a 6% chance that a burst of antimagic energy expands from your body. Nearby enemies are subject to a Dispel Magic effect, which may strip them of their magical protections, and will render them unable to cast spells and lose 4 Spell Resistance for 30 seconds. "
    }
  },
  "4c": {"abil_name": "Call Kindred Being", "required": 12, "prereq": [{"req": "4d", "tier": 1}], "multi": false, "passive": false, "ranks": 1, "AP": 1, "abil": {
      "1": "Summon an epic creature to aid you (creature type depends on school familiarity) "
    }
  },
  "4d": {"abil_name": "Spell School Familiarity", "required": 12, "prereq": [{"req": "3d", "tier": "1"}], "multi": false, "passive": "passive", "ranks": 3, "AP": 1, "abil": {
      "1": "Reduces cooldown for conjuration spells by 5%", 
      "2": "Reduces cooldown for conjuration spells by 10%",
      "3": "Reduces cooldown for conjuration spells by 15%"
    }
  },
  "4e": {"abil_name": "Intelligence or Charisma", "required": 12, "prereq": null, "multi": "multi", "passive": "passive", "ranks": 1, "AP": 2, "abil": {
      "1": {"1": "+1 Intelligence", "2": "+1 Charisma"}
    }
  },
  "5a": null,
  "5b": {"abil_name": "Nullmagic Strike", "required": 16, "prereq": [{"req": "4b", "tier": 1}], "multi": false, "passive": "passive", "ranks": 3, "AP": 1, "abil": {
      "1": "Offensive spells you cast have a 5% chance to subject the target to a Dispel Magic effect, which may strip them of their magical protections, and will render them unable to cast spells and lose 2 Spell Resistance for 10 seconds ", 
      "2": "Offensive spells you cast have a 10% chance to subject the target to a Dispel Magic effect, which may strip them of their magical protections, and will render them unable to cast spells and lose 3 Spell Resistance for 20 seconds ",
      "3": "Offensive spells you cast have a 15% chance to subject the target to a Dispel Magic effect, which may strip them of their magical protections, and will render them unable to cast spells and lose 4 Spell Resistance for 30 seconds "
    }
  },
  "5c": {"abil_name": "Grand Summoner", "required": 16, "prereq": [{"req": "4c", "tier": 1}], "multi": false, "passive": "passive", "ranks": 1, "AP": 1, "abil": {
      "1": "Summons gain +4 to all ability scores, increased health, increased fort (50%) and a 40% increase to movement speed. Stack with augment summoning and similar effects"
    }
  },
  "5d": {"abil_name": "Spell School Mastery", "required": 16, "prereq": [{"req": "4d", "tier": 1}], "multi": false, "passive": "passive", "ranks": 3, "AP": 1, "abil": {
      "1": "Caster level and maximum caster level for choosen school increased by 1", 
      "2": "Caster level and maximum caster level for choosen school increased by 2",
      "3": "Caster level and maximum caster level for choosen school increased by 3"
    }
  },
  "5e": {"abil_name": "Intelligence or Charisma", "required": 16, "prereq": null, "multi": "multi", "passive": "passive", "ranks": 1, "AP": 2, "abil": {
      "1": {"1": "+1 Intelligence", "2": "+1 Charisma"}
    }
  },
  "6a": {"abil_name": "Arcane Tempest", "required": 20, "prereq": [{"req": "4a", "tier": 1}], "multi": false, "passive": false, "ranks": 1, "AP": 2, "abil": {
      "1": "(Cooldown: 3mins) AoE that deals 2d6 damage per caster level each 2 seconds for 8 seconds"
    }
  },
  "6b": {"abil_name": "Nullmagic Aura", "required": 20, "prereq": [{"req": "5b", "tier": 1}], "multi": false, "passive": false, "ranks": 1, "AP": 2, "abil": {
      "1": "(Cooldown: 1sec) Each time nullmagic guard or strike activates, you gain 1 charge. When have you 30 charges, can activate nullmagic aura. Allies and yourself are immune to harmful spells for 20 seconds."
    }
  },
  "6c": null,
  "6d": {"abil_name": "Arcane Adept", "required": 20, "prereq": null, "multi": false, "passive": "passive", "ranks": 1, "AP": 2, "abil": {
      "1": "All spells can be cast with 5% fewer spell points"
    }
  },
  "6e": {"abil_name": "Intelligence or Charisma", "required": 20, "prereq": null, "multi": "multi", "passive": "passive", "ranks": 1, "AP": 2, "abil": {
      "1": {"1": "+1 Intelligence", "2": "+1 Charisma"}
    }
  }
}