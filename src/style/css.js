class CSS {
    #style = document.createElement('style');
    constructor() {
        document.head.appendChild(this.#style);
    }
    apply() {
        style.sheet.insertRule('#target {color: darkseagreen}');
    }
}