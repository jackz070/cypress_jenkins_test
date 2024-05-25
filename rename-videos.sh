#!/bin/bash

for file in cypress/videos/*.mp4
do
  mv "$file" "${file%.mp4}_$(date +%Y%m%d%H%M%S).mp4"
done