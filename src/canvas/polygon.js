
import { frame } from '@aureooms/js-itertools' ;

export function polygon ( env , vertices ) {

	// assert(vertices.length >= 2) ;

	// should avoid drawing twice each vertex
	// because currently both vertices are drawn for each segment and each
	// vertex belongs to two segments
	for ( const [p, q] of frame( vertices , 2 ) ) segment( env , p , q ) ;

	segment(env, vertices[vertices.length-1], vertices[0]) ;

}
