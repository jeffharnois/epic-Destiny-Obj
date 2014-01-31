{
  "dID": "divine_crusader",
  "name": "Divine Crusader",
  "points_remaining": 24,
  "points_spent": 0,
  "autogrants": [
      {"abil_name":"Divine Crusader", "img":"annointweapon-taken", "abil": "You gain Cleric, Favored Soul, and Paladin Caster Levels equal to your level in Divine Crusader..  +25 Spell Points.  +10 Hit Points.  Your Base Attack Bonus is equal to your total Character Level", "passive": "passive"},
      {"abil_name":"Aura of Purification", "img":"confrontanyfoe-taken", "abil": "(level 1) Cooldown: 3 Seconds.  Toggle:.  Every 3 seconds while active: Nearby enemies gain a stack of Purification.  Purification: -1 attack damage, -2 spell power, stacks up to 25 times..  Passive:.  +25 spell points.  +10 hit points", "passive": false},
      {"abil_name":"No Regret", "img":"annointweapon-taken", "abil": "(level 2)Whenever an enemy who was recently affected by your Aura of Purificaiton is slain, other nearby enemies gain 1 to 4 stacks of Purificaiton..  Passive:.  +25 Spell Points.  +10 hit points", "passive": "passive"},
      {"abil_name":"Castigation", "img":"annointweapon-taken", "abil": "(level 3) Your Aura of Purification also harms nearby enemies, deaing Bane damage every three seconds.  Non-bosses take damage equal to 1% of their current health for each stack of Purification they have.  Bosses instead take 1d6 Bane damage per stack of Purification..  Passive:.  +25 Spell Points.  +10 Hit points", "passive": "passive"},
      {"abil_name":"No Remorse", "img":"annointweapon-taken", "abil": "(level 4) Whenever an enemy who was recently affected by your Aura of Purification is slain, nearby allies are healed for Positive Energy equal to the level of the slain enemy.  Passive:.  +25 Spell Points.  +10 hit points", "passive": "passive"},
      {"abil_name":"Purifying Wrath", "img":"confrontanyfoe-taken", "abil": "(level 5)Active Ability: Celestial Bombardment.  Spell Resistance: no.  Activation Cost: 100 spell points.  Cooldown: 1 minute..  NOT YET IMPLEMENTED.  Actiate: all stacks of Purification are removed from enemies in a large area around you.  Affected non-Boss enemies take Fire Damage equal to 4% of their Maximum Hit Points per stack of Purification removed.  Bosses instead take 5d6 Fire Damage for each stack of Purification Removed..  Cooldown: 30 seconds (sic).  Passive:.  +25 Spell Points.  +10 hit points", "passive": false}
  ],
  "1a": {"abil_name": "Stand And Be Judged", "required_by": null, "required": 0, "prereq": null, "selected": 0, "img":"confrontanyfoe", "multi": false, "passive": false, "ranks": 3, "AP": 1, "abil": {
      "1": "Activation Cost: 15 Spell Points.  Cooldown: 24 seconds.  Activate: A targeted foe must make a Will saving throw or be stunned. (DC: 30+Wisdom Modifier).  Cooldown: 25 seconds.  Addiction ranks in this ability will reduce both its Spell Point cost and cooldown.", 
      "2": "Activation Cost: 10 Spell Points.  Cooldown: 20 seconds.  Activate: A targeted foe must make a Will saving throw or be stunned. (DC: 30+Wisdom Modifier).  Cooldown: 25 seconds.  Addiction ranks in this ability will reduce both its Spell Point cost and cooldown.",
      "3": "Activation Cost: 5 Spell Points.  Cooldown: 15 seconds.  Activate: A targeted foe must make a Will saving throw or be stunned. (DC: 30+Wisdom Modifier).  Cooldown: 25 seconds.  "
    }
  },
  "1b": {"abil_name": "Interrogation", "required_by": null, "required": 0, "prereq": null, "selected": 0, "img":"annointweapon", "multi": false, "passive": "passive", "ranks": 1, "AP": 1, "abil": {
      "1": "Passive:.  +5 Universal Spell Power.  +1% Spell Critical Chance.  Your offensive Spells cause enemies to gain a stack of Purification.  Purification: -1 attack damage, -2 spell power, stacks up to 25 times."
    }
  },
  "1c": {"abil_name": "Purge the Wicked", "required_by": null, "required": 0, "prereq": null, "selected": 0, "img":"annointweapon", "multi": false, "passive": "passive", "ranks": 1, "AP": 1, "abil": {
      "1": "Passive:.  +2 to confirm Critical Hits.  +2 to Critical Hit Damage.  Your critical hits with weapons cause enemies to gain a stack of Purification.  Purification: -1 attack damage, -2 spell power, stacks up to 25 times."
    }
  },
  "1d": {"abil_name": "Flames of Purity", "required_by": null, "required": 0, "prereq": null, "selected": 0, "img":"annointweapon", "multi": false, "passive": "passive", "ranks": 3, "AP": 1, "abil": {
      "1": "Passive: +10 Fire Spell Power", 
      "2": "Passive: +20 Fire Spell Power",
      "3": "Passive: +30 Fire Spell Power"
    }
  },
  "1e": {"abil_name": "Strength, Wisdom, or Charisma", "required_by": "3b", "required": 0, "prereq": null, "selected": 0, "img":"annointweapon", "multi": "multi", "passive": "passive", "ranks": 1, "AP": 2, "abil": {
      "1": {"1": "+1 Strength", "2": "+1 Wisdom", "3": "+1 Charisma"}
    }
  },
  "2a": null,
  "2b": {"abil_name": "Consecration", "required_by": null, "required": 4, "prereq": null, "selected": 0, "img":"confrontanyfoe", "multi": false, "passive": false, "ranks": 3, "AP": 1, "abil": {
      "1": "Cooldown: 25 seconds.  Cost: 50 Spell Points.  Cooldown: 30 seconds (sic).  Duration: 20 seconds.  Activate: The ground you are standing on is consecrated.  Evil creatures standing on consecrated ground are burnt every three seconds, gaining a stack of Purification and taking 1 to 6 fire damage for each level you have.  Half of this damage is Fire, half is Good-aligned.  Both the Fire and Good damage from this ability benefit from your Fire Spell Power", 
      "2": "Cooldown: 20 seconds.  Cost: 40 Spell Points.  Cooldown: 25 seconds (sic).  Duration: 20 seconds.  Activate: The ground you are standing on is consecrated.  Evil creatures standing on consecrated ground are burnt every three seconds, gaining a stack of Purification and taking 1 to 6 fire damage for each level you have.  Half of this damage is Fire, half is Good-aligned.  Both the Fire and Good damage from this ability benefit from your Fire Spell Power",
      "3": "Cooldown: 15 seconds.  Cost: 30 Spell Points.  Cooldown: 20 seconds (sic).  Duration: 20 seconds.  Activate: The ground you are standing on is consecrated.  Evil creatures standing on consecrated ground are burnt every three seconds, gaining a stack of Purification and taking 1 to 6 fire damage for each level you have.  Half of this damage is Fire, half is Good-aligned.  Both the Fire and Good damage from this ability benefit from your Fire Spell Power"
    }
  },
  "2c": {"abil_name": "Sword of Justice", "required_by": null, "required": 4, "prereq": null, "selected": 0, "img":"annointweapon", "multi": false, "passive": "passive", "ranks": 3, "AP": 1, "abil": {
      "1": "Passive:.  You gain a +2 bonus to damage with all attacks", 
      "2": "Passive:.  You gain a +4 bonus to damage with all attacks",
      "3": "Passive:.  You gain a +6 bonus to damage with all attacks"
    }
  },
  "2d": {"abil_name": "Empyrean Magic", "required_by": null, "required": 4, "prereq": null, "selected": 0, "img":"annointweapon", "multi": false, "passive": "passive", "ranks": 1, "AP": 1, "abil": {
      "1": "Whenever you cast a Fire, Light, or Healing spell, you gain a stack of Empyrean Fervor.  Empyrean Fervor: +2 Sacred Bonus to Universal Spell Power, +1% Sacred Bonus to Critical Change with all spells.  Duration: 10 seconds.  Stacks 10 times."
    }
  },
  "2e": {"abil_name": "Strength, Wisdom, or Charisma", "required_by": null, "required": 4, "prereq": null, "selected": 0, "img":"annointweapon", "multi": "multi", "passive": "passive", "ranks": 1, "AP": 2, "abil": {
      "1": {"1": "+1 Strength", "2": "+1 Wisdom", "3": "+1 Charisma"}
    }
  },
  "3a": {"abil_name": "Extraordinary Virtue", "required_by": null, "required": 4, "prereq": null, "selected": 0, "img":"annointweapon", "multi": false, "passive": "passive", "ranks": 1, "AP": 1, "abil": {
      "1": "NOT YET IMPLEMENTED"
    }
  },
  "3b": {"abil_name": "Sacred Ground", "required_by": "4b", "required": 8, "prereq": "2b", "selected": 0, "img":"annointweapon", "multi": false, "passive": "passive", "ranks": 1, "AP": 1, "abil": {
      "1": "While standing on consecrated ground, you and your allies are healed every 3 seconds for 1 point of Positive Energy per character level.  This is affected by your Healing Spell Power."
    }
  },
  "3c": {"abil_name": "Purifying Strike", "required_by": null, "required": 8, "prereq": null, "selected": 0, "img":"confrontanyfoe", "multi": false, "passive": false, "ranks": 3, "AP": 1, "abil": {
      "1": "Activation Cost: 100 Spell Points.  Cooldown: 1 minute.  Melee Active Attack.  NOT YET IMPLEMENTED", 
      "2": "Activation Cost: 75 Spell Points.  Cooldown: 45 seconds.  Melee Active Attack.  NOT YET IMPLEMENTED",
      "3": "Activation Cost: 50 Spell Points.  Cooldown: 30 seconds.  Melee Active Attack.  NOT YET IMPLEMENTED"
    }
  },
  "3d": null,
  "3e": {"abil_name": "Strength, Wisdom, or Charisma", "required_by": null, "required": 8, "prereq": null, "selected": 0, "img":"annointweapon", "multi": "multi", "passive": "passive", "ranks": 1, "AP": 2, "abil": {
      "1": {"1": "+1 Strength", "2": "+1 Wisdom", "3": "+1 Charisma"}
    }
  },
  "4a": null,
  "4b": {"abil_name": "Crusade", "required_by": null, "required": 12, "prereq": "3b", "selected": 0, "img":"confrontanyfoe", "multi": false, "passive": false, "ranks": 1, "AP": 1, "abil": {
      "1": "While standing on consecrated ground, you and your allies gain a +10% Sacred Bonus to the damage of your attacks"
    }
  },
  "4c": {"abil_name": "Firebrand", "required_by": null, "required": 12, "prereq": null, "selected": 0, "img":"annointweapon", "multi": false, "passive": "passive", "ranks": 3, "AP": 1, "abil": {
      "1": "Passive Upgrade to Purifying Strike.  NOT YET IMPLEMENTED", 
      "2": "Passive Upgrade to Purifying Strike.  NOT YET IMPLEMENTED",
      "3": "Passive Upgrade to Purifying Strike.  NOT YET IMPLEMENTED"
    }
  },
  "4d": null,
  "4e": {"abil_name": "Strength, Wisdom, or Charisma", "required_by": null, "required": 12, "prereq": null, "selected": 0, "img":"annointweapon", "multi": "multi", "passive": "passive", "ranks": 1, "AP": 2, "abil": {
      "1": {"1": "+1 Strength", "2": "+1 Wisdom", "3": "+1 Charisma"}
    }
  },
  "5a": {"abil_name": "Celestial Champion", "required_by": null, "required": 16, "prereq": null, "selected": 0, "img":"annointweapon", "multi": false, "passive": "passive", "ranks": 1, "AP": 1, "abil": {
      "1": "+1 Critical Threat Range with all attacks..  When you crtically hit with an attack, you gain a stack of Celestial Ferver..  Celestial Fervor: +1 Sacred Bonus to Doublestrike chance.  Duration: 6 seconds.  Stacks 10 times."
    }
  },
  "5b": {"abil_name": "Celestial Bombardment", "required_by": null, "required": 16, "prereq": null, "selected": 0, "img":"confrontanyfoe", "multi": false, "passive": false, "ranks": 3, "AP": 1, "abil": {
      "1": "Active Ability: Celestial Bombardment..  Spell Resistance: No.  Activation Cost: 100 Spell Points.  Cooldown: 1 minute.  Spell-like Ability:.  Cooldown:60 Seconds.  Cost: 100 Spell Points.  Celestial Bombardment: Divine wrath falls from the heaves to smite your foes.  This spell calls down three blazing stars at your target, dealing a total of 3 - 18 Fire damage per character level, split into three hits.  This damage is affected by your Fire Spell Power, and may critically hit.  In addition, enemies must succeed at three consecutive Reflex saving throws vs. DC 20+Wisdom Modifier+Evocation Spell DC Modifiers or be knocked prone..  Additional points in this enhancement will lower the cooldown and the spell point cost.", 
      "2": "Active Ability: Celestial Bombardment..  Spell Resistance: No.  Activation Cost: 75 Spell Points.  Cooldown: 45 seconds.  Spell-like Ability:.  Cooldown:45 Seconds.  Cost: 75 Spell Points.  Celestial Bombardment: Divine wrath falls from the heaves to smite your foes.  This spell calls down three blazing stars at your target, dealing a total of 3 - 18 Fire damage per character level, split into three hits.  This damage is affected by your Fire Spell Power, and may critically hit.  In addition, enemies must succeed at three consecutive Reflex saving throws vs. DC 20+Wisdom Modifier+Evocation Spell DC Modifiers or be knocked prone..  Additional points in this enhancement will lower the cooldown and the spell point cost.",
      "3": "Active Ability: Celestial Bombardment..  Spell Resistance: No.  Activation Cost: 50 Spell Points.  Cooldown: 30 seconds.  Spell-like Ability:.  Cooldown:30 Seconds.  Cost: 50 Spell Points.  Celestial Bombardment: Divine wrath falls from the heaves to smite your foes.  This spell calls down three blazing stars at your target, dealing a total of 3 - 18 Fire damage per character level, split into three hits.  This damage is affected by your Fire Spell Power, and may critically hit.  In addition, enemies must succeed at three consecutive Reflex saving throws vs. DC 20+Wisdom Modifier+Evocation Spell DC Modifiers or be knocked prone."
    }
  },
  "5c": null,
  "5d": {"abil_name": "Transcendental Magic", "required_by": null, "required": 16, "prereq": null, "selected": 0, "img":"confrontanyfoe", "multi": false, "passive": false, "ranks": 2, "AP": 1, "abil": {
      "1": "+1 to the DC of all your spells", 
      "2": "+2 to the DC of all your spells"
    }
  },
  "5e": {"abil_name": "Strength, Wisdom, or Charisma", "required_by": null, "required": 16, "prereq": null, "selected": 0, "img":"annointweapon", "multi": "multi", "passive": "passive", "ranks": 1, "AP": 2, "abil": {
      "1": {"1": "+1 Strength", "2": "+1 Wisdom", "3": "+1 Charisma"}
    }
  },
  "6a": null,
  "6b": {"abil_name": "Heavenly Presence", "required_by": null, "required": 20, "prereq": null, "selected": 0, "img":"confrontanyfoe", "multi": false, "passive": false, "ranks": 1, "AP": 2, "abil": {
      "1": "You gain some of the traits of a Celestial..  Passive:.  +10 Physical Resistance Rating.  10% Acid Absorption.  10% Cold Absorption.  10% Electricty Absorption.  Immunity to Petrification"
    }
  },
  "6c": {"abil_name": "Wrath of the Righteous", "required_by": null, "required": 20, "prereq": null, "selected": 0, "img":"confrontanyfoe", "multi": false, "passive": false, "ranks": 1, "AP": 2, "abil": {
      "1": "Toggle: Whenever an enemy who was recently affected by your Aura of Purification is slain, you gain one stack of Wrath..  Wrath: +1 Spell Power, +1 Damage with all attacks, -3 Maximum Hit Points..  Wrath may stack infinitely.  Wrath decays by 1 stack every 60 seconds.  Gaining a new stack of Wrath refreshes this timer.  All stacks of Wrath are removed upon dungeon exist, or when Wrath of the Righteous is toggled off."
    }
  },
  "6d": null,
  "6e": {"abil_name": "Strength, Wisdom, or Charisma", "required_by": null, "required": 20, "prereq": null, "selected": 0, "img":"annointweapon", "multi": "multi", "passive": "passive", "ranks": 1, "AP": 2, "abil": {
      "1": {"1": "+1 Strength", "2": "+1 Wisdom", "3": "+1 Charisma"}
    }
  }
}