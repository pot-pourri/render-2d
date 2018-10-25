import AnchoredPoint from './AnchoredPoint' ;
import AnchoredLine from './AnchoredLine' ;
import FixedPoint from './FixedPoint' ;
import HorizontalLine from './HorizontalLine' ;
import VerticalLine from './VerticalLine' ;
import OrdinaryLine from './OrdinaryLine' ;

export default class Geometer {

	constructor ( ) {
		this.parents = new WeakMap();
		this.children = new WeakMap();
	}

	update ( object ) {
		object.update();
		for ( const child of this.children.get(object)) this.update(child);
	}

	erase ( object ) {
		for ( const parent of this.parents.get(object) ) {
			this.children.get(parent).delete(object);
		}
	}

	verticalLine ( x ) {
		const l = new VerticalLine( x ) ;
		this.parents.set(l, new Set());
		this.children.set(l, new Set());
		return l;
	}

	horizontalLine ( y ) {
		const l = new HorizontalLine( y ) ;
		this.parents.set(l, new Set());
		this.children.set(l, new Set());
		return l;
	}

	line ( a , b ) {
		const l = new OrdinaryLine( a , b ) ;
		this.parents.set(l, new Set());
		this.children.set(l, new Set());
		return l;
	}

	point ( x , y ) {
		const p = new FixedPoint( x , y ) ;
		this.parents.set(p, new Set());
		this.children.set(p, new Set());
		return p;
	}

	intersect ( l , m ) {

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

		const p = new AnchoredPoint( fn ) ;

		this.parents.set(p, new Set([l,m]));
		this.children.set(p, new Set());
		this.children.get(l).add(p);
		this.children.get(m).add(p);

		return p ;

	}

	shoot ( p , q ) {

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

		const l = new AnchoredLine( fn ) ;

		this.parents.set(l, new Set([p,q]));
		this.children.set(l, new Set());
		this.children.get(p).add(l);
		this.children.get(q).add(l);

		return l ;

	}

}
