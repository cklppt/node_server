var schema = {
	"description":"A NPCTalk game element",
	"properties": {
	  "id" : {
	    "description": "The id of the mission (unique throughout the game).",
	    "type" : "string",
	    "required": true
	  },
	  "name": {
	    "description": "The name of the mission (as displayed to the user).",
	    "type" : "string",
	    "required": true
	  },
	  "charimage": {
	    "description": "The filename of the background image that is displayed (image of the NPC).",
	    "type": "string",
	    "required":false
	  },
	  "nextdialogbuttontext": {
	    "description": "Text displayed on the <<next>> button. Default: ?!?!? ",
	    "type" : "string",
	    "required": false
	  },
	  "endbuttontext": {
	    "description": "Text displayed on the <<next>> button. Default: ?!?!? ",
	    "type" : "string",
	    "required": false
	  },
	  "dialogItem": {
	    "description": "The array containing all dialog options.",
	    "type": "array",
	    "minItems": 1,
	    "required": true,
	    "items": {
	      "properties": {
	        "text":{
	          "description": "The dialog text displayed to the user.",
	          "type":"string"
	        }
	      }

	    }
	  },
	  "onStart": {
	    "description": "The event to be executed on the start of the mission",
	    "type": "array",
	    "required": false
	  },
	  "onEnd": {
	    "description": "The event to be executed after the mission",
	    "type": "array", 
	    "required": false
	  }
	}
};
module.exports = schema;