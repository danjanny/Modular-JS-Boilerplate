import $ from 'jquery';
import axios from 'axios';
import Provinsi from './Provinsi';

class App {

    constructor(root) {
        this.name = "Ridha Danjanny";
        this.title = "Full task developer";
        this.root = $(root);
    }

    getDataFromApi() {
        return axios.get("http://qcindi19.com/emonev/api_qc_test/get_data/");
    }

    render() {

        // get Promise to fetch data
        let myPromise = this.getDataFromApi();

        // Fulfilled the promise
        myPromise.then((provinsi) => {
            // fetch data provinsi
            provinsi.data.forEach((provinsi) => {
                console.log(provinsi);
               new Provinsi(this.root, provinsi).render();
            });
        })
        .catch((error) => {
            this.root.html("Connection error!");
            console.log(error);
        });

    }

}

export default App;