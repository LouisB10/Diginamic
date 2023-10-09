import ManageDom from"./ManageDom.js";
import Task from "./task.js";

export default class FormTask extends ManageDom{
    constructor(){
        super();
        this.dom_elements = this.render();
        this.handleEvents();
    }
    render(){
        const form = this.createMarkup("form","",document.body);
        const label = this.createMarkup("label","Tâche",form,[{"for":"task"}]);
        const input = this.createMarkup("input","",form,[{"type":"text"},{"id": "task"},{"name":"task"}]);
        const submit_button = this.createMarkup("input","",form,[{"type":"submit"},{"value": "Ajouter"}]);
        return{
            form,
            input
        };
    }
    handleEvents(){

        // Si le mot clé function est employé, this repésente l'instance appelante de la fonction (ici form)

        // Si l'expression clé => employé, this représente l'instance de la classe dans laquelle la fonction a été déclarée
        this.dom_elements.form.onsubmit = (event) => {
            event.preventDefault();
            // Création de taches ici
            console.log("this", this);

            const formData = new FormData(this.dom_elements.form);
            const task = new Task (formData.get("task"));

        }
    }
}




