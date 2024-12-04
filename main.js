import { LinkedList } from "./linkedListFile.js";

class HashMap {
	constructor() {
		this.loadFactor = 0.75;
		this.capacity = 16;
		this.element = 0;
		this.buckets = new Array(this.capacity).fill(null);
	}

	hash(key) {
		let hashCode = 0;
		const primeNumber = 31;
		for (let i = 0; i < key.length; i++) {
			hashCode = primeNumber * hashCode + key.charCodeAt(i);
			hashCode %= this.capacity;
		}
		return hashCode;
	}

	set(key, value) {
		const hashedCode = this.hash(key);
		// console.log([key, hashedCode]);
		if (this.buckets[hashedCode] == null) {
			this.buckets[hashedCode] = new LinkedList();
			let obj = new Object();
			obj[key] = value;
			this.buckets[hashedCode].append(obj);
			this.element += 1;
		} else {
			let obj = new Object();
			obj[key] = value;
			this.buckets[hashedCode].append(obj);
			this.element += 1;
		}
	}

	get(key) {
		const index = this.hash(key);
		if (index < 0 || index >= this.buckets.length) {
			throw new Error("Trying to access index out of bounds");
		}
		const mappedValue = this.buckets[index];
		if (mappedValue) {
			return mappedValue.containsKey(key);
		} else {
			return null;
		}
	}

	has(key) {
		const index = this.hash(key);
		if (this.buckets[index]) {
			if (this.get(key)) return true;
			else return false;
		} else return false;
	}

	remove(key) {
		if (this.has(key)) {
			const index = this.hash(key);
			this.buckets[index].removeKey(key);
			this.element -= 1;
			if (!this.has(key)) return true;
		} else return false;
	}

	length() {
		return this.element;
	}

	clear() {
		this.buckets.fill(null);
		this.element = 0;
	}

	keys = () => {
		let keyArray = [];
		let tempArr = [];
		for (let i in this.buckets) {
			if (this.buckets[i]) {
				tempArr = this.buckets[i].returnKeyArr();
				for (let j of tempArr) keyArray.push(j);
			}
		}
		return keyArray;
	};

	values = () => {
		let valueArray = [];
		let tempArr = [];
		for (let i in this.buckets) {
			if (this.buckets[i]) {
				tempArr = this.buckets[i].returnValueArr();
				for (let j of tempArr) valueArray.push(j);
			}
		}
		return valueArray;
	};

	entries = () => {
		let validEntries = [];
		for (let i in this.buckets) {
			if (this.buckets[i]) {
				let tempArray = this.buckets[i].returnKeyValuePair();
				for (let j of tempArray) validEntries.push(j);
			}
		}
		return validEntries;
	};
}

// const hashMap = new HashMap();
// hashMap.set("name", "Bogdan");
// hashMap.set("a", "Bogdan");
// hashMap.set("sadasd", "Bogdan");
// hashMap.set("asdada", "Bog2131dan");
// hashMap.set("namei", "Salut");

// console.log(hashMap.get("asdada"));
// console.log(hashMap.get("sadasd"));
// console.log(hashMap.get("name"));

// console.log(hashMap.length());
// console.log(hashMap.has("a"));
// console.log(hashMap.has("555"));
// console.log(hashMap.remove("a"));
// console.log(hashMap.remove("a"));
// console.log(hashMap.has("a"));
// console.log(hashMap.length());
// hashMap.clear();
// console.log(hashMap.length());
// console.log(hashMap.keys());
// console.log(hashMap.values());
// console.log(hashMap.entries());

export { HashMap };
