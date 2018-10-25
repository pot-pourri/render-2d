import Line from './Line' ;

export default class AnchoredLine extends Line {

	constructor ( fn ) {
		super();
		this.fn = fn ;
		this.current = this.fn();
	}

	update ( ) {
		this.current = this.fn();
		super.update();
	}

	materialize ( ) {
		return this.current;
	}

}
