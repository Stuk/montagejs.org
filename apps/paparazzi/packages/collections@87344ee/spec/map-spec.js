var Map=require("../map"),describeDict=require("./dict"),describeMap=require("./map"),describeMapChanges=require("./listen/map-changes");describe("Map",function(){describeDict(Map),describeMap(Map),describeMapChanges(Map)})