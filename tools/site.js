// Shared footer: a relevant product suggestion plus honest support links.
(function(){
  var SHOP = "https://rokeru.gumroad.com";
  var TIP = "https://chietruprogramatoru.github.io/";
  var PRODUCTS = {
    christmas: {name:"Christmas Planner (printable, 15 pages)", url:SHOP+"/l/scgski", price:"$6",
      text:"Planning the holidays too? My printable Christmas Planner has gift lists, a budget page, a cards tracker and a December to-do calendar."},
    budget: {name:"Monthly Budget Planner Spreadsheet", url:SHOP+"/l/rpqra", price:"$8",
      text:"Want this every month? My budget spreadsheet works in Excel and Google Sheets and does the sums for you."},
    debt: {name:"Debt Payoff & Savings Pack", url:SHOP+"/l/divhc", price:"$6",
      text:"Turn the plan into a habit: my printable Debt Payoff & Savings Pack has snowball and avalanche trackers and savings charts."},
    planner: {name:"2027 Planner (hyperlinked, 87 pages)", url:SHOP+"/l/bydlvs", price:"$9",
      text:"Counting down to something? My 2027 Planner keeps the whole year on one page and every month one tap away."}
  };
  var key = document.body.getAttribute("data-promo");
  var p = PRODUCTS[key];
  var box = document.createElement("section");
  box.className = "promo";
  box.innerHTML =
    (p ? '<p>'+p.text+'</p><p><a href="'+p.url+'" target="_blank" rel="noopener"><b>'+p.name+'</b></a> · '+p.price+'</p><hr style="border:0;border-top:1px solid var(--line);margin:14px 0">' : '') +
    '<p class="muted">These tools are free, with no sign-up and no tracking. If one saved you some time, you can say thanks:</p>' +
    '<div class="support"><a class="btn" href="'+TIP+'" target="_blank" rel="noopener">☕ Buy me a coffee</a>' +
    '<a class="btn alt" href="'+SHOP+'" target="_blank" rel="noopener">🛍️ Browse my planners</a></div>';
  var main = document.querySelector("main");
  main.appendChild(box);
  var f = document.createElement("footer");
  f.innerHTML = 'Made by Rokeru · <a href="./'+(key?'../':'')+'">More free tools</a> · Everything runs in your browser; nothing you type is sent anywhere.';
  main.appendChild(f);
})();
