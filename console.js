// BEGINNER CHALLENGES (unless otherwise stated, use the names array in all challenge points)
const names = ['Derek', 'Joe', 'Anna', 'Coen', 'Chris', 'Macey', 'Ella']

// 1. Add a name to the beginning of the names array
names.unshift('Suraj')

// 2. Add a name to the end of the names array
names.push('Suraj')

// 3. Remove the name you added to the beginning of the names array
names.shift()

// 4. Remove the name you added to the end of the names array (return the name to an original)
names.pop()

// 5. Create a new array called "lowercasedNames" with each name lowercased
const lowerCasedNames = names.map(name => name.toLowerCase())
// console.log(lowerCasedNames)

// 6. Sort the names array alphabetically
const sortedNames = lowerCasedNames.sort()
// console.log(sortedNames)

// 7. Find the index of "Chris"
const indexOfChris = sortedNames.indexOf('chris')
// console.log('index Of Chris => ', indexOfChris)

// 8. Create a new array called "afterChris" with all names after "Chris" in the names array
const chrisIndex = names.indexOf('Chris')
const afterChris = names.slice(chrisIndex + 1)
// console.log(afterChris)

// 9. Alter the original array to only contain the names before "Chris"
/* my solution */
// const modifyNamesToNotContainChris = array => {
// 	for (let i = 0; i < array.length; i++) {
// 		if (array.includes('Chris')) array.pop()
// 	}
// 	return array
// }
// console.log(modifyNamesToNotContainChris(names))
/* my solution */

/* better solution */
// const returnElementsBeforeChris = (array, element) => {
// 	const idx = array.indexOf(element)
// 	return idx > -1 ? array.slice(0, idx) : []
// }
// const testNames = returnElementsBeforeChris(names, 'Chris')
/* better solution */

/* better solution does not mutate the original array, but my solution mutates the original array */

/* best solution */
const returnBeforeChris = (array, element) => {
	const idx = array.indexOf(element)
	const arrayLength = array.length
	array.splice(idx, arrayLength)
}
returnBeforeChris(names, 'Chris')
/* actual solution */

// 10. Return "true" if the names array contains "Chris" and "false" if it does not (hint: it should be false now)
const containsChris = names.includes('Chris')
// console.log(containsChris)

// console.log(names)

// INTERMEDIATE CHALLENGES (unless otherwise stated, use the peeps array in all challenge points)
const peeps = [
	{
		id: 1,
		name: 'Chris',
		age: 24,
		favoriteNumbers: [1, 4, 8, 12, 32]
	},
	{
		id: 2,
		name: 'Terrance',
		age: 37,
		favoriteNumbers: [2, 8, 9]
	},
	{
		id: 3,
		name: 'Megan',
		age: 22,
		favoriteNumbers: [23, 14]
	},
	{
		id: 4,
		name: 'Juan',
		age: 18,
		favoriteNumbers: [23, 14, 2]
	},
	{
		id: 5,
		name: 'Tina',
		age: 42,
		favoriteNumbers: [12, 9, 1, 4, 18]
	},
	{
		id: 6,
		name: 'Lin',
		age: 24,
		favoriteNumbers: [3, 9]
	}
]

// 1. Add a boolean property "isAwesome" for each peep and set it to "true" if the person has at least 3 favorite numbers (or false if not).
for (let i = 0; i < peeps.length; i++) {
	if (peeps[i].favoriteNumbers.length >= 3) {
		peeps[i]['isAwesome'] = true
	}
}

// 2. Return a new array called "youngPeeps" with peeps 25 or younger.
const youngPeeps = []
for (let i = 0; i < peeps.length; i++) {
	if (peeps[i].age <= 25) {
		youngPeeps.push(peeps[i])
	}
}
// console.log(youngPeeps)

// 3. Sort the favoriteNumbers property from least to greatest for each peep in the peeps array
// for (let i = 0; i < peeps.length; i++) {
// 	peeps[i].favoriteNumbers.sort(function (a, b) {
// 		return a - b
// 	})
// }
// console.log(peeps)

// 4. Return "true" if every person has an age below 50 and "false" if not.
// const isEveryoneBelow50 = peeps.every(person => person.age < 50)
// console.log(isEveryoneBelow50)

// 5. Create a function called "findPeep" that returns the peep for an ID passed in and returns "not found" if the peep does not exist. Call it for an id that exists and one that does not.
// const findPeep = personId => {
// 	let searchStatus = false
// 	for (let i = 0; i < peeps.length; i++) {
// 		if (peeps[i].id === personId) return peeps[i]
// 		else searchStatus = false
// 	}
// 	return searchStatus
// }
// const personExists = findPeep(131)
// personExists ? console.log(personExists) : console.log('Not Found')

// 6. Create a new array called "reversedPeeps" with the peeps array order reversed
const reversedPeeps = []
for (let i = peeps.length - 1; i >= 0; i--) {
	reversedPeeps.push(peeps[i])
}
// console.log(reversedPeeps)

// 7. Add an additional property on each peep object called favoriteNumbersSum with a single number value which equals the total of all their favorite numbers.
// for (let i = 0; i < peeps.length; i++) {
// 	const sum = peeps[i].favoriteNumbers.reduce((a, b) => {
// 		return a + b
// 	}, 0)
// 	peeps[i]['favoriteNumbersSum'] = sum
// }
// console.log(peeps)

// 8. Create a new array called "numberOnePeeps" with all people that include a favorite number of "1". Include only their names and ids in the new array.
const numberOnePeeps = []
for (let i = 0; i < peeps.length; i++) {
	if (peeps[i].favoriteNumbers.includes(1)) {
		numberOnePeeps.push({ id: peeps[i].id, name: peeps[i].name })
	}
}
// console.log(numberOnePeeps)

// 9. Combine all peeps from the numberOnePeeps (#8 above) which are also in the youngPeeps (#2 above) array into a new array called "freshPeeps". Include peeps with unique ids only from the youngPeeps array.
const freshPeeps = []
const numberOnePeepsName = numberOnePeeps.map(people => people.name)
for (let i = 0; i < youngPeeps.length; i++) {
	if (numberOnePeepsName.includes(youngPeeps[i].name)) freshPeeps.push(youngPeeps[i])
}
// console.log(freshPeeps)

// 10. Return a single value representing the total of all favoriteNumbers for anyone with the isAwesome property set to "true" (HINT: should be 159).
const getRequiredPeople = []
for (let i = 0; i < peeps.length; i++) {
	if (peeps[i].isAwesome === true) {
		getRequiredPeople.push(peeps[i])
	}
}
let sumArray = []
// console.log(getRequiredPeople)
for (let i = 0; i < getRequiredPeople.length; i++) {
	sumArray.push(getRequiredPeople[i].favoriteNumbers)
}
let flattenedSumArray = sumArray.reduce(function (prev, curr) {
	return prev.concat(curr)
})
let sum = flattenedSumArray.reduce((a, b) => {
	return a + b
}, 0)
console.log(sum)
