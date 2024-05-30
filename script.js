let myName = prompt("Kullanıcı adınız");
var userName = (document.querySelector("#myName").innerHTML = myName);

function NameOp(userName) {
  myName.innerHTML = `${myName.length ? myName : "kullanıcı bilgisi yok"} `;
  console.log(this.ad);
}
const DATE = (document.querySelector("#myClock").innerHTML = new Date());
