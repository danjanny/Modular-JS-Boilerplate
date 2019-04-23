/**
 * Created by: Ridha Danjanny
 * ridhadanjanny.mail@gmail.com
 */

import Dropdown from './Dropdown';
import './app.css';

class Provinsi {

    constructor(root, provinsi) {
        // {id, dapil, long_number}
        this.root = root; // get root
        this.state = {
            provinsi: provinsi
        }
    }

    render() {
        // create row provinsi
        let dd = new Dropdown().render();
        let rowProvinsi = document.createElement('p');
        rowProvinsi.setAttribute('id', this.state.provinsi.id);
        rowProvinsi.textContent = `${this.state.provinsi.id}. ${this.state.provinsi.dapil} , ${this.state.provinsi.long_number}, ${dd}`;
        document.getElementById(this.root).appendChild(rowProvinsi);

        // remove provinsi
        rowProvinsi.addEventListener('click', (e) => {
            rowProvinsi.parentNode.removeChild(rowProvinsi);
           console.log(this.state.provinsi.dapil +  " is deleted!");
        });
    }
}

export default Provinsi;