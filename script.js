// script.js
// Get all the images
image_array = [
  'hmedabad, Gujarat, India_sml.jpg',
  'Jaipur, Rajasthan, India_4_sml.jpg',
  'Pune, Maharashtra, India_sml.jpg',
  'Pushkar, Rajasthan, India_sml.jpg',
  'Bannerghatta Biological Park, Bengaluru, India_sml.jpg',
  'Kochi, Kerala, India_sml.jpg',
  'Hawa Mahal - The Palace of Winds2_sml.jpg',
  'Thrissur, India_sml.jpg',
  'Varkala, Kerala, India_sml.jpg',
  'Munroe Island, Kerala, India_sml.jpg',
  'kerala_2_sml.jpg', 
  'Golconda Fort, Hyderabad, Telangana, India_3_sml.jpg',
  'Kerala, India_1_sml.jpg',
  'Golconda Fort, Hyderabad, Telangana, India_2_sml.jpg',
  'Golconda Fort, Hyderabad, Telangana, India_1_sml.jpg',
  'hyderabad, India_1_sml.jpg',
  'Chail Wildlife Sanctuary, Shimla, India_sml.jpg',
  'At the monkey temple in Jaipur,India_2_sml.jpg',
  'Shimla, Himachal Pradesh, India_1_sml.jpg',
  'nice_sml.jpg',
  'Mall Road, Shimla, India_1_sml.jpg',
  '65, Mall Rd, Mallital, Nainital, Uttarakhand 263002, India_sml.jpg',
  'Mall Road, Nainital, India_1_sml.jpg',
  'Vegas Mall, New Delhi, India_sml.jpg',
  'Ranthambore National Park, Rajasthan, India1_sml.jpg',
  'Jaipur, Rajasthan, India-1_sml.jpg',
  'Taj Mahal, Agra, India_sml.jpg',
  'Querim Beach, Goa, India_sml.jpg',
  'Amer, Jaipur, India-3_sml.jpg',
  'Titos Lane 2, Baga, Goa 403516, India_sml.jpg',
  'Quepem, Goa, India_sml.jpg',
  'hot_stuff_sml.jpg',
  'Hot_stuff_2_sml.jpg',
  'Nainital Lake, Ayarpatta, Nainital, Uttarakhand_sml.jpg',
  'Nainital, Nainital, India_sml.jpg',
  'Rann of Kutch, India_sml.jpg',
  'Nainital, Uttarakhand, India3_sml.jpg',
  'Hawa Mahal, Jaipur, India_2_sml.jpg',
  'Andheri East, Mumbai, India_sml.jpg',
  'Enjoy!.jpg',
  'Amber Fort_sml.jpg',
  'Goas, India_s.jpg',
  'Hawa Mahal, Jaipur, India_2_sml.jpg',
  'At the monkey temple in Jaipur,India_2_sml.jpg',
  'Amer, Jaipur, India-3_sml.jpg',
  'Hyderabad, Telangana, India_sml.jpg',
]

function get_random_image(){
  // Get a random index
  random_index = Math.floor(Math.random() * image_array.length);

  // Get an image at the random_index
  selected_image = image_array[random_index]

  // Display the image
  document.getElementById('image_shower').src = `./images/${selected_image}`
}