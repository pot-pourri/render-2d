

export class Renderer {

	constructor ( ) {

	}

	objects ( env , { prepare , render } , objects ) {
		env.ctx.save();
		prepare( env.ctx ) ;
		for ( const object of objects ) render(env, p);
		env.ctx.restore();
	}

	points ( env , style , points ) {
		return this.objects(env, style.point, points);
	}

	lines ( env , style , lines ) {
		return this.objects(env, style.line, lines);
	}

}
