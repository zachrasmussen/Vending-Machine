


export class Food {
    constructor(name, price, img) {
        this.name = name
        this.price = price
        this.img = img
    }


    get Template() {
        return `
            <div class="col-4 p-2 m-1" onclick=">
                <div class="col-8">
                    <img class="img-fluid foods" src="${this.img}">
                    <div class="justify-content-evenly bg-dark text-light p-2">
                        <div><b>${this.name}</b></div>
                        <div><b>${this.price}</b></div>
                    </div>
                </div> 
            </div>
            `
    }
}

