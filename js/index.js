/**
 * get all elements 
 * 1. all seats
 * 2. number of ticket
 * 3. number of seat
 * 4. show tickets
 */
const seats = document.querySelectorAll(".seat-btn");
const Tickets = document.querySelectorAll("tickets");
const TicketCount = document.getElementById("count-ticket");
const totalSeat = document.getElementById("total-seat");
const Container = document.getElementById('container');
const ticketContainer = document.getElementById('ticket-container');
const couponInput = document.getElementById('coupon-input')
const couponBTN = document.getElementById('coupon-btn')
const couponPart = document.getElementById('coupon-part')
const totalPrice = document.getElementById('total-price')
const grandTotal = document.getElementById('grand-total')
// values
let countTicket = 0;
let countSeat = 40;
let price = 550;
for (const seat of seats) {
    seat.addEventListener('click', function () {
        seat.classList.remove('bg-[#F7F8F8]');
        seat.classList.add('bg-[#1DD100]');
        seat.classList.add('text-white');
        seat.disabled = true;
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

        };
        // calculate money
        totalPrice.innerText = price * countTicket;
        grandTotal.innerText = totalPrice.innerText;
        // show tickets
        Container.classList.remove('hidden');
        showTickets(seat)

        // coupon part 

        couponBTN.addEventListener('click', function () {
            if (couponInput.value === "NEW15" && countTicket === 4) {
                grandTotal.innerText =550*4-550*4*0.15;
                couponPart.classList.add('hidden')
            }
            else if (couponInput.value === "Couple 20" && countTicket === 4) {
                console.log("Couple 20");
            }
            else {
                alert('invalid Coupon')
                couponInput.value = "";
                console.log(countTicket);
            }

        })
    })
};

