var JSON_DATA = JSON_DATA || {};
JSON_DATA["flikr"] = {
    "title": "Talk On Travel Pool",
    "link": "http://www.flickr.com/groups/talkontravel/pool/",
    "description": "Travel and vacation photos from around the world.",
    "modified": "2009-02-02T11:10:27Z",
    "generator": "http://www.flickr.com/",
    "items": [
        {
            "title": "View from the hotel",
            "link": "http://www.flickr.com/photos/33112458@N08/3081564649/in/pool-998875@N22",
            "media": {
                "m": "http://farm4.static.flickr.com/3037/3081564649_4a6569750c_m.jpg"
            },
            "date_taken": "2008-12-04T04:43:03-08:00",
            "description": "<p><a href=\"http://www.flickr.com/people/33112458@N08/\"> Talk On Travel<\/a> has added a photo to the pool:<\/p> <p><a href=\"http:// www.flickr.com/photos/33112458@N08/3081564649/\" title=\"View from the hotel\"> <img src=\"http://farm4.static.flickr.com/3037/3081564649_4a6569750c_m.jpg\" width=\"240\" height=\"180\" alt=\"View from the hotel\" /><\/a><\/p> ",
            "published": "2008-12-04T12:43:03Z",
            "author": "nobody@flickr.com (Talk On Travel)",
            "author_id": "33112458@N08",
            "tags": "spain dolphins tenerife canaries lagomera aqualand playadelasamericas junglepark losgigantos loscristines talkontravel"
        }
    ]
};
JSON_DATA["products"] = {
    "name":"Product",
    "properties":
    {
        "id":
        {
            "type":"number",
            "description":"Product identifier",
            "required":true
        },
        "name":
        {
            "description":"Name of the product",
            "type":"string",
            "required":true
        },
        "price":
        {
            "type":"number",
            "minimum":0,
            "required":true
        },
        "tags":
        {
            "type":"array",
            "items":
            {
                "type":"string"
            }
        }
    }
};
JSON_DATA["colors"] = {
    "colorsArray":[{
        "colorName":"red",
        "hexValue":"#f00"
    },
        {
            "colorName":"green",
            "hexValue":"#0f0"
        },
        {
            "colorName":"blue",
            "hexValue":"#00f"
        },
        {
            "colorName":"cyan",
            "hexValue":"#0ff"
        },
        {
            "colorName":"magenta",
            "hexValue":"#f0f"
        },
        {
            "colorName":"yellow",
            "hexValue":"#ff0"
        },
        {
            "colorName":"black",
            "hexValue":"#000"
        }
    ]
};
JSON_DATA["customer"] = {
    "firstName": "John",
    "lastName": "Smith",
    "age": 25,
    "address":
    {
        "streetAddress": "21 2nd Street",
        "city": "New York",
        "state": "NY",
        "postalCode": "10021"
    },
    "phoneNumber":
        [
            {
                "type": "home",
                "number": "555 555-5555"
            },
            {
                "type": "fax",
                "number": "555 555-5555"
            }
        ]
};
JSON_DATA["facebook"] = {
    "data": [
        {
            "id": "X999_Y999",
            "from": {
                "name": "Tom Brady",
                "id": "X12"
            },
            "message": "Looking forward to 2010!",
            "actions": [
                {
                    "name": "Comment",
                    "link": "http://www.facebook.com/X999/posts/Y999"
                },
                {
                    "name": "Like",
                    "link": "http://www.facebook.com/X999/posts/Y999"
                }
            ],
            "type": "status",
            "created_time": "2010-08-02T21:27:44+0000",
            "updated_time": "2010-08-02T21:27:44+0000"
        },
        {
            "id": "X998_Y998",
            "from": {
                "name": "Peyton Manning",
                "id": "X18"
            },
            "message": "Where's my contract?",
            "actions": [
                {
                    "name": "Comment",
                    "link": "http://www.facebook.com/X998/posts/Y998"
                },
                {
                    "name": "Like",
                    "link": "http://www.facebook.com/X998/posts/Y998"
                }
            ],
            "type": "status",
            "created_time": "2010-08-02T21:27:44+0000",
            "updated_time": "2010-08-02T21:27:44+0000"
        }
    ]
};