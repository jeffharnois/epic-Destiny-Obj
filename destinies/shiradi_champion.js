{
  "1a": {"abil_name": "Stay Frosty","required": 0, "prereq": null, "multi": false, "passive": false, "ranks": 2, "AP": 1, "abil": {
      "1": "(Cooldown: 5secs) Shiradi ranged stance: Ranged and thrown attacks and offensive spells have an extra 7% chance to deal 3d10 extra cold damage and slow movement speed for 5 seconds. +3 listen and spot", 
      "2": ""
    }
  },
  "1b": {"abil_name": "Wild Shots", "required": 0, "prereq": null, "multi": false, "passive": false, "ranks": 3, "AP": 1, "abil": {
      "1": "(Cooldown: 45secs) Toss daggers in a wide arc in front you, each dealing 10d20 piercing damage",
      "2": "(Cooldown: 30secs) Toss daggers in a wide arc in front you, each dealing 15d20 piercing damage",
      "3": "(Cooldown: 15secs) Toss daggers in a wide arc in front you, each dealing 20d20 piercing damage"
    }
  },
  "1c": {"abil_name": "Healing Spring", "required": 0, "prereq": null, "multi": false, "passive": false, "ranks": 3, "AP": 1, "abil": {
      "1": "(Cooldown: 30secs) Nearby allies heal 1d100 positive energy every 60 seconds for five minutes. Usable once per day",
      "2": "(Cooldown: 30secs) Nearby allies heal 1d100 positive energy every 45 seconds for five minutes. Usable once per day",
      "3": "(Cooldown: 30secs) Nearby allies heal 1d100 positive energy every 30 seconds for five minutes. Usable once per day"
    }
  },
  "1d": {"abil_name": "Illusion of Well Being", "required": 0, "prereq": null, "multi": false, "passive": "passive", "ranks": 3, "AP": 1, "abil": {
      "1": "Healing spring additionally grants 10 temporary HP when it heals you for at least one HP. 1 extra use of healing spring per day",
      "2": "",
      "3": ""
    }
  },
  "1e": {"abil_name": "Dexterity or Wisdom", "required": 0, "prereq": null, "multi": false, "passive": "passive", "ranks": 1, "AP": 2, "abil": {
      "1": {"1": "+1 Dexterity", "2": "+1 Wisdom"}
    }
  },
  "2a": {"abil_name": "Prism", "required": 4, "prereq": null, "multi": false, "passive": false, "ranks": 1, "AP": 2, "abil": {
      "1": "(Cooldown: 5secs) Wild hunter stance: Ranged and thrown attacks and offensive spells have a 7% chance to deal 1d20 damage to a random ability score"
    }
  },
  "2b": {"abil_name": "Pin", "required": 4, "prereq": null, "multi": false, "passive": false, "ranks": 2, "AP": 1, "abil": {
      "1": "(Cooldown: 30secs) Ranged attack: If enemy is not moving, enemy takes +10d10 pierce damage and is pinned in place for a few seconds on a failed DC25 fortitude save.",
      "2": "(Cooldown: 20secs) Ranged attack: If enemy is not moving, enemy takes +10d20 pierce damage and is pinned in place for a few seconds on a failed DC25 fortitude save."
    }
  },
  "2c": {"abil_name": "Fey Spring", "required": 4, "prereq": [{"req":"1c","tier":1},{"req":"2d","tier":1}], "multi": false, "passive": "passive", "ranks": 3, "AP": 1, "abil": {
      "1": "Healing spring additionally grants DR 2/Cold iron and stacking 2 spellpower to nearby allies. 1 extra use of healing spring per day",
      "2": "Healing spring additionally grants DR 4/Cold iron and stacking 4 spellpower to nearby allies. 1 extra use of healing spring per day",
      "3": "Healing spring additionally grants DR 6/Cold iron and stacking 6 spellpower to nearby allies. 1 extra use of healing spring per day"
    }
  },
  "2d": {"abil_name": "Fey Form", "required": 4, "prereq": null, "multi": false, "passive": "passive", "ranks": 3, "AP": 1, "abil": {
      "1": "Gain DR 3/Cold Iron and +5 Spell Power.",
      "2": "Gain DR 5/Cold Iron and +10 Spell Power.",
      "3": "Gain DR 7/Cold Iron and +15 Spell Power."
    }
  },
 "2e": {"abil_name": "Dexterity or Wisdom", "required": 4, "prereq": null, "multi": false, "passive": "passive", "ranks": 1, "AP": 2, "abil": {
      "1": {"1": "+1 Dexterity", "2": "+1 Wisdom"}
    }
  },
  "3a": {"abil_name": "Rainbow", "required": 8, "prereq": [{"req":"2a","tier":1}], "multi": false, "passive": "passive", "ranks": 1, "AP": 2, "abil": {
      "1": "While in prism stance, your ranged and thrown attacks and offensive spells have a 7% chance to deal 1d100 extra damage of a random type"
    }
  },
  "3b": {"abil_name": "Otto&rsquo;s Whistler", "required": 8, "prereq": null, "multi": false, "passive": false, "ranks": 2, "AP": 1, "abil": {
      "1": "(Cooldown: 30secs) Ranged attack: If enemy is moving enemy takes +10d10 sonic damage and starts dancing on a failed will save",
      "2": "(Cooldown: 20secs) Ranged attack: If enemy is moving enemy takes +10d20 sonic damage and starts dancing on a failed will save"
    }
  },
  "3c": {"abil_name": "Whirling Wrist", "required": 8, "prereq": null, "multi": false, "passive": "passive", "ranks": 3, "AP": 1, "abil": {
      "1": "Increases your attack speed with thrown weapons by 20%",
      "2": "",
      "3": ""
    }
  },
  "3d": null,
  "3e": {"abil_name": "Dexterity or Wisdom", "required": 8, "prereq": null, "multi": false, "passive": "passive", "ranks": 1, "AP": 2, "abil": {
      "1": {"1": "+1 Dexterity", "2": "+1 Wisdom"}
    }
  },
  "4a": {"abil_name": "Double Rainbow", "required": 12, "prereq": [{"req":"3a","tier":1}], "multi": false, "passive": "passive", "ranks": 1, "AP": 2, "abil": {
      "1": "While in prism stance; your ranged and thrown attacks and offensive spells have a 7% chance to inflict a random effect on your target"
    }
  },
  "4b": {"abil_name": "Stay Good ", "required": 12, "prereq": null, "multi": false, "passive": false, "ranks": 2, "AP": 1, "abil": {
      "1": "(Cooldown: 5secs) Shiradi ranged stance: Ranged and thrown attacks and offensive spells have a 7% chance to deal 3d10 extra light damage",
      "2": ""
    }
  },
  "4c": {"abil_name": "In the Weeds", "required": 12, "prereq": null, "multi": false, "passive": "passive", "ranks": 3, "AP": 1, "abil": {
      "1": "+1% dodge, +2 hide. After standing still for 3 seconds you gain +1% dodge, +3 hide",
      "2": "+2% dodge, +? hide. After standing still for 3 seconds you gain +2% dodge, +? hide",
      "3": "+3% dodge, +? hide. After standing still for 3 seconds you gain +3% dodge, +? hide"
    }
  },
  "4d": {"abil_name": "Elemental absorption", "required": 12, "prereq": [{"req":"2d","tier":1}], "multi": false, "passive": false, "ranks": 3, "AP": 1, "abil": {
      "1": "(Cooldown: 2mins) Target ally received 5% reduced damage from fire, cold, electric, acid and sonic. Two uses per rest. Lasts until rest",
      "2": "",
      "3": ""
    }
  },
  "4e": {"abil_name": "Dexterity or Wisdom", "required": 12, "prereq": null, "multi": false, "passive": "passive", "ranks": 1, "AP": 2, "abil": {
      "1": {"1": "+1 Dexterity", "2": "+1 Wisdom"}
    }
  },
  "5a": {"abil_name": "Track", "required": 16, "prereq": null, "multi": false, "passive": "passive", "ranks": 3, "AP": 1, "abil": {
      "1": "Ranged attacks reduce enemy AC by -1 for 20 seconds. This effect stacks up to 3 times",
      "2": "",
      "3": ""
    }
  },
  "5b": {"abil_name": "Stand and Deliver", "required": 16, "prereq": null, "multi": false, "passive": "passive", "ranks": 1, "AP": 2, "abil": {
      "1": "While standing still you gain +1 competence bonus to ranged damage and +1% spell power every few seconds, up to +10"
    }
  },
  "5c": null,
  "5d": {"abil_name": "Nerve toxin", "required": 16, "prereq": null, "multi": false, "passive": "passive", "ranks": 3, "AP": 1, "abil": {
      "1": "Your ranged and thrown attacks and offensive spells have a 3% chance to paralyze living creatures for 6 seconds. Will save DC 30 + wisdom mod",
      "2": "",
      "3": ""
    }
  },
  "5e": {"abil_name": "Dexterity or Wisdom", "required": 16, "prereq": null, "multi": false, "passive": "passive", "ranks": 1, "AP": 2, "abil": {
      "1": {"1": "+1 Dexterity", "2": "+1 Wisdom"}
    }
  },
  "6a": null,
  "6b": {"abil_name": "Audience With The Queen", "required": 20, "prereq": null, "multi": false, "passive": false, "ranks": 1, "AP": 2, "abil": {
      "1": "(Cooldown: 2min 34seconds) Pop off for some tea with your lady, the queen of summer, returning a few seconds later. Depending on your diplomacy with the queen, you may experience effects either favorable or ill, though the tea is always delicious"
    }
  },
  "6c": {"abil_name": "Rain of Arrows", "required": 20, "prereq": null, "multi": false, "passive": false, "ranks": 1, "AP": 2, "abil": {
      "1": "(Cooldown: 7secs) Every seconds for 30 seconds each enemy around you has 20% to take 1d100 piercing damage. Cost: 10 Fey Favor."
    }
  }, 
  "6d": null,
  "6e": {"abil_name": "Dexterity or Wisdom", "required": 20, "prereq": null, "multi": false, "passive": "passive", "ranks": 1, "AP": 2, "abil": {
      "1": {"1": "+1 Dexterity", "2": "+1 Wisdom"}
    }
  }
}