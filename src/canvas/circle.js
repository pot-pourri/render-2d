
import { polycurve } from './polycurve' ;

export function circle ( env , center , radius ) {
	// this is a silly example of how to call polycurve
	// there are more direct ways to draw circles on a canvas or as svg
	const [x0, y0] = center;
	const r2 = radius*radius;
	const x02 = x0*x0;
	const y02 = y0*y0;
	// (x-x0)² + (y-y0)² = r²
	// x² - 2xx0 + x0² + y² - 2yy0 + y0²  = r²
	polycurve( env , [ 1 , -2 * x0 , 1 , -2 * y0 , x02 + y02 - r2 ] )
}
