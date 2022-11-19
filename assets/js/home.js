let designct = ["Work", "Personal", "Cleaning", "Others"];

let clr = document.getElementsByClassName('cate_date');

for (let i = 0; i < clr.length; i++) {
    if (clr[i].innerHTML.trim() == 'Work') {
        clr[i].classList.add(designct[0])
        clr[i].classList.add('Work')
    }
    else if (clr[i].innerHTML == 'Personal') {
        clr[i].classList.add(designct[1])
        clr[i].classList.add('Personal')
    } else if (clr[i].innerHTML.trim() == 'Cleaning') {
        clr[i].classList.add(designct[2])
        clr[i].classList.add('Cleaning')
    } else if (clr[i].innerHTML.trim() == 'Others') {
        clr[i].classList.add(designct[3])
        clr[i].classList.add('Others')
    }
    
}
