# Example

```js

// still have to figure out how to handle when object change
// the most user friendly way would probably be to update the drawing as soon
// as an object change
// the change could be propagated by registering dependencies on the objects
// with something like an .onchange() method
// maybe an object set could be passed as a parameter (by reference) to make sure the drawing
// does not get updated too often

const geo = new Geometer( ) ;
geo.canvas( canvas ) ;
geo.axes( xmin , xmax , ymin , ymax ) ;

const triangle = new Triangle( p , q , r ) ;
triangle.vertices.get(0) ; // 0 1 2
triangle.angles.get(0) ; // 0 1 2
triangle.sides.get(0) ; // 0 1 2
triangle.sidelengths.get(0) ; // 0 1 2

const circle1 = new Circle ( center1 , radius2 ) ;
const circle2 = new Circle ( center1 , radius2 ) ;

const p, q = circle1.intersect( circle2 ) ; // would throw if intersection is
                                            // empty or consist of a single
                                            // point or the entire circle
const line = Line( p , q )

geo.add( triangle ) ;
geo.add( line ) ;
geo.draw( ) ;

```
