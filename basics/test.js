const RunTest =  {
    variables: () => {
        setTimeout(() => {
            try {
                let hero = document.getElementById("heroId").innerText;
                let villain = document.getElementById("villainId").innerText;
                if (hero === villain) {
                    document.getElementsByClassName("error")[0].textContent = `test failed, expected hero and villain to have different names`
                } else {
                    document.getElementById("displayOnSuccess").hidden = false
                }
            } catch (e) {
                document.getElementsByClassName("error")[0].textContent = e.message + "\n\n" + e.stack
                throw e
            }
        }, 1000)
    },

    types: () => {
        setTimeout(() => {
            try {
                const checks = Array.from(document.getElementsByClassName("check")).map(it => it.textContent).join('')
                if (checks !== "✅✅✅✅") {
                    document.getElementsByClassName("error")[0].textContent = `test failed, expected 4 ✅, found only ${checks.length} ✅`
                } else {
                    document.getElementById("displayOnSuccess").hidden = false
                }
            } catch (e) {
                document.getElementsByClassName("error")[0].textContent = e.message + "\n\n" + e.stack
                throw e
            }
        }, 1000)

    },
    operators1() {
        setTimeout(() => {
            try {
                let text = document.getElementById("heroes").innerText;
                if (parseInt(text) !== 9) {
                    document.getElementsByClassName("error")[0].textContent = `test failed, expected 9, found ${text}`
                } else {
                    document.getElementById("displayOnSuccess").hidden = false
                }
            } catch (e) {
                document.getElementsByClassName("error")[0].textContent = e.message + "\n\n" + e.stack
                throw e
            }
        }, 1000)
    }
}