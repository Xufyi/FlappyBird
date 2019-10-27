function Game(ctx,bird,pipe,mountain,land){
    this.ctx = ctx
    this.bird = bird
    this.pipe = pipe
    this.mountain = mountain
    this.land = land

    this.init()
}

Game.prototype.init = function(){
    this.start()
}

Game.prototype.start = function(){
    var me = this
    setInterval(function(){
        //清屏
        me.clear()
        //渲染山
        me.renderMountain()
        //渲染地
        me.renderLand()

    },200)
}
//渲染山
Game.prototype.renderMountain = function(){
    console.log(this.mountain,this.mountain.x)
    // this.ctx.drawImage(this.moutain.img,x,y)
    img = this.mountain.img[0]
    this.mountain.x -= this.mountain.step//移动
    //边界判断
    if(this.mountain.x < -img.width){
        this.mountain.x = 0
    }
    // 绘制图片
 	this.ctx.drawImage(img, this.mountain.x, this.mountain.y);
 	this.ctx.drawImage(img, this.mountain.x + img.width, this.mountain.y);
 	this.ctx.drawImage(img, this.mountain.x + img.width * 2, this.mountain.y);
 	
}
//渲染地
Game.prototype.renderLand = function(){
    img = this.land.img[0]
    this.land.x -= this.land.step //移动
    //边界判断
    if(this.land.x < -img.width){
        this.land.x = 0
    }
    this.ctx.drawImage(img, this.land.x, this.land.y);
 	this.ctx.drawImage(img, this.land.x + img.width, this.land.y);
 	this.ctx.drawImage(img, this.land.x + img.width * 2, this.land.y);
}
//清屏
Game.prototype.clear = function(){
    this.ctx.clearRect(0,0,360,512)
}