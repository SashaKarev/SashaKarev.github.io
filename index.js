import {ProductCardComponent} from "../../components/product-card/index.js";
import {ProductPage} from "../product/index.js";
export class MainPage {
    constructor(parent) {
    this.parent = parent;
    }
    get pageRoot() {
        return document.getElementById('main-page')
        }
    getHTML() {
        return (
        `
        <div id="main-page" class="d-flex flex-wrap"><div/>
        `
        )
    }
    clickCard(e) {
        const cardId = e.target.dataset.id
        const productPage = new ProductPage(this.parent, cardId)
        productPage.render()
        }       
    getData() {
        return [
        {
        id: 1,
        src:
        "https://static.wikia.nocookie.net/fictionrulezforever/images/f/f6/Profile_-_Siamese_Cat.jpg",
        title: "Сиамская кошка",
        text: "Происхождение: Таиланд"
        },
        {
        id: 2,
        src:
        "https://w-dog.ru/wallpapers/5/17/293758380766135/kot-mejn-kun-ryzhij-pushistyj.jpg",
        title: "Мейн-кун",
        text: "Происхождение: США"
        },
        {
        id: 3,
        src:
        "https://santreyd.ru/upload/iblock/2ba/2bac2b4b388586bddff5b63e319732f8.jpg.b.jpg",
        title: "Персидская кошка",
        text: "Происхождение: Иран"
        },
        ]
        }
    render() {
        this.parent.innerHTML = ''
        const html = this.getHTML()
        this.parent.insertAdjacentHTML('beforeend', html)
        const data = this.getData()
        data.forEach((item) => {
            const productCard = new ProductCardComponent(this.pageRoot)
            productCard.render(item, this.clickCard.bind(this))
            })
    }
}
