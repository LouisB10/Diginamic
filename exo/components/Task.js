import ManageDom from "./ManageDom.js";
export default class Task extends ManageDom {
  constructor(label) {
    super();
    this.label = label;
    this.dom_elements = this.render();
    // appel de la méthode qui gère les événement
    this.manageEvents();
  }
  render() {
    const section = this.createMarkup("section", "", document.body, [
      { class: "task" },
    ]);
    const h2 = this.createMarkup("h2", this.label, section);

    // Création du bouton valider
    const btnv = this.createMarkup("button", "Valider", section);
    // Création du bouton supprimer
    const btns = this.createMarkup("button", "Supprimer", section);
    // Renvoie de la référence vers les deux boutons
    return {
      section,
      btnv,
      btns,
      h2,
    };
  }

  manageEvents() {
    // Gestion du click sur supprimer
    this.dom_elements.btns.onclick = (event) => {
      if (window.confirm("Souhaitez-vous vraiment supprimer la section ?"))
        this.dom_elements.section.remove();
      {
      }
    };
    // Gestion du click sur valider
    this.dom_elements.btnv.onclick = (event) => {
      this.dom_elements.section.remove();
      document.body.appendChild(this.dom_elements.section);
      this.dom_elements.btnv.textContent = "Invalidé";
      // console.log(document.body);
      // this.dom_elements.section.appendChild(document.body);
    };
  }
}
