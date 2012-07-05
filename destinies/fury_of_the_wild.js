{
  "dID": "fury_of_the_wild",
  "name": "Fury of the Wild",
  "autogrants": [
      {"abil_name":"Adrenaline", "img":"adrenaline-taken", "abil": "(Cooldown: 5secs) You gain +1 damage per level of Fury of the Wild. Gain 2 Adrenaline uses per raged until your next attack. Your next attack deals +300% damage and increases your critical threat range by 2. You are considered raged until your next attack.", "passive": false},
      {"abil_name":"Brawn", "img":"epictoughness", "abil": "(level 1) Gain 50 maximum HP", "passive": "passive"},
      {"abil_name":"Adrenaline", "img":"adrenaline-taken", "abil": "(level 2) (Cooldown: 5secs) You gain +1 damage per level of Fury of the Wild. Gain 2 Adrenaline uses per raged until your next attack. Your next attack deals +300% damage and increases your critical threat range by 4. You are considered raged until your next attack.", "passive": false},
      {"abil_name":"Brawn", "img":"epictoughness", "abil": "(level 3) Gain 50 maximum HP", "passive": "passive"},
      {"abil_name":"Adrenaline", "img":"adrenaline-taken", "abil": "(level 4) (Cooldown: 5secs) You gain +1 damage per level of Fury of the Wild. Gain 2 Adrenaline uses per raged until your next attack. Your next attack deals +300% damage and increases your critical threat range by 8. You are considered raged until your next attack.", "passive": false},
      {"abil_name":"Adrenaline Overload", "img":"adrenalineoverload-taken", "abil": "(level 5) (Cooldown: 5secs) Gain +1 Adrenaline use per rest. By consuming 1 Adrenaline use, your next attack will deal +400% damage and increase your critical threat range by 16. You are considered raged until your next attack.", "passive": false}
  ],
  "1a": {"abil_name": "Tunnel Vision", "required": 0, "prereq": null, "selected": 0, "img":"indomitablewill", "multi": false, "passive": "passive", "ranks": 3, "AP": 1, "abil": {
      "1": "While raged melee attacks deal +1d8 extra damage, you gain +1 intimidate, +1 will saves. You lose 5AC and 10% fort.", 
      "2": "While raged melee attacks deal +2d8 extra damage, you gain +2 intimidate, +2 will saves. You lose 10AC and 15% fort.",
      "3": "While raged melee attacks deal +3d8 extra damage, you gain +3 intimidate, +3 will saves. You lose 15AC and 20% fort."
    }
  },
  "1b": {"abil_name": "Primal Scream", "required": 0, "prereq": null, "selected": 0, "img":"primalscream", "multi": false, "passive": false, "ranks": 3, "AP": 1, "abil": {
      "1": "(Cooldown: 15secs) Nearby allies are raged gaining +3 morale bonus to Strength and Constitution. Nearby enemies take up to 30d20 sonic damage. 3 uses per rest.", 
      "2": "(Cooldown: 15secs) Nearby allies are raged gaining +4 morale bonus to Strength and Constitution. Nearby enemies take up to 30d20 sonic damage. 4 uses per rest.",
      "3": "(Cooldown: 15secs) Nearby allies are raged gaining +5 morale bonus to Strength and Constitution. Nearby enemies take up to 30d20 sonic damage. 5 uses per rest."
    }
  },
  "1c": {"abil_name": "Boulder Toss", "required": 0, "prereq": null, "selected": 0, "img":"bouldertoss", "multi": false, "passive": false, "ranks": 3, "AP": 1, "abil": {
      "1": "(Cooldown: 20secs) Throw a boulder at an enemy, dealing 3d100 bludgeoning damage and knocking down enemy on failed reflex save.", 
      "2": "(Cooldown: 20secs) Throw a boulder at an enemy, dealing 3d100 bludgeoning damage and knocking down enemy on failed reflex save.",
      "3": "(Cooldown: 20secs) Throw a boulder at an enemy, dealing 3d100 bludgeoning damage and knocking down enemy on failed reflex save."
    }
  },
  "1d": {"abil_name": "Fast Healing", "required": 0, "prereq": null, "selected": 0, "img":"fasthealing", "multi": false, "passive": "passive", "ranks": 3, "AP": 1, "abil": {
      "1": "You heal 2d20HP each minute using positive energy.", 
      "2": "You heal 4d20HP each minute using positive energy.",
      "3": "You heal 6d20HP each minute using positive energy."
    }
  },
  "1e": {"abil_name": "Strength or Constitution", "required": 0, "prereq": null, "selected": 0, "img":"strcon", "multi": "multi", "passive": "passive", "ranks": 1, "AP": 2, "abil": {
      "1": {"1": "+1 Strength", "2": "+1 Constitution"}
    }
  },
  "2a": {"abil_name": "Injury", "required": 4, "prereq": null, "selected": 0, "img":"injury", "multi": false, "passive": "passive", "ranks": 3, "AP": 1, "abil": {
      "1": "While you are injured, enemies you damage in melee are shaken.", 
      "2": "",
      "3": ""
    }
  },
  "2b": {"abil_name": "Unstoppable Fury", "required": 4, "prereq": null, "selected": 0, "img":"unstoppablefury", "multi": false, "passive": "passive", "ranks": 3, "AP": 1, "abil": {
      "1": "While raged, when you miss with a melee attack, gain +1 attack for 20s. Can stack 3 times. Only loses 1 stack each 20s.", 
      "2": "",
      "3": ""
    }
  },
  "2c": {"abil_name": "Acute Instincts", "required": 4, "prereq": null, "selected": 0, "img":"acuteinstincts", "multi": false, "passive": "passive", "ranks": 3, "AP": 1, "abil": {
      "1": "While raged, you gain +2 balance, heal, listen, spot, search, concentration and +1 saves vs. traps.",
      "2": "While raged, you gain +1 wisdom, +4 balance, heal, listen, spot, search, concentration and +2 saves vs. traps.",
      "3": "While raged, you gain +2 wisdom, +6 balance, heal, listen, spot, search, concentration and +3 saves vs. traps."
    }
  },
  "2d": {"abil_name": "Damage Reduction", "required": 4, "prereq": null, "selected": 0, "img":"damagereduction", "multi": false, "passive": "passive", "ranks": 3, "AP": 1, "abil": {
      "1": "Gain 2 Physical Resistance Rating, and DR 1/- if you are Barbarian (stack with barbarian DR).", 
      "2": "Gain 4 Physical Resistance Rating, and DR 2/- if you are Barbarian (stack with barbarian DR).",
      "3": "Gain 6 Physical Resistance Rating, and DR 3/- if you are Barbarian (stack with barbarian DR)."
    }
  },
  "2e": {"abil_name": "Strength or Constitution", "required": 4, "prereq": null, "selected": 0, "img":"strcon", "multi": "multi", "passive": "passive", "ranks": 1, "AP": 2, "abil": {
      "1": {"1": "+1 Strength", "2": "+1 Constitution"}
    }
  },
  "3a": {"abil_name": "Insult", "required": 8, "prereq": [{"req": "2a", "tier": 1}], "selected": 0, "img":"insult", "multi": false, "passive": false, "ranks": 1, "AP": 2, "abil": {
      "1": "(Cooldown: 20secs) Your next attack generates triple threat, and for 20 seconds your target gains +2 Strength, +2 constitution and -10 AC, -10 concentration and -20% fortification "
    }
  },
  "3b": {"abil_name": "Malicious Weapons", "required": 8, "prereq": null, "selected": 0, "img":"maliciousweapons", "multi": false, "passive": "passive", "ranks": 3, "AP": 1, "abil": {
      "1": "+3% chance to trigger weapon effects with glancing blows ", 
      "2": "+6% chance to trigger weapon effects with glancing blows ",
      "3": "+9% chance to trigger weapon effects with glancing blows "
    }
  },
  "3c": null,
  "3d": {"abil_name": "Ward against Weird", "required": 8, "prereq": null, "selected": 0, "img":"occultwards", "multi": false, "passive": "passive", "ranks": 3, "AP": 1, "abil": {
      "1": "30 Spell Resistance while you are injured.", 
      "2": "30 Spell Resistance while you are injured.",
      "3": "30 Spell Resistance while you are injured."
    }
  }, 
  "3e": {"abil_name": "Strength or Constitution", "required": 8, "prereq": null, "selected": 0, "img":"strcon", "multi": "multi", "passive": "passive", "ranks": 1, "AP": 2, "abil": {
      "1": {"1": "+1 Strength", "2": "+1 Constitution"}
    }
  },
  "4a": {"abil_name": "Gird Against Demons", "required": 12, "prereq": null, "selected": 0, "img":"girdagainstdemons", "multi": false, "passive": "passive", "ranks": 2, "AP": 2, "abil": {
      "1": "Weapons you equip are considered cold iron and gain Lesser Evil Outsider Bane", 
      "2": "Weapons you equip are considered cold iron and gain Evil Outsider Bane"
    }
  },
  "4b": {"abil_name": "Wild Weapons", "required": 12, "prereq": [{"req": "3b", "tier": 1}], "selected": 0, "img":"wildweapons", "multi": false, "passive": "passive", "ranks": 3, "AP": 1, "abil": {
      "1": "+3% glancing blow damage.", 
      "2": "+6% glancing blow damage.",
      "3": "+9% glancing blow damage."
    }
  },
  "4c": {"abil_name": "Sense Weakness", "required": 12, "prereq": [{"req": "2c", "tier": 1}], "selected": 0, "img":"senseweakness", "multi": false, "passive": "passive", "ranks": 3, "AP": 1, "abil": {
      "1": "You deal 10% extra damage to helpless targets. Your melee attacks deal 1d8 extra damage to enemies below 75% HP.", 
      "2": "You deal 20% extra damage to helpless targets. Your melee attacks deal 1d8 extra damage to enemies below 75% HP, 1d12 extra damage to enemies below 50% HP.  These are cumulative.",
      "3": "You deal 30% extra damage to helpless targets. Your melee attacks deal 1d8 extra damage to enemies below 75% HP, 1d15 extra damage to enemies below 50% HP, and 1d20 extra damage to enemies below 25% HP. These are cumulative."
    }
  },
  "4d": {"abil_name": "Overwhelming Force", "required": 12, "prereq": null, "selected": 0, "img":"overwhelmingforce", "multi": false, "passive": false, "ranks": 3, "AP": 1, "abil": {
      "1": "Melee attacks under the effect of Adrenaline knock down 2 seconds.", 
      "2": "Melee attacks under the effect of Adrenaline knock down 6 seconds.",
      "3": "Melee attacks under the effect of Adrenaline knock down 10 seconds."
    }
  },
  "4e": {"abil_name": "Strength or Constitution", "required": 12, "prereq": null, "selected": 0, "img":"strcon", "multi": "multi", "passive": "passive", "ranks": 1, "AP": 2, "abil": {
      "1": {"1": "+1 Strength", "2": "+1 Constitution"}
    }
  },
  "5a": null,
  "5b": {"abil_name": "Fury Made Placid", "required": 16, "prereq": null, "selected": 0, "img":"furymadeplacid", "multi": false, "passive": false, "ranks": 1, "AP": 2, "abil": {
      "1": "(Cooldown: 30secs) Spend 1 Adrenaline: For 3 minutes you gain +6 wisdom and cannot be raged or use Adrenaline, and enemies attacking you physically or magically have a 20% chance to become paralyzed and helpless with regret for 3 seconds on a failed DC 50 Will Save. You heal 2d100 HP every two seconds for the next ten seconds. Cannot train if you have Fury Eternal."
    }
  },
  "5c": {"abil_name": "Fury Eternal", "required": 16, "prereq": null, "selected": 0, "img":"furyeternal", "multi": false, "passive": "passive", "ranks": 1, "AP": 2, "abil": {
      "1": "+1 Adrenaline max use. Whenever you vorpal on a melee attack, 33% chance to regain 1 Adrenaline use. Cannot train Fury Made Placid "
    }
  },
  "5d": null,
  "5e": {"abil_name": "Strength or Constitution", "required": 16, "prereq": null, "selected": 0, "img":"strcon", "multi": "multi", "passive": "passive", "ranks": 1, "AP": 2, "abil": {
      "1": {"1": "+1 Strength", "2": "+1 Constitution"}
    }
  },
  "6a": null,
  "6b": null,
  "6c": {"abil_name": "Unbridled Fury", "required": 20, "prereq": null, "selected": 0, "img":"unbridledfury", "multi": false, "passive": false, "ranks": 1, "AP": 2, "abil": {
      "1": "(Cooldown: 5mins) Every three seconds, for thirty seconds, you gain Adrenaline Overload: Your next attack deals +400% damage and has +16 critical threat range and confirmation of critical hits. While this is active and you fight with a two handed weapon, Glancing Blows produced on enemies around you when you stand still and attack deal +100% damage and have 100% chance of triggering weapon effects. You gain the feats Two-Handed Fighting, Improved Two-Handed Fighting, and Greater Two-Handed Fighting for the duration. Requires and consumes 10 Fury. You gain 1 Fury each time you vorpal with a melee attack (roll a natural 20 and confirm the critical hit) "
    }
  },
  "6d": null,
  "6e": {"abil_name": "Strength or Constitution", "required": 20, "prereq": null, "selected": 0, "img":"strcon", "multi": "multi", "passive": "passive", "ranks": 1, "AP": 2, "abil": {
      "1": {"1": "+1 Strength", "2": "+1 Constitution"}
    }
  }
}