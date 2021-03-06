{
    "dID": "fatesinger",
    "name": "Fatesinger",
    "points_remaining": 24,
    "points_spent": 0,
    "autogrants": [
        {
            "abil_name": "Fatesinger&rsquo;s Repertoire",
            "img": "fatesingersrepertoire-taken",
            "abil": "For every level of Fatesinger, gain 2 Songs, +3 sonic resistance and 25 Spell Points. If you didn&rsquo;t have inspire courage gain that feat. You also gain +1 effective Arcane caster level.",
            "passive": false
        },
        {
            "abil_name": "Glitter of Fame",
            "img": "glitteroffame-taken",
            "abil": "(level 1) Gain +1 to your effective Arcane caster level and a +1 to hit. Special Effect: As long as you are above 10% Health, you radiate confidence: gain a +1 to all Ability scores.",
            "passive": "passive"
        },
        {
            "abil_name": "Harmonic Resonance",
            "img": "harmonicresonance-taken",
            "abil": "(level 2) Special Effect: Your melee and missile attacks have a 10% chance per hit of building a stacking resonance in your enemies. Each stack increases the creature&rsquo;s vulnerability to Sonic damage by 10%. The effect may stack up to 5 times. and lasts up to 20 seconds [Active]: You may expend a Song to activate Harmonic Resonance. If you do so, your voice thrums with magic, and you no longer require material components to cast spells.",
            "passive": false
        },
        {
            "abil_name": "Intoxicationg Presence",
            "img": "intoxicatingpresence-taken",
            "abil": "(level 3) Gain +1 to your effective Arcane caster level and a +1 to hit. Special Effect: As long as you are above 10% Health, enemies that strike you have a 5% chance of becoming Fascinated for 12 seconds, with no saving throw.",
            "passive": "passive"
        },
        {
            "abil_name": "Grandeur",
            "img": "grandeur-taken",
            "abil": "(level 4) Gain +1 to your effective Arcane caster level. Special Effect: As long as you are above 10% Health, you project an Aura of Grandeur. This aura grants you and your friends a +1 to all saving throws, a +2 to all Charisma-based skills, and a +3 Unique bonus to damage.",
            "passive": "passive"
        },
        {
            "abil_name": "Majesty",
            "img": "majesty",
            "abil": "(level 5) Passive: +1 to your effective Arcane caster level and a +1 to hit. You also gain +5 to all saving throws vs enchantments, a +2 to the effective level of your Enchantment/Charm spells and a +10 to the Spell Power of your Sonic, Light and Positive spells. Special Effect: Enemies that strike you also have a 5% chance to become blinded by your glory (in addition to other effects), with no saving throw.",
            "passive": "passive"
        }
    ],
    "1a": {
        "abil_name": "O Fortuna",
        "required_by": [
            "2a"
        ],
        "required": 0,
        "prereq": null,
        "selected": 0,
        "img": "ofortuna",
        "multi": false,
        "passive": "passive",
        "ranks": 3,
        "AP": 1,
        "abil": {
            "1": "Inspire courage gives +1 fortitude and reflex saves",
            "2": "Inspire courage gives +2 fortitude and reflex saves",
            "3": "Inspire courage gives +3 fortitude and reflex saves"
        }
    },
    "1b": {
        "abil_name": "Allure",
        "required_by": [
            "2b"
        ],
        "required": 0,
        "prereq": null,
        "selected": 0,
        "img": "allure",
        "multi": false,
        "passive": "passive",
        "ranks": 3,
        "AP": 1,
        "abil": {
            "1": "+2 to haggle, perform and bluff and an extra song per rest.",
            "2": "+4 to haggle, perform and bluff and an 2 extra songs per rest.",
            "3": "+6 to haggle, perform and bluff and an 3 extra songs per rest."
        }
    },
    "1c": {
        "abil_name": "Music of the Spider Queen",
        "required_by": null,
        "required": 0,
        "prereq": null,
        "selected": 0,
        "img": "musicspiderqueen",
        "multi": false,
        "passive": "passive",
        "ranks": 1,
        "AP": 1,
        "abil": {
            "1": "Fascinate can mesmerize vermin. Vermin still cannot be suggested. "
        }
    },
    "1d": {
        "abil_name": "Dirge",
        "required_by": null,
        "required": 0,
        "prereq": null,
        "selected": 0,
        "img": "revielle",
        "multi": false,
        "passive": false,
        "ranks": 3,
        "AP": 1,
        "abil": {
            "1": "(Cooldown: 6secs) You deal 10d4 negative damage and 10d8 sonic damage every 3 seconds for 18 seconds (fort save for half). In addition, enemies may be slowed by 5% if they fail their fort save. Duration 18 seconds.",
            "2": "(Cooldown: 6secs) You deal 10d6 negative damage and 10d10 sonic damage every 3 seconds for 18 seconds (fort save for half). In addition, enemies may be slowed by 5% if they fail their fort save. Duration 18 seconds.",
            "3": "(Cooldown: 6secs) You deal 10d8 negative damage and 10d12 sonic damage every 3 seconds for 18 seconds (fort save for half). In addition, enemies may be slowed by 5% if they fail their fort save. Duration 18 seconds."
        }
    },
    "1e": {
        "abil_name": "Charisma or Strength",
        "required_by": null,
        "required": 0,
        "prereq": null,
        "selected": 0,
        "img": "strcha",
        "multi": "multi",
        "passive": "passive",
        "ranks": 1,
        "AP": 2,
        "abil": {
            "1": {
                "1": "+1 Charisma",
                "2": "+1 Strength"
            }
        }
    },
    "2a": {
        "abil_name": "Tailwind",
        "required_by": null,
        "required": 4,
        "prereq": "1a",
        "selected": 0,
        "img": "tailwind",
        "multi": false,
        "passive": "passive",
        "ranks": 3,
        "AP": 1,
        "abil": {
            "1": "Inspire courage grants +2 damage to all missile weapons.",
            "2": "Inspire courage grants +4 damage to all missile weapons.",
            "3": "Inspire courage grants +6 damage to all missile weapons."
        }
    },
    "2b": {
        "abil_name": "Lucidity",
        "required_by": null,
        "required": 4,
        "prereq": "1b",
        "selected": 0,
        "img": "lucidity",
        "multi": false,
        "passive": "passive",
        "ranks": 3,
        "AP": 1,
        "abil": {
            "1": "+2 to Concentration, diplomacy and UMD and an song per rest.",
            "2": "+4 to Concentration, diplomacy and UMD and an 2 extra songs per rest.",
            "3": "+6 to Concentration, diplomacy and UMD and an 3 extra songs per rest."
        }
    },
    "2c": {
        "abil_name": "Masked Ball",
        "required_by": null,
        "required": 4,
        "prereq": null,
        "selected": 0,
        "img": "maskedball",
        "multi": false,
        "passive": "passive",
        "ranks": 2,
        "AP": 1,
        "abil": {
            "1": "Fascinate or dirge grants you and your friend +10 jump and tumble, +2 charisma.",
            "2": "Fascinate or dirge grants you and your friend +20 jump and tumble, +2 charisma, and immunity to slippery surfaces."
        }
    },
    "2d": null,
    "2e": {
        "abil_name": "Charisma or Strength",
        "required_by": null,
        "required": 4,
        "prereq": null,
        "selected": 0,
        "img": "strcha",
        "multi": "multi",
        "passive": "passive",
        "ranks": 1,
        "AP": 2,
        "abil": {
            "1": {
                "1": "+1 Charisma",
                "2": "+1 Strength"
            }
        }
    },
    "3a": {
        "abil_name": "Siren&rsquo;s Song",
        "required_by": [
            "4a"
        ],
        "required": 8,
        "prereq": null,
        "selected": 0,
        "img": "sirenssong",
        "multi": false,
        "passive": false,
        "ranks": 3,
        "AP": 1,
        "abil": {
            "1": "(Cooldown: 60secs)Unbreakable mez on a single target and deals 2 constitution damage every 3 seconds. Duration 12 seconds.",
            "2": "(Cooldown: 50secs)Unbreakable mez on a single target and deals 2 constitution damage every 2 seconds. Duration 12 seconds.",
            "3": "(Cooldown: 40secs)Unbreakable mez on a single target and deals 2 constitution damage every 1 seconds. Duration 12 seconds."
        }
    },
    "3b": {
        "abil_name": "Reign",
        "required_by": null,
        "required": 8,
        "prereq": null,
        "selected": 0,
        "img": "artfulmisdirection",
        "multi": false,
        "passive": false,
        "ranks": 3,
        "AP": 1,
        "abil": {
            "1": "Spontaneous Song (expands a song but instant activation): You gain a +20 temporary Health. On a vorpal strike, you unleash a thunderclap for 7d20 Sonic and 7d20 Electrical damage. Duration: 180 seconds.",
            "2": "Spontaneous Song (expands a song but instant activation): You gain a +40 temporary Health. On a vorpal strike, you unleash a thunderclap for 9d20 Sonic and 9d20 Electrical damage. Duration: 180 seconds.",
            "3": "Spontaneous Song (expands a song but instant activation): You gain a +60 temporary Health. On a vorpal strike, you unleash a thunderclap for 11d20 Sonic and 11d20 Electrical damage. Duration: 180 seconds."
        }
    },
    "3c": {
        "abil_name": "Echos of the Ancestors, Arcane",
        "required_by": null,
        "required": 8,
        "prereq": null,
        "selected": 0,
        "img": "echoesmagister",
        "multi": "multi",
        "passive": false,
        "ranks": 1,
        "AP": 2,
        "abil": {
            "1": {
                "1": "Gain a +1 Constitution, a 20 to your maximum spell points, a +1 Natural Armor and a +2 to your saves vs. Poison. You also gain an additional 5 Spell Power when casting Fire, Acid, Cold or Electricity spells.",
                "2": "Gain a +1 Intelligence, a +1 to Use Magic Device, a +2 Spell Penetration bonus to your spells, a +2 to the DC&rsquo;s of your offensive wands and +20 to your maximum Spell Points."
            }
        }
    },
    "3d": {
        "abil_name": "Aria",
        "required_by": null,
        "required": 8,
        "prereq": null,
        "selected": 0,
        "img": "ventriloquism",
        "multi": false,
        "passive": false,
        "ranks": 3,
        "AP": 1,
        "abil": {
            "1": "Spontaneous Song (expands a song but instant activation): You generate 10% less threat for spellcasting. In addition, you gain a 25 Spell Power bonus to your Sonic spells, and a 5 spell Spell Power bonus to your force, Positive and Negative spells. Duration equals 10 seconds * your perform skill.",
            "2": "Spontaneous Song (expands a song but instant activation): You generate 20% less threat for spellcasting. In addition, you gain a 50 Spell Power bonus to your Sonic spells, and a 10 spell Spell Power bonus to your force, Positive and Negative spells. Duration equals 10 seconds * your perform skill.",
            "3": "Spontaneous Song (expands a song but instant activation): You generate 30% less threat for spellcasting. In addition, you gain a 75 Spell Power bonus to your Sonic spells, and a 15 spell Spell Power bonus to your force, Positive and Negative spells. Duration equals 10 seconds * your perform skill."
        }
    },
    "3e": {
        "abil_name": "Charisma or Strength",
        "required_by": null,
        "required": 8,
        "prereq": null,
        "selected": 0,
        "img": "strcha",
        "multi": "multi",
        "passive": "passive",
        "ranks": 1,
        "AP": 2,
        "abil": {
            "1": {
                "1": "+1 Charisma",
                "2": "+1 Strength"
            }
        }
    },
    "4a": {
        "abil_name": "Chord of Disruption",
        "required_by": null,
        "required": 12,
        "prereq": "3a",
        "selected": 0,
        "img": "chorddisruption",
        "multi": false,
        "passive": "passive",
        "ranks": 3,
        "AP": 1,
        "abil": {
            "1": "When siren&rsquo;s song expires, chord of disruption focuses your energy to a single disruptive point causing 5d100+700 disintegrating sonic damage. If save made effects are halved.",
            "2": "When siren&rsquo;s song expires, chord of disruption focuses your energy to a single disruptive point causing 6d100+800 disintegrating sonic damage. If save made effects are halved.",
            "3": "When siren&rsquo;s song expires, chord of disruption focuses your energy to a single disruptive point causing 7d100+900 disintegrating sonic damage. If save made effects are halved."
        }
    },
    "4b": {
        "abil_name": "Echos of the Ancestors, Divine",
        "required_by": null,
        "required": 12,
        "prereq": null,
        "selected": 0,
        "img": "echoesexaltedangel",
        "multi": "multi",
        "passive": false,
        "ranks": 1,
        "AP": 2,
        "abil": {
            "1": {
                "1": "The songs of legend fill your soul. You are eternally inspired by the radiance of divinity. Gain a +1 Wisdom, a +15 to your maximum spell points, a +3 Jump, a +4 to Fortitude saves vs. Disease, and +20 Spell Power when casting Positive Energy spells.",
                "2": "Gain a +1 Wisdom and a +1 to all saving throws. Your Inspire Courage grants an additional +2 to saves vs. Fear. If you possess an Aura of Good, that grants an additional +2 to all saves vs. fear as well. If you possess Turn Undead, you gain +2 to your effective level for Turning Undead."
            }
        }
    },
    "4c": {
        "abil_name": "Echos of the Ancestors, Martial",
        "required_by": null,
        "required": 12,
        "prereq": null,
        "selected": 0,
        "img": "echoeslegendarydreadnaught",
        "multi": "multi",
        "passive": false,
        "ranks": 1,
        "AP": 2,
        "abil": {
            "1": {
                "1": "Gain a +1 Constitution, +10 to your maximum Health, +1 to the DC&rsquo;s of all combat Feats, a 2/- DR Bonus to blocking, +2 AC bonus to blocking, and a +1 Attack bonus.",
                "2": "Gain a +1 Wisdom, a +2 AC while Tumbling and a +1 to all saving throws. If you are centered, you gain a 5% bonus to your total AC. You may only activate this ability if you already have ki.",
                "3": "Gain a +1 Dexterity, a +2 to saving throws vs. Traps and a 1d6 Sneak Attack damage bonus. In addition, every time you are hit, you have a 5% chance of being affected by Lingering Shadows for 4 seconds. Lingering Shadows grants you displacement and a +4 to hit and +2 damage, and +15% Attack Speed, but is removed if you are damaged."
            }
        }
    },
    "4d": {
        "abil_name": "Echos of the Ancestors, Primal",
        "required_by": null,
        "required": 12,
        "prereq": null,
        "selected": 0,
        "img": "echoeswildhunter",
        "multi": "multi",
        "passive": false,
        "ranks": 1,
        "AP": 2,
        "abil": {
            "1": {
                "1": "Gain a +1 Constitution and +20 to your maximum Health. If you have Rage, your Rage grants you an additional +1 Strength and +1 Constitution while raging. You also have a +2% chance to trigger weapon effects on glancing blows.",
                "2": "Gain a +1 Dexterity, +2 Spot, +2 Listen, +2 Hide, +2 Move Silently, +2 Diplomacy and an extra Action Boost per rest. Your attack speed with bows and thrown weapons is 5% faster, and you gain a 1% Dodge bonus. "
            }
        }
    },
    "4e": {
        "abil_name": "Charisma or Strength",
        "required_by": null,
        "required": 12,
        "prereq": null,
        "selected": 0,
        "img": "strcha",
        "multi": "multi",
        "passive": "passive",
        "ranks": 1,
        "AP": 2,
        "abil": {
            "1": {
                "1": "+1 Charisma",
                "2": "+1 Strength"
            }
        }
    },
    "5a": {
        "abil_name": "Bound Fate",
        "required_by": [
            "6a"
        ],
        "required": 16,
        "prereq": null,
        "selected": 0,
        "img": "boundfate",
        "multi": false,
        "passive": false,
        "ranks": 3,
        "AP": 1,
        "abil": {
            "1": "(Cooldown: 4mins) A single target must make a Will save with a DC modified by the caster&rsquo;s Charisma modifier. On a failed save, the target is bound briefly to the spot, and for one minute is also 6% more vulnerable to Sonic, Cold and Electric damage, and has a -6 Spell Resistance. In addition, the creature deals -4 damage on attacks. Instant cast.",
            "2": "(Cooldown: 4mins) A single target must make a Will save with a DC modified by the caster&rsquo;s Charisma modifier. On a failed save, the target is bound briefly to the spot, and for one minute is also 10% more vulnerable to Sonic, Cold and Electric damage, and has a -10 Spell Resistance. In addition, the creature deals -6 damage on attacks. Instant cast.",
            "3": "(Cooldown: 4mins) A single target must make a Will save with a DC modified by the caster&rsquo;s Charisma modifier. On a failed save, the target is bound briefly to the spot, and for one minute is also 15% more vulnerable to Sonic, Cold and Electric damage, and has a -15 Spell Resistance. In addition, the creature deals -8 damage on attacks. Instant cast."
        }
    },
    "5b": {
        "abil_name": "Fragment of Song: Clarity",
        "required_by": null,
        "required": 16,
        "prereq": null,
        "selected": 0,
        "img": "fragmentclarity",
        "multi": false,
        "passive": "passive",
        "ranks": 2,
        "AP": 1,
        "abil": {
            "1": "Inspire courage reduces your spell points cost by 5%, and you also gain 15 temporary spell points.",
            "2": "Inspire courage reduces your spell points cost by 5% and your and your companions SP cost by 5% and all players gain 4 concentration. You also gain 15 temporary spell points."
        }
    },
    "5c": {
        "abil_name": "Masquerade",
        "required_by": null,
        "required": 16,
        "prereq": null,
        "selected": 0,
        "img": "masquerade",
        "multi": false,
        "passive": "passive",
        "ranks": 1,
        "AP": 1,
        "abil": {
            "1": "Activate masquerade to switch your twist of fate at a rest shrine."
        }
    },
    "5d": {
        "abil_name": "Fragment of the Song: Valor",
        "required_by": null,
        "required": 16,
        "prereq": null,
        "selected": 0,
        "img": "fragmentvalor",
        "multi": false,
        "passive": "passive",
        "ranks": 2,
        "AP": 1,
        "abil": {
            "1": "Inspire courage increase your attack speed by 4% and grants you 20 competence bonus to temporary HP. Removes combat penalties for moving. ",
            "2": "Inspire courage increase your attack speed by 4% and grants you 20 competence bonus to temporary HP. It also grants your allies 20 morale bonus to temporary HP and a +4 intimidate. Removes combat penalties for moving.  Gain a 2% chance to cause 5% electricity/light/sonic vulnerability (stacks 3 times)."
        }
    },
    "5e": {
        "abil_name": "Charisma or Strength",
        "required_by": null,
        "required": 16,
        "prereq": null,
        "selected": 0,
        "img": "strcha",
        "multi": "multi",
        "passive": "passive",
        "ranks": 1,
        "AP": 2,
        "abil": {
            "1": {
                "1": "+1 Charisma",
                "2": "+1 Strength"
            }
        }
    },
    "6a": {
        "abil_name": "Grim Fate",
        "required_by": null,
        "required": 20,
        "prereq": "5a",
        "selected": 0,
        "img": "grimfate",
        "multi": false,
        "passive": "passive",
        "ranks": 3,
        "AP": 1,
        "abil": {
            "1": "Your bounds fate increase the target vulnerability to physical attacks by 5%. Grim fate may take effect if bound fate is resisted. Duration 30 seconds. ",
            "2": "Your bounds fate increase the target vulnerability to physical attacks by 10%. Grim fate may take effect if bound fate is resisted. Duration 30 seconds. ",
            "3": "Your bounds fate increase the target vulnerability to physical attacks by 15%. Grim fate may take effect if bound fate is resisted. Duration 30 seconds. "
        }
    },
    "6b": null,
    "6c": {
        "abil_name": "Turn of the Tide",
        "required_by": null,
        "required": 20,
        "prereq": null,
        "selected": 0,
        "img": "turnofthetide",
        "multi": false,
        "passive": false,
        "ranks": 1,
        "AP": 2,
        "abil": {
            "1": "(Cooldown: 10 mins) Expend a Song to activate, Turn of the Tide grants a +5 to hit, +40% damage, DR 15/-, a +4 Charisma, and deals +5d20 +150 Sonic damage per hit. (Sonic damage does not affect Bosses.). In addition, while under the effects of Turn of the Tide, you cannot fail a Will save an a roll of 1. Duration: 20 seconds."
        }
    },
    "6d": null,
    "6e": {
        "abil_name": "Charisma or Strength",
        "required_by": null,
        "required": 20,
        "prereq": null,
        "selected": 0,
        "img": "strcha",
        "multi": "multi",
        "passive": "passive",
        "ranks": 1,
        "AP": 2,
        "abil": {
            "1": {
                "1": "+1 Charisma",
                "2": "+1 Strength"
            }
        }
    }
}
