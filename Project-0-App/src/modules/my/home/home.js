import { LightningElement, api } from 'lwc';
import items from '../mockDB'

export default class Home extends LightningElement {

    isHardSFGenreClicked = false;

    


    displayHardSFPage() {
        // this.template.querySelector()

        this.isHardSFGenreClicked = !this.isHardSFGenreClicked;
        if(this.isHardSFGenreClicked) {
            console.log("You're browsing Hard Sci Fi Books");
        }
        else {
            console.log("You are on the home page.")
        }
    }

    connectedCallback() {
        return items;
    }

    renderedCallback() {
        items = items;
    }
    
}