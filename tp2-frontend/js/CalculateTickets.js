function CalculateTickets() {
  const ticketValue = 200;
  const discountStudent = 80 / 100;
  const discountTrainee = 50 / 100;
  const discountJunior = 15 / 100;
  const quantity = document.getElementById("quantity").value;
  const category = document.getElementById("category").value;
  if (category == "student") {
    let ticketDiscount = ticketValue * discountStudent;
    let ticketResume = (ticketValue - ticketDiscount) * quantity;
    document.getElementById("resume").innerHTML = ticketResume;
  } else if (category == "trainee") {
    let ticketDiscount = ticketValue * discountTrainee;
    let ticketResume = (ticketValue - ticketDiscount) * quantity;
    document.getElementById("resume").innerHTML = ticketResume;
  } else if (category == "junior") {
    let ticketDiscount = ticketValue * discountJunior;
    let ticketResume = (ticketValue - ticketDiscount) * quantity;
    document.getElementById("resume").innerHTML = ticketResume;
  } else {
    console.log("Error");
  }
}
