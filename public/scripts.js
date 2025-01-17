// generating the recommendations

function generateRecommendations() {
    const skinType = document.getElementById('skin-type').value;
    const style = document.getElementById('style').value;

    let recommendations = [];
    if (style === 'casual') {
        recommendations = ['Denim Jacket', 'Sneakers'];
    } else if (style === 'formal') {
        recommendations = ['Blazer', 'Dress Shoes'];
    }

    const resultsDiv = document.getElementById('results');
    resultsDiv.innerHTML = `<h3>Recommended for ${style} style:</h3><ul>` +
        recommendations.map(item => `<li>${item}</li>`).join('') +
        `</ul>`;
}