 // JavaScript bilan mevalar ro'yxati qo'shish va narx ma'lumotlarni to'plash
 document.addEventListener("DOMContentLoaded", function() {
  var mevalarForm = document.getElementById('mevalar-form');
  var mevalarList = document.getElementById('mevalar-list');

  mevalarForm.addEventListener('submit', function(event) {
    event.preventDefault();
    
    var mevaNomInput = document.getElementById('meva-nom');
    var mevaNarxInput = document.getElementById('meva-narx');
    
    var mevaNom = mevaNomInput.value;
    var mevaNarx = mevaNarxInput.value;
    
    var newRow = document.createElement('tr');
    newRow.innerHTML = "<td>" + mevaNom + "</td><td>" + mevaNarx + "</td>";
    mevalarList.appendChild(newRow);

    
    
    mevaNomInput.value = '';
    mevaNarxInput.value = '';
  });

  mevalarList.addEventListener('click', function(event) {
    var targetRow = event.target.parentNode;
    var mevaNom = targetRow.cells[0].textContent;
    var mevaNarx = targetRow.cells[1].textContent;
    alert(mevaNom + " narxi: $" + mevaNarx);
  });
});