import Line from './Line' ;

export default class HorizontalLine extends Line {

	constructor ( y ) {
		super();
		this.y = y ;
	}

	update ( ) {
		super.update();
	}

	materialize ( ) {
		return this;
	}

}
