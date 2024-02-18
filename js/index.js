/**
 * get all elements 
 * 1. all seats
 * 2. number of ticket
 * 3. number of seat
 * 4. show tickets
 */
const seats = document.querySelectorAll(".seat-btn");
const TicketCount = document.getElementById("count-ticket");
const totalSeat = document.getElementById("total-seat");
const Container = document.getElementById('container');
const ticketContainer = document.getElementById('ticket-container');

// values
let countTicket = 0;
let countSeat = 40;
for (const seat of seats) {
    seat.addEventListener('click', function () {
        console.log(seat.innerText);
        seat.classList.remove('bg-[#F7F8F8]');
        seat.classList.add('bg-[#1DD100]');
        seat.classList.add('text-white');

        // increment and decrement 
        countTicket++;
        countSeat--;
        TicketCount.innerText = countTicket;
        totalSeat.innerText = countSeat;

        // disable tickets
        if (countTicket >= 4) {
            for (const seat of seats) {
                seat.disabled = true;
            };
            alert('you cannot buy more than 4 tickets')
            console.log(seat);
        };

        // show ticket-container
        Container.classList.remove('hidden')
        // create tickets
        const p = document.createElement('p')
        // p.innerText = 
    })
};