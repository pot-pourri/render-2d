import Point from './Point' ;

export default class FixedPoint extends Point {

	constructor ( x , y ) {
		super();
		this.x = x ;
		this.y = y ;
	}

	update ( ) {
		super.update();
	}

	materialize ( ) {
		return this ;
	}

}
