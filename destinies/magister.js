{
    "dID": "magister",
    "name": "Magister",
    "points_remaining": 24,
    "points_spent": 0,
    "autogrants": [
        {
            "abil_name": "Arcane Study I",
            "img": "arcanestudy_i",
            "abil": "+50 SP +1 caster level to all arcane spell",
            "passive": "passive"
        },
        {
            "abil_name": "Arcane Study II",
            "img": "arcanestudy_ii",
            "abil": "(level 1) +50 SP +1 caster level to all arcane spell",
            "passive": "passive"
        },
        {
            "abil_name": "Arcane Study III",
            "img": "arcanestudy_iii",
            "abil": "(level 2) +50 SP +1 caster level to all arcane spell",
            "passive": "passive"
        },
        {
            "abil_name": "Arcane Study IV",
            "img": "arcanestudy_iv",
            "abil": "(level 3) +50 SP +1 caster level to all arcane spell",
            "passive": "passive"
        },
        {
            "abil_name": "Arcane Study V",
            "img": "arcanestudy_v",
            "abil": "(level 4) +50 SP +1 caster level to all arcane spell",
            "passive": "passive"
        },
        {
            "abil_name": "Arcane Spellsurge",
            "img": "arcanespellsurge-taken",
            "abil": "(level 5) (Cooldown: 4 mins) +5 to all spell DCs for 20 seconds.",
            "passive": false
        }
    ],
    "1a": {
        "abil_name": "Sigil of Warding",
        "required_by": null,
        "required": 0,
        "prereq": null,
        "selected": 0,
        "img": "sigil_spellwarding",
        "multi": false,
        "passive": false,
        "ranks": 3,
        "AP": 1,
        "abil": {
            "1": "(Cooldown: 30 secs) Inscribes a sigil for 60 seconds. Grants 1 AC and 5 Physical Resistance Rating. Only one sigil active per caster.",
            "2": "(Cooldown: 30 secs) Inscribes a sigil for 60 seconds. Grants 2 AC and 10 Physical Resistance Rating. Only one sigil active per caster.",
            "3": "(Cooldown: 30 secs) Inscribes a sigil for 60 seconds. Grants 3 AC and 15 Physical Resistance Rating. Only one sigil active per caster."
        }
    },
    "1b": {
        "abil_name": "Imperceptible Casting",
        "required_by": [
            "2b"
        ],
        "required": 0,
        "prereq": null,
        "selected": 0,
        "img": "imperceptiblecasting",
        "multi": false,
        "passive": false,
        "ranks": 1,
        "AP": 1,
        "abil": {
            "1": "(Cooldown: 1min) For the next 10 seconds spell threat is reduced to 5% of its normal amount "
        }
    },
    "1c": {
        "abil_name": "Unearthly Reactions",
        "required_by": null,
        "required": 0,
        "prereq": null,
        "selected": 0,
        "img": "unearthlyreactions",
        "multi": false,
        "passive": "passive",
        "ranks": 3,
        "AP": 1,
        "abil": {
            "1": "+1 dodge, +2 reflex",
            "2": "+2 dodge, +4 reflex",
            "3": "+3 dodge, +6 reflex.  When you tumble, you will phase out from reality briefly, passing through enemies as you do so."
        }
    },
    "1d": {
        "abil_name": "Impregnable Mind",
        "required_by": null,
        "required": 0,
        "prereq": null,
        "selected": 0,
        "img": "impregnablemind",
        "multi": false,
        "passive": "passive",
        "ranks": 3,
        "AP": 1,
        "abil": {
            "1": "+2 concentration, +2 will",
            "2": "+4 concentration, +4 will",
            "3": "+6 concentration, +6 will.  No longer automatically fail will saves on a roll of a 1"
        }
    },
    "1e": {
        "abil_name": "Intelligence or Charisma",
        "required_by": null,
        "required": 0,
        "prereq": null,
        "selected": 0,
        "img": "chaint",
        "multi": "multi",
        "passive": "passive",
        "ranks": 1,
        "AP": 2,
        "abil": {
            "1": {
                "1": "+1 Intelligence",
                "2": "+1 Charisma"
            }
        }
    },
    "2a": {
        "abil_name": "Sigil of Lifeshielding",
        "required_by": null,
        "required": 4,
        "prereq": null,
        "selected": 0,
        "img": "sigil_lifeshielding",
        "multi": false,
        "passive": false,
        "ranks": 3,
        "AP": 1,
        "abil": {
            "1": "(Cooldown: 30 secs) Inscribes a sigil for 60 seconds. Grants deathward to allies within radius and inflicts 1d6 light damage every 2 second to undeads. Only one sigil active per caster.",
            "2": "(Cooldown: 30 secs) Inscribes a sigil for 60 seconds. Grants deathward to allies within radius and inflicts 2d6 light damage every 2 second to undeads. Only one sigil active per caster.",
            "3": "(Cooldown: 30 secs) Inscribes a sigil for 60 seconds. Grants deathward to allies within radius and inflicts 3d6 light damage every 2 second to undeads. Only one sigil active per caster."
        }
    },
    "2b": {
        "abil_name": "Fade Into the Weave",
        "required_by": null,
        "required": 4,
        "prereq": "1b",
        "selected": 0,
        "img": "fadeintotheweave",
        "multi": false,
        "passive": false,
        "ranks": 1,
        "AP": 1,
        "abil": {
            "1": "(Cooldown: 2 minutes) Triggers a diplomacy effect and renders you invisible for 10 seconds (invisibility is not broken by casting or attacking)"
        }
    },
    "2c": null,
    "2d": {
        "abil_name": "Spell School Specialist",
        "required_by": [
            "3d"
        ],
        "required": 4,
        "prereq": null,
        "selected": 0,
        "img": "specialist_school",
        "multi": "multi",
        "passive": "passive",
        "ranks": 3,
        "AP": 1,
        "abil": {
            "1": {
                "1": "+1 Abjuration DC if you have Spell Focus: Abjuration",
                "2": "+1 Conjuration DC if you have Spell Focus: Conjuration",
                "3": "+1 Enchantment DC if you have Spell Focus: Enchantment",
                "4": "+1 Evocation DC if you have Spell Focus: Evocation",
                "5": "+1 Illusion DC if you have Spell Focus: Illusion",
                "6": "+1 Necromancy DC if you have Spell Focus: Necromancy",
                "7": "+1 Transmutation DC if you have Spell Focus: Transmutation"
            },
            "2": "+2 Spell School DC",
            "3": "+3 Spell School DC"
        }
    },
    "2e": {
        "abil_name": "Intelligence or Charisma",
        "required_by": null,
        "required": 4,
        "prereq": null,
        "selected": 0,
        "img": "chaint",
        "multi": "multi",
        "passive": "passive",
        "ranks": 1,
        "AP": 2,
        "abil": {
            "1": {
                "1": "+1 Intelligence",
                "2": "+1 Charisma"
            }
        }
    },
    "3a": {
        "abil_name": "Sigil of Energy Negation",
        "required_by": [
            "3b"
        ],
        "required": 8,
        "prereq": null,
        "selected": 0,
        "img": "sigil_energynegation",
        "multi": false,
        "passive": false,
        "ranks": 3,
        "AP": 1,
        "abil": {
            "1": "(Cooldown: 30 secs) Inscribes a sigil for 60 seconds. Grants 20 stacking fire, cold, electricity and acid resistance to allies within radius. Only one sigil active per caster.",
            "2": "(Cooldown: 30 secs) Inscribes a sigil for 60 seconds. Grants 40 stacking fire, cold, electricity and acid resistance to allies within radius. Only one sigil active per caster.",
            "3": "(Cooldown: 30 secs) Inscribes a sigil for 60 seconds. Grants 60 stacking fire, cold, electricity and acid resistance to allies within radius. Only one sigil active per caster."
        }
    },
    "3b": {
        "abil_name": "Variable Resistance",
        "required_by": null,
        "required": 8,
        "prereq": "3a",
        "selected": 0,
        "img": "variableresistance",
        "multi": false,
        "passive": "passive",
        "ranks": 3,
        "AP": 1,
        "abil": {
            "1": "Whenever you take elemental damage, gain +10 resistance to this type of damage for 1 minute. Stacks up to 3 times. Stack cleared if you take a different elemental damage.",
            "2": "Whenever you take elemental damage, gain +10 resistance to this type of damage for 2 minutes. Stacks up to 3 times. Stack cleared if you take a different elemental damage.",
            "3": "Whenever you take elemental damage, gain +10 resistance to this type of damage for 3 minutes. Stacks up to 3 times. Stack cleared if you take a different elemental damage."
        }
    },
    "3c": {
        "abil_name": "Piercing Spellcraft",
        "required_by": null,
        "required": 8,
        "prereq": null,
        "selected": 0,
        "img": "piercingspellcraft",
        "multi": false,
        "passive": "passive",
        "ranks": 3,
        "AP": 1,
        "abil": {
            "1": "+1 to spell penetration",
            "2": "+2 to spell penetration",
            "3": "+3 to spell penetration"
        }
    },
    "3d": {
        "abil_name": "Spell School Augmentation",
        "required_by": [
            "4d"
        ],
        "required": 8,
        "prereq": "2d",
        "selected": 0,
        "img": "augmentation_school",
        "multi": false,
        "passive": "passive",
        "ranks": 3,
        "AP": 1,
        "abil": {
            "1": "Chosen school spells have 5% chance to reduce target <save depending on school> by 10 for 10 seconds.",
            "2": "Chosen school spells have 10% chance to reduce target <save depending on school> by 10 for 20 seconds.",
            "3": "Chosen school spells have 15% chance to reduce target <save depending on school> by 10 for 30 seconds."
        }
    },
    "3e": {
        "abil_name": "Intelligence or Charisma",
        "required_by": null,
        "required": 8,
        "prereq": null,
        "selected": 0,
        "img": "chaint",
        "multi": "multi",
        "passive": "passive",
        "ranks": 1,
        "AP": 2,
        "abil": {
            "1": {
                "1": "+1 Intelligence",
                "2": "+1 Charisma"
            }
        }
    },
    "4a": {
        "abil_name": "Sigil of Battering Spellcraft",
        "required_by": [
            "6a"
        ],
        "required": 12,
        "prereq": null,
        "selected": 0,
        "img": "sigil_batteringspellcraft",
        "multi": false,
        "passive": false,
        "ranks": 3,
        "AP": 1,
        "abil": {
            "1": "Inscribes a sigil for 60 seconds. Grants +15 stacking spellpower to allies within radius. Only one sigil active per caster ",
            "2": "Inscribes a sigil for 60 seconds. Grants +30 stacking spellpower to allies within radius. Only one sigil active per caster ",
            "3": "Inscribes a sigil for 60 seconds. Grants +45 stacking spellpower to allies within radius. Only one sigil active per caster "
        }
    },
    "4b": {
        "abil_name": "Nullmagic Guard",
        "required_by": [
            "5b"
        ],
        "required": 12,
        "prereq": null,
        "selected": 0,
        "img": "nullmagic_guard",
        "multi": false,
        "passive": "passive",
        "ranks": 3,
        "AP": 1,
        "abil": {
            "1": "When you take damage, there is a 3% chance that a burst of antimagic energy expands from your body. Nearby enemies are subject to a Dispel Magic effect, which may strip them of their magical protections, and will render them unable to cast spells and lose 2 Spell Resistance for 10 seconds. ",
            "2": "When you take damage, there is a 4% chance that a burst of antimagic energy expands from your body. Nearby enemies are subject to a Dispel Magic effect, which may strip them of their magical protections, and will render them unable to cast spells and lose 3 Spell Resistance for 20 seconds. ",
            "3": "When you take damage, there is a 6% chance that a burst of antimagic energy expands from your body. Nearby enemies are subject to a Dispel Magic effect, which may strip them of their magical protections, and will render them unable to cast spells and lose 4 Spell Resistance for 30 seconds. "
        }
    },
    "4c": {
        "abil_name": "Call Kindred Being",
        "required_by": [
            "5c"
        ],
        "required": 12,
        "prereq": "4d",
        "selected": 0,
        "img": "summon_school",
        "multi": false,
        "passive": false,
        "ranks": 1,
        "AP": 1,
        "abil": {
            "1": "Summon an epic creature to aid you.  Abjuration summons an Animated Armor, Conjuration summons a Golem, Enchantment summons a Succubus, Evocation summons a Living Meteor Swarm, Illusion summons a Dream Reaver, Necromancy summons a Lich, Transmutation summons a Gargoyle."
        }
    },
    "4d": {
        "abil_name": "Spell School Familiarity",
        "required_by": [
            "5b",
            "4c"
        ],
        "required": 12,
        "prereq": "3d",
        "selected": 0,
        "img": "familiarity_school",
        "multi": false,
        "passive": "passive",
        "ranks": 3,
        "AP": 1,
        "abil": {
            "1": "Reduces cooldown for conjuration spells by 5%",
            "2": "Reduces cooldown for conjuration spells by 10%",
            "3": "Reduces cooldown for conjuration spells by 15%"
        }
    },
    "4e": {
        "abil_name": "Intelligence or Charisma",
        "required_by": null,
        "required": 12,
        "prereq": null,
        "selected": 0,
        "img": "chaint",
        "multi": "multi",
        "passive": "passive",
        "ranks": 1,
        "AP": 2,
        "abil": {
            "1": {
                "1": "+1 Intelligence",
                "2": "+1 Charisma"
            }
        }
    },
    "5a": null,
    "5b": {
        "abil_name": "Nullmagic Strike",
        "required_by": [
            "6c"
        ],
        "required": 16,
        "prereq": "4b",
        "selected": 0,
        "img": "nullmagic_strike",
        "multi": false,
        "passive": "passive",
        "ranks": 3,
        "AP": 1,
        "abil": {
            "1": "Offensive spells you cast have a 5% chance to subject the target to a Dispel Magic effect, which may strip them of their magical protections, and will render them unable to cast spells and lose 2 Spell Resistance for 10 seconds ",
            "2": "Offensive spells you cast have a 10% chance to subject the target to a Dispel Magic effect, which may strip them of their magical protections, and will render them unable to cast spells and lose 3 Spell Resistance for 20 seconds ",
            "3": "Offensive spells you cast have a 15% chance to subject the target to a Dispel Magic effect, which may strip them of their magical protections, and will render them unable to cast spells and lose 4 Spell Resistance for 30 seconds "
        }
    },
    "5c": {
        "abil_name": "Grand Summoner",
        "required_by": null,
        "required": 16,
        "prereq": "4c",
        "selected": 0,
        "img": "grandsummoner",
        "multi": false,
        "passive": "passive",
        "ranks": 1,
        "AP": 1,
        "abil": {
            "1": "Summons gain +4 to all ability scores, increased health, increased fort (50%) and a 40% increase to movement speed. Stack with augment summoning and similar effects"
        }
    },
    "5d": {
        "abil_name": "Spell School Mastery",
        "required_by": null,
        "required": 16,
        "prereq": "4d",
        "selected": 0,
        "img": "master_school",
        "multi": false,
        "passive": "passive",
        "ranks": 3,
        "AP": 1,
        "abil": {
            "1": "Caster level and maximum caster level for choosen school increased by 1",
            "2": "Caster level and maximum caster level for choosen school increased by 2",
            "3": "Caster level and maximum caster level for choosen school increased by 3"
        }
    },
    "5e": {
        "abil_name": "Intelligence or Charisma",
        "required_by": null,
        "required": 16,
        "prereq": null,
        "selected": 0,
        "img": "chaint",
        "multi": "multi",
        "passive": "passive",
        "ranks": 1,
        "AP": 2,
        "abil": {
            "1": {
                "1": "+1 Intelligence",
                "2": "+1 Charisma"
            }
        }
    },
    "6a": {
        "abil_name": "Arcane Tempest",
        "required_by": null,
        "required": 20,
        "prereq": "4a",
        "selected": 0,
        "img": "arcanetempest",
        "multi": false,
        "passive": false,
        "ranks": 1,
        "AP": 2,
        "abil": {
            "1": "(Cooldown: 3mins) AoE that deals 2d6 damage per caster level each 2 seconds for 8 seconds.  (Reflex save)."
        }
    },
    "6b": {
        "abil_name": "Nullmagic Aura",
        "required_by": null,
        "required": 20,
        "prereq": "5b",
        "selected": 0,
        "img": "nullmagic_aura",
        "multi": false,
        "passive": false,
        "ranks": 1,
        "AP": 2,
        "abil": {
            "1": "(Cooldown: 1sec) Each time nullmagic guard or strike activates, you gain 1 charge. When have you 30 charges, can activate nullmagic aura. Allies and yourself are immune to harmful spells for 20 seconds."
        }
    },
    "6c": null,
    "6d": {
        "abil_name": "Arcane Adept",
        "required_by": null,
        "required": 20,
        "prereq": null,
        "selected": 0,
        "img": "arcaneadept",
        "multi": false,
        "passive": "passive",
        "ranks": 1,
        "AP": 2,
        "abil": {
            "1": "All spells can be cast with 10% fewer spell points"
        }
    },
    "6e": {
        "abil_name": "Intelligence or Charisma",
        "required_by": null,
        "required": 20,
        "prereq": null,
        "selected": 0,
        "img": "chaint",
        "multi": "multi",
        "passive": "passive",
        "ranks": 1,
        "AP": 2,
        "abil": {
            "1": {
                "1": "+1 Intelligence",
                "2": "+1 Charisma"
            }
        }
    }
}
