import test from 'ava' ;

import { geometry } from '../../src' ;

const { Geometer , HorizontalLine } = geometry ;

test( 'lines - points - line' , t => {

	const Thales = new Geometer();

	const v1 = Thales.verticalLine(0);
	const h1 = Thales.horizontalLine(0);

	const v2 = Thales.verticalLine(1);
	const h2 = Thales.horizontalLine(1);

	const p = Thales.intersect( v1 , h1 ) ;
	const q = Thales.intersect( v2 , h2 ) ;
	const l = Thales.shoot( p , q ) ;

	t.is(l.materialize().a,1);
	t.is(l.materialize().b,0);

	h1.y = 1;
	v2.x = 3;
	h2.y = 2;

	Thales.update(h1);
	Thales.update(v2);
	Thales.update(h2);

	t.is(l.materialize().a,1/3);
	t.is(l.materialize().b,1);

} ) ;

test( 'points - line - points - line' , t => {

	const Thales = new Geometer();

	const p1 = Thales.point(0,0);
	const q1 = Thales.point(2,2);
	const r1 = Thales.point(0,2);
	const s1 = Thales.point(2,0);

	const p2 = Thales.point(5,0);
	const q2 = Thales.point(7,2);
	const r2 = Thales.point(5,2);
	const s2 = Thales.point(7,0);

	const l1 = Thales.shoot(p1,q1);
	const m1 = Thales.shoot(r1,s1);

	const l2 = Thales.shoot(p2,q2);
	const m2 = Thales.shoot(r2,s2);

	const a = Thales.intersect( l1 , m1 ) ;
	const b = Thales.intersect( l2 , m2 ) ;
	const d = Thales.shoot( a , b ) ;

	t.true(d.materialize() instanceof HorizontalLine);
	t.is(d.materialize().y,1);

} ) ;
