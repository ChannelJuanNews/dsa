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

class Stack {
    constructor(){
        this._stack = []
    }

    push(value){
        if(value == undefined || value == null) {return console.log("ERROR: null/undefined value")}
        this._stack.unshift(value)
        console.log(this._stack)
    }

    pop() {
        if(this._stack.length == 0) { return console.log("ERROR: cannot pop from empty stack")}
        this._stack.shift()
        console.log(this._stack)
    }

    top(){
        if(this._stack.length == 0){ return console.log("ERROR: stack is empty!")}
        console.log(this._stack[0])
        return this._stack[0]
    }
}

// instantiate a new stack
let s = new Stack()

// push to the stack
s.push(10)
s.top()
s.push(20)
s.top()
s.push(30)
s.top()
s.push(40)
s.top()
s.push(50)
s.top()


// pop from the stack
s.pop()
s.pop()
s.pop()
s.pop()
s.pop()






//============================= test edge cases

// push an implicit null value
s.push()

// push a null value
s.push(null)

// push an undefined value
s.push(undefined)


// pop an empty stack
s.pop()

// top an emtyp stack
s.top()
