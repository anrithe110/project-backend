module.exports = Deletefile;
function Deletefile (deleting , fs) {
    const filePath = "public/images/" + deleting + "";
    if (fs.existsSync(filePath)) {
      try {
        fs.unlinkSync(filePath)
        console.log('File deleted successfully')
      } catch (err) {
        console.error(err)
      }
    } else {
      console.log('File not found')
    }
  }