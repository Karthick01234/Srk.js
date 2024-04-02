class DB {
	#obj = {}
	#root
	constructor(parent) {
		this.#root = parent;
	}
	findData() {
		const root = document.getElementById(this.#root);
		const input = root.getElementsByTagName("input");
		const n = input.length;
		for (let i = 0; i < n; i++) {
			this.#obj[input[i].name] = input[i].value;
		}
		this.#obj = JSON.stringify(this.#obj);
	}
	sendData(url) {
		const request = new XMLHttpRequest();
		xhttp.onreadystatechange = function () {
			if (this.readyState == 4 && this.status == 200) {
				return this.responseText;
			}
		};
		request.open('POST', url, true);
		request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
		/*Content - Type: text / plain Content - Type: multipart / form - data; boundary = --------------------------- 314911788813839
	    "Content-Type", data.contentType*/
		request.send(data);
	}
}

module.export = DB;