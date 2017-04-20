function ClozeCard (text, cloze) {
	if (text.indexOf(cloze) === -1){
		throw new Error ("Cloze deletion not found in input text.")
	}
	this.fullText = text;
	this.cloze = cloze;
	this.partial = text.replace(cloze, "...");
	this.displayCard = function() {
		console.log(this.fullText);
	}
};

module.exports = ClozeCard;
