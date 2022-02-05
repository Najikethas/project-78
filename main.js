var images=["https://wallpaper.dog/large/20482087.jpg","https://wallpapercave.com/wp/wp4686982.jpg","https://coolthemestores.com/wp-content/uploads/2020/11/roblox-features.jpg","https://wallpapercave.com/wp/wp7363345.jpg"]
var names=["Mr Cool Guy","idk his name","builderman","guy stuck in space"]
var i=0
function update() {
    i++;
    var numbers_of_family_member_in_array = 4
if(i > numbers_of_family_member_in_array )
{ i = 0; }
var updatedImage = images[i];
var updatedName = names[i];
document.getElementById("family_member_image").src = updatedImage;
document.getElementById("family_member_name").innerHTML = updatedName;
}