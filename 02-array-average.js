// Crée un tableau `notes` contenant 5 nombres
// Écrire une fonction averageNote avec `notes` comme parametre qui effectue les opérations suivantes :
// - Calcule la moyenne des notes
// - retourne un message "Réussi" si la moyenne est >= 10, sinon "Échoué"

function averageNote(notes) {
	let sum = 0;
	for (let i = 0; i < notes.length; i++) {
		sum += notes[i];
	}
	const average = sum / notes.length;
	if (average >= 10) {
		return "Réussi"
	} else {
		return "Échoué"
	}

}
module.exports = {
	averageNote,
};



