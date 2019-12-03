/*
* Copyright 2019 Juan G. Ruelas Jr
*
* work : <juan@azlabs.tech>
* education : <jruel006@ucr.edu>
*
* This program is free software: you can redistribute it and/or modify
* it under the terms of the GNU General Public License as published by
* the Free Software Foundation, either version 3 of the License, or
* (at your option) any later version.
*
* This program is distributed in the hope that it will be useful,
* but WITHOUT ANY WARRANTY; without even the implied warranty of
* MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
* GNU General Public License for more details.
*
* You should have received a copy of the GNU General Public License
* along with this program.  If not, see <http://www.gnu.org/licenses/>.
*/

class Queue {
    constructor(){
        this._queue = []
    }

    push(value){
        if(value == undefined || value == null) {return console.log("ERROR: null/undefined value")}
        this._queue.push(value)
        console.log(this._queue)
    }

    pop() {
        if(this._queue.length == 0) { return console.log("ERROR: cannot pop from empty stack")}
        this._queue.shift()
        console.log(this._queue)
    }
}

let q = new Queue()

// push to the stack
q.push(10)
q.push(20)
q.push(30)
q.push(40)
q.push(50)

// pop from the stack
q.pop()
q.pop()
q.pop()
q.pop()
q.pop()


//============================= test edge cases

// push an implicit null value
q.push()

// push a null value
q.push(null)

// push an undefined value
q.push(undefined)


// pop an empty stack
q.pop()
