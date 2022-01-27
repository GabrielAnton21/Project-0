import { LightningElement, api } from 'lwc';

export default class Header extends LightningElement {

    @api displayAboutUs(){
        this.dispatchEvent(new CustomEvent("aboutus", {detail: true}))

    }

    @api displayCommunity(){
        this.dispatchEvent(new CustomEvent("community", {detail: true}))

    }

    @api displaySellYourBooks(){
        this.dispatchEvent(new CustomEvent("sellyourbooks", {detail: true}))

    }

    @api displayHome(){
        this.dispatchEvent(new CustomEvent("home", {detail: true}));
    }

    
}
