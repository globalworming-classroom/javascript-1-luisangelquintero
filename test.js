const runTest = () => {
    try {
        let actual = document.getElementById("app").innerText;
        let expected = "hello hero";
        if (actual !== expected) {
            document.getElementsByClassName("error")[0].textContent = `test failed, expected <${expected}> but was <${actual}>`
        } else {
            document.getElementById("displayOnSuccess").hidden = false
        }
    } catch (e) {
        document.getElementsByClassName("error")[0].textContent = e.message + "\n\n" + e.stack
    }
}