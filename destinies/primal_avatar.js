{
  "dID": "primal_avatar",
  "name": "Primal Avatar",
  "autogrants": [
      {"abil_name":"Spirit of Strength", "img":"spiritofstrength", "abil": "(5 sec cooldown) When you hit with a melee attack, or cast a spell on an ally, or cast an offensive spell on an enemy, you gain 1 Spirit. Each of these three categories triggers only once every three seconds. You can have up to 30 Spirit. Spirit decays at a rate of one every 9 seconds. Toggle: You gain +30 Universal Spell Power. Costs 1 Spirit to activate and 1 Spirit every six seconds. (Stays toggled on until manually turned off.)", "passive": false},
      {"abil_name":"Magic of Nature", "img":"magicofnature", "abil": "(level 1) +50 SP per level of Primal Avatar.<br />You gain caster levels equal to your Primal Avatar level for Druid and Ranger sells, if you have any levels in those classes.", "passive": "passive"},
      {"abil_name":"Primal Travel", "img":"primaltravel", "abil": "(level 2) You quickly jump backwards several times. Costs 1 Spirit.", "passive": false},
      {"abil_name":"Mighty Among Spirits", "img":"mightamongspirits", "abil": "(level 3) 20 HP.<br />Spirit decays every 15 seconds instead of every 9 seconds.", "passive": "passive"},
      {"abil_name":"Eternal Return", "img":"eternalreturn", "abil": "(level 4) Toggle: While below 50% health, you gain 12 health and lose one spirit and 4 SP every two seconds. Costs 1 Spirit to activate. (Stays toggled on until manually turned off.)", "passive": false},
      {"abil_name":"Walk with the Spirits", "img":"walkwithspirits", "abil": "(level 5) (100 SP, 1 Spirit to activate) You become invisible and ethereal to monsters, and gain +30 Hide and Move Silently. This consumes 1 Spirit each second. (Turns off if you run out of Spirit.)", "passive": false}
  ],
  "1a": {"abil_name": "Ephemeral Evolution", "required": 0, "prereq": null, "selected": 0, "img":"ephemeralevolution", "multi": false, "passive": "passive", "ranks": 3, "AP": 1, "abil": {
      "1": "When you take physical damage, you gain +1 Physical Resistance for 3 seconds. This stacks up to 5 times, up to once per second. Stacks fade away 1 at a time.", 
      "2": "When you take physical damage, you gain +1 Physical Resistance for 3 seconds. This stacks up to 10 times, up to once per second. Stacks fade away 1 at a time.",
      "3": "When you take physical damage, you gain +1 Physical Resistance for 3 seconds. This stacks up to 15 times, up to once per second. Stacks fade away 1 at a time."
    }
  },
  "1b": {"abil_name": "Rejuvination Cocoon", "required": 0, "prereq": null, "selected": 0, "img":"rejuvenationcocoon", "multi": false, "passive": false, "ranks": 3, "AP": 1, "abil": {
      "1": "Protect target ally with a shield of 90 temporary HP for 30 seconds. Heals 1d10 HP every 2 seconds while the shield persists.", 
      "2": "Protect target ally with a shield of 120 temporary HP for 30 seconds. Heals 1d10 HP every 2 seconds while the shield persists.",
      "3": "Protect target ally with a shield of 150 temporary HP for 30 seconds. Heals 1d10 HP every 2 seconds while the shield persists."
    }
  },
  "1c": {"abil_name": "Insidious Spores", "required": 0, "prereq": null, "selected": 0, "img":"insidiousspores", "multi": false, "passive": false, "ranks": 3, "AP": 1, "abil": {
      "1": "Target enemy becomes contaminated with spores for 18 seconds. Every 2 seconds the target takes 2d10 Poison and Rust damage. Stacks up to 2 times.  Enemies damaged by Insidious Spores become Contagious for five minutes afterwards, spreading Insidious Spores to some nearby enemies when they die.", 
      "2": "Target enemy becomes contaminated with spores for 18 seconds. Every 2 seconds the target takes 2d10 Poison and Rust damage. Stacks up to 3 times.  Enemies damaged by Insidious Spores become Contagious for five minutes afterwards, spreading Insidious Spores to some nearby enemies when they die.",
      "3": "Target enemy becomes contaminated with spores for 18 seconds. Every 2 seconds the target takes 2d10 Poison and Rust damage. Stacks up to 4 times.  Enemies damaged by Insidious Spores become Contagious for five minutes afterwards, spreading Insidious Spores to some nearby enemies when they die."
    }
  },
  "1d": {"abil_name": "Friends of Nature", "required": 0, "prereq": null, "selected": 0, "img":"friendsofnature", "multi": "multi", "passive": false, "ranks": 1, "AP": 2, "abil": {
      "1": {
        "1":"Bat: Calls a bat to your aid, giving nearby allies +10 sonic spellpower, +5 sonic resist, and +3 listen",
        "2":"Bird:  Calls a bird to your air, giving nearby allies +1 Dodge and +3 spot",
        "3":"Fox: 1 sneak attack damage, +3 MS",
        "4":"Frog: +2 PRR, +3 jump",
        "5":"Squirrel: +2 attack while flanking, +3 hide"
      }
    }
  },
  "1e": {"abil_name": "Strength or Wisdom", "required": 0, "prereq": null, "selected": 0, "img":"", "multi": "multi", "passive": "passive", "ranks": 1, "AP": 2, "abil": {
      "1": {"1": "+1 Strength", "2": "+1 Wisdom"}
    }
  },
  "2a": {"abil_name": "Seeking Balance", "required": 4, "prereq": null, "selected": 0, "img":"seekingbalance", "multi": false, "passive": "passive", "ranks": 3, "AP": 1, "abil": {
      "1": "You gain +1 Reflex Saving Throws, +2 Tumble, and +2 Balance while shapeshifted into an animal form, wielding two weapons, or unarmed. These are Primal bonuses. Skill bonuses required already having at least one rank in the skill.", 
      "2": "You gain +2 Reflex Saving Throws, +4 Tumble, and +4 Balance while shapeshifted into an animal form, wielding two weapons, or unarmed. These are Primal bonuses. Skill bonuses required already having at least one rank in the skill.",
      "3": "You gain +2 Reflex Saving Throws, +4 Tumble, and +4 Balance while shapeshifted into an animal form, wielding two weapons, or unarmed. These are Primal bonuses. Skill bonuses required already having at least one rank in the skill."
    }
  },
  "2b": {"abil_name": "Supple as Spring", "required": 4, "prereq": null, "selected": 0, "img":"suppleasspring", "multi": false, "passive": "passive", "ranks": 3, "AP": 1, "abil": {
      "1": "Nearby allies gain +1% Primal Bonus to Dodge if they have been damaged in combat in the past six seconds", 
      "2": "Nearby allies gain +2% Primal Bonus to Dodge if they have been damaged in combat in the past six seconds",
      "3": "Nearby allies gain +3% Primal Bonus to Dodge if they have been damaged in combat in the past six seconds"
    }
  },
  "2c": {"abil_name": "Favored Enemy", "required": 4, "prereq": null, "selected": 0, "img":"contagiousspores", "multi": "multi", "passive": "passive", "ranks": 1, "AP": 2, "abil": {
      "1": {
        "1": "Some things should not be. Gain +2 damage against Aberrations. This also increases your damage against your other favored enemies by +2.", 
        "2": "Some things should not be. Gain +2 damage against Constructs. This also increases your damage against your other favored enemies by +2.", 
        "3": "Some things should not be. Gain +2 damage against Undead. This also increases your damage against your other favored enemies by +2."
      }
    }
  },
  "2d": {"abil_name": "Natural Shielding", "required": 4, "prereq": null, "selected": 0, "img":"naturalshielding", "multi": false, "passive": "passive", "ranks": 3, "AP": 1, "abil": {
      "1": "Your summoned and charmed pets, hirelings, and monsters gain +30 maximum HP and +10 PRR.", 
      "2": "Your summoned and charmed pets, hirelings, and monsters gain +60 maximum HP and +20 PRR.",
      "3": "Your summoned and charmed pets, hirelings, and monsters gain +100 maximum HP and +30 PRR.  In addition, natural creatures you control gain evasion."
    }
  },
  "2e": {"abil_name": "Strength or Wisdom", "required": 4, "prereq": null, "selected": 0, "img":"", "multi": "multi", "passive": "passive", "ranks": 1, "AP": 2, "abil": {
      "1": {"1": "+1 Strength", "2": "+1 Wisdom"}
    }
  },
  "3a": {"abil_name": "Balanced Attacks", "required": 8, "prereq": "2a", "selected": 0, "img":"balancedattack", "multi": false, "passive": "passive", "ranks": 3, "AP": 1, "abil": {
      "1": "You gain a +2 Primal bonus to Attack as long as you are shapeshifted into an animal form, wielding two weapons, or unarmed.", 
      "2": "You gain a +4 Primal bonus to Attack as long as you are shapeshifted into an animal form, wielding two weapons, or unarmed.",
      "3": "You gain a +6 Primal bonus to Attack as long as you are shapeshifted into an animal form, wielding two weapons, or unarmed."
    }
  },
  "3b": {"abil_name": "Summer Smoke", "required": 8, "prereq": null, "selected": 0, "img":"summersmoke", "multi": false, "passive": false, "ranks": 3, "AP": 1, "abil": {
      "1": "Nearby allies have a small chance to deal 5d20 extra fire damage with their attacks.", 
      "2": "Nearby allies have a small chance to deal 10d20 extra fire damage with their attacks.",
      "3": "Nearby allies have a small chance to deal 15d20 extra fire damage with their attacks."
    }
  },
  "3c": {"abil_name": "Tsunami", "required": 8, "prereq": null, "selected": 0, "img":"tsunami", "multi": false, "passive": false, "ranks": 1, "AP": 2, "abil": {
      "1": "Sends forth a wave of water, knocking enemies down and dealing 30 cold damage plus 1d10 per character level and 30 bludgeoning damage plus 1d10 per character level. The cold damage and knockdown are negated on a successful Fortitude save vs. 10 + Wisdom modifier + Character level. Some monsters can resist Tsunami completely, such as Water Elementals and Oozes."
    }
  },
  "3d": {"abil_name": "The Oncoming Storm", "required": 8, "prereq": null, "selected": 0, "img":"oncomingstorm", "multi": false, "passive": "passive", "ranks": 3, "AP": 1, "abil": {
      "1": "Attacks by your summoned and charmed pets, hirelings, and monsters gain a 1% chance to knockdown enemies.", 
      "2": "Attacks by your summoned and charmed pets, hirelings, and monsters gain a 1% chance to deal 20d20 sonic damage.",
      "3": "Attacks by your summoned and charmed pets, hirelings, and monsters gain a 1% chance to deal 20d20 lightning damage."
    }
  }, 
  "3e": {"abil_name": "Strength or Wisdom", "required": 8, "prereq": null, "selected": 0, "img":"", "multi": "multi", "passive": "passive", "ranks": 1, "AP": 2, "abil": {
      "1": {"1": "+1 Strength", "2": "+1 Wisdom"}
    }
  },
  "4a": {"abil_name": "Paired Parry / Symetric Strikes", "required": 12, "prereq": "3a", "selected": 0, "img":"pp-ss", "multi": "multi", "passive": "passive", "ranks": 1, "AP": 2, "abil": {
      "1": {"1": "Gain +5 AC while in animal form, unarmed, or two-weapon fighting.", "2": "Gain 5% physical damage while in animal form, unarmed, or two-weapon fighting."}
    }
  },
  "4b": {"abil_name": "Autumn Harvest", "required": 12, "prereq": null, "selected": 0, "img":"autumnharvest", "multi": false, "passive": "passive", "ranks": 3, "AP": 1, "abil": {
      "1": "When enemies die there's a 5% chance for all party members near that enemy to receive 10d10 positive healing. (This isn\'t effected by spellpower)", 
      "2": "When enemies die there's a 5% chance for all party members near that enemy to receive 15d10 positive healing. (This isn\'t effected by spellpower)",
      "3": "When enemies die there's a 5% chance for all party members near that enemy to receive 20d10 positive healing. (This isn\'t effected by spellpower)"
    }
  },
  "4c": {"abil_name": "Stormrage", "required": 12, "prereq": null, "selected": 0, "img":"stormrage", "multi": false, "passive": false, "ranks": 1, "AP": 2, "abil": {
      "1": "Enemies damaged by your attacks or spells are also struck by lightning, dealing 10d20 electric damage, halved on a reflex save vs. DC 50. Lightning strikes up to one enemy each second. You also gain featherfall and Deflect Arrows. Lasts 18 seconds."
    }
  },
  "4d": {"abil_name": "Summon Dryad Elder", "required": 12, "prereq": null, "selected": 0, "img":"summondryad", "multi": false, "passive": false, "ranks": 1, "AP": 2, "abil": {
      "1": "Summon a Dryad Elder. She uses her magic for damage spells as well as support and healing."
    }
  },
  "4e": {"abil_name": "Strength or Wisdom", "required": 12, "prereq": null, "selected": 0, "img":"", "multi": "multi", "passive": "passive", "ranks": 1, "AP": 2, "abil": {
      "1": {"1": "+1 Strength", "2": "+1 Wisdom"}
    }
  },
  "5a": null,
  "5b": {"abil_name": "Chill of Winter", "required": 16, "prereq": null, "selected": 0, "img":"chillofwinter", "multi": false, "passive": false, "ranks": 3, "AP": 1, "abil": {
      "1": "Enemies that damage your nearby allies have a 20% chance to become chilled, receiving 1d20 cold and 1d20 rust damage every two seconds and slowing their attack and movement speed by 5% for 20 seconds.<br />This damage can stack up to 10 times.", 
      "2": "Enemies that damage your nearby allies have a 20% chance to become chilled, receiving 1d20 cold and 1d20 rust damage every two seconds and slowing their attack and movement speed by 15% for 20 seconds.<br />This damage can stack up to 10 times.",
      "3": "Enemies that damage your nearby allies have a 20% chance to become chilled, receiving 1d20 cold and 1d20 rust damage every two seconds and slowing their attack and movement speed by 25% for 20 seconds.<br />This damage can stack up to 10 times."
    }
  },
  "5c": {"abil_name": "Spirit Boon", "required": 16, "prereq": null, "selected": 0, "img":"spiritboon", "multi": "multi", "passive": false, "ranks": 1, "AP": 2, "abil": {
      "1": {"1": "Temporarily gain +2 Primal bonus to all physical abilities (Str, Dex, Con)", "2": "Temporarily gain +2 Primal bonus to all mental abilities (Int, Wis, Cha)"}
    }
  },
  "5d": null,
  "5e": {"abil_name": "Strength or Wisdom", "required": 16, "prereq": null, "selected": 0, "img":"", "multi": "multi", "passive": "passive", "ranks": 1, "AP": 2, "abil": {
      "1": {"1": "+1 Strength", "2": "+1 Wisdom"}
    }
  },
  "6a": {"abil_name": "Nature\'s Fury / Natural Evasion", "required": 20, "prereq": "4a", "selected": 0, "img":"nfne", "multi": "multi", "passive": "passive", "ranks": 1, "AP": 2, "abil": {
      "1": {"1": "Gain +1 critical damage multiplier on a roll of 19-20 while in animal form, unarmed, or two-weapon fighting.", "2": "Gain Evasion while in animal form, unarmed, or two-weapon fighting."}
    }
  },
  "6b": null,
  "6c": {"abil_name": "Avatar of Nature", "required": 20, "prereq": null, "selected": 0, "img":"aon", "multi": false, "passive": false, "ranks": 1, "AP": 2, "abil": {
      "1": "You become an Avatar of Nature. Every 3 seconds, you gain +1 size, +2 strength, +2 Constitution, a large bonus to damage based on size, and lose some movement speed, stacking up to size 4.<br />
      Size 1+: +50 size bonus to PRR<br />
      Size 2+: When you attack enemies they become poisoned, taking 2d10 poison damage every 2 seconds for several seconds. This poison stacks up to 5 times.<br />
      Size 3+: Enemies attacking you have a chance to become diseased, dealing 1d4 Constitution damage every two seconds for 10 seconds.<br />
      Size 4: The ground shakes when you put your foot down. Your third attack while standing still knocks down nearby enemies and deals extra bludgeoning damage in an area.<br />
      This costs 1 Spirit every few seconds per size you\'ve gained (Turns off if you run out of Spirit.)"
    }
  },
  "6d": null,
  "6e": {"abil_name": "Strength or Wisdom", "required": 20, "prereq": null, "selected": 0, "img":"", "multi": "multi", "passive": "passive", "ranks": 1, "AP": 2, "abil": {
      "1": {"1": "+1 Strength", "2": "+1 Wisdom"}
    }
  }
}