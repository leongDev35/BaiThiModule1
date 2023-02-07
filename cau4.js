
class rectangle{
    constructor(x,y,width,height,color){
        this.x = x;
        this.y = y;
        this.color = color;
        this.width = width;
        this.height = height;
    }
    render(){
        let context = document.getElementById("canvas").getContext("2d");
        context.fillStyle = this.color;
        context.fillRect(this.x, this.y, this.width, this.height);
        context.fill()
    }
}
let rectangle1 = new rectangle(10,10,100,100,"#ff0000")
rectangle1.render()