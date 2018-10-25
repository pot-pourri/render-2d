import Point from './Point' ;

export default class AnchoredPoint extends Point {

	constructor ( fn ) {
		super();
		this.fn = fn ;
		this.current = this.fn();
	}

	update ( ) {
		this.current = this.fn( ) ;
		super.update();
	}

	materialize ( ) {
		return this.current ;
	}

}
