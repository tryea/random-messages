const notBoringQuestion = [
    'What’s your favorite way to spend a day off?',
    'What type of music are you into?',
    'What was the best vacation you ever took and why?',
    'Where’s the next place on your travel bucket list and why?',
    'What are your hobbies, and how did you get into them?',
    'What was your favorite age growing up?',
    'Was the last thing you read?',
    'Would you say you’re more of an extrovert or an introvert?',
    "What's your favorite ice cream topping?",
    'What was the last TV show you binge-watched?'
];

const getRandomMessage = (arr) => {
    index = Math.floor(Math.random() * arr.length);
    return arr[index];
}

console.log(getRandomMessage(notBoringQuestion))