import { LightningElement, api } from 'lwc';

export default class Header extends LightningElement {

    menuIsOpen = false;

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

    handleClick(){
        
        this.menuIsOpen = !this.menuIsOpen;
        
        console.log(this.menuIsOpen);


        if(this.menuIsOpen === false){
            this.template.querySelector('.my-menu').classList.add('slds-is-open');
            console.log("close menu")
        }
        else{
            this.template.querySelector('.my-menu').classList.remove('slds-is-open');
            console.log("open menu")
        }
        
    }

    
}
