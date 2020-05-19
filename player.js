class Form{
	constructor(){
		this.input = createInput("Username");
		this.submit = createButton("Submit");
	}

	display(){
		this.input.position(70,85);
		this.submit.position(70,110);
	}

	hidef(){

		this.submit.mousePressed(()=>{
			this.input.hide() ;
			this.submit.hide() ;
			gamestate = 1 ;
		});
	}
}