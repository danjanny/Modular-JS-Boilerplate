/**
 * Created by: Ridha Danjanny
 * ridhadanjanny.mail@gmail.com
 */

import Dropdown from './Dropdown';

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

        let dropdown = new Dropdown().render();
        this.root.append(`<p id=${this.state.provinsi.id}>${this.state.provinsi.dapil} , ${this.state.provinsi.long_number}, ${dropdown}</p>`);

        // event handling as remove
        let id = "p#" + this.state.provinsi.id;
        let rowProvinsi = this.root.children(id);
        rowProvinsi.on('click', () => {
            rowProvinsi.remove();
            console.log(this.state.provinsi.dapil + " is deleted.");
        });

    }

}

export default Provinsi;