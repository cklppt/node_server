var schemasDir = "../../../resources/gameValidationSchemas/";
var gameSchema = "gameSchema";

var atomicGameSchemas = {
		gameSchema:schemasDir+gameSchema,
		"npcTalk":schemasDir+"npcTalk",
		"questionAndAnswer":schemasDir+"questionAndAnswer",
		"hotspot": schemasDir + "hotspot",
		"rule" : schemasDir + "rule",
		"testSchema":schemasDir+"testSchema",
		"qrTagSchema":schemasDir+"qrTagSchema"
};

module.exports = atomicGameSchemas;
//module.exports.gameSchema = gameSchema;
