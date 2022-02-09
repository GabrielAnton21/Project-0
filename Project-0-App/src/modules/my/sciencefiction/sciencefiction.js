import { LightningElement, api } from 'lwc';
import { items } from '../mockDB'


export default class ScienceFiction extends LightningElement {
    
    

    renderedCallback(){
        console.log(items)
        
        console.log(this.template.querySelectorAll('div.inner-card')[0]);
      
        for(var i = 0; i < this.template.querySelectorAll('div.inner-card').length; i++){
            console.log('inside function')
            
            this.template.querySelectorAll('div.inner-card')[i].querySelector('.name').textContent += items[i].name;
            this.template.querySelectorAll('div.inner-card')[i].querySelector('.author').textContent += items[i].author;
            this.template.querySelectorAll('div.inner-card')[i].querySelector('.rating').textContent += items[i].rating;
            this.template.querySelectorAll('div.inner-card')[i].querySelector('.price').textContent += items[i].price;

        }

      
        
    }

    @api addToCart(event) {


        this.dispatchEvent(new CustomEvent('addtocart',{
            detail:{
                name: items[event.target.id.substr(0,1)].name,
                author: items[event.target.id.substr(0,1)].author,
                price: items[event.target.id.substr(0,1)].price,
                rating: items[event.target.id.substr(0,1)].rating
            },
            bubbles: true,
            composed: true
        }));
        console.log("Event created!");
        console.log(items[event.target.id.substr(0,1)].name + ' was clicked.');
        console.log(items[event.target.id.substr(0,1)].author + ' was clicked.');
        console.log(items[event.target.id.substr(0,1)].price + ' was clicked.');
        console.log(items[event.target.id.substr(0,1)].rating + ' was clicked.');
    }
    

    
}
