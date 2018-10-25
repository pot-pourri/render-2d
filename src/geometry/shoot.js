import AnchoredLine from './AnchoredLine' ;
import VerticalLine from './VerticalLine' ;
import HorizontalLine from './HorizontalLine' ;
import OrdinaryLine from './OrdinaryLine' ;

export default function shoot ( p , q ) {

	const fn = ( ) => {

		const point1 = p.materialize();
		const point2 = q.materialize();

		if ( point1.x === point2.x ) {
			if ( point1.y === point2.y ) {
				throw new Error('Identical points');
			}
			else {
				return new VerticalLine(point1.x);
			}
		}

		else if ( point1.y === point2.y ) {
			return new HorizontalLine(point1.y);
		}

		else {
			const a = (point1.y - point2.y)/(point1.x - point2.x) ;
			const b = point1.y - a * point1.x ;
			return new OrdinaryLine(a, b);
		}

	} ;

	return new AnchoredLine( fn ) ;

}
