{
    "dID": "shadowdancer",
    "name": "Shadowdancer",
    "points_remaining": 24,
    "points_spent": 0,
    "autogrants": [
        {
            "abil_name": "Shadow Training I",
            "img": "shadowtraining_i",
            "abil": "+1 sneak die for each level of Shadowdancer",
            "passive": "passive"
        },
        {
            "abil_name": "Shadow Training II",
            "img": "fullmovesneak",
            "abil": "(level 1) (Cooldown: 5mins) activate this ability to gain temporary full movement and use of jump when stealthed for 30 seconds.",
            "passive": false
        },
        {
            "abil_name": "Shadow Training III",
            "img": "",
            "abil": "(level 2) (Cooldown: 2secs) Toggle: generate 20% less melee and ranged threat.",
            "passive": false
        },
        {
            "abil_name": "Shadow Training IV",
            "img": "shadowwalk-taken",
            "abil": "(level 3) (Cooldown: 1min) activate this ability to use shadow walk up to 5 times per rest. Also, while using weapons that qualify for weapon finesse, you gain 3% profane bonus to your chance to doublestrike. This doublestrike bonus applies to attacks made by a dagger, handaxe, kama, kukri, light hammer, light mace, light pick, rapier, shortsword, sickle, or when unarmed or in druid animal form.",
            "passive": false
        },
        {
            "abil_name": "Shadow Training V",
            "img": "dimensiondoor-taken",
            "abil": "(level 4) (Cooldown: 1min) activate this ability to use Dimension Door 5 times per rest. The cooldown for Shadow Training II ability is reduced to 3 minutes.",
            "passive": false
        },
        {
            "abil_name": "Dark Elusion",
            "img": "darkelusion-taken",
            "abil": "(level 5) You now have evasion. In addition, when you roll a natural 20 on a melee or ranged attack, you envelop the target in shadow, granting it 5% vulnerability to physical damage and removing its immunity to sneak attack for a short duration, if applicable.",
            "passive": "passive"
        }
    ],
    "1a": {
        "abil_name": "Stealthy",
        "required_by": null,
        "required": 0,
        "prereq": null,
        "selected": 0,
        "img": "stealthy",
        "multi": false,
        "passive": "passive",
        "ranks": 3,
        "AP": 1,
        "abil": {
            "1": "+2 Hide and move silently. +2 Assassinate DC.",
            "2": "+4 Hide and move silently. +4 Assassinate DC.",
            "3": "+6 Hide and move silently. +6 Assassinate DC.  You gain Hide in Plain Sight."
        }
    },
    "1b": {
        "abil_name": "Shadow Lance",
        "required_by": null,
        "required": 0,
        "prereq": null,
        "selected": 0,
        "img": "shadowlance",
        "multi": false,
        "passive": false,
        "ranks": 3,
        "AP": 1,
        "abil": {
            "1": "(Cooldown: 30secs) Throws 3 spears, each dealing 6d3+18 unholy damage and has a chance to blind target (Fort DC 14 + Half character level + Intelligence modifier) if you have Dark Shrouding charges.",
            "2": "(Cooldown: 30secs) Throws 3 spears, each dealing 8d3+24 unholy damage and has a chance to blind target (Fort DC 16 + Half character level + Intelligence modifier) if you have Dark Shrouding charges.",
            "3": "(Cooldown: 30secs) Throws 3 spears, each dealing 10d3+3 unholy damage and has a chance to blind target (Fort DC 18 + Half character level + Intelligence modifier) if you have Dark Shrouding charges."
        }
    },
    "1c": {
        "abil_name": "Acrobatic",
        "required_by": null,
        "required": 0,
        "prereq": null,
        "selected": 0,
        "img": "acrobatic",
        "multi": false,
        "passive": "passive",
        "ranks": 3,
        "AP": 1,
        "abil": {
            "1": "+2 balance, jump and tumble and a +3 bonus to reflex while tumbling ",
            "2": "+4 balance, jump and tumble and a +6 bonus to reflex while tumbling ",
            "3": "+6 balance, jump and tumble and a +9 bonus to reflex while tumbling "
        }
    },
    "1d": {
        "abil_name": "Technician",
        "required_by": [
            "2d"
        ],
        "required": 0,
        "prereq": null,
        "selected": 0,
        "img": "technician",
        "multi": false,
        "passive": "passive",
        "ranks": 3,
        "AP": 1,
        "abil": {
            "1": "+2 search, spot, disable device, open lock and flanking bonus to attack.",
            "2": "+4 search, spot, disable device, open lock and flanking bonus to attack.",
            "3": "+6 search, spot, disable device, open lock and flanking bonus to attack."
        }
    },
    "1e": {
        "abil_name": "Dexterity or Intelligence",
        "required_by": null,
        "required": 0,
        "prereq": null,
        "selected": 0,
        "img": "dexint",
        "multi": "multi",
        "passive": "passive",
        "ranks": 1,
        "AP": 2,
        "abil": {
            "1": {
                "1": "+1 Dexterity",
                "2": "+1 Intelligence"
            }
        }
    },
    "2a": {
        "abil_name": "Escape",
        "required_by": null,
        "required": 4,
        "prereq": null,
        "selected": 0,
        "img": "escapenotice",
        "multi": false,
        "passive": false,
        "ranks": 1,
        "AP": 2,
        "abil": {
            "1": "(Cooldown: 1min) Triggers a Diplomacy effect that uses the hide skill instead of the diplomacy skill."
        }
    },
    "2b": null,
    "2c": {
        "abil_name": "Lithe",
        "required_by": null,
        "required": 4,
        "prereq": null,
        "selected": 0,
        "img": "lithe",
        "multi": false,
        "passive": "passive",
        "ranks": 3,
        "AP": 1,
        "abil": {
            "1": "+2 reflex, AC and light armor Max Dex Bonus ",
            "2": "+4 reflex, AC and light armor Max Dex Bonus ",
            "3": "+6 reflex, AC and light armor Max Dex Bonus "
        }
    },
    "2d": {
        "abil_name": "Skill Mastery",
        "required_by": null,
        "required": 4,
        "prereq": "1d",
        "selected": 0,
        "img": "skillmastery",
        "multi": false,
        "passive": "passive",
        "ranks": 1,
        "AP": 1,
        "abil": {
            "1": "+1 stacking to all skills. "
        }
    },
    "2e": {
        "abil_name": "Dexterity or Intelligence",
        "required_by": null,
        "required": 4,
        "prereq": null,
        "selected": 0,
        "img": "dexint",
        "multi": "multi",
        "passive": "passive",
        "ranks": 1,
        "AP": 2,
        "abil": {
            "1": {
                "1": "+1 Dexterity",
                "2": "+1 Intelligence"
            }
        }
    },
    "3a": {
        "abil_name": "Cloak of Shadows",
        "required_by": null,
        "required": 8,
        "prereq": "3b",
        "selected": 0,
        "img": "cloakofshadows",
        "multi": false,
        "passive": false,
        "ranks": 1,
        "AP": 2,
        "abil": {
            "1": "(Cooldown: 2mins) Spend a Shadow Charge to cloak in darkness, granting immunity to light and negative damage for 5 minutes, or until 120 damage have been absorbed."
        }
    },
    "3b": {
        "abil_name": "Shrouding Strike/Shot",
        "required_by": [
            "3a",
            "4b"
        ],
        "required": 8,
        "prereq": null,
        "selected": 0,
        "img": "darkshrouding",
        "multi": false,
        "passive": false,
        "ranks": 3,
        "AP": 1,
        "abil": {
            "1": "(Cooldown: 15secs) Melee or ranged attack: Perform an attack with +1[W] damage. On hit: Mark target. It if dies within the next 6 seconds, gain a Shadow Charge. Max +2 stacks of Shadow Charge (at this tier).",
            "2": "(Cooldown: 15secs) Melee or ranged attack: Perform an attack with +2[W] damage. On hit: Mark target. It if dies within the next 8 seconds, gain a Shadow Charge. Max +4 stacks of Shadow Charge (at this tier).",
            "3": "(Cooldown: 15secs) Melee or ranged attack: Perform an attack with +3[W] damage. On hit: Mark target. It if dies within the next 10 seconds, gain a Shadow Charge. Max +6 stacks of Shadow Charge (at this tier)."
        }
    },
    "3c": {
        "abil_name": "Meld Into Darkness",
        "required_by": null,
        "required": 8,
        "prereq": null,
        "selected": 0,
        "img": "meldintoshadow",
        "multi": false,
        "passive": false,
        "ranks": 3,
        "AP": 1,
        "abil": {
            "1": "(Cooldown: 2min) +100% Enhancement bonus to dodge for 9 seconds.",
            "2": "(Cooldown: 2min) +100% Enhancement bonus to dodge for 12 seconds.",
            "3": "(Cooldown: 2min) +100% Enhancement bonus to dodge for 15 seconds."
        }
    },
    "3d": {
        "abil_name": "Grim Precision",
        "required_by": [
            "4d"
        ],
        "required": 8,
        "prereq": null,
        "selected": 0,
        "img": "grimprecision",
        "multi": false,
        "passive": "passive",
        "ranks": 3,
        "AP": 1,
        "abil": {
            "1": "Bypass 5% enemy fortification and 1% enemy dodge ",
            "2": "Bypass 10% enemy fortification and 2% enemy dodge ",
            "3": "Bypass 15% enemy fortification and 3% enemy dodge "
        }
    },
    "3e": {
        "abil_name": "Dexterity or Intelligence",
        "required_by": null,
        "required": 8,
        "prereq": null,
        "selected": 0,
        "img": "dexint",
        "multi": "multi",
        "passive": "passive",
        "ranks": 1,
        "AP": 2,
        "abil": {
            "1": {
                "1": "+1 Dexterity",
                "2": "+1 Intelligence"
            }
        }
    },
    "4a": null,
    "4b": {
        "abil_name": "Improved Invisibility",
        "required_by": [
            "5b"
        ],
        "required": 12,
        "prereq": "3b",
        "selected": 0,
        "img": "improvedinvis",
        "multi": false,
        "passive": false,
        "ranks": 3,
        "AP": 1,
        "abil": {
            "1": "(Cooldown: 4min) Turn invisible for 10 seconds. Attacking does not break this effect. After it wears off, you retain partial concealment for a time (grants displacement for 30secs).",
            "2": "(Cooldown: 4min) Turn invisible for 20 seconds. Attacking does not break this effect. After it wears off, you retain partial concealment for a time (grants displacement for 1min).",
            "3": "(Cooldown: 4min) Turn invisible for 30 seconds. Attacking does not break this effect. After it wears off, you retain partial concealment for a time (grants displacement for 1min30)."
        }
    },
    "4c": null,
    "4d": {
        "abil_name": "Pierce the Gloom",
        "required_by": null,
        "required": 12,
        "prereq": "3d",
        "selected": 0,
        "img": "piercethegloom",
        "multi": false,
        "passive": false,
        "ranks": 1,
        "AP": 2,
        "abil": {
            "1": "(Cooldown: 2min) Gain +100% to your attack bonus for 30 seconds."
        }
    },
    "4e": {
        "abil_name": "Dexterity or Intelligence",
        "required_by": null,
        "required": 12,
        "prereq": null,
        "selected": 0,
        "img": "dexint",
        "multi": "multi",
        "passive": "passive",
        "ranks": 1,
        "AP": 2,
        "abil": {
            "1": {
                "1": "+1 Dexterity",
                "2": "+1 Intelligence"
            }
        }
    },
    "5a": {
        "abil_name": "Shadow Manipulation",
        "required_by": [
            "6a"
        ],
        "required": 16,
        "prereq": "3a",
        "selected": 0,
        "img": "shadowmanipulation",
        "multi": false,
        "passive": false,
        "ranks": 1,
        "AP": 2,
        "abil": {
            "1": "(Cooldown: 2min) Spend a Shadow Charge to dominate the target for 1 minute (DC 14 + character level + int modifier), after which it is subject to instant death if it fails a fort save (DC 14 + character level + Int modifier)."
        }
    },
    "5b": {
        "abil_name": "Untouchable",
        "required_by": [
            "6b"
        ],
        "required": 16,
        "prereq": "4b",
        "selected": 0,
        "img": "untouchable",
        "multi": false,
        "passive": "passive",
        "ranks": 1,
        "AP": 1,
        "abil": {
            "1": "Gain 1% extra dodge for each Shadow Charge you hold. "
        }
    },
    "5c": {
        "abil_name": "Executioner&rsquo;s Strike/Shot",
        "required_by": null,
        "required": 16,
        "prereq": null,
        "selected": 0,
        "img": "executionersstrike",
        "multi": false,
        "passive": false,
        "ranks": 3,
        "AP": 1,
        "abil": {
            "1": "(Cooldown: 30secs) Melee or ranged attack: Perform an attack with +1[W] damage, +1 critical threat range and +1 critical damage multiplier. On hit: if you have Shadow Charges, this attack has a chance to kill a living target instantly (fort save DC 14 + character level + dex modifier). Even on successful save target takes an additional 50 damage from this attack. The chance to occur is higher the more Shadow Charges you have.",
            "2": "(Cooldown: 30secs) Melee or ranged attack: Perform an attack with +2[W] damage, +1 critical threat range and +1 critical damage multiplier. On hit: if you have Shadow Charges, this attack has a chance to kill a living target instantly (fort save DC 14 + character level + dex modifier). Even on successful save target takes an additional 75 damage from this attack. The chance to occur is higher the more Shadow Charges you have.",
            "3": "(Cooldown: 30secs) Melee or ranged attack: Perform an attack with +3[W] damage, +1 critical threat range and +1 critical damage multiplier. On hit: if you have Shadow Charges, this attack has a chance to kill a living target instantly (fort save DC 14 + character level + dex modifier). Even on successful save target takes an additional 100 damage from this attack. The chance to occur is higher the more Shadow Charges you have."
        }
    },
    "5d": {
        "abil_name": "Sealed Soul",
        "required_by": null,
        "required": 16,
        "prereq": null,
        "selected": 0,
        "img": "sealedsoul",
        "multi": false,
        "passive": "passive",
        "ranks": 1,
        "AP": 2,
        "abil": {
            "1": "Grant you immunity to energy drain "
        }
    },
    "5e": {
        "abil_name": "Dexterity or Intelligence",
        "required_by": null,
        "required": 16,
        "prereq": null,
        "selected": 0,
        "img": "dexint",
        "multi": "multi",
        "passive": "passive",
        "ranks": 1,
        "AP": 2,
        "abil": {
            "1": {
                "1": "+1 Dexterity",
                "2": "+1 Intelligence"
            }
        }
    },
    "6a": {
        "abil_name": "Consume",
        "required_by": null,
        "required": 20,
        "prereq": "5a",
        "selected": 0,
        "img": "consume",
        "multi": false,
        "passive": false,
        "ranks": 1,
        "AP": 2,
        "abil": {
            "1": "(Cooldown: 2min) Spend a Shadow Charge to crate a field around you for 10 seconds. Every 2 seconds the aura causes one nearby corporal enemy to be devoured by its own shadow and die (save negates), or take 80-120 damage. You are free to perform other action while the aura is active."
        }
    },
    "6b": {
        "abil_name": "Shadow Form",
        "required_by": [
            "6c"
        ],
        "required": 20,
        "prereq": "5b",
        "selected": 0,
        "img": "shadowform",
        "multi": false,
        "passive": false,
        "ranks": 1,
        "AP": 2,
        "abil": {
            "1": "(Cooldown: 1min) Spend a shadow charge to gain 25% incorporeality (and ignore incorporeal miss chance), float as if affected by featherfall, have bonuses to hide and move silently and deal strength damage on all melee and ranged attacks. You also take double damage from light effects."
        }
    },
    "6c": {
        "abil_name": "Dark Imbuement",
        "required_by": null,
        "required": 20,
        "prereq": "6b",
        "selected": 0,
        "img": "darkimbuement",
        "multi": false,
        "passive": false,
        "ranks": 1,
        "AP": 2,
        "abil": {
            "1": "(Cooldown: 4min) Each time an enemy affected by your Dark Shrouding mark dies, you gain 1 charge. When you have accumulated 20 of these charges, you can expend them to enchant your melee and ranged attacks with shadowy energy. You deal an extra 2d6 unholy damage with every strike, the effective range of your melee attacks increases dramatically, and your ranged attacks have a 30% chance to explode, dealing 10d6 unholy damage to all enemies in a large radius around your target."
        }
    },
    "6d": null,
    "6e": {
        "abil_name": "Dexterity or Intelligence",
        "required_by": null,
        "required": 20,
        "prereq": null,
        "selected": 0,
        "img": "dexint",
        "multi": "multi",
        "passive": "passive",
        "ranks": 1,
        "AP": 2,
        "abil": {
            "1": {
                "1": "+1 Dexterity",
                "2": "+1 Intelligence"
            }
        }
    }
}
