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

	prepend(value) {
		const newNode = new Node();
		newNode.value = value;
		newNode.nextNode = this.head;
		this.head = newNode;
	}

	toString() {
		if (this.head === null) return "( ) -> null";
		let finalString = "";
		let tempNode = this.head;
		while (tempNode.nextNode != null) {
			finalString += `( ${tempNode.value} ) -> `;
			tempNode = tempNode.nextNode;
		}
		finalString += `( ${tempNode.value} ) -> null`;
		return finalString;
	}

	get size() {
		let count = 0;
		let tempNode = this.head;
		while (tempNode) {
			count += 1;
			tempNode = tempNode.nextNode;
		}
		return count;
	}

	// head() modified to listHead()
	get listHead() {
		console.log(this.head);
		if (this.head === null) return null;
		else return this.head.value;
	}

	get tail() {
		if (this.head === null) return null;
		else {
			let tempNode = this.head;
			while (tempNode.nextNode) {
				tempNode = tempNode.nextNode;
			}
			return tempNode.value;
		}
	}

	at(index) {
		let listIndex = 0;
		let temp = this.head;
		while (temp) {
			if (listIndex === index) {
				return `Element at index ${index} is ${temp.value}`;
			} else {
				temp = temp.nextNode;
				listIndex += 1;
			}
		}
		return `Element not found @ ${index}!!!`;
	}

	pop() {
		if (!this.head) return `No elements to pop!!!`;
		else if (this.head && !this.head.nextNode) this.head = null;
		else {
			let temp = this.head;
			while (temp) {
				if (temp.nextNode && temp.nextNode.nextNode)
					temp = temp.nextNode;
				else break;
			}
			temp.nextNode = null;
		}
	}

	contains(value) {
		let temp = this.head;
		while (temp) {
			if (temp.value === value) return true;
			else if (temp.nextNode) temp = temp.nextNode;
			else break;
		}
		return false;
	}

	find(value) {
		let temp = this.head;
		let index = 0;
		while (temp) {
			if (temp.value === value) return `Element found at index, ${index}`;
			else if (temp.nextNode) {
				temp = temp.nextNode;
				index += 1;
			} else break;
		}
		return `Element having ${value} not found!!!`;
	}

	// insertAt(value, index) {}

	// removeAt (index) {}
}

export { LinkedList };
