function showSecondCard(event) {
    event.preventDefault();
    document.getElementById('stayUpdatedCard').classList.add('hidden');
    document.getElementById('thankYouCard').classList.remove('hidden');
    
}
function dismissThankYouCard() {
    document.getElementById('thankYouCard').classList.add('hidden');
}