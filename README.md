**Epic Destiny JS Objects**
===========================

this repo is meant to house the individual Javascript Object files for each epic destiny.

Each destiny gets its own file, which will be used in the grunt-tpl task to create the window object that the backbone app will use for the data model.

object structure is currently:

	  "1a": {"abil_name": "","required_by": null, "required": "0", "prereq": "null", "selected": 0, "img":"", "multi": false, "passive":"true", "ranks": "3", "AP": "1", "abil": {
	      "1": "", 
	      "2": "", 
	      "3": ""
	    }
	  },
  
"1a" is the position that it belong in the destiny graph, which treats the origin (1,1) as 1a, and and 1,2 as 1b.

![image](http://jeffharnois.com/images/graph.gif)

"abil_name" is the name of the ability.

"required_by" is which abilities have this as a prereq.  This is used for validation when subtracting points. 

"required" is how many points spent in the tree are required.

"prereq" is an object ({"req":"1a","tier":"1"}) that is required to take that ability ("null" if nothing is required), required ID and tier if there is something required.

"selected" is used by the UI to determine how many ranks have been taken by the user: this should always be "0".

"multi" is used to determine if the ability is a multi enhancement or not (has multiple choices at the first tier).

"passive" is either "true" or "false," and refers to if it is an active ability or not.

"ranks" is the total number of ranks in the ability.

"AP" is how many action points each rank requires.

"abil" is an object array of each rank's description, starting at 1 (we assume default is "0", so that you don't have the ability until you take it)

Examples
--------
"Wild Shots" of [Shiradi Champion](http://ddowiki.com/page/Shiradi_Champion)'s object would look like this:

    "1b": {"abil_name": "Wild Shots", "required_by": null, "required": 0, "prereq": null, "selected": 0, "img":"", "multi": false, "passive": false, "ranks": 3, "AP": 1, "abil": {
        "1": "(Cooldown: 45secs) Toss daggers in a wide arc in front you, each dealing 10d20 piercing damage",
        "2": "(Cooldown: 30secs) Toss daggers in a wide arc in front you, each dealing 15d20 piercing damage",
        "3": "(Cooldown: 15secs) Toss daggers in a wide arc in front you, each dealing 20d20 piercing damage"
      }
    }

"Spell School Specialist" of [Magister](http://ddowiki.com/page/Magister)'s object would look like this:

    "2d": {"abil_name": "Spell School Specialist", "required_by": null, "required": 4, "prereq": null, "selected": 0, "img":"", "multi": "multi", "passive": "passive", "ranks": 3, "AP": 1, "abil": {
        "1": {
          "1": "+1 Abjuration DC if you have Spell Focus: Abjuration", 
          "2": "+1 Conjuration DC if you have Spell Focus: Conjuration", 
          "3": "+1 Divination DC if you have Spell Focus: Divination", 
          "4": "+1 Enchantment DC if you have Spell Focus: Enchantment", 
          "5": "+1 Evocation DC if you have Spell Focus: Evocation", 
          "6": "+1 Illusion DC if you have Spell Focus: Illusion", 
          "7": "+1 Necromancy DC if you have Spell Focus: Necromancy", 
          "8": "+1 Transmutation DC if you have Spell Focus: Transmutation"
        }, 
        "2": "+2 Spell School DC",
        "3": "+3 Spell School DC"
      }
    },
