class Cars{
    Carsconstructor(make, model, colour, image, registNumber, price) {
    this.make = make;
    this.model = model;
    this.colour =colour;
    this.image=image;
    this.registNumber=registNumber;
    this.price=price;
    
};
editPrice(newPrice)
{
    this.price=newPrice;
}
showAll()
{
    console.log(this);
}
}

const car1 = new Cars("toyata", 2020, "white", 112233, '8gjfi', 70000);
const car2 = new Cars("houandai", 2018, "black", 73635, 'du8787', 100000);
const car3 = new Cars("ford", 2000, "blue", 112233, 'hd65d', 200000);
const car4 = new Cars("toyata", 1017, "black", 765408, '876dj', 99000);
const car5 = new Cars("mazda", 2021, "red", 635330, '76ff8d', 300000);

car1.editPrice(80000);
car1.showAll();

