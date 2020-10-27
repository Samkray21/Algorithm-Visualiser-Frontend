# Minimum Spanning Tree Visualiser Frontend

This website visualises the process of finding the minimum spanning tree with Prims, Kruskal’s and Boruvka’s Algorithm.

A weighted graph is visually drawn out using Google Maps api and each node is placed on top of a capital city.

Prims algorithm will require a starting node input but Kruskals and Boruvka’s do not require a starting node as it does not get considered when processing the algorithm.

The algorithms are handled by the backend api which can be found here: https://github.com/Samkray21/Algorithm-Visualiser-Backend

![](https://user-images.githubusercontent.com/48014118/96774777-70bc7b00-13de-11eb-94ac-03713b568692.gif)

## [Live Demo](https://msp-visualiser.herokuapp.com/)


## Get Started

You will need your own Javascript Google Maps api key to run this project locally, more information can be found here: https://developers.google.com/maps/documentation/javascript/overview

1. Clone the repo `git clone https://github.com/Samkray21/Algorithm-Visualiser-Frontend.git`

2. Create a .env file and insert your Google maps api key like this: `API_KEY=INSERT_YOUR_API_KEY_HERE`

3. Go to repo directory and install npm modules `cd Algorithm-Visualiser-Frontend && npm install`

4. run `ng serve`

5. Open http://localhost:4200/ to view it in the browser.
