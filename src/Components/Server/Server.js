const http = require('http');

// The JSON data
const data = {
  "locations": [
    {
      "location": "Gothenburg",
      "rooms": [
        {
          "room_number": 1,
          "budget": "$100",
          "pictures": {
            "home_picture": "url_to_home_image_1",
            "room_pictures": [
              "url_to_room_image_1_1",
              "url_to_room_image_1_2"
            ]
          }
        },
        {
          "room_number": 2,
          "budget": "$150",
          "pictures": {
            "home_picture": "url_to_home_image_2",
            "room_pictures": [
              "url_to_room_image_2_1",
              "url_to_room_image_2_2"
            ]
          }
        },
        {
          "room_number": 3,
          "budget": "$200",
          "pictures": {
            "home_picture": "url_to_home_image_3",
            "room_pictures": [
              "url_to_room_image_3_1",
              "url_to_room_image_3_2"
            ]
          }
        },
        {
          "room_number": 4,
          "budget": "$250",
          "pictures": {
            "home_picture": "url_to_home_image_4",
            "room_pictures": [
              "url_to_room_image_4_1",
              "url_to_room_image_4_2"
            ]
          }
        },
        {
          "room_number": 5,
          "budget": "$300",
          "pictures": {
            "home_picture": "url_to_home_image_5",
            "room_pictures": [
              "url_to_room_image_5_1",
              "url_to_room_image_5_2"
            ]
          }
        }
      ]
    },
    {
      "location": "London",
      "rooms": [
        {
          "room_number": 1,
          "budget": "$120",
          "pictures": {
            "home_picture": "url_to_home_image_1",
            "room_pictures": [
              "url_to_room_image_1_1",
              "url_to_room_image_1_2"
            ]
          }
        },
        {
          "room_number": 2,
          "budget": "$170",
          "pictures": {
            "home_picture": "url_to_home_image_2",
            "room_pictures": [
              "url_to_room_image_2_1",
              "url_to_room_image_2_2"
            ]
          }
        },
        {
          "room_number": 3,
          "budget": "$220",
          "pictures": {
            "home_picture": "url_to_home_image_3",
            "room_pictures": [
              "url_to_room_image_3_1",
              "url_to_room_image_3_2"
            ]
          }
        },
        {
          "room_number": 4,
          "budget": "$270",
          "pictures": {
            "home_picture": "url_to_home_image_4",
            "room_pictures": [
              "url_to_room_image_4_1",
              "url_to_room_image_4_2"
            ]
          }
        },
        {
          "room_number": 5,
          "budget": "$320",
          "pictures": {
            "home_picture": "url_to_home_image_5",
            "room_pictures": [
              "url_to_room_image_5_1",
              "url_to_room_image_5_2"
            ]
          }
        }
      ]
    },
    {
      "location": "New York",
      "rooms": [
        {
          "room_number": 1,
          "budget": "$200",
          "pictures": {
            "home_picture": "url_to_home_image_1",
            "room_pictures": [
              "url_to_room_image_1_1",
              "url_to_room_image_1_2"
            ]
          }
        },
        {
          "room_number": 2,
          "budget": "$250",
          "pictures": {
            "home_picture": "url_to_home_image_2",
            "room_pictures": [
              "url_to_room_image_2_1",
              "url_to_room_image_2_2"
            ]
          }
        },
        {
          "room_number": 3,
          "budget": "$300",
          "pictures": {
            "home_picture": "url_to_home_image_3",
            "room_pictures": [
              "url_to_room_image_3_1",
              "url_to_room_image_3_2"
            ]
          }
        },
        {
          "room_number": 4,
          "budget": "$350",
          "pictures": {
            "home_picture": "url_to_home_image_4",
            "room_pictures": [
              "url_to_room_image_4_1",
              "url_to_room_image_4_2"
            ]
          }
        },
        {
          "room_number": 5,
          "budget": "$400",
          "pictures": {
            "home_picture": "url_to_home_image_5",
            "room_pictures": [
              "url_to_room_image_5_1",
              "url_to_room_image_5_2"
            ]
          }
        }
      ]
    },
    {
      "location": "Tokyo",
      "rooms": [
        {
          "room_number": 1,
          "budget": "$150",
          "pictures": {
            "home_picture": "url_to_home_image_1",
            "room_pictures": [
              "url_to_room_image_1_1",
              "url_to_room_image_1_2"
            ]
          }
        },
        {
          "room_number": 2,
          "budget": "$180",
          "pictures": {
            "home_picture": "url_to_home_image_2",
            "room_pictures": [
              "url_to_room_image_2_1",
              "url_to_room_image_2_2"
            ]
          }
        },
        {
          "room_number": 3,
          "budget": "$210",
          "pictures": {
            "home_picture": "url_to_home_image_3",
            "room_pictures": [
              "url_to_room_image_3_1",
              "url_to_room_image_3_2"
            ]
          }
        },
        {
          "room_number": 4,
          "budget": "$240",
          "pictures": {
            "home_picture": "url_to_home_image_4",
            "room_pictures": [
              "url_to_room_image_4_1",
              "url_to_room_image_4_2"
            ]
          }
        },
        {
          "room_number": 5,
          "budget": "$270",
          "pictures": {
            "home_picture": "url_to_home_image_5",
            "room_pictures": [
              "url_to_room_image_5_1",
              "url_to_room_image_5_2"
            ]
          }
        }
      ]
    },
    {
      "location": "Sydney",
      "rooms": [
        {
          "room_number": 1,
          "budget": "$220",
          "pictures": {
            "home_picture": "url_to_home_image_1",
            "room_pictures": [
              "url_to_room_image_1_1",
              "url_to_room_image_1_2"
            ]
          }
        },
        {
          "room_number": 2,
          "budget": "$270",
          "pictures": {
            "home_picture": "url_to_home_image_2",
            "room_pictures": [
              "url_to_room_image_2_1",
              "url_to_room_image_2_2"
            ]
          }
        },
        {
          "room_number": 3,
          "budget": "$320",
          "pictures": {
            "home_picture": "url_to_home_image_3",
            "room_pictures": [
              "url_to_room_image_3_1",
              "url_to_room_image_3_2"
            ]
          }
        },
        {
          "room_number": 4,
          "budget": "$370",
          "pictures": {
            "home_picture": "url_to_home_image_4",
            "room_pictures": [
              "url_to_room_image_4_1",
              "url_to_room_image_4_2"
            ]
          }
        },
        {
          "room_number": 5,
          "budget": "$420",
          "pictures": {
            "home_picture": "url_to_home_image_5",
            "room_pictures": [
              "url_to_room_image_5_1",
              "url_to_room_image_5_2"
            ]
          }
        }
      ]
    }
  ]
};

// Create a server and send the data as the response
http.createServer((req, res) => {
  res.setHeader('Content-Type', 'application/json');
  res.writeHead(200);
  res.end(JSON.stringify(data));
}).listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});
