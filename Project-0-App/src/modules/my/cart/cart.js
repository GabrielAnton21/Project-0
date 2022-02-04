import { LightningElement, api } from 'lwc';
import { items } from '../mockDB';

export default class App extends LightningElement {

    // createNewEntry(){
    //     div = this.template.createElement("div");
        

    //     div.appendChild(div);
    //     div.appendChild(div);
    //     div.appendChild(div);
    //     div.appendChild(div);


    // }

    @api cartMethod(item){
        // this.createNewEntry()

        // this.template.querySelector(".inner-card").appendChild(div);

        this.template.querySelector(".name").textContent += item.name;
        this.template.querySelector(".author").textContent += item.author;
        this.template.querySelector(".rating").textContent += item.rating;
        this.template.querySelector(".price").textContent += item.price;
        console.log("Cart caught it.");
        console.log(item)
    }

    

    clearCart(){
        this.template.querySelector(".name").textContent = "Name: ";
        this.template.querySelector(".author").textContent = "Author: ";
        this.template.querySelector(".rating").textContent = "Rating: ";
        this.template.querySelector(".price").textContent = "Price: ";

    }


}