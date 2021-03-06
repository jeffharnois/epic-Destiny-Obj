{
    "dID": "exalted_angel",
    "name": "Exalted Angel",
    "points_remaining": 24,
    "points_spent": 0,
    "autogrants": [
        {
            "abil_name": "Celestial Destiny",
            "img": "celestialdestiny",
            "abil": "Gain 50 sp. Each additional level of Exalted Angel grants 50 sp and +1 to Cleric, Paladin and Favored Soul caster levels. The Renewal ability can now target yourself instead of only allies.",
            "passive": "passive"
        },
        {
            "abil_name": "Mass Cure Moderate Wounds",
            "img": "masscuremodwounds-taken",
            "abil": "(level 1) Metamagic: Empower, Empower Heal, Maximize, Quicken, Enlarge.  Spell Resistance: No.  Activation Cost: 35 Spell Points.  Cooldown: 9 seconds.  Casts Cure Moderate Wounds on multiple targets. Positive energy is channeled to heal moderate wounds of allies or damage undead for 2d6+4 plus 1 per caster level (Maximum caster level 30.) hit points, or deals the same amount of damage to an undead creature. (A Will save reduces this damage by half.)  Spell-like Ability: This ability beneits from your Metamagic Feats (such as Quicken) without paying the normal additional spell point cost.",
            "passive": false
        },
        {
            "abil_name": "Angelic Presence",
            "img": "angelicpresence-taken",
            "abil": "(level 2) (Cooldown: 10secs) Toggle: While above 50% Health you have a +2 sacred bonus to Charisma, and all enemies have a -2 penalty to attack rolls. This penalty counts as a Fear effect and stacks with Angel of Vengeance aura.",
            "passive": false
        },
        {
            "abil_name": "Astral Vibrance",
            "img": "astralvibrance-taken",
            "abil": "(level 3) (Cooldown: 10secs) Toggle: While you are above 50% Health enemies below 50% health take 1d4 light damage every 2 seconds, increasing by 1d4 every 2 seconds they remain in your aura (up to 20d4 per 2 seconds), and nearby allies below 50% health receive 1d4 positive healing every 2 seconds increasing by 1d4 every 2 seconds they remain in your aura (up to 20d4 per 2 seconds). Costs 1 sp per 2 second, increasing by 1 every 2 seconds when active",
            "passive": false
        },
        {
            "abil_name": "Transcendental Magic",
            "img": "transcendentalmagic",
            "abil": "(level 4) +3 to the DCs of all spells you cast",
            "passive": "passive"
        },
        {
            "abil_name": "Ascendance",
            "img": "ascendance-taken",
            "abil": "(level 5) (Cooldown: 5mins) Transformation: Assume angelic form (type: outsider good, angel) . Any time you cast light damage spell, chance to gain temporary spell points. Any time you cast single target cure spells on a target, chance to give the target temporary HP. Any time you smite an enemy, chance to gain temporary HP. Your Angelic Presence and Astral Vibrance abilities do not have health requirements while in Angelic form. Astral Vibrance has no spell point drain while you are in Angelic form. Duration 2 minutes. Costs 50SP",
            "passive": false
        }
    ],
    "1a": {
        "abil_name": "Avenging Light ",
        "required_by": null,
        "required": 0,
        "prereq": null,
        "selected": 0,
        "img": "avenginglight",
        "multi": false,
        "passive": false,
        "ranks": 1,
        "AP": 2,
        "abil": {
            "1": "(Cooldown: 3secs) Deals 1d4+4 light damage + 1d4+4 per three character level to 1 target. Fortitude save (DC 10+ character level + charisma mod) for half"
        }
    },
    "1b": {
        "abil_name": "Radiant Power",
        "required_by": [
            "1c",
            "2b"
        ],
        "required": 0,
        "prereq": null,
        "selected": 0,
        "img": "radiantpower",
        "multi": false,
        "passive": "passive",
        "ranks": 3,
        "AP": 1,
        "abil": {
            "1": "+10 Light spellpower",
            "2": "+20 Light spellpower",
            "3": "+30 Light spellpower"
        }
    },
    "1c": {
        "abil_name": "Endless Faith",
        "required_by": null,
        "required": 0,
        "prereq": "1b,1d",
        "selected": 0,
        "img": "endlessfaith",
        "multi": false,
        "passive": "passive",
        "ranks": 3,
        "AP": 1,
        "abil": {
            "1": " Spell point pool increased by 4%. Echoes of power restore up to 18 sp.",
            "2": " Spell point pool increased by 7%. Echoes of power restore up to 24 sp.",
            "3": " Spell point pool increased by 10%. Echoes of power restore up to 30 sp."
        }
    },
    "1d": {
        "abil_name": "Healing Power",
        "required_by": "1c",
        "required": 0,
        "prereq": null,
        "selected": 0,
        "img": "healingpower",
        "multi": false,
        "passive": "passive",
        "ranks": 3,
        "AP": 1,
        "abil": {
            "1": "+10 Positive energy spellpower",
            "2": "+20 Positive energy spellpower",
            "3": "+30 Positive energy spellpower"
        }
    },
    "1e": {
        "abil_name": "Wisdom or Charisma",
        "required_by": null,
        "required": 0,
        "prereq": null,
        "selected": 0,
        "img": "wischa",
        "multi": "multi",
        "passive": "passive",
        "ranks": 1,
        "AP": 2,
        "abil": {
            "1": {
                "1": "+1 Wisdom",
                "2": "+1 Charisma"
            }
        }
    },
    "2a": {
        "abil_name": "Judgement",
        "required_by": [
            "3a"
        ],
        "required": 4,
        "prereq": null,
        "selected": 0,
        "img": "judgement",
        "multi": false,
        "passive": false,
        "ranks": 1,
        "AP": 2,
        "abil": {
            "1": "(Cooldown: 15secs, 10sp) Target undead or evil outsider will explode when killed, dealing 10d100 light damage to other undead or evil outsiders near them"
        }
    },
    "2b": {
        "abil_name": "Embrace the Light ",
        "required_by": null,
        "required": 4,
        "prereq": "1b",
        "selected": 0,
        "img": "embracethelight",
        "multi": false,
        "passive": "pasive",
        "ranks": 3,
        "AP": 1,
        "abil": {
            "1": "You take +10% less light damage",
            "2": "You take +20% less light damage",
            "3": "You take +30% less light damage"
        }
    },
    "2c": {
        "abil_name": "Soundburst",
        "required_by": null,
        "required": 4,
        "prereq": null,
        "selected": 0,
        "img": "soundburst",
        "multi": false,
        "passive": false,
        "ranks": 3,
        "AP": 1,
        "abil": {
            "1": "Metamagic: Empower, Maximize, Quicken, Heighten, Enlarge.  Spell Resisitance: Yes. Activation Cost: 6 Spell Points.  Cooldown: 7 seconds.  Blasts an area with a tremendous cacophony, doing 5 to 8 sonic damage and stunning enemies for 6 seconds.  A successfull Fortitude or Spell Resistance save negates the stun.  D&D Dice: Deals 1d4+4 sonic damage and stuns eneies for 6 seconds.  DC(10 + Character Level + Ability Score Modifier (Best of WIS/CHA)).  Spell-like Ability: This ability beneits from your Metamagic Feats (such as Quicken) without paying the normal additional spell point cost."
        }
    },
    "2d": null,
    "2e": {
        "abil_name": "Wisdom or Charisma",
        "required_by": null,
        "required": 4,
        "prereq": null,
        "selected": 0,
        "img": "wischa",
        "multi": "multi",
        "passive": "passive",
        "ranks": 1,
        "AP": 2,
        "abil": {
            "1": {
                "1": "+1 Wisdom",
                "2": "+1 Charisma"
            }
        }
    },
    "3a": {
        "abil_name": "Lay To Rest",
        "required_by": [
            "4a"
        ],
        "required": 8,
        "prereq": "2a",
        "selected": 0,
        "img": "laytorest",
        "multi": false,
        "passive": false,
        "ranks": 1,
        "AP": 2,
        "abil": {
            "1": "(Cooldown: 15secs, 10sp) Target undead or evil outsider under the effect of Judgement takes 10d100 light damage"
        }
    },
    "3b": {
        "abil_name": "Shadows Upon You",
        "required_by": null,
        "required": 8,
        "prereq": null,
        "selected": 0,
        "img": "shadowsuponyou",
        "multi": false,
        "passive": false,
        "ranks": 1,
        "AP": 2,
        "abil": {
            "1": "Activation Cost: 20 Spell Points.  Cooldown: 20 seconds.  Target for becomes cursed with Shadows Upon You, reducing all saving throws by -2 for 20 seconds.  Whenever this foe is damaged by spells or attacks, saving throws are reduced by an additional -1 for five seconds.  Stacks up to 10 times."
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
        "abil_name": "Purity Of Essence",
        "required_by": null,
        "required": 8,
        "prereq": null,
        "selected": 0,
        "img": "purityofessence",
        "multi": false,
        "passive": "passive",
        "ranks": 3,
        "AP": 1,
        "abil": {
            "1": "3% healing amp",
            "2": "5% healing amp",
            "3": "10% healing amp"
        }
    },
    "3e": {
        "abil_name": "Wisdom or Charisma",
        "required_by": null,
        "required": 8,
        "prereq": null,
        "selected": 0,
        "img": "wischa",
        "multi": "multi",
        "passive": "passive",
        "ranks": 1,
        "AP": 2,
        "abil": {
            "1": {
                "1": "+1 Wisdom",
                "2": "+1 Charisma"
            }
        }
    },
    "4a": {
        "abil_name": "Judge The Many",
        "required_by": null,
        "required": 12,
        "prereq": "3a",
        "selected": 0,
        "img": "judgethemany",
        "multi": false,
        "passive": "passive",
        "ranks": 1,
        "AP": 1,
        "abil": {
            "1": "Undead or evil outsiders judged gain &ldquo;Guilt by association&rdquo;. When target with guilt dies, any undead or outsiders caught in the area have 50% chance to receive judgement"
        }
    },
    "4b": {
        "abil_name": "Rebuke Foe",
        "required_by": [
            "6b"
        ],
        "required": 12,
        "prereq": "4c",
        "selected": 0,
        "img": "rebukefoe",
        "multi": false,
        "passive": false,
        "ranks": 1,
        "AP": 2,
        "abil": {
            "1": "(Cooldown: 3secs) Only usable when Endless Ardor stack >=5. Target enemy tales 5% additional damage from physical and light damage for 30 seconds. Can stack up to 5 times, new stacks add 30 seconds to remaining duration. Endless Ardor stacks reset to zero."
        }
    },
    "4c": {
        "abil_name": "Blood And Radiance",
        "required_by": [
            "4b",
            "4d",
            "6c"
        ],
        "required": 12,
        "prereq": null,
        "selected": 0,
        "img": "bloodandradiance",
        "multi": false,
        "passive": "passive",
        "ranks": 3,
        "AP": 1,
        "abil": {
            "1": "Each time you cast a light based spell, you gain Endless Ardor: +1 sacred bonus to positive energy for 10 seconds. Each time you cast a positive energy spell, gain righteous fervor: +1 sacred bonus to light spellpower for 10 seconds. Can stack up to 10 times. Each stack add 10 seconds to remaining duration.",
            "2": "Each time you cast a light based spell, you gain Endless Ardor: +2 sacred bonus to positive energy for 10 seconds. Each time you cast a positive energy spell, gain righteous fervor: +2 sacred bonus to light spellpower for 10 seconds. Can stack up to 10 times. Each stack add 10 seconds to remaining duration.",
            "3": "Each time you cast a light based spell, you gain Endless Ardor: +3 sacred bonus to positive energy for 10 seconds. Each time you cast a positive energy spell, gain righteous fervor: +3 sacred bonus to light spellpower for 10 seconds. Can stack up to 10 times. Each stack add 10 seconds to remaining duration."
        }
    },
    "4d": {
        "abil_name": "Excoriate",
        "required_by": [
            "6d"
        ],
        "required": 12,
        "prereq": "4c",
        "selected": 0,
        "img": "excoriate",
        "multi": false,
        "passive": "passive",
        "ranks": 1,
        "AP": 2,
        "abil": {
            "1": "When your Righteous Fervor stack is >=5, your light spells and smites have a 3% chance to stun opponents for 6 seconds"
        }
    },
    "4e": {
        "abil_name": "Wisdom or Charisma",
        "required_by": null,
        "required": 12,
        "prereq": null,
        "selected": 0,
        "img": "wischa",
        "multi": "multi",
        "passive": "passive",
        "ranks": 1,
        "AP": 2,
        "abil": {
            "1": {
                "1": "+1 Wisdom",
                "2": "+1 Charisma"
            }
        }
    },
    "5a": {
        "abil_name": "Be At Peace",
        "required_by": null,
        "required": 16,
        "prereq": null,
        "selected": 0,
        "img": "beatpeace",
        "multi": false,
        "passive": false,
        "ranks": 1,
        "AP": 2,
        "abil": {
            "1": " (Cooldown: 2 mins, 10sp) Target enemy is dazed for 1 minute, no save. Damage breaks this effect. Endless Ardor and Righteous Fervor stacks are reset to zero."
        }
    },
    "5b": null,
    "5c": null,
    "5d": {
        "abil_name": "Leap of Faith",
        "required_by": null,
        "required": 16,
        "prereq": null,
        "selected": 0,
        "img": "leapoffaith",
        "multi": false,
        "passive": false,
        "ranks": 1,
        "AP": 1,
        "abil": {
            "1": "(Cooldown: 3secs, 10 sp) Leap through air (like leap of faith). Costs 10 sp, recharges at a rate of 15 seconds in private areas and 3 seconds in public areas. If you already possess this ability, it now recharges at a rate of 1 every 12 seconds in private areas."
        }
    },
    "5e": {
        "abil_name": "Wisdom or Charisma",
        "required_by": null,
        "required": 16,
        "prereq": null,
        "selected": 0,
        "img": "wischa",
        "multi": "multi",
        "passive": "passive",
        "ranks": 1,
        "AP": 2,
        "abil": {
            "1": {
                "1": "+1 Wisdom",
                "2": "+1 Charisma"
            }
        }
    },
    "6a": {
        "abil_name": "Sun Bolt",
        "required_by": null,
        "required": 20,
        "prereq": null,
        "selected": 0,
        "img": "sunbolt",
        "multi": false,
        "passive": false,
        "ranks": 1,
        "AP": 2,
        "abil": {
            "1": "Metamagic: Empower, Maximize, Quicken, Eschew Materials, Heighten.  Spell Resistance: No.  Activation Coty: 12 Spell Points.  Cooldown: 12 Spell Points.  A powerful bolt of light deals 5 to 8 light damage per caster level (up to a maximum of 75 to 120 damage at caster level 15) to targets in its path.  A successful Reflex save reduces the damage by half, vs. DC(10 + Character Level + Ability Score Modifier (Best of WIS/CHA)).  This Spell is a bolt and has double range.  D&D Dice: Deals 1d4+4 light damage per caster level (max 15d3+60).  Spell-like Ability: This ability beneits from your Metamagic Feats (such as Quicken) without paying the normal additional spell point cost."
        }
    },
    "6b": {
        "abil_name": "Divine Wrath",
        "required_by": null,
        "required": 20,
        "prereq": "4b",
        "selected": 0,
        "img": "divinewrath",
        "multi": false,
        "passive": false,
        "ranks": 1,
        "AP": 2,
        "abil": {
            "1": "(Cooldown: 20secs, 40sp) Call down divine wrath on foes, dealing 2d6 light damage per character level, will save for half (DC 10 + character level + half charisma mod). Allies caught within blast are healed for 1d6 HP per character level."
        }
    },
    "6c": {
        "abil_name": "Reborn In Light",
        "required_by": null,
        "required": 20,
        "prereq": "4c",
        "selected": 0,
        "img": "reborninlight",
        "multi": false,
        "passive": false,
        "ranks": 1,
        "AP": 2,
        "abil": {
            "1": "(Cooldown: 30mins) Counter increments with each Endless Ardor or Righteous Fervor Gain. When it reaches 25, ability becomes available. Epic Moment Transformation: You are healed to full health and activate Ascendance, Angelic Presence, and Astral Vibrance (even if they are currently on cooldown). For 2 minutes (or until you leave Angelic form), you are immune to light damage, gain 50% Incorporeality, and gain +100 Light and Healing Power.  This ability can be used while dead, raising you at full health and in addition to the above benefits, the cooldowns of Light and Positive Energy spells are reduced to 1/5th normal, all spells cost 50% spell points. All of your physical attacks gain On Hit: 100 Light damage and On Critical: Destroy evil undead or evil outsiders under 1000 hit points."
        }
    },
    "6d": null,
    "6e": {
        "abil_name": "Wisdom or Charisma",
        "required_by": null,
        "required": 20,
        "prereq": null,
        "selected": 0,
        "img": "wischa",
        "multi": "multi",
        "passive": "passive",
        "ranks": 1,
        "AP": 2,
        "abil": {
            "1": {
                "1": "+1 Wisdom",
                "2": "+1 Charisma"
            }
        }
    }
}
