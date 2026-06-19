// Arrays - ordered lists of items

// 0 indexed
let featuredPosts = [
    "Check out my Netflix clone",        // 0 
    "Here's the code for my project",    // 1
    "I've just relaunched my portfolio"  // 2
]

// console.log( featuredPosts[2] )

let experience = ["CEO at Scrimba", "Frontend developer at Xeneta", "People counter for Norstat"]

// Make the following appear in the console:
// Frontend developer at Xeneta
// People counter for Norstat
// CEO at Scrimba

console.log(experience[1])
console.log(experience[2])

// Arrays - ordered lists of items


console.log( featuredPosts.length )

// Create an array that describes yourself. Use the three primitive data types you've learned
// It should contain your name (string), your age (number), and whether you like pizza (boolean)

let per = ["Per Harald Borgen", 35, true]

let cards = [7, 4]
cards.push(6)
console.log(cards)

// Push the newMessage to the messages array, and then log out the array

let messages = [
    "Hey, how's it going?",        
    "I'm great, thank you! How about you?",
    "All good. Been working on my portfolio lately."
]

let newMessage = "Same here!"
messages.push(newMessage)
console.log(messages)

// How can you remove the last item in an array? Try to google it!
messages.pop()
console.log(messages)




