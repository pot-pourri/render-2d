import Line from './Line' ;

export default class VerticalLine extends Line {

	constructor ( x ) {
		super();
		this.x = x ;
	}

	update ( ) {
		super.update();
	}

	materialize ( ) {
		return this;
	}

}
