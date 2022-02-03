import { LightningElement } from 'lwc';
import aboutus from '../aboutus/aboutus.html'
import community from '../community/community.html'
import { items } from '../mockDB'

export default class App extends LightningElement {

    whatTemplate = "1";

    pageClicked = false;

    aboutUsPage = false;
    communityPage = false;
    sellYourBooksPage = false;
    homePage = true;


    handleAboutUs(e){
        this.aboutUsPage = true;
        this.sellYourBooksPage = false;
        this.homePage = false;
        this.communityPage = false;
        
        this.pageClicked = true;
        this.whatTemplate = "2";

        
        console.log(e.detail);

    }

    handleCommunity(e){
        this.aboutUsPage = false;
        this.sellYourBooksPage = false;
        this.homePage = false;
        this.communityPage = true;

        this.pageClicked = true;
        this.whatTemplate = "3";
        
        
        console.log(e.detail);

    
    }

    handleSellYourBooks(e){
        this.aboutUsPage = false;
        this.sellYourBooksPage = true;
        this.homePage = false;
        this.communityPage = false;
        
        this.pageClicked = true;
        this.whatTemplate = "4";
        
        console.log(e.detail);
        
    }

    handleHome(e){
        this.aboutUsPage = false;
        this.sellYourBooksPage = false;
        this.homePage = true;
        this.communityPage = false;

        this.pageClicked = false;
        console.log(this.homePage);
        
    }

    
    

}
