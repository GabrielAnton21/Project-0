import { LightningElement, api } from 'lwc';
import { items } from '../mockDB'

export default class Home extends LightningElement {

    isScienceFictionClicked = false;

    

    displayScienceFictionPage() {
        // this.template.querySelector()
    
        this.isScienceFictionClicked = !this.isScienceFictionClicked;
        if(this.isScienceFictionClicked) {
            console.log("You are browsing Sci Fi Books");
        }
        else {
            console.log("You are on the home page.")
        }
    }

    // connectedCallback() {
    //     return items;
    // }

    // renderedCallback() {
    //     items = items;
    // }

    handleAddToCart(e){
        console.log("Event caught");
    }
    
}