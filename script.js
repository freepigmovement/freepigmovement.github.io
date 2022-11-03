// volume calculator script

const arr = {
  firstSlider: [
    { Imp: `4'0"`, Metr: 121.9 },
    { Imp: `4'1"`, Metr: 124.5 },
    { Imp: `4'2"`, Metr: 127 },
    { Imp: `4'3"`, Metr: 129.5 },
    { Imp: `4'4"`, Metr: 132 },
    { Imp: `4'5"`, Metr: 134.6 },
    { Imp: `4'6"`, Metr: 137.1 },
    { Imp: `4'7"`, Metr: 139.7 },
    { Imp: `4'8"`, Metr: 142.2 },
    { Imp: `4'9"`, Metr: 144.7 },
    { Imp: `4'10"`, Metr: 147.3 },
    { Imp: `4'11"`, Metr: 149.8 },
    { Imp: `5'0"`, Metr: 152.4 },
    { Imp: `5'1"`, Metr: 155.0 },
    { Imp: `5'2"`, Metr: 157.5 },
    { Imp: `5'3"`, Metr: 160.0 },
    { Imp: `5'4"`, Metr: 162.5 },
    { Imp: `5'5"`, Metr: 165.0 },
    { Imp: `5'6"`, Metr: 167.6 },
    { Imp: `5'7"`, Metr: 170.0 },
    { Imp: `5'8"`, Metr: 172.7 },
    { Imp: `5'9"`, Metr: 175.3 },
    { Imp: `5'10"`, Metr: 178 },
    { Imp: `5'11"`, Metr: 180.5 },
    { Imp: `6'0"`, Metr: 183.0 },
    { Imp: `6'1"`, Metr: 185.4 },
    { Imp: `6'2"`, Metr: 188.0 },
    { Imp: `6'3"`, Metr: 190.5 },
    { Imp: `6'4"`, Metr: 193.0 },
    { Imp: `6'5"`, Metr: 195.6 },
    { Imp: `6'6"`, Metr: 198.0 },
    { Imp: `6'7"`, Metr: 200.7 },
    { Imp: `6'8"`, Metr: 203.2 },
    { Imp: `6'9"`, Metr: 205.7 },
    { Imp: `6'10"`, Metr: 208 },
    { Imp: `6'11"`, Metr: 210 },
    { Imp: `7'0"`, Metr: 213.4 },
    { Imp: `7'1"`, Metr: 215.9 },
    { Imp: `7'2"`, Metr: 218.4 },
    { Imp: `7'3"`, Metr: 220.1 },
    { Imp: `7'4"`, Metr: 223.5 },
    { Imp: `7'5"`, Metr: 226.0 },
    { Imp: `7'6"`, Metr: 228.6 },
    { Imp: `7'7"`, Metr: 231.1 },
    { Imp: `7'8"`, Metr: 233.7 },
    { Imp: `7'9"`, Metr: 236.2 },
    { Imp: `7'10"`, Metr: 238.5 },
    { Imp: `7'11"`, Metr: 240.5 },
    { Imp: `8'0"`, Metr: 243.8 },
    { Imp: `8'1"`, Metr: 246.4 },
    { Imp: `8'2"`, Metr: 248.9 },
    { Imp: `8'3"`, Metr: 251.4 },
    { Imp: `8'4"`, Metr: 254 },
    { Imp: `8'5"`, Metr: 256.5 },
    { Imp: `8'6"`, Metr: 259 },
    { Imp: `8'7"`, Metr: 261.2 },
    { Imp: `8'8"`, Metr: 264.1 },
    { Imp: `8'9"`, Metr: 266.7 },
    { Imp: `8'10"`, Metr: 269.2 },
    { Imp: `8'11"`, Metr: 271.8 },
    { Imp: `9'0"`, Metr: 274.3 },
    { Imp: `9'1"`, Metr: 276.8 },
    { Imp: `9'2"`, Metr: 279.4 },
    { Imp: `9'3"`, Metr: 281.9 },
    { Imp: `9'4"`, Metr: 284.5 },
    { Imp: `9'5"`, Metr: 287 },
    { Imp: `9'6"`, Metr: 289.5 },
    { Imp: `9'7"`, Metr: 292.1 },
    { Imp: `9'8"`, Metr: 294.6 },
    { Imp: `9'9"`, Metr: 297.1 },
    { Imp: `9'10"`, Metr: 299.7 },
    { Imp: `9'11"`, Metr: 302.2 },
  ],
  secondSlider: [
    { Imp: `16"`, Metr: 40.6 },
    { Imp: `16 ¼"`, Metr: 41.3 },
    { Imp: `16 ⅜"`, Metr: 41.6 },
    { Imp: `16 7/16"`, Metr: 41.7 },
    { Imp: `16 ½"`, Metr: 41.9 },
    { Imp: `16 ⅝"`, Metr: 42.2 },
    { Imp: `16 11/16"`, Metr: 42.3 },
    { Imp: `16 ¾"`, Metr: 42.5 },
    { Imp: `16 ⅞"`, Metr: 42.9 },
    { Imp: `17"`, Metr: 43.1 },
    { Imp: `17 ¼"`, Metr: 43.8 },
    { Imp: `17 ⅜"`, Metr: 44.1 },
    { Imp: `17 7/16"`, Metr: 44.2 },
    { Imp: `17 ½"`, Metr: 44.4 },
    { Imp: `17 ⅝"`, Metr: 44.7 },
    { Imp: `17 11/16"`, Metr: 44.9 },
    { Imp: `17 ¾"`, Metr: 45 },
    { Imp: `17 ⅞"`, Metr: 45.4 },
    { Imp: `18"`, Metr: 45.7 },
    { Imp: `18 ¼"`, Metr: 46.3 },
    { Imp: `18 ⅜"`, Metr: 46.4 },
    { Imp: `18 7/16"`, Metr: 46.8 },
    { Imp: `18 ½"`, Metr: 47.0 },
    { Imp: `18 ⅝"`, Metr: 47.3 },
    { Imp: `18 11/16"`, Metr: 47.4 },
    { Imp: `18 ¾"`, Metr: 47.6 },
    { Imp: `18 ⅞"`, Metr: 47.9 },
    { Imp: `19 "`, Metr: 48.2 },
    { Imp: `19 ¼"`, Metr: 48.9 },
    { Imp: `19 ⅜"`, Metr: 49.2 },
    { Imp: `19 7/16"`, Metr: 49.3 },
    { Imp: `19 ½"`, Metr: 49.5 },
    { Imp: `19 ⅝"`, Metr: 49.8 },
    { Imp: `19 11/16"`, Metr: 50 },
    { Imp: `19 ¾"`, Metr: 50.1 },
    { Imp: `19 ⅞"`, Metr: 50.4 },
    { Imp: `20 "`, Metr: 50.8 },
    { Imp: `20 ¼"`, Metr: 51.4 },
    { Imp: `20 ⅜"`, Metr: 51.7 },
    { Imp: `20 7/16"`, Metr: 51.9 },
    { Imp: `20 ½"`, Metr: 52.1 },
    { Imp: `20 ⅝"`, Metr: 52.3 },
    { Imp: `20 11/16"`, Metr: 52.5 },
    { Imp: `20 ¾"`, Metr: 52.7 },
    { Imp: `20 ⅞"`, Metr: 53 },
    { Imp: `21 "`, Metr: 53.3 },
    { Imp: `21 ¼"`, Metr: 53.9 },
    { Imp: `21 ⅜"`, Metr: 54.2 },
    { Imp: `21 7/16"`, Metr: 54.4 },
    { Imp: `21 ½"`, Metr: 54.6 },
    { Imp: `21 ⅝"`, Metr: 54.9 },
    { Imp: `21 11/16"`, Metr: 55 },
    { Imp: `21 ¾"`, Metr: 55.2 },
    { Imp: `21 ⅞"`, Metr: 55.5 },
    { Imp: `22 "`, Metr: 55.9 },
    { Imp: `22 ¼"`, Metr: 56.5 },
    { Imp: `22 ⅜"`, Metr: 56.8 },
    { Imp: `22 7/16"`, Metr: 56.9 },
    { Imp: `22 ½"`, Metr: 57.1 },
    { Imp: `22 ⅝"`, Metr: 57.4 },
    { Imp: `22 11/16"`, Metr: 57.6 },
    { Imp: `22 ¾"`, Metr: 57.8 },
    { Imp: `22 ⅞"`, Metr: 58.1 },
    { Imp: `23 "`, Metr: 58.4 },
    { Imp: `23 ¼"`, Metr: 59 },
    { Imp: `23 ⅜"`, Metr: 59.3 },
    { Imp: `23 7/16"`, Metr: 59.5 },
    { Imp: `23 ½"`, Metr: 59.7 },
    { Imp: `23 ⅝"`, Metr: 60 },
    { Imp: `23 11/16"`, Metr: 60.1 },
    { Imp: `23 ¾"`, Metr: 60.3 },
    { Imp: `23 ⅞"`, Metr: 60.6 },
    { Imp: `24 "`, Metr: 60.9 },
  ],
  thirdSlider: [
    { Imp: `2"`, Metr: 5.0 },
    { Imp: `2 ⅛"`, Metr: 5.3 },
    { Imp: `2 3/16"`, Metr: 5.5 },
    { Imp: `2 ¼"`, Metr: 5.7 },
    { Imp: `2 5/16"`, Metr: 5.8 },
    { Imp: `2 ⅜"`, Metr: 6.0 },
    { Imp: `2 7/16"`, Metr: 6.1 },
    { Imp: `2 ½"`, Metr: 6.3 },
    { Imp: `2 9/16"`, Metr: 6.5 },
    { Imp: `2 ⅝"`, Metr: 6.6 },
    { Imp: `2 11/16"`, Metr: 6.8 },
    { Imp: `2 ¾"`, Metr: 6.9 },
    { Imp: `2 ⅞"`, Metr: 7.3 },
    { Imp: `3"`, Metr: 7.6 },
    { Imp: `3 ⅛"`, Metr: 7.9 },
    { Imp: `3 3/16"`, Metr: 8 },
    { Imp: `3 ¼"`, Metr: 8.2 },
    { Imp: `3 5/16"`, Metr: 8.4 },
    { Imp: `3 ⅜"`, Metr: 8.6 },
    { Imp: `3 7/16"`, Metr: 8.7 },
    { Imp: `3 ½"`, Metr: 8.9 },
    { Imp: `3 ⅝"`, Metr: 9.2 },
    { Imp: `3 11/16"`, Metr: 9.3 },
    { Imp: `3 ¾"`, Metr: 9.5 },
    { Imp: `3 ⅞"`, Metr: 9.8 },
    { Imp: `4"`, Metr: 10.1 },
  ],
  fourthSlider: [{ val: 0.54 }, { val: 0.55 }, { val: 0.56 }, { val: 0.57 }, { val: 0.58 }],
};
const currentValue = {
  firstSlider: { Imp: "7'6", Metr: 228.6 },
  secondSlider: { Imp: `20 ⅝"`, Metr: 52.3 },
  thirdSlider: { Imp: "3", Metr: 7.6 },
  fourthSlider: { val: 0.56 },
};
const cont = document.getElementById("wrap");

let firstSlider = document.getElementById("firstSlider");
let secondSlider = document.getElementById("secondSlider");
let thirdSlider = document.getElementById("thirdSlider");

cont.oninput = function (event) {
  let id = event.target.id;
  let val = event.target.value;
  currentValue[id] = arr[id][val];
  if (event.target.id !== "fourthSlider") {
    event.target.previousSibling.previousSibling.lastElementChild.innerHTML = formatLabel(currentValue[id].Imp);
  }
  total(currentValue.firstSlider, currentValue.secondSlider, currentValue.thirdSlider, currentValue.fourthSlider);
};
function total(first, second, third, coeff) {
  let ttl = document.getElementById("total");
  ttl.innerHTML = Math.floor((first.Metr * second.Metr * third.Metr * coeff.val) / 100) / 10 + " LITERS";
}
function formatLabel(label) {
  if (label.indexOf("/") != -1) {
    return label.split(" ")[0] + '<small class="sml">' + label.split(" ")[1] + "</small>";
  }
  return label;
}

// volume calculator script end
