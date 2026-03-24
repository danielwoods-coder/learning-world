const poll = new Map();
function addOption(option) {
    if (!option) return `Option cannot be empty.`
    if (!poll.has(option)) {
        const emptySet = new Set();
        poll.set(option, emptySet)
        return `Option "${option}" added to the poll.`
    }
    return `Option "${option}" already exists.`
}

function vote(option, voterId) {
    if (!poll.has(option)) return `Option "${option}" does not exist.`
    const votersSet = poll.get(option);
    if (votersSet.has(voterId)) {
        return `Voter ${voterId} has already voted for "${option}".`
    } else {
        votersSet.add(voterId);
        return `Voter ${voterId} voted for "${option}".`
    }
}

addOption("Morocco")
addOption("Turkey")
addOption("Spain")

console.log(poll.size)


vote("Morocco", 121);

vote("Turkey", 190);
vote("Turkey", 191);

const displayResults = () => {
    let str = "Poll Results:";
    let arr = [];
    poll.forEach((value, key) => {
        arr.push(`${key}: ${value.size} votes`)

    })
    console.log(arr.sort((a, b) => b.split(" ")[1] - a.split(" ")[1]))
    for (const ele of arr) {
        str += "\n" + ele
    }

    return str
}
console.log(displayResults())