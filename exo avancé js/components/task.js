import ManageDom from"./ManageDom.js";
export default class Task extends ManageDom {
    constructor(label){
        super();
        this.label = label;
        this.render();

        // appel de la méthode qui gere les evenements
    }
    render(){
        const section = this.createMarkup("section","",document.body,[{class : "task"}]);
        const h2 = this.createMarkup("h2",this.label,section);
        
        // Création du bouton valider

        // Création du bouton supprimer
        // Renvoie de la référence vers les deux boutons
    }
    manageEvents(){
        // gestion du click sur supprimer

        // gestion du click sur valider
    }
}