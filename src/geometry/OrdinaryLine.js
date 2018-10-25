import Line from './Line' ;

export default class OrdinaryLine extends Line {

	constructor ( a , b ) {
		super();
		this.a = a ;
		this.b = b ;
	}

	update ( ) {
		super.update();
	}

	materialize ( ) {
		return this;
	}

}
