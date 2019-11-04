class Polygon {
    constructor(intArray) {
        this.sides = intArray
    }

    get countSides() {
        return this.sides.length
    }

    get perimeter(){
        return this.sides.reduce((a, b) => a + b, 0)
    }
}

class Triangle extends Polygon {
    
    get isValid() {
        if (this.countSides === 3) {

            let twoSides1 = this.sides[0] + this.sides[1]
            let twoSides2 = this.sides[1] + this.sides[2]
            let twoSides3 = this.sides[2] + this.sides[0]
            
            if (twoSides1 > this.sides[2] && 
                twoSides2 > this.sides[0] &&
                twoSides3 > this.sides[1]) {
                return true
            } else {
                return false
            }
        }
    }
}

class Square extends Polygon {

    get isValid() {
        if (this.countSides === 4) {
            
            if (this.sides[0] === this.sides[1] &&
                this.sides[0] === this.sides[2] &&
                this.sides[0] === this.sides[3]) {
                return true 
            } else {
                return false
            }
        }
    }

    get area() {
        if (this.isValid) {
            return this.sides[0] * this.sides[1]
        }
    }
}
