// a function to show tickets 
function showTickets(seat) {
    const text = seat.innerText
    const p = document.createElement('p');
    p.innerHTML = text;
    ticketContainer.appendChild(p);

    const p1 = document.createElement('p');
    p1.innerHTML ="Economy";
    ticketContainer.appendChild(p1);

    const p2 = document.createElement('p');
    p2.innerHTML = 550;
    ticketContainer.appendChild(p2);
};