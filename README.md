**Epic Destiny JS Objects**
===========================

this repo is meant to house the individual Javascript Object files for each epic destiny.

Each destiny gets its own file, which will be used in the grunt-tpl task to create the window object that the backbone app will use for the data model.

object structure is currently:

  {
	  "1a": {"abil_name": "","required": "0", "prereq": "null", "ranks": "3", "AP": "1", "abil": {
	      "1": "", 
	      "2": "", 
	      "3": ""
	    }
	  },
  
"1a" is the position that it belong in the destiny graph, which treats the origin (0,0) as 1a, and and 0,1 as 1b.

![image](http://jeffharnois.com/images/graph.gif)

"required" is how many points spent in the tree are required.

"prereq" is the ID ("1a") that is required to take that ability ("null" if nothing is required).

"ranks" is the total number of ranks in the ability.

"AP" is how many action points each rank requires.

"abil" is an object array of each rank's description, starting at 1 (we assume default is "0", so that you don't have the ability until you take it)

Examples
--------
"Wild Shots" of Shiradi Champion's object would look like this:

	 "1b": {"abil_name": "Wild shots", "required": "0", "prereq": "null", "ranks": "3", "AP": "1", "abil": {
	     "1": "(Active Cooldown: 45secs) Toss daggers in a wide arc in front you, each dealing 10d20 piercing damage",
	     "2": "(Active Cooldown: 45secs) Toss daggers in a wide arc in front you, each dealing 15d20 piercing damage",
	     "3": "(Active Cooldown: 45secs) Toss daggers in a wide arc in front you, each dealing 20d20 piercing damage"
	   }
	 },