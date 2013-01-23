{
  "dID": "shiradi_champion",
  "name": "Shiradi Champion",
  "points_remaining": 24,
  "points_spent": 0,
  "autogrants": [
      {"abil_name":"Fey Favor", "img":"feyfavor-taken", "abil": "You gain 100 SP and proficiency with longbows and shortbows. +1 Druid and Ranger caster level per level of Shiradi Champion. Each time you Vorpal with ranged and thrown attacks you gain Fey Favor. You have 7% chance to gain fey favor each time you cast an offensive spell. Favor of the fey: +1 Luck bonus to Ranged Attacks and +1 diplomacy. This stacks up to 10 times.", "passive": "passve"},
      {"abil_name":"Fey Visions", "img":"feyvisions-taken", "abil": "(level 1) +1 ranged damage, +5 spellpower, +5 search. Automatically detect secret doors", "passive": "passve"},
      {"abil_name":"Favorable", "img":"favorablewinds", "abil": "(level 2) +1 Attack. Ranged and thrown attacks and offensive spells have 7% chance to deal 5d10 additional sonic damage", "passive": "passve"},
      {"abil_name":"Sixth Sense", "img":"sixthsense", "abil": "(level 3) +1 ranged damage, +5 spellpower, +5 listen. You bypass 20% dodge and have ghost touch", "passive": "passve"},
      {"abil_name":"Favorable Wind", "img":"favorablewinds", "abil": "(level 4) +1 attack. Upgrade Favorable Winds to 7% to deal 10d10 sonic damage.", "passive": "passve"},
      {"abil_name":"Fey Power", "img":"feypower-taken", "abil": "(level 5) Ranged and thrown attacks and offensive spells have 7% chance to deal 2d100 extra force damage", "passive": "passve"}
  ],
  "1a": {"abil_name": "Stay Frosty","required": 0, "prereq": null, "selected": 0, "img":"stayfrosty", "multi": false, "passive": false, "ranks": 2, "AP": 1, "abil": {
      "1": "(Cooldown: 5secs) Shiradi ranged stance: Ranged and thrown attacks and offensive spells have an extra 7% chance to deal 3d10 extra cold damage and slow movement speed for 5 seconds. +3 listen and spot", 
      "2": "(Cooldown: 5secs) Shiradi ranged stance: Ranged and thrown attacks and offensive spells have an extra 7% chance to deal 3d20 extra cold damage and slow movement speed for 10 seconds. +6 listen and spot"
    }
  },
  "1b": {"abil_name": "Wild Shots", "required_by": null, "required": 0, "prereq": null, "selected": 0, "img":"wildstrikes", "multi": false, "passive": false, "ranks": 3, "AP": 1, "abil": {
      "1": "(Cooldown: 45secs) Toss daggers in a wide arc in front you, each dealing 10d20 piercing damage",
      "2": "(Cooldown: 30secs) Toss daggers in a wide arc in front you, each dealing 15d20 piercing damage",
      "3": "(Cooldown: 15secs) Toss daggers in a wide arc in front you, each dealing 20d20 piercing damage"
    }
  },
  "1c": {"abil_name": "Healing Spring", "required_by": null, "required": 0, "prereq": null, "selected": 0, "img":"healingspring", "multi": false, "passive": false, "ranks": 3, "AP": 1, "abil": {
      "1": "(Cooldown: 30secs) Nearby allies heal 1d100 positive energy every 60 seconds for five minutes. Usable once per day",
      "2": "(Cooldown: 30secs) Nearby allies heal 1d100 positive energy every 40 seconds for five minutes. Usable once per day",
      "3": "(Cooldown: 30secs) Nearby allies heal 1d100 positive energy every 20 seconds for five minutes. Usable once per day"
    }
  },
  "1d": {"abil_name": "Illusion of Well Being", "required_by": null, "required": 0, "prereq": "1c", "selected": 0, "img":"illusionofwellbeing", "multi": false, "passive": "passive", "ranks": 3, "AP": 1, "abil": {
      "1": "Healing spring additionally grants 10 temporary HP when it heals you for at least one HP. 1 extra use of healing spring per day",
      "2": "Healing spring additionally grants 15 temporary HP when it heals you for at least one HP. 1 extra use of healing spring per day",
      "3": "Healing spring additionally grants 20 temporary HP when it heals you for at least one HP. 1 extra use of healing spring per day"
    }
  },
  "1e": {"abil_name": "Dexterity or Wisdom", "required_by": null, "required": 0, "prereq": null, "selected": 0, "img":"dexwis", "multi": "multi", "passive": "passive", "ranks": 1, "AP": 2, "abil": {
      "1": {"1": "+1 Dexterity", "2": "+1 Wisdom"}
    }
  },
  "2a": {"abil_name": "Prism", "required_by": null, "required": 4, "prereq": null, "selected": 0, "img":"prism", "multi": false, "passive": false, "ranks": 1, "AP": 2, "abil": {
      "1": "(Cooldown: 5secs) Wild hunter stance: Ranged and thrown attacks and offensive spells have a 7% chance to deal 2d20 damage to a random ability score"
    }
  },
  "2b": {"abil_name": "Pin", "required_by": null, "required": 4, "prereq": null, "selected": 0, "img":"pin", "multi": false, "passive": false, "ranks": 2, "AP": 1, "abil": {
      "1": "(Cooldown: 30secs) Ranged attack: Deals +2[W] damage.  If enemy is not moving, enemy is pinned in place for a few seconds.  Enemy is slowed if moving.",
      "2": "(Cooldown: 20secs) Ranged attack: Deals +3[W] damage.  If enemy is not moving, enemy is pinned in place for a few seconds.  Enemy is slowed if moving."
    }
  },
  "2c": {"abil_name": "Fey Spring", "required_by": null, "required": 4, "prereq": "1c,2d", "selected": 0, "img":"feyspring", "multi": false, "passive": "passive", "ranks": 3, "AP": 1, "abil": {
      "1": "Healing spring additionally grants DR 2/Cold iron and stacking 2 spellpower to nearby allies. 1 extra use of healing spring per day",
      "2": "Healing spring additionally grants DR 4/Cold iron and stacking 4 spellpower to nearby allies. 1 extra use of healing spring per day",
      "3": "Healing spring additionally grants DR 6/Cold iron and stacking 6 spellpower to nearby allies. 1 extra use of healing spring per day"
    }
  },
  "2d": {"abil_name": "Fey Form", "required_by": null, "required": 4, "prereq": null, "selected": 0, "img":"feyform", "multi": false, "passive": "passive", "ranks": 3, "AP": 1, "abil": {
      "1": "Gain DR 3/Cold Iron and +5 Spell Power.",
      "2": "Gain DR 5/Cold Iron and +10 Spell Power.",
      "3": "Gain DR 7/Cold Iron and +15 Spell Power."
    }
  },
 "2e": {"abil_name": "Dexterity or Wisdom", "required_by": null, "required": 4, "prereq": null, "selected": 0, "img":"dexwis", "multi": "multi", "passive": "passive", "ranks": 1, "AP": 2, "abil": {
      "1": {"1": "+1 Dexterity", "2": "+1 Wisdom"}
    }
  },
  "3a": {"abil_name": "Rainbow", "required_by": null, "required": 8, "prereq": "2a", "selected": 0, "img":"rainbow", "multi": false, "passive": "passive", "ranks": 1, "AP": 2, "abil": {
      "1": "While in prism stance, your ranged and thrown attacks and offensive spells have a 7% chance to deal 1d100 extra damage of a random type"
    }
  },
  "3b": {"abil_name": "Otto&rsquo;s Whistler", "required_by": null, "required": 8, "prereq": null, "selected": 0, "img":"ottoswhistler", "multi": false, "passive": false, "ranks": 2, "AP": 1, "abil": {
      "1": "(Cooldown: 30secs) Ranged attack: Deals +2[W] damage.  If enemy is moving enemy starts dancing for 9 secs.",
      "2": "(Cooldown: 20secs) Ranged attack: Deals +3[W] damage.  If enemy is moving enemy starts dancing for 18 secs."
    }
  },
  "3c": {"abil_name": "Whirling Wrist", "required_by": null, "required": 8, "prereq": null, "selected": 0, "img":"throwndoublestrike", "multi": false, "passive": "passive", "ranks": 3, "AP": 1, "abil": {
      "1": "Increases your attack speed with thrown weapons by 20%",
      "2": "Increases your attack speed with thrown weapons by 40%",
      "3": "Increases your attack speed with thrown weapons by 60%"
    }
  },
  "3d": null,
  "3e": {"abil_name": "Dexterity or Wisdom", "required_by": null, "required": 8, "prereq": null, "selected": 0, "img":"dexwis", "multi": "multi", "passive": "passive", "ranks": 1, "AP": 2, "abil": {
      "1": {"1": "+1 Dexterity", "2": "+1 Wisdom"}
    }
  },
  "4a": {"abil_name": "Double Rainbow", "required_by": null, "required": 12, "prereq": "3a", "selected": 0, "img":"doublerainbow", "multi": false, "passive": "passive", "ranks": 1, "AP": 2, "abil": {
      "1": "While in prism stance; your ranged and thrown attacks and offensive spells have a 7% chance to inflict a random effect on your target"
    }
  },
  "4b": {"abil_name": "Stay Good ", "required_by": null, "required": 12, "prereq": null, "selected": 0, "img":"staygood", "multi": false, "passive": false, "ranks": 3, "AP": 1, "abil": {
      "1": "(Cooldown: 5secs) Shiradi ranged stance: Ranged and thrown attacks and offensive spells have a 7% chance to deal 3d10 extra light damage",
      "2": "(Cooldown: 5secs) Shiradi ranged stance: Ranged and thrown attacks and offensive spells have a 7% chance to deal 3d20 extra light damage",
      "3": "(Cooldown: 5secs) Shiradi ranged stance: Ranged and thrown attacks and offensive spells have a 7% chance to deal 3d20 extra light damage.  Ranged and throwing weapons you equip are considered Good."
    }
  },
  "4c": {"abil_name": "In the Weeds", "required_by": null, "required": 12, "prereq": null, "selected": 0, "img":"intheweeds", "multi": false, "passive": "passive", "ranks": 3, "AP": 1, "abil": {
      "1": "+1% dodge, +2 hide. After standing still for 3 seconds you gain +1% dodge, +3 hide",
      "2": "+2% dodge, +4 hide. After standing still for 3 seconds you gain +2% dodge, +3 hide",
      "3": "+3% dodge, +6 hide. After standing still for 3 seconds you gain +3% dodge, +3 hide"
    }
  },
  "4d": {"abil_name": "Elemental Absorption", "required_by": null, "required": 12, "prereq": "2d", "selected": 0, "img":"elementalabsorption", "multi": false, "passive": false, "ranks": 3, "AP": 1, "abil": {
      "1": "(Cooldown: 2mins) Target ally received 5% reduced damage from fire, cold, electric, acid and sonic. Two uses per rest. Lasts until rest",
      "2": "(Cooldown: 2mins) Target ally received 10% reduced damage from fire, cold, electric, acid and sonic. Two uses per rest. Lasts until rest",
      "3": "(Cooldown: 2mins) Target ally received 15% reduced damage from fire, cold, electric, acid and sonic. Two uses per rest. Lasts until rest"
    }
  },
  "4e": {"abil_name": "Dexterity or Wisdom", "required_by": null, "required": 12, "prereq": null, "selected": 0, "img":"dexwis", "multi": "multi", "passive": "passive", "ranks": 1, "AP": 2, "abil": {
      "1": {"1": "+1 Dexterity", "2": "+1 Wisdom"}
    }
  },
  "5a": {"abil_name": "Track", "required_by": null, "required": 16, "prereq": null, "selected": 0, "img":"track", "multi": false, "passive": "passive", "ranks": 3, "AP": 1, "abil": {
      "1": "Ranged attacks reduce enemy AC by -1 for 20 seconds. This effect stacks up to 3 times",
      "2": "Ranged attacks reduce enemy AC by -1 for 20 seconds. This effect stacks up to 6 times",
      "3": "Ranged attacks reduce enemy AC by -1 for 20 seconds. This effect stacks up to 10 times"
    }
  },
  "5b": {"abil_name": "Stand and Deliver", "required_by": null, "required": 16, "prereq": null, "selected": 0, "img":"standanddeliver", "multi": false, "passive": "passive", "ranks": 1, "AP": 2, "abil": {
      "1": "While standing still you gain +1 competence bonus to ranged damage and +1% spell power every few seconds, up to +10"
    }
  },
  "5c": null,
  "5d": {"abil_name": "Nerve toxin", "required_by": null, "required": 16, "prereq": null, "selected": 0, "img":"nervetoxin", "multi": false, "passive": "passive", "ranks": 3, "AP": 1, "abil": {
      "1": "Your ranged and thrown attacks and offensive spells have a 3% chance to paralyze living creatures for 6 seconds.",
      "2": "Your ranged and thrown attacks and offensive spells have a 5% chance to paralyze living creatures for 6 seconds.",
      "3": "Your ranged and thrown attacks and offensive spells have a 7% chance to paralyze living creatures for 6 seconds."
    }
  },
  "5e": {"abil_name": "Dexterity or Wisdom", "required_by": null, "required": 16, "prereq": null, "selected": 0, "img":"dexwis", "multi": "multi", "passive": "passive", "ranks": 1, "AP": 2, "abil": {
      "1": {"1": "+1 Dexterity", "2": "+1 Wisdom"}
    }
  },
  "6a": null,
  "6b": {"abil_name": "Audience With The Queen", "required_by": null, "required": 20, "prereq": null, "selected": 0, "img":"audiencewiththequeen", "multi": false, "passive": false, "ranks": 1, "AP": 2, "abil": {
      "1": "(Cooldown: 2min 34seconds) Pop off for some tea with your lady, the queen of summer, returning a few seconds later. Depending on your diplomacy with the queen, you may experience effects either favorable or ill, though the tea is always delicious"
    }
  },
  "6c": {"abil_name": "Rain of Arrows", "required_by": null, "required": 20, "prereq": null, "selected": 0, "img":"rainofarrows", "multi": false, "passive": false, "ranks": 1, "AP": 2, "abil": {
      "1": "(Cooldown: 7secs) Every second for 30 seconds each enemy around you has a 10% chance to take 10d100 damage of up to 10 damage types. Cost: 10 Fey Favor."
    }
  }, 
  "6d": null,
  "6e": {"abil_name": "Dexterity or Wisdom", "required_by": null, "required": 20, "prereq": null, "selected": 0, "img":"dexwis", "multi": "multi", "passive": "passive", "ranks": 1, "AP": 2, "abil": {
      "1": {"1": "+1 Dexterity", "2": "+1 Wisdom"}
    }
  }
}