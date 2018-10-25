
export function point ( env , p ) {

	const { x , y } = p.materialize();

	// draw as a 5x5 square centered at (x,y)
	const l = _x - 2 ;
	const t = _y - 2 ;

	env.ctx.fillRect(l, t, 5, 5);

}
