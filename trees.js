var reasons = ["Pine trees provide us paper", 
"Trees provide housing to millions of species", 
"Trees protect us from rainwater and floods", 
"Trees provide us shade from the sun"];

var images = ["https://cff2.earth.com/uploads/2023/05/08165030/pine-trees_1medium.jpg", 
"https://www.thespruce.com/thmb/ClRANI4jTWhkGeNhvJtArRhlGSA=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/the-difference-between-trees-and-shrubs-3269804-hero-a4000090f0714f59a8ec6201ad250d90.jpg", 
"https://daily.jstor.org/wp-content/uploads/2020/06/why_you_should_learn_the_names_of_trees_1050x700.jpg", 
"https://cdn.britannica.com/98/214598-050-9879F2FA/giant-sequoia-tree-Sequoia-National-Park-California.jpg"];

var i = 0;
function nextslide() {
    document.getElementById("reasontext").innerHTML=reasons[i];
    document.getElementById("album").src=images[i];
    i++;
    document.getElementById("audio").play();
}