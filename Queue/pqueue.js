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


// NOTE: 0 refers to HIGHEST priority
// increasing numbers refer to LOWER priority

class PQueue {
    constructor(){
        this._queue = []
    }

    push(value, priority){

        // cannot push null/undefined values
        if(value == undefined || value == null) {return console.log("ERROR: null/undefined value")}
        // cannot push values with negative priority
        if(priority < 0) { return console.log("ERROR: negative priority")}

        // construct the node
        let node = {
            value : value,
            priority : priority
        }

        // if empty queue, just push
        if(this._queue.length == 0){
            this._queue.push(node)
            // print for our records
            return console.log(this._queue)
        }

        // otherwise iterate until we find the proper index to push into
        else {
            // check if this should go at the end
            if( this._queue[this._queue.length - 1].priority <= node.priority){
                this._queue.push(node)
                // print for our records
                return console.log(this._queue)
            }

            // check if this should to at the front
            if( this._queue[0].priority > node.priority ){
                this._queue.unshift(node)
                // print for our records
                return console.log(this._queue)
            }

            // otherwise it goes in the middle
            for(let i = 0; i < this._queue.length; i++){
                if(this._queue[i].priority <= node.priority) { continue; }
                else {
                    this._queue.splice(i, 0, node)
                    // print for our records
                    return console.log(this._queue)
                }
            }
        }
    }

    pop() {
        if(this._queue.length == 0) { return console.log("ERROR: cannot pop from empty queue")}
        this._queue.shift()
        console.log(this._queue)
    }
}


let pq = new PQueue()

pq.push(1, 0)
pq.push(1, 10)
pq.push(1, 3)
pq.push(1, 12)
pq.push(1, 8)
pq.push(1, 1)
pq.push(1, 2)
pq.push(1, 100)


pq.pop()
pq.pop()
pq.pop()
pq.pop()
pq.pop()
pq.pop()
pq.pop()
pq.pop()


//==== TEST EDGE CASES
// push a negative priority
pq.push(1, -1)

// push null value
pq.push( null, 1)

// push undefined value
pq.push(undefined, 1)

//pop from empty queue
pq.pop()
