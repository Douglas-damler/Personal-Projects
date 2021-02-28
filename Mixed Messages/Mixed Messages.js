const messages = [
"I finally realized that people are prisoners of their phones... that's why it's called a 'cell' phone.",
"My cell phone is acting up, I keep pressing the home button but when I look around, I'm still at work.", 
"Sometimes when I close my eyes, I can't see", "Be crazy, be stupid, be silly, be weird. Be whatever, because life is too short to be anything but happy",
"Most of the time... when you're crying, nobody notices your tears. Most of the time... when you're worried, nobody feels your pain. Most of the time... when you're happy, nobody sees your smile. But when you fart just one time",
"A cop pulled me over and told me 'Papers', so I said 'cissors, I win!'and drove off",
"An apple a day keeps anyone away, if you throw it hard enough", 
"I don't mean to brag, but I put together a puzzle in 1 day and the box said 2-4 years",
"Sometimes I'm grateful that thoughts don't appear as bubbles over our heads", 
"What I do when I see someone pretty is, I stare, I smile then when I get tired I put the mirror down.",
"I dream of a better tomorrow, where chickens can cross the road and not be questioned about their motives.", 
"I'm glad I don't have to hunt my own food, I don't even know where sandwiches live.",
"There are no stupid questions, just stupid people.",
"CoolFunnyQuotes.com Stupid Quotes 1K Likes Math is fun, it teaches you life and death information, like when you're cold, you should go to a corner since it's 90 degrees there.",
"I love being married. It's so great to find that one special person you want to annoy for the rest of your life",
"A stupid person laughs three times at a joke; once when everyone else is laughing, a second time when he actually gets the joke, and a third time when he realizes he was laughing without getting the joke at first.",
"Some people walk into our lives and leave footprints on our hearts. Others walk into our lives and we want to leave footprints on their face!",
"Why must I prove that I am me when I pay bills over the phone? Did some else call to pay my bills, and if they did, why don't you let them?",
"I want to be like a caterpillar. Eat a lot, sleep for a while, and then wake up beautiful.",
"You know you are getting old when the candles on your birthday cake start to cost more than the cake itself.",
"If you have an opinion about my life, please raise your hand. Now put it over your mouth.",
"Girls are like phones. We love to be held and talked to, but if you press the wrong button you'll be disconnected!",
"It's really complicated to make something simple, but very simple to make something something complicated.",
"Three monkeys escaped from the zoo, one was caught watching TV, the other playing hockey, and the third one was caught reading this quote!",
"I feel sorry for people who don't have dogs. I hear they have to pick up food they drop on the floor.",
"If what you've done is stupid but it works, then it really isn't that stupid at all.",
"When my boss asked me who is the stupid one, me or him? I told him everyone knows he doesn't hire stupid people.",
"That moment when you dip your cookie in milk for too long and it breaks off, then you wonder why bad things happen to good people.",
"You can stop driving me crazy, I can walk from here.",
"I hate it when people see me at the supermarket and they're like 'Hey, what are you doing here?' I tell them 'You know.. hunting elephants.",
"Any man who can drive safely while kissing a pretty girl is simply not giving the kiss the attention it deserves.",
"Don't mess with me, I know Karate, Judo, Jujitsu, Kung Fu and 20 other dangerous words.",
"I was told to check my attitude. I did, and it's still there.. it hasn't gone anywhere. What's the problem?",
"Have you ever noticed that anybody driving slower than you is an idiot, and anyone going faster than you is a maniac?"];



const generateRandomMessage = () => {
    let randomMessage = "";
    const randomIndex = Math.floor(Math.random() * messages.length);
    randomMessage = messages[randomIndex];
    
    return(randomMessage)
}

console.log(generateRandomMessage());