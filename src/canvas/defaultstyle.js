import pointAsSquare from './pointAsSquare' ;
import lineSimple from './lineSimple' ;

export const defaultstyle = {

	"point" : {
		"prepare" : ctx => {
			ctx.fillStyle = 'black' ;
		} ,
		"render" : pointAsSquare ,
	} ,

	"line" : {
		"prepare" : ctx => {
			ctx.strokeStyle = 'black' ;
		} ,
		"render" : lineSimple ,
	}

} ;
