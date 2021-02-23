import './main.scss'

const simple_binary_search = (list, item) => {
	let low = 0
	let high = list.length - 1
	while (low <= high) {
		let mid = Math.floor((low + high) / 2)
		let guess = list[mid]
		if (guess === item) return mid
		guess > item ? (high = mid - 1) : (low = mid + 1)
	}
	return null
}
const list = [4, 7, 10, 16, 24, 32, 45, 46, 52, 64, 79, 94, 102]

console.log('simple_binary_search', simple_binary_search(list, 7))

const objects_binary_search = (list, key, item) => {
	let low = 0
	let high = list.length - 1
	while (low <= high) {
		let mid = Math.floor((low + high) / 2)
		let guess = list[mid][key]
		if (guess === item) return mid
		guess > item ? (high = mid - 1) : (low = mid + 1)
	}
	return null
}
const objList = [
	{
		id: 1,
		age: 23,
		name: 'name1'
	},
	{
		id: 2,
		age: 22,
		name: 'name2'
	},
	{
		id: 3,
		age: 27,
		name: 'name3'
	},
	{
		id: 4,
		age: 21,
		name: 'name4'
	},
	{
		id: 5,
		age: 18,
		name: 'name5'
	}
]
console.log('objects_binary_search', objects_binary_search(objList, 'id', 3))

const namesList = [
	'Alfred', ''
]
const name_binary_search = (list, key, item) => {
	let low = 0
	let high = list.length - 1
	while (low <= high) {
		let mid = Math.floor((low + high) / 2)
		let guess = list[mid][key]
		if (guess === item) return mid
		guess > item ? (high = mid - 1) : (low = mid + 1)
	}
	return null
}
// name_binary_search()