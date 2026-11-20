
const output = document.getElementById("output");

const input = document.getElementById("commandInput");

function runCommand() {

    let command = input.value.trim();

    if (command === "") {
        return;
    }

    let result = "";

    switch (command) {

        case "help":
            result = `
Available Commands:<br>
git init<br>
git status<br>
git add .<br>
git commit -m "first commit"<br>
git branch<br>
git log<br>
clear
            `;
            break;

        case "git init":
            result = "Initialized empty Git repository!";
            break;

        case "git status":
            result = "On branch main<br>Nothing to commit.";
            break;

        case "git add .":
            result = "All files added to staging area!";
            break;

        case 'git commit -m "first commit"':
            result = "Changes committed successfully!";
            break;

        case "git branch":
            result = "* main";
            break;

        case "git log":
            result = "commit abc1234 - Initial commit";
            break;

        case "clear":
            output.innerHTML = "";
            input.value = "";
            return;

        default:
            result = "Command not found. Type help.";
    }

    output.innerHTML += `
        <br><span style="color:#38bdf8">$ ${command}</span>
        <br>${result}<br>
    `;

    input.value = "";
    output.scrollTop = output.scrollHeight;
}

// Enter key support
input.addEventListener("keydown", function(event) {

    if (event.key === "Enter") {
        runCommand();
    }

});


// Copy Git commands
function copyCommand(command) {

    navigator.clipboard.writeText(command)
        .then(() => alert("Copied: " + command))
        .catch(() => alert("Unable to copy command"));

}
