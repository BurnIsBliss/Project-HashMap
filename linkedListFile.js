// This file is reused and tweaked from the previous exercise

class Node {
	constructor() {
		this.value = null;
		this.nextNode = null;
	}
}

class LinkedList {
	constructor() {
		this.head = null;
	}
	// Objects/arrays are passed by value in JavaScript
	append(value) {
		if (!this.head) {
			this.head = new Node();
			this.head.value = value;
		} else {
			const newNode = new Node();
			newNode.value = value;
			let temp = this.head;
			while (temp.nextNode) temp = temp.nextNode;
			temp.nextNode = newNode;
		}
	}

	toString() {
		if (this.head === null) return "( ) -> null";
		let finalString = "";
		let tempNode = this.head;
		while (tempNode.nextNode != null) {
			finalString += `( ${Object.keys(tempNode.value)[0]} ) -> `;
			tempNode = tempNode.nextNode;
		}
		finalString += `( ${Object.keys(tempNode.value)[0]} ) -> null`;
		return finalString;
	}

	containsKey(key) {
		let temp = this.head;
		while (temp) {
			if (Object.keys(temp.value)[0] == key) return temp.value[key];
			else if (temp.nextNode) temp = temp.nextNode;
			else break;
		}
		return null;
	}

	removeKey(key) {
		let temp = this.head;
		let prev = this.head;
		if (!this.head.nextNode) this.head = null;
		else if (Object.keys(this.head.value)[0] == key) {
			this.head = this.head.nextNode;
		}
		while (temp) {
			if (Object.keys(temp.value)[0] == key) {
				prev.nextNode = temp.nextNode;
				break;
			} else {
				prev = temp;
				temp = temp.nextNode;
			}
		}
	}

	returnKeyArr() {
		let keyArr = [];
		let temp = this.head;
		while (temp) {
			keyArr.push(Object.keys(temp.value)[0]);
			temp = temp.nextNode;
		}
		return keyArr;
	}

	returnValueArr() {
		let valueArr = [];
		let temp = this.head;
		while (temp) {
			valueArr.push(Object.values(temp.value)[0]);
			temp = temp.nextNode;
		}
		return valueArr;
	}

	returnKeyValuePair() {
		let arr = [];
		let temp = this.head;
		while (temp) {
			let entry = Object.entries(temp.value)[0]; // Because Object.entries() returns an array of array
			arr.push(entry);
			temp = temp.nextNode;
		}
		return arr;
	}

	overWriteValue(key, valueVar) {
		let temp = this.head;
		while (temp) {
			if (Object.keys(temp.value)[0] == key) {
				temp.value[key] = valueVar;
				break;
			} else temp = temp.nextNode;
		}
	}
}

export { LinkedList };
