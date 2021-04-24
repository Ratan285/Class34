class Border {
    constructor() {
        var options = {
            isStatic: true,
            density: 10
        }
        this.y = 400;
        this.x = 750;
        this.leftBody = Bodies.rectangle(this.x - 750, this.y , 50, 800, options);
        this.rightBody = Bodies.rectangle(this.x + 750, this.y , 50, 800, options);
        this.width = 50;
        this.height = 800
        World.add(world, this.leftBody);
        World.add(world, this.rightBody);
    }
}