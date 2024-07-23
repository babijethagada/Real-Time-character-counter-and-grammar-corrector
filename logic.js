const charval = document.getElementById("textarea");
        let totalCount = document.getElementById("total-count");
        let remaining = document.getElementById("remaining");
        let checkTextButton = document.getElementById("check-text");
        let userChar = 0;

        // to update the character count
        const updateCounter = () => {
            userChar = charval.value.length; // corrected to value
            totalCount.innerText = userChar;
            remaining.innerText = 150 - userChar;
        };

        charval.addEventListener("input", updateCounter); // use input event

        // to check text
        const CheckText = () => {
            charval.select();
            charval.setSelectionRange(0, 150); // corrected to charval
            navigator.clipboard.writeText(charval.value);
        };

        checkTextButton.addEventListener("click", CheckText);