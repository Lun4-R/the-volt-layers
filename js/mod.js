let modInfo = {
	name: "Upgrade Wall V0.5",
	id: "krizthedev",
	author: "KrizNT // Kriz#0250",
	pointsName: "AP",
	discordName: "",
	discordLink: "",
	initialStartPoints: new Decimal (1), // Used for hard resets and new players
	endgame: new Decimal("e2000000"),
    specialEndgameText: "v0.5 Endgame: e2e6 AP",
	offlineLimit: 1,  // In hours
}

// Set your version in num and name
let VERSION = {
	num: "0.4",
	name: "SP Layer",
}

let changelog = `<h1>Changelog:</h1><br>
	<h3>v0.4</h3><br>
		- Added AP Based Boosters as well as 12 New Achivements with noice boosts.<br>
		- Added SP Layer and 4 SP Upgrades and 1 SP Milestone.`

let winText = `Congratulations! You have reached the end and beaten this game, but for now...`

// If you add new functions anywhere inside of a layer, and those functions have an effect when called, add them here.
// (The ones here are examples, all official functions are already taken care of)
var doNotCallTheseFunctionsEveryTick = ["blowUpEverything"]

function getStartPoints(){
    return new Decimal(modInfo.initialStartPoints)
}

// Determines if it should show points/sec
function canGenPoints(){
	return true
}

// Calculate points/sec!
function getPointGen() {
	if(!canGenPoints())
		return new Decimal(0)

	let gain = new Decimal(1)
	if (player.SP.unlocked) gain = gain.times(layers.SP.effect()[0])
	if (hasUpgrade("BP", 11)) gain = gain.times(layers["BP"].upgrades[11].effect());
	if (hasUpgrade("BP", 13)) gain = gain.times(layers["BP"].upgrades[13].effect());
	if (hasUpgrade("BP", 15)) gain = gain.times(layers["BP"].upgrades[15].effect());
	if (hasUpgrade("BP", 21)) gain = gain.times(layers["BP"].upgrades[21].effect());
	if (hasUpgrade("BP", 22)) gain = gain.times(layers["BP"].upgrades[22].effect());
	if (hasUpgrade("BP", 23)) gain = gain.times(layers["BP"].upgrades[23].effect());
	if (hasUpgrade("BP", 24)) gain = gain.times(layers["BP"].upgrades[24].effect());
	if (hasUpgrade("BP", 25)) gain = gain.times(layers["BP"].upgrades[25].effect());
	if (hasUpgrade("BP", 31)) gain = gain.times(layers["BP"].upgrades[31].effect());
	if (hasUpgrade("BP", 32)) gain = gain.times(layers["BP"].upgrades[32].effect());
	if (hasUpgrade("BP", 33)) gain = gain.times(layers["BP"].upgrades[33].effect());
	if (hasUpgrade("BP", 34)) gain = gain.times(layers["BP"].upgrades[34].effect());
	if (hasUpgrade("BP", 35)) gain = gain.times(layers["BP"].upgrades[35].effect());
	if (hasUpgrade("SP", 12)) gain = gain.times(layers["SP"].upgrades[12].effect());
	if (hasUpgrade("SP", 13)) gain = gain.times(layers["SP"].upgrades[13].effect());
	if (hasUpgrade("SP", 14)) gain = gain.times(layers["SP"].upgrades[14].effect());
	if (hasUpgrade("SP", 15)) gain = gain.times(layers["SP"].upgrades[15].effect());
	if (hasUpgrade("SP", 22)) gain = gain.times(layers["SP"].upgrades[22].effect());
	return gain 
}

	function getPointMult(){
		let gain = new Decimal(1)


	return gain
}

// You can add non-layer related variables that should to into "player" and be saved here, along with default values
function addedPlayerData() { return {
}}

// Display extra things at the top of the page
var displayThings = [
	function() {if (inChallenge("BP", 11)) return "The game is currently <h1>0%</h1> harder."},
]

// Determines when the game "ends"
function isEndgame() {
	return player.points.gte(modInfo.endgame)
}



// Less important things beyond this point!

// You can change this if you have things that can be messed up by long tick lengths
function maxTickLength() {
	return(3600) // Default is 1 hour which is just arbitrarily large
}

// Use this if you need to undo inflation from an older version. If the version is older than the version that fixed the issue,
// you can cap their current resources with this.
function fixOldSave(oldVersion){
}