const fruit = ["mango", "guava", "Chilli"]
console.log(fruit[0])

fruit.push("Apple")
console.log(fruit)

const index = fruit.findIndex((item) => {
    return item === "mango"
})


console.log(index)