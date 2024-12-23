const snowflakesContainer = document.getElementById('snowflakes');
for (let i = 0; i < 50; i++) {
    const snowflake = document.createElement('div');
    snowflake.classList.add('snowflake');
    snowflake.style.left = Math.random() * 100 + 'vw'; // Random horizontal position
    snowflake.style.animationDelay = Math.random() * 3 + 's'; // Random delay
    snowflake.style.animationDuration = Math.random() * 3 + 4 + 's'; // Random duration
    snowflakesContainer.appendChild(snowflake);
}
