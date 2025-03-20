const beggining = [
    "You are ",
    "Hello ther you ",
    "What is up ",
    "My friend is ",
    "Your mama is ",
    "Does your dog ",
    "I love red ",
    "Do you eat ",
    "What is your ",
    "Baby, what ",
    "Kangaroos can "
]

const middle = [
    "handsome ",
    "beautiful ",
    "bla bla bla ",
    "ugly ",
    "what is up ",
    "Yo YO Yo ",
    "jump very high ",
    "healthy meal ",
    "color tshirts ",
    "a fat fucking bitch "
]

const end = [
    "and i hate it!",
    "and i love it!",
    "do something about it!",
    "stop that!",
    "god damn!",
    "really this is enought!",
    "that is great!"
]

const sentance = () => {
    const randomFirst = Math.floor(Math.random()* beggining.length);
    const randomSecond = Math.floor(Math.random()* middle.length);
    const randomEnd = Math.floor(Math.random()* end.length);
    return beggining[randomFirst] + middle[randomSecond] + end[randomEnd];
}

console.log(sentance())