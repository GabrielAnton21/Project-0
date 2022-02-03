import { LightningElement } from 'lwc';
import { items } from '../mockDB'


export default class HardSFGenre extends LightningElement {

    
    
    renderedCallback(){
        console.log(items)

        this.template.querySelector('.name').textContent += items[0].name;
        this.template.querySelector('.author').textContent += items[0].author;
        this.template.querySelector('.publisher').textContent += items[0].description;
        this.template.querySelector('.rating').textContent += items[0].rating;
        this.template.querySelector('.price').textContent += items[0].price;
        
        
        
    
    }

    
}
