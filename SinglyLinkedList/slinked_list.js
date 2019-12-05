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


class Node {
    constructor(data, next){
        this.data = data
        this.next = next
    }
}


class SLinkedList {
    constructor(...values){

        this.head = null
        this.tail = null
        this.list = []

        /* will implement more later.... */
        /* considering using many different types of approaches */

    }
    insert(index, value){

    }
    push_front(value) {

    }
    push_back(value) {

    }
    pop_front(){

    }
    pop_back(){

    }
    delete(index){
    }
}


// create New Linked List
let s = new SLinkedList(1,3,4,5,10,1,10)
