import AnchoredPoint from './AnchoredPoint' ;
import FixedPoint from './FixedPoint' ;
import HorizontalLine from './HorizontalLine' ;
import VerticalLine from './VerticalLine' ;
import OrdinaryLine from './OrdinaryLine' ;

export default function intersect ( l , m ) {

	const fn = ( ) => {

		const line1 = l.materialize();
		const line2 = m.materialize();

		// simplify using gaussian elimination

		if ( line1 instanceof HorizontalLine ) {
			if ( line2 instanceof HorizontalLine ) {
				throw new Error('No intersection');
			}
			else if ( line2 instanceof VerticalLine ) {
				return new FixedPoint( line2.x , line1.y ) ;
			}
			else if ( line2 instanceof OrdinaryLine ) {
				const y = line1.y ;
				const x = ( y - line2.b ) / line2.a ;
				return new FixedPoint( x , y ) ;
			}
			else {
				throw new Error('Not implemented');
			}
		}

		else if ( line1 instanceof VerticalLine ) {
			if ( line2 instanceof VerticalLine ) {
				throw new Error('No intersection');
			}
			else if ( line2 instanceof HorizontalLine ) {
				return new FixedPoint( line1.x , line2.y ) ;
			}
			else if ( line2 instanceof OrdinaryLine ) {
				const x = line1.x ;
				const y = line2.a * x + line2.b ;
				return new FixedPoint( x , y ) ;
			}
			else {
				throw new Error('Not implemented');
			}
		}

		else if ( line1 instanceof OrdinaryLine ) {
			if ( line2 instanceof VerticalLine ) {
				const x = line2.x ;
				const y = line1.a * x + line1.b ;
				return new FixedPoint( x , y ) ;
			}
			else if ( line2 instanceof HorizontalLine ) {
				const y = line2.y ;
				const x = ( y - line1.b ) / line1.a ;
				return new FixedPoint( x , y ) ;
			}
			else if ( line2 instanceof OrdinaryLine ) {
				if ( line1.a === line2.a ) {
					throw new Error('No intersection');
				}
				else {
					const x = (line1.b - line2.b)/(line2.a - line1.a) ;
					const y = line1.a * x + line1.b ;
					return new FixedPoint( x , y ) ;
				}
			}
			else {
				throw new Error('Not implemented');
			}
		}

		else {
			throw new Error('Not implemented');
		}

	} ;

	return new AnchoredPoint( fn ) ;

}
