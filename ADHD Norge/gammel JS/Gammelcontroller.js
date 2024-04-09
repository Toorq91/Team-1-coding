function answerQuestions() {
    const answerCells = document.querySelectorAll('.answer');

    // Add click event listener to each answer cell
    answerCells.forEach(function(cell) {
        cell.addEventListener('click', function() {
            // Check if the cell is already selected
            const isSelected = this.classList.contains('selected');

            // Remove 'selected' class from all answer cells in the same question
            const questionCells = this.closest('.row').querySelectorAll('.answer');
            questionCells.forEach(function(questionCell) {
                questionCell.classList.remove('selected');
                questionCell.innerHTML = ''; // Clear previous X
            });

            // If the cell was not selected before, mark it as selected and add X
            if (!isSelected) {
                this.classList.add('selected');
                this.innerHTML = 'X'; // Add X
            }
        });
    });
}