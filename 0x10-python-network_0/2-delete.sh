#!/bin/bash
#Script that sends a DELETE request to a URL passed as the first argumen adn display the body ofresponse
curl -sx DELETE "$1"
