// Featured Venues Data
const venues = [
  {
    id: 1,
    name: "Villa Balbianello",
    location: "Lake Como",
    image: "images/image1.jpeg",
    description: "The whole complex consists of two residential buildings, a church, and a portico (known as Loggia Durini) that can host weddings and events in a truly unique setting.\n\nBut the special feature of Villa Balbianello is above all the vast garden that surrounds the dwellings, with magnificent holm oaks pruned into an umbrella shape so as to offer a splendid view of Lake Como from inside the..."
  },
  {
    id: 2,
    name: "Villa d'Este",
    location: "Tivoli",
    image: "images/image1.jpeg",
    description: "A magnificent Renaissance villa surrounded by one of the most beautiful gardens in Italy. The villa offers stunning views and elegant spaces perfect for intimate wedding ceremonies.\n\nThe gardens feature fountains, terraces, and ancient trees that create a magical atmosphere for your special day."
  },
  {
    id: 3,
    name: "Castello di Vincigliata",
    location: "Florence",
    image: "images/image1.jpeg",
    description: "A medieval castle transformed into a luxury wedding venue. The castle offers panoramic views of the Tuscan countryside and provides an authentic Italian experience.\n\nWith its ancient stone walls and modern amenities, it's the perfect blend of history and luxury for your wedding celebration."
  },
  {
    id: 4,
    name: "Villa San Michele",
    location: "Fiesole",
    image: "images/image1.jpeg",
    description: "Perched on a hill overlooking Florence, this villa offers breathtaking views of the city and surrounding countryside. The venue features beautiful gardens and elegant interiors.\n\nThe villa's terraces provide the perfect setting for outdoor ceremonies with panoramic views of the Tuscan landscape."
  },
  {
    id: 5,
    name: "Palazzo Vecchio",
    location: "Florence",
    image: "images/image1.jpeg",
    description: "A historic palace in the heart of Florence, offering grand halls and courtyards for your wedding celebration. The palace combines Renaissance architecture with modern luxury.\n\nYour guests will be amazed by the frescoed ceilings and marble floors that create an unforgettable backdrop for your special day."
  },
  {
    id: 6,
    name: "Villa Cimbrone",
    location: "Ravello",
    image: "images/image1.jpeg",
    description: "A stunning villa with panoramic views of the Amalfi Coast. The venue features beautiful gardens, terraces, and elegant reception rooms.\n\nThe infinity terrace offers breathtaking views of the Mediterranean Sea, creating a romantic setting for your wedding ceremony."
  },
  {
    id: 7,
    name: "Castello di Brolio",
    location: "Chianti",
    image: "images/image1.jpeg",
    description: "A historic castle in the heart of Chianti wine region. The castle offers wine cellars, gardens, and elegant halls for your wedding celebration.\n\nSurrounded by vineyards and olive groves, this venue provides an authentic Tuscan experience with world-class wines."
  },
  {
    id: 8,
    name: "Villa La Foce",
    location: "Val d'Orcia",
    image: "images/image1.jpeg",
    description: "A beautiful villa set in the rolling hills of Val d'Orcia. The venue features formal gardens, terraces, and elegant interiors perfect for intimate celebrations.\n\nThe villa's location offers stunning views of the UNESCO World Heritage landscape of Val d'Orcia."
  },
  {
    id: 9,
    name: "Palazzo Pitti",
    location: "Florence",
    image: "images/image1.jpeg",
    description: "A grand Renaissance palace with magnificent gardens and elegant halls. The palace offers a royal setting for your wedding celebration.\n\nThe Boboli Gardens provide a beautiful backdrop for outdoor ceremonies, while the palace halls offer grand spaces for receptions."
  },
  {
    id: 10,
    name: "Villa Gamberaia",
    location: "Settignano",
    image: "images/image1.jpeg",
    description: "A historic villa with formal Italian gardens overlooking Florence. The venue offers intimate spaces and beautiful terraces for your wedding celebration.\n\nThe villa's gardens feature fountains, statues, and manicured hedges that create a romantic and elegant atmosphere."
  }
];

let currentVenueIndex = 0;

// Function to update venue display
function updateVenueDisplay() {
  const venue = venues[currentVenueIndex];
  const currentPageElement = document.getElementById('currentPage');
  const featuredImage = document.querySelector('.featured-image');
  const venueName = document.querySelector('.venue-name');
  const venueLocation = document.querySelector('.venue-location');
  const venueDescription = document.querySelector('.venue-description');
  
  // Update counter
  currentPageElement.textContent = venue.id;
  
  // Update image
  featuredImage.src = venue.image;
  featuredImage.alt = venue.name;
  
  // Update venue info
  venueName.textContent = venue.name;
  venueLocation.textContent = venue.location;
  
  // Update description
  const descriptionParagraphs = venue.description.split('\n\n');
  venueDescription.innerHTML = '';
  
  descriptionParagraphs.forEach((paragraph, index) => {
    const p = document.createElement('p');
    p.textContent = paragraph;
    venueDescription.appendChild(p);
  });
  
  // Add "View more" link
  const viewMore = document.createElement('span');
  viewMore.textContent = 'View more';
  viewMore.className = 'view-more';
  viewMore.style.cursor = 'pointer';
  venueDescription.appendChild(viewMore);
  
  // Update navigation buttons (no disabled state since we have loop)
  const prevBtn = document.getElementById('prevBtn');
  const nextBtn = document.getElementById('nextBtn');
  
  // Remove disabled state for continuous navigation
  prevBtn.disabled = false;
  nextBtn.disabled = false;
}

// Function to change venue
function changeVenue(direction) {
  const newIndex = currentVenueIndex + direction;
  
  if (direction === 1) {
    // Moving forward - if at last venue, go to first
    currentVenueIndex = newIndex >= venues.length ? 0 : newIndex;
  } else {
    // Moving backward - if at first venue, go to last
    currentVenueIndex = newIndex < 0 ? venues.length - 1 : newIndex;
  }
  
  updateVenueDisplay();
}

// Initialize the display when page loads
document.addEventListener('DOMContentLoaded', function() {
  updateVenueDisplay();
});

// Add keyboard navigation
document.addEventListener('keydown', function(event) {
  if (event.key === 'ArrowLeft') {
    changeVenue(-1);
  } else if (event.key === 'ArrowRight') {
    changeVenue(1);
  }
});

// Testimonials Data
const testimonials = [
  {
    id: 1,
    quote: "Lorem ipsum sit ac suspendisse adipiscing eget aliquam fermentum rutrum tempus aenean. Suspendisse nascetur vulputate viverra varius eu ullamcorper. Cursus pellentesque erat eget eget ullamcorper id in. Nullam scelerisque varius viverra augue quis. Laoreet eget curabitur vitae sed at facilisis purus convallis imperdiet.\n\nPenatibus auctor diam vivamus amet a vehicula ultrices. Volutpat arcu in amet praesent nisl mattis etiam cras orci. Ut urna elementum sapien orci lacus!",
    author: "Joy & Jordan",
    avatar: "images/image1.jpeg"
  },
  {
    id: 2,
    quote: "Our wedding at Villa Balbianello was absolutely magical. The venue exceeded all our expectations and the team made our special day unforgettable. The gardens were breathtaking and the service was impeccable.\n\nWe couldn't have asked for a more perfect setting for our wedding. Every detail was handled with care and attention, making our celebration truly special.",
    author: "Dianne & Michael",
    avatar: "images/image1.jpeg"
  },
  {
    id: 3,
    quote: "The experience was beyond our wildest dreams. From the moment we arrived at the venue, we knew we had made the right choice. The staff was professional, the setting was romantic, and our guests were amazed.\n\nThank you for making our wedding day so perfect. We will cherish these memories forever and highly recommend this venue to any couple looking for something extraordinary.",
    author: "Gabrielle & Simon",
    avatar: "images/image1.jpeg"
  },
  {
    id: 4,
    quote: "What an incredible experience! The venue provided the perfect backdrop for our wedding celebration. The attention to detail and the beautiful surroundings made our day truly special.\n\nOur guests are still talking about how amazing everything was. We are so grateful for the wonderful memories and the perfect wedding day you helped us create.",
    author: "Zee & Adrian",
    avatar: "images/image1.jpeg"
  }
];

let currentTestimonialIndex = 0;

// Function to update testimonial display
function updateTestimonialDisplay() {
  const testimonial = testimonials[currentTestimonialIndex];
  const quoteText = document.querySelector('.quote-text');
  const authorName = document.querySelector('.author-name');
  const authorAvatar = document.querySelector('.author-avatar');
  
  // Update quote text
  const quoteParagraphs = testimonial.quote.split('\n\n');
  quoteText.innerHTML = '';
  
  quoteParagraphs.forEach((paragraph) => {
    const p = document.createElement('p');
    p.textContent = paragraph;
    quoteText.appendChild(p);
  });
  
  // Update author info
  authorName.textContent = testimonial.author;
  authorAvatar.src = testimonial.avatar;
  authorAvatar.alt = testimonial.author;
}

// Function to change testimonial
function changeTestimonial(direction) {
  const newIndex = currentTestimonialIndex + direction;
  
  if (direction === 1) {
    // Moving forward - if at last testimonial, go to first
    currentTestimonialIndex = newIndex >= testimonials.length ? 0 : newIndex;
  } else {
    // Moving backward - if at first testimonial, go to last
    currentTestimonialIndex = newIndex < 0 ? testimonials.length - 1 : newIndex;
  }
  
  updateTestimonialDisplay();
}

// Initialize testimonials when page loads
document.addEventListener('DOMContentLoaded', function() {
  updateVenueDisplay();
  updateTestimonialDisplay();
});
