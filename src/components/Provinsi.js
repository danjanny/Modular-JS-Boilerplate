class Provinsi {

    constructor(root, provinsi) {
        // {id, dapil, long_number}
        this.root = root; // get root
        this.state = {
            provinsi: provinsi
        }
    }

    render() {

        // append element
        this.root.append(`<p id=${this.state.provinsi.id}>${this.state.provinsi.dapil} , ${this.state.provinsi.long_number}</p>`);

        // event handling as remove
        let id = "p#" + this.state.provinsi.id;
        this.root.children(id).on('click', () => {
            this.root.children(id).remove();
            console.log(this.state.provinsi.dapil + " is deleted.");
        });

    }

}

export default Provinsi;