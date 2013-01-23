{
  "dID": "legendary_dreadnought",
  "name": "Legendary Dreadnought",
  "points_remaining": 24,
  "points_spent": 0,
  "autogrants": [
      {"abil_name":"Shrug Off Punishment", "img":"shrugoffpunishment", "abil": "+10 Max Health per level of Legendary Dreadnought (including this one).", "passive": "passive"},
      {"abil_name":"Action Hero", "img":"actionhero", "abil": "(level 1) Reduces the cooldowns of your Action Boost abilities by 33%.", "passive": "passive"},
      {"abil_name":"Unstoppable", "img":"unstoppable", "abil": "(level 2) (Cooldown: 3 mins) Activate to remove all Crowd Control effects currently restraining you. This ability can be used while helpless.", "passive": false},
      {"abil_name":"Action Boost: Unmovable", "img":"unmovable", "abil": "(level 3) (Cooldown: 2 mins 15 secs) Activate to gain a +20 Action Boost bonus to to Fortitude and Balance saves for 60 seconds. This ability can be used while helpless.", "passive": false},
      {"abil_name":"Action Boost: Thick Skinned", "img":"thickskinned", "abil": "(level 4) (Cooldown: 3 mins) Activate to take 25% less damage from all sources for 30 seconds. This ability can be used while helpless.", "passive": false},
      {"abil_name":"Combat Brute", "img":"combatbrute", "abil": "(level 5) You gain +1[W] damage with melee weapons and deal +50% damage to helpless opponents while any Action Boost is active.", "passive": "passive"}
  ],
  "1a": {"abil_name": "Sundering swing", "required_by": null, "required": 0, "prereq": null, "selected": 0, "img":"sunderingswings", "multi": false, "passive": false, "ranks": 3, "AP": 1, "abil": {
      "1": "(Cooldown: 1min) For next 9 seconds all attacks you make apply an improved sunder effect on hit.", 
      "2": "(Cooldown: 1min) For next 12 seconds all attacks you make apply an improved sunder effect on hit.",
      "3": "(Cooldown: 1min) For next 15 seconds all attacks you make apply an improved sunder effect on hit."
    }
  },
  "1b": {"abil_name": "Legendary Tactics", "required_by": null, "required": 0, "prereq": null, "selected": 0, "img":"legendarytactics", "multi": false, "passive": "passive", "ranks": 3, "AP": 1, "abil": {
      "1": "+2 to DC of all tactical feats", 
      "2": "+4 to DC of all tactical feats",
      "3": "+6 to DC of all tactical feats"
    }
  },
  "1c": {"abil_name": "Extra Action Boost", "required_by": null, "required": 0, "prereq": null, "selected": 0, "img":"extraactionboost", "multi": false, "passive": "passive", "ranks": 3, "AP": 1, "abil": {
      "1": "+1 action boost per rest.", 
      "2": "+2 action boost per rest.",
      "3": "+3 action boost per rest."
    }
  },
  "1d": {"abil_name": "Action Boost: Attack", "required_by": null, "required": 0, "prereq": null, "selected": 0, "img":"actionboost_attack", "multi": false, "passive": false, "ranks": 3, "AP": 1, "abil": {
      "1": "(Cooldown: 30secs) Activate to gain a +4 action boost bonus to attack for 20 seconds (This epic ability cannot be taken if you have Action Boost Damage as a class enhancement, and it shares a cooldown with all other action boosts).", 
      "2": "(Cooldown: 30secs) Activate to gain a +6 action boost bonus to attack for 20 seconds.",
      "3": "(Cooldown: 30secs) Activate to gain a +8 action boost bonus to attack for 20 seconds."
    }
  },
  "1e": {"abil_name": "Strength or Constitution", "required_by": null, "required": 0, "prereq": null, "selected": 0, "img":"strcon", "multi": "multi", "passive": "passive", "ranks": 1, "AP": 2, "abil": {
      "1": {"1": "+1 Strength", "2": "+1 Constitution"}
    }
  },
  "2a": {"abil_name": "Momentum Swing", "required_by": ["3a"], "required": 4, "prereq": null, "selected": 0, "img":"momentumswing", "multi": false, "passive": false, "ranks": 3, "AP": 1, "abil": {
      "1": "(Cooldown: 1min) Perform an attack with +5[W] damage, +1 critical threat range. Cleave attacks have 15% chance to reset the cooldown of this ability (this cannot occur more than once every 3 seconds).  You must have power attack active to perform this ability. ", 
      "2": "(Cooldown: 1min) Perform an attack with +5[W] damage, +2 critical threat range. Cleave attacks have 30% chance to reset the cooldown of this ability (this cannot occur more than once every 3 seconds).",
      "3": "(Cooldown: 1min) Perform an attack with +5[W] damage, +3 critical threat range. Cleave attacks have 50% chance to reset the cooldown of this ability (this cannot occur more than once every 3 seconds)."
    }
  },
  "2b": {"abil_name": "Improved Combat Expertise", "required_by": null, "required": 4, "prereq": null, "selected": 0, "img":"improvedcombatexpertise", "multi": false, "passive": "passive", "ranks": 1, "AP": 2, "abil": {
      "1": "When the Combat Expertise stance is active, you gain +20 Physical Resistance Rating."
    }
  },
  "2c": {"abil_name": "Improved Power Attack", "required_by": null, "required": 4, "prereq": null, "selected": 0, "img":"improvedpowerattack", "multi": false, "passive": "passive", "ranks": 1, "AP": 2, "abil": {
      "1": "When the Power Attack stance is active, you deal +0.5[W] damage with weapons."
    }
  },
  "2d": {"abil_name": "Action Boost: Damage", "required_by": null, "required": 4, "prereq": null, "selected": 0, "img":"actionboost_damage", "multi": false, "passive": false, "ranks": 3, "AP": 1, "abil": {
      "1": "Activate to gain +20% action boost bonus to weapon damage for 20 seconds (This epic ability cannot be taken if you have Action Boost Damage as a class enhancement, and it shares a cooldown with all other action boosts).", 
      "2": "Activate to gain +25% action boost bonus to weapon damage for 20 seconds.",
      "3": "Activate to gain +30% action boost bonus to weapon damage for 20 seconds."
    }
  },
  "2e": {"abil_name": "Strength or Constitution", "required_by": null, "required": 4, "prereq": null, "selected": 0, "img":"strcon", "multi": "multi", "passive": "passive", "ranks": 1, "AP": 2, "abil": {
      "1": {"1": "+1 Strength", "2": "+1 Constitution"}
    }
  },
  "3a": {"abil_name": "Lay Waste", "required_by": null, "required": 8, "prereq": "2a", "selected": 0, "img":"laywaste", "multi": false, "passive": false, "ranks": 1, "AP": 2, "abil": {
      "1": "(Cooldown: 1min) Perform an AoE attack with +5[W] damage. On hit: Knocks the target down, Balance DC (10 + character level + strength modifier) negates. Momentum swing has a 25% chance to reset the cooldown of this ability (this cannot occur more than once every 3 seconds). You must have power attack active to perform this ability."
    }
  },
  "3b": {"abil_name": "Critical Damage", "required_by": null, "required": 8, "prereq": null, "selected": 0, "img":"criticaldamage", "multi": false, "passive": "passive", "ranks": 3, "AP": 1, "abil": {
      "1": "+2 damage on critical hits (before weapon multiplier)",
      "2": "+4 damage on critical hits (before weapon multiplier)",
      "3": "+6 damage on critical hits (before weapon multiplier)"
    }
  },
  "3c": null,
  "3d": {"abil_name": "Action Boost: Haste", "required_by": null, "required": 8, "prereq": null, "selected": 0, "img":"actionboost_haste", "multi": false, "passive": false, "ranks": 3, "AP": 1, "abil": {
      "1": "(Cooldown: 30secs) +20% action boost attack speed bonus for 20 seconds (This ability cannot be taken if you have Action Boost Haste as a class enhancement, and it shares a cooldown with all other action boosts).", 
      "2": "(Cooldown: 30secs) +25% action boost attack speed bonus for 20 seconds.",
      "3": "(Cooldown: 30secs) +30% action boost attack speed bonus for 20 seconds."
    }
  }, 
  "3e": {"abil_name": "Strength or Constitution", "required_by": null, "required": 8, "prereq": null, "selected": 0, "img":"strcon", "multi": "multi", "passive": "passive", "ranks": 1, "AP": 2, "abil": {
      "1": {"1": "+1 Strength", "2": "+1 Constitution"}
    }
  },
  "4a": {"abil_name": "Tactical Genius", "required_by": null, "required": 12, "prereq": null, "selected": 0, "img":"tacticalgenius", "multi": false, "passive": false, "ranks": 1, "AP": 2, "abil": {
      "1": "(Cooldown: 5mins) Activate to clear cooldown of all tactical feats."
    }
  },
  "4b": {"abil_name": "Volcano&rsquo;s Edge", "required_by": null, "required": 12, "prereq": null, "selected": 0, "img":"volcanosedge", "multi": false, "passive": false, "ranks": 1, "AP": 2, "abil": {
      "1": "(Cooldown: 12secs) Melee Attack On Hit 100 Fire damage. On Critical Target takes Magma Surge damage. On Vorpal target takes 10d100 Fire damage. Requires a Dagger, Kama, Sickle or Sword to be equipped in your main hand."
    }
  },
  "4c": {"abil_name": "Lightning Mace", "required_by": null, "required": 12, "prereq": null, "selected": 0, "img":"lightningmace", "multi": false, "passive": false, "ranks": 1, "AP": 2, "abil": {
      "1": "(Cooldown: 12secs) Melee Attack On Hit 100 Electrical damage. On Critical Gain +15% enhancement bonus to melee double strike for 6 seconds. On Vorpal Targets takes 10d100 Electrical damage. Requires a Club, Greatclub, Heavy Mace, Light Mace, Morningstar, or Quarterstaff to be equipped in your main hand."
    }
  },
  "4d": {"abil_name": "Anvil of Thunder", "required_by": null, "required": 12, "prereq": null, "selected": 0, "img":"anvilofthunder", "multi": false, "passive": false, "ranks": 1, "AP": 2, "abil": {
      "1": "(Cooldown: 12secs) Melee Attack On Hit 100 Sonic damage. On Critical Target is stunned for 6 seconds. On Vorpal Take takes 10d100 Sonic damage. Requires a Dwarven Waraxe, Greataxe, Battleaxe, Handaxe, Warhammer, Maul, Light Pick or Heavy Pick to be equipped in your main hand."
    }
  },
  "4e": {"abil_name": "Strength or Constitution", "required_by": null, "required": 12, "prereq": null, "selected": 0, "img":"strcon", "multi": "multi", "passive": "passive", "ranks": 1, "AP": 2, "abil": {
      "1": {"1": "+1 Strength", "2": "+1 Constitution"}
    }
  },
  "5a": {"abil_name": "Advancing Blows", "required_by": null, "required": 16, "prereq": null, "selected": 0, "img":"advancingblows", "multi": false, "passive": "passive", "ranks": 1, "AP": 2, "abil": {
      "1": "On melee critical hit, you gain: +1 to hit and damage for 6 seconds. Stacks 5 times."
    }
  },
  "5b": null,
  "5c": null,
  "5d": {"abil_name": "Devastating Critical", "required_by": ["6d"], "required": 16, "prereq": null, "selected": 0, "img":"devastatingcritical", "multi": false, "passive": "passive", "ranks": 1, "AP": 2, "abil": {
      "1": "+1 critical damage mulitplier on rolls of 19-20 "
    }
  },
  "5e": {"abil_name": "Strength or Constitution", "required_by": null, "required": 16, "prereq": null, "selected": 0, "img":"strcon", "multi": "multi", "passive": "passive", "ranks": 1, "AP": 2, "abil": {
      "1": {"1": "+1 Strength", "2": "+1 Constitution"}
    }
  },
  "6a": {"abil_name": "Master&rsquo;s blitz", "required_by": null, "required": 20, "prereq": null, "selected": 0, "img":"mastersblitz", "multi": false, "passive": false, "ranks": 1, "AP": 2, "abil": {
      "1": "(Cooldown: 5mins) The Master&rsquo;s Blitz counter increments each time a tactical feat is successfully used. When the counter reaches 50, you gain ability to use Master&rsquo;s Blitz. Activate: For 10 seconds, you gain +50% dodge and deal +25% melee damage. Any time you kill an opponent while under the effects of Master&rsquo;s blitz, you gain an additional stack of melee damage bonus and restart duration. If you are below 50% health when you first activate this ability, you start with 2 stacks of increased damage instead of 1. The damage bonus stack up to 100 times. You lose 1 stack every 15 seconds."
    }
  },
  "6b": null,
  "6c": {"abil_name": "Pulverizer", "required_by": null, "required": 20, "prereq": null, "selected": 0, "img":"pulverizer", "multi": false, "passive": "passive", "ranks": 1, "AP": 2, "abil": {
      "1": "Increases critical threat range of bludgeoning weapons you equip by 1.  Does not work with Handwraps."
    }
  },
  "6d": {"abil_name": "Headman&rsquo;s Chop", "required_by": null, "required": 20, "prereq": "5d", "selected": 0, "img":"headmanschop", "multi": false, "passive": "passive", "ranks": 1, "AP": 2, "abil": {
      "1": "When you have an axe equipped in your main hand, you gain an additional +1 Critical Damage Multiplier on rolls of 19-20."
    }
  },
  "6e": {"abil_name": "Strength or Constitution", "required_by": null, "required": 20, "prereq": null, "selected": 0, "img":"strcon", "multi": "multi", "passive": "passive", "ranks": 1, "AP": 2, "abil": {
      "1": {"1": "+1 Strength", "2": "+1 Constitution"}
    }
  }
}