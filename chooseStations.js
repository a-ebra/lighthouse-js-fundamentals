const chooseStations = function (stations) {
  let goodStations = []; 
  for (const elements of stations) {
    const capacity = elements[1]; 
    const type = elements[2]; 
    if (capacity >= 20 && (type === "school" || "community center")) {
      goodStations.push(elements[0]);
    }
  } 
  return goodStations; 
}

const stations = [
  ['Big Bear Donair', 10, 'restaurant'],
  ['Bright Lights Elementary', 50, 'school'],
  ['Moose Mountain Community Centre', 45, 'community centre']
];

chooseStations(stations);