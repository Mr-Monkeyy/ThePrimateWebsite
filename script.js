const facts = [
    "Chimpanzees can laugh - When chimps play, they actually make a sound similar to human laughter. It is like they are having a good old joke with each other, just without the punchlines.",
    "Orangutans make blankets - Orangutans fold leaves and branches into comfy little beds at night. Who knew they were the original bedmakers of the jungle?",
    "Some monkeys are basically alcoholics - In the wild, certain monkeys have been seen drinking fermented fruit and acting like tipsy party animals. They will stumble around and even get into drunken brawls with each other.",
    "Monkeys make you pay for stolen goods - Some monkeys, like the capuchins, have been known to steal things from people (or other animals) and will only return the stolen items if you give them a food reward. They have got a serious monkey mafia vibe going on.",
    "Macaques are pranksters - These cheeky monkeys have a reputation for swiping food, camera gear, and even sunglasses. They are like the little thieves of the jungle, but you cant stay mad at them for long.",,
    "Lemurs are like over-caffeinated squirrels - With their twitchy movements and big eyes, lemurs seem to be perpetually in hyperdrive. If you saw one in real life, you would probably think they had had too many Red Bulls.",
    "Gorillas are softies at heart - Despite their intimidating size, gorillas are known to be gentle giants. Some of them will even take care of their younger siblings, showing the kind of love that would make anyones heart melt.",
    "Tarsiers eyes are HUGE - These tiny primates have eyes that are so large, it is like they are constantly amazed by everything around them. Imagine having eyes the size of your head—no wonder they look perpetually shocked.",
    "Bonobos are peacekeepers - Instead of fighting, bonobos use hugs, kisses, and a lot of physical affection to solve conflicts. They are basically the chill, love-everybody hippies of the primate world.",
    "Spider monkeys have monkey acrobat skills - They use their prehensile tails like another hand, flipping, twisting, and turning through the trees. It is like watching a monkey Cirque du Soleil act—minus the tickets and stage lights.",
    "Mandrills are colorful characters - These monkeys sport bright blue and red faces, making them look like they just walked off the set of a jungle fashion show. It is basically the animal version of wearing a neon sign that says, Look at me!",
    "Howler monkeys make the loudest sounds - Howler monkeys can be heard up to 3 miles away, and their deep, guttural calls echo through the jungle. If you ever heard one up close, you would probably wonder if there is a booming concert happening in the trees.",
    "Marmosets run their own little social networks - Marmosets are known for their constant chatter. They are like tiny, furry social media influencers, but instead of followers, they have other monkeys listening to their every call.",
    "Colobus monkeys have white gloves - These monkeys have distinct white hands and feet that make them look like they are always ready for a fancy dinner. Can you imagine a monkey in tuxedo gloves?",
    "Some monkeys are straight-up kleptomaniacs - Monkeys are notorious for snatching stuff—especially shiny objects. If you walk around with jewelry or a phone, you might find it is not you who is losing things, but a sneaky primate nearby.",
    "Howler monkeys have a tail that is like an extra hand - Their tails are so strong, they can use them to grip branches while they are hanging around, and even help them climb with more precision. Imagine having a tail that works as well as your hands!",
    "Squirrel monkeys do not stop talking - These little guys love to yap away with each other. Imagine a group of friends who never stop talking, except instead of gossip, it is all hoo-hoo-hoo and other cute monkey noises.",
    "Chimpanzees use tools like experts - Chimpanzees do not just use sticks to poke at termites; they use rocks to crack open nuts. Basically, they are the cavemen of the primate world, but with more style."
];

const button = document.querySelector(".fun-btn");  // matches class in HTML
const popup = document.getElementById("popup");     // popup container
const factText = document.getElementById("factText"); 
const closeBtn = document.getElementById("closeBtn"); 
const sound = document.getElementById("clickSound"); 

// Show popup and play sound
button.addEventListener("click", () => {
    const randomIndex = Math.floor(Math.random() * facts.length);
    factText.textContent = facts[randomIndex];
    popup.style.display = "flex";
    sound.play();
});

// Close popup when pressing the close button
closeBtn.addEventListener("click", () => {
    popup.style.display = "none";
});