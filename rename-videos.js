const fs = require('fs');
const path = require('path');

const videoDir = path.join(__dirname, 'cypress/videos');

fs.readdir(videoDir, (err, files) => {
  if (err) throw err;

  files.forEach(file => {
    const filePath = path.join(videoDir, file);
    const date = new Date();
    const formattedDate = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}_${date.getHours()}-${date.getMinutes()}-${date.getSeconds()}`;
    const newFileName = `${path.basename(file, '.mp4')}_${formattedDate}.mp4`;
    const newFilePath = path.join(videoDir, newFileName);

    fs.rename(filePath, newFilePath, err => {
      if (err) throw err;
    });
  });
});