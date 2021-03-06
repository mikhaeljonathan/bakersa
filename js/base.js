// DATABASE
class Bread {
    constructor(id, name, price, rating, desc, isNew = false) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.rating = rating;
        this.desc = desc;
        this.isNew = isNew;
    }
}
let breads = [];
breads.push(new Bread(0, 'Baguette Bread', 18000, 3, 'This is a yeast bread that originated in France and has a long, oblong shape with slits in it to allow for the expansion of gas. Also called French bread or French sticks, Baguettes are usually made from flour, water, yeast, and salt, and its look is very recognizable to bread lovers of all kinds.'));
breads.push(new Bread(1, 'Brioche Bread', 27000, 5, 'A French bread made with butter and eggs, Brioche is extremely light and has a subtle sweetness to it. Its crust is soft and it has a golden-yellow shade due to the egg that you brush on it right before you bake it. Even with French toast, Brioche bread is a perfect choice, and if you’ve never tasted this type of bread before, there is no better time than right now to get started.'));
breads.push(new Bread(2, 'Ciabatta Bread', 16000, 1, 'Ciabatta is the Italian word for “slipper,” and this Italian-made bread consists of just a few basic ingredients, including water, salt, yeast, and wheat flour. Depending on where in Italy you find this type of bread, its crust and even its texture can vary, but the main ingredients are the exact same in every loaf you find. Ciabatta bread is perfect for paninis and sandwiches, as well as many other dishes.', true));
breads.push(new Bread(3, 'Multigrain Bread', 21000, 2, 'With a rich hearty flavor, multigrain bread usually uses grains such as oats, barley, flax, and millet, as well as others, so it is extremely healthy and delicious. It is perfect for your morning toast, sandwiches, or to dip in dressings or vegetable oil that has been sprinkled with herbs.'));
breads.push(new Bread(4, 'Rye Bread', 21000, 4, 'Made with both rye flour and bread flour, rye bread consists of a tight crumb and a very strong flavor. Some bakers even add caraway seeds or dill seeds so that their flavor is a little earthy. In certain sandwiches – most notably, corned-beef and pastrami sandwiches – the rye bread is what gives it the signature taste that most people love, and they become even more appreciated when you add a little mustard.', true));
breads.push(new Bread(5, 'Sourdough Bread', 31000, 3, 'Sourdough bread has a nice thick crust and a soft chewy center, along with very large air bubbles. It also has a very distinct taste that you’ll want more of once you try it, and it can accompany any type of sandwich you wish to make.', true));
breads.push(new Bread(6, 'Whole Wheat Bread', 19500, 2, 'With white bread, only parts of the wheat grain are used, but in whole-wheat bread the germ and the bran are intact. What does this mean for those eating this bread? It means the bread is more nutritious and has much more fiber than regular bread. You can use whole-wheat bread for any type of sandwich you would normally use white bread for, and you can make up your own recipes if you are creative enough.'));
breads.push(new Bread(7, 'Bagels', 22500, 4, 'Bagels are usually boiled in water for a short time then baked afterward. They are round, come in two parts, and have a hole in the center. The best part about buying bagels is their numerous types, such as egg, cinnamon, and blueberry. Try them in a traditional way by eating them with salmon or cream cheese.'));
breads.push(new Bread(8, 'Grissini Bread', 24000, 5, 'Somewhat similar to breadsticks, Grissini is made of crisp, dry bread and are thin sticks that resemble a pencil. Native to Italy, these bread can be flavored any way you want them to be, so feel free to add herbs and spices of any type to liven up the flavor. They are mostly used as a before-dinner alternative to regular or garlic bread, but they can be eaten any way you wish.'));
breads.push(new Bread(9, 'Soda Bread', 12000, 1, 'With ingredients that include buttermilk, salt, baking soda, and flour, this is a traditional type of bread in Ireland. It is also a bread that doesn’t need to be left alone for a while to rise, which means it can be made quickly and easily at any time.', true));

// Load Nav and Footer for all pages
let expandedNav = $("#navbar-expanded");
$("#hamburger-menu").click(function () {
  expandedNav.slideToggle("slow");
});

// KALO GA DIBUAT GINI PAS DI MOBILE DROP DOWN EXTENDED TERUS KE DESKTOP BAKAL ANCUR
window.addEventListener("resize", () => {
  expandedNav.css("display", `${window.innerWidth >= 500 ? "flex" : "none"}`);
});

// OVERLAY DIALOG (close when user click outside the dialog)
$('.overlay-dialog').click(function(e){
    let classTarget = e.target.classList[0];
    if (classTarget === 'overlay-dialog') {
        $('.overlay-dialog').css('visibility', 'hidden');
    }
});

// BUAT FORMAT UANG RUPIAH
let numberFormat = new Intl.NumberFormat('id', {
    style: 'currency',
    currency: 'IDR',
    userGrouping: false
});