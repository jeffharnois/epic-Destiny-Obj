{
    "dID": "draconic_incarnation",
    "name": "Draconic Incarnation",
    "points_remaining": 24,
    "points_spent": 0,
    "autogrants": [
        {
            "abil_name": "Draconic Bloodline I",
            "img": "bloodline",
            "abil": "+50 SP +1 caster level to all arcane spell",
            "passive": "passive"
        },
        {
            "abil_name": "Draconic Bloodline II",
            "img": "bloodline",
            "abil": "(level 1) +50 SP +1 caster level to all arcane spell",
            "passive": "passive"
        },
        {
            "abil_name": "Draconic Bloodline III",
            "img": "bloodline",
            "abil": "(level 2) +50 SP +1 caster level to all arcane spell",
            "passive": "passive"
        },
        {
            "abil_name": "Draconic Bloodline IV",
            "img": "bloodline",
            "abil": "(level 3) +50 SP +1 caster level to all arcane spell",
            "passive": "passive"
        },
        {
            "abil_name": "Draconic Bloodline V",
            "img": "bloodline",
            "abil": "(level 4) +50 SP +1 caster level to all arcane spell",
            "passive": "passive"
        },
        {
            "abil_name": "Draconic Fury",
            "img": "fury",
            "abil": "(level 5) (Cooldown: 4 mins) +20% Spell power for 20 seconds",
            "passive": false
        }
    ],
    "1a": {
        "abil_name": "Energy Sheath",
        "required_by": [
            "2a"
        ],
        "required": 0,
        "prereq": null,
        "selected": 0,
        "img": "energysheath_fire",
        "multi": false,
        "passive": false,
        "ranks": 3,
        "AP": 1,
        "abil": {
            "1": "(Cooldown: 1min) For 2 minutes gain 50% element absorption. Enemies that strike you take 1d3+10 [fire/cold/electric/acid] damage and have a small chance to take 4d20+100 [fire/cold/electric/acid] damage. Remove fire shield(hot/cold).",
            "2": "(Cooldown: 1min) For 2 minutes gain 50% element absorption. Enemies that strike you take 2d3+15 [fire/cold/electric/acid] damage and have a small chance to take 4d20+100 [fire/cold/electric/acid] damage. Remove fire shield(hot/cold).",
            "3": "(Cooldown: 1min) For 2 minutes gain 50% element absorption. Enemies that strike you take 3d3+20 [fire/cold/electric/acid] damage and have a small chance to take 4d20+100 [fire/cold/electric/acid] damage. Remove fire shield(hot/cold)."
        }
    },
    "1b": {
        "abil_name": "Draconic Presence",
        "required_by": [
            "3b"
        ],
        "required": 0,
        "prereq": null,
        "selected": 0,
        "img": "draconicpresence",
        "multi": false,
        "passive": "passive",
        "ranks": 3,
        "AP": 1,
        "abil": {
            "1": "+2 intimidate, +2 to saving throws of fear based effects, and +1 DC to fear-based spells.",
            "2": "+4 intimidate, +4 to saving throws of fear based effects, and +2 DC to fear-based spells.",
            "3": "+6 intimidate, +6 to saving throws of fear based effects, and +3 DC to fear-based spells. You are immune to fear. "
        }
    },
    "1c": {
        "abil_name": "Dragonhide",
        "required_by": [
            "2c"
        ],
        "required": 0,
        "prereq": null,
        "selected": 0,
        "img": "dragonhide",
        "multi": false,
        "passive": "passive",
        "ranks": 3,
        "AP": 1,
        "abil": {
            "1": "+1 natural armor and +2 fortitude saves.",
            "2": "+2 natural armor and +4 fortitude saves.",
            "3": "+3 natural armor and +6 fortitude saves. You no longer automatically fail fort save on a 1. "
        }
    },
    "1d": {
        "abil_name": "Draconic Perception",
        "required_by": null,
        "required": 0,
        "prereq": null,
        "selected": 0,
        "img": "perception",
        "multi": false,
        "passive": "passive",
        "ranks": 3,
        "AP": 1,
        "abil": {
            "1": "+2 spot and +2 reflex",
            "2": "+4 spot and +4 reflex",
            "3": "+6 spot and +6 reflex"
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
        "abil_name": "Go Out With A Bang",
        "required_by": [
            "4a"
        ],
        "required": 4,
        "prereq": "1a",
        "selected": 0,
        "img": "gooutwithabang_fire",
        "multi": false,
        "passive": false,
        "ranks": 3,
        "AP": 1,
        "abil": {
            "1": "(Cooldown: 4mins) Can only be used when HP <= 50%. Nearby enemies take 2d6 fire damage per caster level. Then trigger a diplomacy effect and become invis. Invisibility doesn&rsquo;t break if attacking or casting spells.",
            "2": "",
            "3": ""
        }
    },
    "2b": null,
    "2c": {
        "abil_name": "Barrier of Scales",
        "required_by": null,
        "required": 4,
        "prereq": "1c",
        "selected": 0,
        "img": "barrierofscales",
        "multi": false,
        "passive": false,
        "ranks": 3,
        "AP": 1,
        "abil": {
            "1": "(Cooldown: 2mins) For the next 30 seconds, 60 points of ablative protection versus physical damage. Stacks with Stoneskin and ablative armor.",
            "2": "(Cooldown: 2mins) For the next 30 seconds, 80 points of ablative protection versus physical damage. Stacks with Stoneskin and ablative armor.",
            "3": "(Cooldown: 2mins) For the next 30 seconds, 100 points of ablative protection versus physical damage. Stacks with Stoneskin and ablative armor."
        }
    },
    "2d": {
        "abil_name": "Precise Casting",
        "required_by": null,
        "required": 4,
        "prereq": null,
        "selected": 0,
        "img": "precise_casting",
        "multi": false,
        "passive": "passive",
        "ranks": 2,
        "AP": 1,
        "abil": {
            "1": "+1 DC to evocation spells.",
            "2": "+2 DC to evocation spells."
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
    "3a": null,
    "3b": {
        "abil_name": "Daunting Roar",
        "required_by": null,
        "required": 8,
        "prereq": "1b",
        "selected": 0,
        "img": "dauntingroar",
        "multi": false,
        "passive": false,
        "ranks": 1,
        "AP": 1,
        "abil": {
            "1": "(Cooldown: 2mins) Enemies within the AoE are subject to despair effect and will be paralyzed. Will save negates the effect (if save successful still shaken)."
        }
    },
    "3c": {
        "abil_name": "Dragon Heritage",
        "required_by": [
            "4c"
        ],
        "required": 8,
        "prereq": null,
        "selected": 0,
        "img": "heritage_red",
        "multi": false,
        "passive": "passive",
        "ranks": "3",
        "AP": 1,
        "abil": {
            "1": "[Red/White/Blue/Black] Dragon. +10% spell power to [fire/cold/electric/acid] based spells.",
            "2": "+20% spell power to [fire/cold/electric/acid] based spells.",
            "3": "+30% spell power to [fire/cold/electric/acid] based spells."
        }
    },
    "3d": {
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
            "1": "+1 to spell penetration ",
            "2": "+2 to spell penetration ",
            "3": "+3 to spell penetration "
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
        "abil_name": "Energy Burst",
        "required_by": [
            "6a"
        ],
        "required": 12,
        "prereq": "2a",
        "selected": 0,
        "img": "energyburst_fire",
        "multi": false,
        "passive": false,
        "ranks": 3,
        "AP": 1,
        "abil": {
            "1": "(ooldown: 30 secs) Waves of [fire/cold/electric/acid] emanate from your body dealing 3d6 [fire/cold/electric/acid] damage per caster level ",
            "2": "",
            "3": ""
        }
    },
    "4b": {
        "abil_name": "Secondary Spell Speciality",
        "required_by": null,
        "required": 12,
        "prereq": "4c",
        "selected": 0,
        "img": "spellpower_red",
        "multi": false,
        "passive": "passive",
        "ranks": 2,
        "AP": 1,
        "abil": {
            "1": "Choose an energy type not opposed to your dragon heritage. +10% spell power and +1 caster level for spells of that element.",
            "2": "Choose an energy type not opposed to your dragon heritage. +20% spell power and +2 caster level for spells of that element."
        }
    },
    "4c": {
        "abil_name": "Draconic Spell Knowledge",
        "required_by": [
            "4b",
            "4d",
            "5c"
        ],
        "required": 12,
        "prereq": "3c",
        "selected": 0,
        "img": "spellpower_red",
        "multi": false,
        "passive": "passive",
        "ranks": 3,
        "AP": 1,
        "abil": {
            "1": "+1 caster level and maximum caster level on spells of your dragon element.",
            "2": "+2 caster level and maximum caster level on spells of your dragon element",
            "3": "+3 caster level and maximum caster level on spells of your dragon element"
        }
    },
    "4d": {
        "abil_name": "Draconic Spell Augmentation",
        "required_by": null,
        "required": 12,
        "prereq": "4c",
        "selected": 0,
        "img": "spellaugment_fire",
        "multi": false,
        "passive": "passive",
        "ranks": 3,
        "AP": 1,
        "abil": {
            "1": "Adds special effect to spells of your heritage: [fire/cold/electric/acid] spells have a small chance to deal a blast of 3d6 extra light damage",
            "2": "",
            "3": ""
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
        "abil_name": "Flyby Attack",
        "required_by": null,
        "required": 16,
        "prereq": "5c",
        "selected": 0,
        "img": "flyby_fire",
        "multi": false,
        "passive": false,
        "ranks": 1,
        "AP": 1,
        "abil": {
            "1": "(Cooldown: 1min) Executes an abundant step which passes through enemies and deals 2d6 [fire/cold/electric/acid] damage per caster level to any enemy struck during the attack. Each enemy is also knockdown unless it succeeds on a fortitude save."
        }
    },
    "5c": {
        "abil_name": "Dragon Breath",
        "required_by": [
            "5b",
            "5d"
        ],
        "required": 16,
        "prereq": "4c",
        "selected": 0,
        "img": "breath_red",
        "multi": false,
        "passive": false,
        "ranks": 1,
        "AP": 1,
        "abil": {
            "1": "Cooldown: 1min) Cone that deals 60d6 [fire/cold/electric/acid] damage (reflex save for half). Can use 5 times per rest."
        }
    },
    "5d": {
        "abil_name": "Draconic Breath Augmentation",
        "required_by": null,
        "required": 16,
        "prereq": "5c",
        "selected": 0,
        "img": "breathaugment_fire",
        "multi": false,
        "passive": "passive",
        "ranks": 1,
        "AP": 1,
        "abil": {
            "1": "Adds special effect to your breath."
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
        "abil_name": "Energy Vortex",
        "required_by": null,
        "required": 20,
        "prereq": "4a",
        "selected": 0,
        "img": "energyvortex_fire",
        "multi": false,
        "passive": false,
        "ranks": 1,
        "AP": 2,
        "abil": {
            "1": "(Cooldown: 2mins) Intense elemental energy swirl around you dealing damage to enemy in the AoE. Follows you and deal 1d6 {{multi}} damage per caster level every 2 seconds for 16 seconds "
        }
    },
    "6b": {
        "abil_name": "Draconic Hunger",
        "required_by": null,
        "required": 20,
        "prereq": null,
        "selected": 0,
        "img": "hunger",
        "multi": false,
        "passive": false,
        "ranks": 1,
        "AP": 2,
        "abil": {
            "1": "When you kill an enemy there is a 10% chance you&rsquo;ll gain 15 temporary HP and 10% chance you&rsquo;ll gain 15 temporary SP. If draconic fury is active, this chance is increased to 50%."
        }
    },
    "6c": {
        "abil_name": "Fearsome Invulnerability",
        "required_by": null,
        "required": 20,
        "prereq": null,
        "selected": 0,
        "img": "fearsomeinvuln",
        "multi": false,
        "passive": false,
        "ranks": 1,
        "AP": 2,
        "abil": {
            "1": "(Cooldown: 1sec) Each time damage an enemy with an evocation or conjuration spell while under the effect of draconic fury, gain 1 charge. When have 20 of these charges, can expend them to activate fearsome invulnerability. Triggers an intimidate effect when used, lasts for 30 seconds, and for its duration you have DR 100/-, resistance 200 to {[fire/cold/electric/acid] and HP regens at a very swift rate."
        }
    },
    "6d": null,
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
