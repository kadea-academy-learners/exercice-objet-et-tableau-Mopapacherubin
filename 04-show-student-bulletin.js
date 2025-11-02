// Tu disposes d'un tableau nommé `eleves` dont chaque élément est un objet ayant la structure suivante :
// {
//   nom: string,      // Le nom de l'élève
//   notes: number[]   // Un tableau de notes (nombres) obtenues par l'élève
// }
//
// Écris une fonction `showStudentBulletin(eleves)` qui, pour chaque élève du tableau, retourne un bulletin scolaire contenant :
// - Son nom
// - Sa moyenne (calculée à partir de ses notes, arrondie à deux décimales)
// - Un commentaire basé sur la moyenne obtenue :
//     - Moyenne >= 16 : "Excellent"
//     - Moyenne >= 14 : "Très Bien"
//     - Moyenne >= 12 : "Bien"
//     - Moyenne >= 10 : "Passable"
//     - Moyenne < 10  : "À revoir"
// Dans le cas où l'élève n'a pas de notes, la moyenne doit être considérée comme 0 et le commentaire "À revoir".
function showStudentBulletin(eleves) {
	if (!eleves.notes || eleves.notes.length === 0) {
		return {
			nom: eleves.nom,
			moyenne: 0,
			commentaire: "À revoir",
		};
	}	

	const total = eleve.notes.reduce((somme, note) => somme + note, 0);
	const moyenne = total / eleve.notes.length;
	const moyenneArrondie = Number(moyenne.toFixed(2));

		let commentaire;
		if (moyenneArrondie >= 16) {
			commentaire = "Excellent";
		} else if (moyenneArrondie >= 14) {
			commentaire = "Très Bien";
		} else if (moyenneArrondie >= 12) {
			commentaire = "Bien";
		} else if (moyenneArrondie >= 10) {
			commentaire = "Passable";
		} else {
			commentaire = "À revoir";
		}

		return {
			nom: eleve.nom,
			moyenne: moyenneArrondie,
			commentaire: commentaire
		};
	};


}

module.exports = {
	showStudentBulletin,
};