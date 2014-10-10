function Car(make, model, color) {
  this.make = make;
  this.model = model;
  this.year = new Date().getFullYear();
  this.color = color;
  this.previous_owners=[];
  this.current_owner="manufacturer";
  this.state="off";
  this.passengers=[];
}


Car.prototype.sale = function(newOwner){
	this.previous_owners.push(this.current_owner);
	this.current_owner=newOwner;

};

Car.prototype.paint = function(newColor){
	this.color = newColor;
};

Car.prototype.start=function(){
	this.state = "on";
};

Car.prototype.off=function(){
	this.state= "off";
};

Car.prototype.park=function(){
	if(this.state==="off"){
		console.log("parked!");
		return "parked!";
 }
};
Car.prototype.pickUp = function(name){
  if(this.state === "on"){
    console.log("driving to pick up " + name);
    this.passengers.push(name);
  }
};
 Car.prototype.dropOff= function(name){
 	if(this.state==="on"){
 		if(this.passengers.indexOf(name) !== -1) {
 			this.passengers.splice(this.passengers.indexOf(name), 1);

 		}
 }
};
module.exports = Car;