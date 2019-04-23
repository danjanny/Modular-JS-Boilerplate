/**
 * Created by: Ridha Danjanny
 * ridhadanjanny.mail@gmail.com
 */

import axios from 'axios';
import Provinsi from './Provinsi';
import './app.css';

class App {

    constructor(root) {
        this.name = "Ridha Danjanny";
        this.title = "Full task developer";
        this.rootId = "root";
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
            let provinsiLen = provinsi.data.length;
            let i = 0;
            provinsi.data.forEach((provinsi) => {
               new Provinsi(this.rootId, provinsi).render();
               if(i == provinsiLen - 1) {
                   this.createNewNode('p', 'Ridha Danjanny', this.rootId);
               }
               i++;
            });

        })
        .catch((error) => {
            this.root.html("Connection error!");
            console.log(error);
        });
    }

    createNewNode(el, content, root) {
        let newNode = document.createElement(el);
        newNode.className = "myClass";
        newNode.id = "myId";
        newNode.textContent = content;
        let parentRoot = document.getElementById(root);
        parentRoot.appendChild(newNode);
    }

}

export default App;