// Crée une fonction whoIsAdmin qui affiche les noms des utilisateurs qui sont admin qui prends en paramètre un tableau d'objet d'utilisateurs .
// Chaque objet utilisateur a les propriétés suivantes :
// - nom (string)
// - age (number)
// - estAdmin (boolean)
// La fonction doit retourner un tableau contenant les noms des utilisateurs qui sont admin.

function whoIsAdmin(users) {
	const adminNames = [];
	for (let i = 0; i < users.length; i++) {
		const user = users[i];
		if (user.estAdmin === true) {
			adminNames.push(user.nom);
		}
	}
	return adminNames; 
}

module.exports = {
	whoIsAdmin,
};
