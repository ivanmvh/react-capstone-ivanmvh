// This is the call that we can use to call all the photos that we have available
/*
const allPhotos = async () => {
  const categoryCode = 'music';
  const photos = await fetch(`https://pixabay.com/api/?key=33467227-a3f0450de27fd480390de418c&category=${categoryCode}`)
    //const photos = await fetch(`https://pixabay.com/api/?key=33467227-a3f0450de27fd480390de418c&category=musica`)
    .then((response) => response.json())
    .then((response) => console.log(response));
  return photos;
};

let x = allPhotos;

// We can filter the API information changing some variables, in this case,
// I want to explore how can I create a photo that can change the page and the category of the photo

// const page = 3; // This page will be placed in the end of the requirement

// We also can filter the photos by category using the category code,
// and this information is placed just before of the API key

// The web page doesn't provide information of the categories that are available with the API,
// so I will do it manually creating an array

const availableCategories = ['backgrounds', 'fashion', 'nature', 'science', 'education',
  'feelings', 'health', 'people',
  'religion', 'places', 'animals', 'industry', 'computer', 'food', 'sports', 'transportation',
  'travel', 'buildings', 'business', 'music'];

const photosArray = async () => {
  const photos = await fetch(`https://pixabay.com/api/?key=33467227-a3f0450de27fd480390de418c&category=musica`)
    .then((response) => response.json())
    .then((response) => console.log(response));
  return photos;
};

*/
