{
    "dID": "divine_crusader",
    "name": "Divine Crusader",
    "points_remaining": 24,
    "points_spent": 0,
    "autogrants": [
        {
            "abil_name": "Just Cause",
            "img": "annointweapon-taken",
            "abil": "You gain Cleric, Favored Soul, and Paladin Caster Levels equal to your level in Divine Crusader..  +25 Spell Points.  +10 Hit Points.  Your Base Attack Bonus is equal to your total Character Level",
            "passive": "passive"
        },
        {
            "abil_name": "Aura of Purification",
            "img": "confrontanyfoe-taken",
            "abil": "(level 1) Cooldown: 3 Seconds.  Toggle:.  Every 3 seconds while active: Nearby enemies gain a stack of Purification.  Purification: -1 attack damage, -2 spell power, stacks up to 25 times..  Passive:.  +25 spell points.  +10 hit points",
            "passive": false
        },
        {
            "abil_name": "Extraordinary Virtue",
            "img": "annointweapon-taken",
            "abil": "(level 2) Passive: +10% Healing Amp, +10 Positive Spell Power, +25 Spell Points, +10 Hit Points",
            "passive": "passive"
        },
        {
            "abil_name": "No Remorse",
            "img": "annointweapon-taken",
            "abil": "(level 3) Whenever an enemy who was recently affected by your Aura of Purification is slain, nearby allies are healed for Positive Energy equal to the level of the slain enemy.  Passive:.  +25 Spell Points.  +10 hit points",
            "passive": "passive"
        },
        {
            "abil_name": "Sword of Justice",
            "img": "annointweapon-taken",
            "abil": "(level 4) +4 damage with all attacks, +25 Spell points, +10 Hit points",
            "passive": "passive"
        },
        {
            "abil_name": "Zeal of the Righteous",
            "img": "confrontanyfoe-taken",
            "abil": "(level 5) Cooldown: 4 minutes.  Activate: Gain 50 stacks of Righteous Zeal.  Righteous Zeal: +1 Spell Power, +1 Doublestrike, +1 Doubleshot, +1% damage with physical attacks.  Decays by 1 stack every 3 seconds, and is not lost when resting.",
            "passive": false
        }
    ],
    "1a": {
        "abil_name": "Bane of Undeath",
        "required_by": null,
        "required": 0,
        "prereq": null,
        "selected": 0,
        "img": "baneofundeath",
        "multi": false,
        "passive": "passive",
        "ranks": 1,
        "AP": 2,
        "abil": {
            "1": "You gain the turn undead feat. While in Vigor of Battle stance, weapons you equip gain undead bane (+2 enhancement bonus and +2d6 damage against undead) "
        }
    },
    "1b": {
        "abil_name": "Endless Turning",
        "required_by": null,
        "required": 0,
        "prereq": null,
        "selected": 0,
        "img": "endlessturning",
        "multi": false,
        "passive": "passive",
        "ranks": 3,
        "AP": 1,
        "abil": {
            "1": "+1 turn undead per rest. Turn undead regenerates every 2 minutes, or 10% faster if it already regenerates.  Requires one of: Bane of undead, turn undead: Cleric, turn undead: Paladin.",
            "2": "+1 turn undead per rest. Turn undead regenerates every 2 minutes, or 20% faster if it already regenerates.",
            "3": "+1 turn undead per rest. Turn undead regenerates every 2 minutes, or 30% faster if it already regenerates."
        }
    },
    "1c": {
        "abil_name": "Interrogation",
        "required_by": null,
        "required": 0,
        "prereq": null,
        "selected": 0,
        "img": "annointweapon",
        "multi": false,
        "passive": "passive",
        "ranks": 1,
        "AP": 1,
        "abil": {
            "1": "Passive:.  +5 Universal Spell Power.  +1% Spell Critical Chance.  Your offensive Spells cause enemies to gain a stack of Purification.  Purification: -1 attack damage, -2 spell power, stacks up to 25 times."
        }
    },
    "1d": {
        "abil_name": "Purge the Wicked",
        "required_by": null,
        "required": 0,
        "prereq": null,
        "selected": 0,
        "img": "annointweapon",
        "multi": false,
        "passive": "passive",
        "ranks": 1,
        "AP": 1,
        "abil": {
            "1": "Passive:.  +2 to confirm Critical Hits.  +2 to Critical Hit Damage.  Your critical hits with weapons cause enemies to gain a stack of Purification.  Purification: -1 attack damage, -2 spell power, stacks up to 25 times."
        }
    },
    "1e": {
        "abil_name": "Strength, Wisdom, or Charisma",
        "required_by": "3b",
        "required": 0,
        "prereq": null,
        "selected": 0,
        "img": "annointweapon",
        "multi": "multi",
        "passive": "passive",
        "ranks": 1,
        "AP": 2,
        "abil": {
            "1": {
                "1": "+1 Strength",
                "2": "+1 Wisdom",
                "3": "+1 Charisma"
            }
        }
    },
    "2a": {
        "abil_name": "Confront Any Foe",
        "required_by": null,
        "required": 4,
        "prereq": null,
        "selected": 0,
        "img": "confrontanyfoe",
        "multi": false,
        "passive": false,
        "ranks": 1,
        "AP": 2,
        "abil": {
            "1": "(Cooldown: 7secs) Melee attack: expand 1 turn undead: deal 10d10 extra light damage.  Requires one of: Bane of undead, turn undead: Cleric, turn undead: Paladin"
        }
    },
    "2b": {
        "abil_name": "Consecration",
        "required_by": "3b",
        "required": 4,
        "prereq": null,
        "selected": 0,
        "img": "confrontanyfoe",
        "multi": false,
        "passive": false,
        "ranks": 3,
        "AP": 1,
        "abil": {
            "1": "Cooldown: 30 seconds.  Cost: 50 Spell Points.  Duration: 15 seconds.  Activate: The ground you are standing on is consecrated.  Evil creatures standing on consecrated ground are burnt every three seconds, gaining a stack of Purification and taking 1d6 damage per character level.  Half of this damage is Fire, half is Good-aligned.  Both the Fire and Good damage from this ability benefit from your Fire Spell Power",
            "2": "Cooldown: 25 seconds.  Cost: 40 Spell Points.  Duration: 15 seconds.  Activate: The ground you are standing on is consecrated.  Evil creatures standing on consecrated ground are burnt every three seconds, gaining a stack of Purification and taking 1d6 damage per character level.  Half of this damage is Fire, half is Good-aligned.  Both the Fire and Good damage from this ability benefit from your Fire Spell Power",
            "3": "Cooldown: 20 seconds.  Cost: 30 Spell Points.  Duration: 15 seconds.  Activate: The ground you are standing on is consecrated.  Evil creatures standing on consecrated ground are burnt every three seconds, gaining a stack of Purification and taking 1d6 damage per character level.  Half of this damage is Fire, half is Good-aligned.  Both the Fire and Good damage from this ability benefit from your Fire Spell Power"
        }
    },
    "2c": {
        "abil_name": "Flames of Purity",
        "required_by": null,
        "required": 4,
        "prereq": null,
        "selected": 0,
        "img": "annointweapon",
        "multi": false,
        "passive": "passive",
        "ranks": 3,
        "AP": 1,
        "abil": {
            "1": "Passive: +10 Fire Spell Power",
            "2": "Passive: +20 Fire Spell Power",
            "3": "Passive: +30 Fire Spell Power"
        }
    },
    "2d": {
        "abil_name": "Smite the Wicked",
        "required_by": null,
        "required": 4,
        "prereq": null,
        "selected": 0,
        "img": "annointweapon",
        "multi": false,
        "passive": false,
        "ranks": 1,
        "AP": 2,
        "abil": {
            "1": "Cooldown: 15 seconds.  Melee Smite: gain twice your Charisma bonus to your attack roll and a damage bonus of 2(W) + 7 against evil opponents.  On Hit: 50 light damage against undead and evil outsiders.  On Vorpal: Destroy undead or evil outsiders under 1000 hit points."
        }
    },
    "2e": {
        "abil_name": "Strength, Wisdom, or Charisma",
        "required_by": null,
        "required": 4,
        "prereq": null,
        "selected": 0,
        "img": "annointweapon",
        "multi": "multi",
        "passive": "passive",
        "ranks": 1,
        "AP": 2,
        "abil": {
            "1": {
                "1": "+1 Strength",
                "2": "+1 Wisdom",
                "3": "+1 Charisma"
            }
        }
    },
    "3a": {
        "abil_name": "Stand and Be Judged",
        "required_by": null,
        "required": 4,
        "prereq": null,
        "selected": 0,
        "img": "annointweapon",
        "multi": false,
        "passive": "passive",
        "ranks": 1,
        "AP": 1,
        "abil": {
            "1": "Activation Cost: 25 Spell Points.  Cooldown: 30 seconds.  Activate: A targeted foe must make a Will saving throw or be stunned for 30 seconds.  (DC: 30+Wisdom Modifier)",
            "1": "Activation Cost: 20 Spell Points.  Cooldown: 25 seconds.  Activate: A targeted foe must make a Will saving throw or be stunned for 30 seconds.  (DC: 30+Wisdom Modifier)",
            "1": "Activation Cost: 15 Spell Points.  Cooldown: 20 seconds.  Activate: A targeted foe must make a Will saving throw or be stunned for 30 seconds.  (DC: 30+Wisdom Modifier)"
        }
    },
    "3b": {
        "abil_name": "Sacred Ground",
        "required_by": "4b",
        "required": 8,
        "prereq": "2b",
        "selected": 0,
        "img": "annointweapon",
        "multi": false,
        "passive": "passive",
        "ranks": 1,
        "AP": 1,
        "abil": {
            "1": "While standing on consecrated ground, you and your allies are healed every 3 seconds for 1 point of Positive Energy per character level.  This is affected by your Healing Spell Power."
        }
    },
    "3c": {
        "abil_name": "Empyrean Magic",
        "required_by": null,
        "required": 8,
        "prereq": null,
        "selected": 0,
        "img": "annointweapon",
        "multi": false,
        "passive": "passive",
        "ranks": 1,
        "AP": 1,
        "abil": {
            "1": "Whenever you cast a Fire, Light, or Healing spell, you gain a stack of Empyrean Fervor.  Empyrean Fervor: +2 Sacred Bonus to Universal Spell Power, +1% Sacred Bonus to Critical Change with all spells.  Duration: 10 seconds.  Stacks 10 times."
        }
    },
    "3d": {
        "abil_name": "Blessed Blades",
        "required_by": null,
        "required": 8,
        "prereq": null,
        "selected": 0,
        "img": "annointweapon",
        "multi": false,
        "passive": "passive",
        "ranks": 1,
        "AP": 2,
        "abil": {
            "1": "Any weapon you weild and your unarmed attacks are treated as having your alignment for damage reduction bypass purposes in addition to any other traits.  (This has no effect if you are True Neutral)"
        }
    },
    "3e": {
        "abil_name": "Strength, Wisdom, or Charisma",
        "required_by": null,
        "required": 8,
        "prereq": null,
        "selected": 0,
        "img": "annointweapon",
        "multi": "multi",
        "passive": "passive",
        "ranks": 1,
        "AP": 2,
        "abil": {
            "1": {
                "1": "+1 Strength",
                "2": "+1 Wisdom",
                "3": "+1 Charisma"
            }
        }
    },
    "4a": {
        "abil_name": "No Regret",
        "required_by": null,
        "required": 12,
        "prereq": null,
        "selected": 0,
        "img": "annointweapon",
        "multi": false,
        "passive": "passive",
        "ranks": 1,
        "AP": 2,
        "abil": {
            "1": "Whenever an enemy who was recently affected by your Aura of Purification is slain, other nearby enemies gain 1 to 4 stacks of Purification."
        }
    },
    "4b": {
        "abil_name": "Crusade",
        "required_by": null,
        "required": 12,
        "prereq": "3b",
        "selected": 0,
        "img": "confrontanyfoe",
        "multi": false,
        "passive": false,
        "ranks": 1,
        "AP": 2,
        "abil": {
            "1": "While standing on consecrated ground, you and your allies gain a +10% Enhancement Bonus to the damage of your attacks"
        }
    },
    "4c": null,
    "4d": null,
    "4e": {
        "abil_name": "Strength, Wisdom, or Charisma",
        "required_by": null,
        "required": 12,
        "prereq": null,
        "selected": 0,
        "img": "annointweapon",
        "multi": "multi",
        "passive": "passive",
        "ranks": 1,
        "AP": 2,
        "abil": {
            "1": {
                "1": "+1 Strength",
                "2": "+1 Wisdom",
                "3": "+1 Charisma"
            }
        }
    },
    "5a": {
        "abil_name": "Castigation",
        "required_by": null,
        "required": 16,
        "prereq": null,
        "selected": 0,
        "img": "annointweapon",
        "multi": false,
        "passive": "passive",
        "ranks": 1,
        "AP": 2,
        "abil": {
            "1": "Your Aura of Purification also harms nearby enemies, deaing Bane damage every three seconds.  Non-bosses take damage equal to 1% of their current health for each stack of Purification they have.  Bosses instead take 1d6 Bane damage per stack of Purification..  Passive:.  +25 Spell Points.  +10 Hit points"
        }
    },
    "5b": {
        "abil_name": "Heavenly Presence",
        "required_by": null,
        "required": 16,
        "prereq": null,
        "selected": 0,
        "img": "annointweapon",
        "multi": false,
        "passive": "passive",
        "ranks": 1,
        "AP": 2,
        "abil": {
            "1": "You gain some of the traits of a Celestial.  Passive: +10 PRR, 10% Acid Absorption, 10% Cold Absorption, 10% Electricty Absorption, Immunity to Petrification"
        }
    },
    "5c": null,
    "5d": {
        "abil_name": "Celestial Champion",
        "required_by": null,
        "required": 16,
        "prereq": null,
        "selected": 0,
        "img": "annointweapon",
        "multi": false,
        "passive": "passive",
        "ranks": 1,
        "AP": 2,
        "abil": {
            "1": "+1 Critical Threat Range with all attacks..  When you crtically hit with an attack, you gain a stack of Celestial Ferver..  Celestial Fervor: +1 Sacred Bonus to Doublestrike chance.  Duration: 6 seconds.  Stacks 10 times."
        }
    },
    "5e": {
        "abil_name": "Strength, Wisdom, or Charisma",
        "required_by": null,
        "required": 16,
        "prereq": null,
        "selected": 0,
        "img": "annointweapon",
        "multi": "multi",
        "passive": "passive",
        "ranks": 1,
        "AP": 2,
        "abil": {
            "1": {
                "1": "+1 Strength",
                "2": "+1 Wisdom",
                "3": "+1 Charisma"
            }
        }
    },
    "6a": null,
    "6b": {
        "abil_name": "Celestial Bombardment",
        "required_by": null,
        "required": 16,
        "prereq": null,
        "selected": 0,
        "img": "confrontanyfoe",
        "multi": false,
        "passive": false,
        "ranks": 3,
        "AP": 1,
        "abil": {
            "1": "Active Ability: Celestial Bombardment.  Spell Resistance: No.  Activation Cost: 300 Spell Points.  Cooldown: 3 minute.  Evocation Spell-like Ability:  Celestial Bombardment: Divine wrath falls from the heaves to smite your foes.  This spell calls down three blazing stars at your target, dealing a total of 3d6 Fire damage per character level, split into three hits.  This damage is affected by your Fire Spell Power, and may critically hit.  In addition, enemies must succeed at three consecutive Reflex saving throws vs. DC 20+Wisdom Modifier+Evocation Spell DC Modifiers or be knocked prone.  Additional points in this enhancement will lower the cooldown and the spell point cost.  Modifiers to your Evocation Spell DCs affect this.",
            "2": "Active Ability: Celestial Bombardment.  Spell Resistance: No.  Activation Cost: 200 Spell Points.  Cooldown: 2 minute.  Evocation Spell-like Ability:  Celestial Bombardment: Divine wrath falls from the heaves to smite your foes.  This spell calls down three blazing stars at your target, dealing a total of 3d6 Fire damage per character level, split into three hits.  This damage is affected by your Fire Spell Power, and may critically hit.  In addition, enemies must succeed at three consecutive Reflex saving throws vs. DC 20+Wisdom Modifier+Evocation Spell DC Modifiers or be knocked prone.  Additional points in this enhancement will lower the cooldown and the spell point cost.  Modifiers to your Evocation Spell DCs affect this.",
            "3": "Active Ability: Celestial Bombardment.  Spell Resistance: No.  Activation Cost: 100 Spell Points.  Cooldown: 1 minute.  Evocation Spell-like Ability:  Celestial Bombardment: Divine wrath falls from the heaves to smite your foes.  This spell calls down three blazing stars at your target, dealing a total of 3d6 Fire damage per character level, split into three hits.  This damage is affected by your Fire Spell Power, and may critically hit.  In addition, enemies must succeed at three consecutive Reflex saving throws vs. DC 20+Wisdom Modifier+Evocation Spell DC Modifiers or be knocked prone.  Modifiers to your Evocation Spell DCs affect this."
        }
    },
    "6c": {
        "abil_name": "Strike Down",
        "required_by": null,
        "required": 20,
        "prereq": null,
        "selected": 0,
        "img": "confrontanyfoe",
        "multi": false,
        "passive": false,
        "ranks": 1,
        "AP": 2,
        "abil": {
            "1": "Activation Cost: 5 Spell Points.  Cooldown: 12 seconds.  Melee Smite Cleave: Gain a damage bonus of +3(W).  On Hit: Each enemy hit takes 500 Fire damage.  On Hit After Damage: Destroy undead or evil outsiders under 1000 hit points."
        }
    },
    "6d": null,
    "6e": {
        "abil_name": "Strength, Wisdom, or Charisma",
        "required_by": null,
        "required": 20,
        "prereq": null,
        "selected": 0,
        "img": "annointweapon",
        "multi": "multi",
        "passive": "passive",
        "ranks": 1,
        "AP": 2,
        "abil": {
            "1": {
                "1": "+1 Strength",
                "2": "+1 Wisdom",
                "3": "+1 Charisma"
            }
        }
    }
}
