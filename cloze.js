function ClozeCard(text, cloze) {
	if (text.indexOf(cloze) === -1){
		throw new Error ("Cloze deletion not found in input text.")
		}
	if (this instanceof ClozeCard) {
		this.fullText = text;
		this.cloze = cloze;
		this.partial = text.replace(cloze, "...");
	} else {
		return new ClozeCard(text, cloze)
	}
};

module.exports = ClozeCard;
