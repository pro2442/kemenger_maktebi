let btn = document.querySelector(".btn_one");
let secret = document.querySelector(".secret_box");
let body = document.body;
let btn2 = document.querySelector(".btn");
let zaay = document.querySelector(".zayavka");
let block = document.querySelector(".block_block");
let block2 = document.querySelector(".div_block");

btn.onclick = (e) => {
  e.preventDefault();
  body.classList.toggle("lock");
  window.scrollTo(0, 0);
  secret.classList.toggle("none");
  block.classList.remove("none_none");
  block2.classList.add("none_none");
  secret.onclick = () => {
    secret.classList.toggle("none");
    body.classList.toggle("lock");
  };

  zaay.onclick = () => {
    secret.classList.add("none");
    btn2.onclick = () => {
      block.classList.toggle("none_none");
      block2.classList.toggle("none_none");
    };
  };

  window.addEventListener(
    "keydown",
    (event) => {
      if (event.key == "Escape") {
        secret.classList.add("none");
        body.classList.remove("lock");
      }
    },
    true
  );
};

let cert_one = document.querySelector(".one_div_img");
let secret_img_box_one = document.querySelector(".secret_img_box_one");
let cert_one_one = document.querySelector(".cert_one_one");

cert_one.onclick = (e) => {
  e.preventDefault();
  body.classList.toggle("lock");
  window.scrollTo(0, 3933);
  secret_img_box_one.classList.toggle("img_none");
  secret_img_box_one.onclick = () => {
    secret_img_box_one.classList.toggle("img_none");
    body.classList.remove("lock");
  };
  cert_one_one.onclick = () => {
    secret_img_box_one.classList.add("img_none");
  };
  window.addEventListener(
    "keydown",
    (event) => {
      if (event.key == "Escape") {
        secret_img_box_one.classList.add("img_none");
        body.classList.remove("lock");
      }
    },
    true
  );
};

let cert_two = document.querySelector(".two_div_img");
let secret_img_box_two = document.querySelector(".secret_img_box_two");
let cert_one_two = document.querySelector(".cert_one_two");

cert_two.onclick = (e) => {
  e.preventDefault();
  body.classList.toggle("lock");
  window.scrollTo(0, 3933);
  secret_img_box_two.classList.toggle("img_non");
  secret_img_box_two.onclick = () => {
    secret_img_box_two.classList.toggle("img_non");
    body.classList.remove("lock");
  };
  cert_one_two.onclick = () => {
    secret_img_box_two.classList.add("img_non");
  };
  window.addEventListener(
    "keydown",
    (event) => {
      if (event.key == "Escape") {
        secret_img_box_two.classList.add("img_non");
        body.classList.remove("lock");
      }
    },
    true
  );
};

let cert_tree = document.querySelector(".tree_div_img");
let secret_img_box_tree = document.querySelector(".secret_img_box_tree");
let cert_one_tree = document.querySelector(".cert_one_tree");

cert_tree.onclick = (e) => {
  e.preventDefault();
  body.classList.toggle("lock");
  window.scrollTo(0, 3933);
  secret_img_box_tree.classList.toggle("img_no");
  secret_img_box_tree.onclick = () => {
    secret_img_box_tree.classList.toggle("img_no");
    body.classList.remove("lock");
  };
  cert_one_tree.onclick = () => {
    secret_img_box_tree.classList.add("img_no");
  };
  window.addEventListener(
    "keydown",
    (event) => {
      if (event.key == "Escape") {
        secret_img_box_tree.classList.add("img_no");
        body.classList.remove("lock");
      }
    },
    true
  );
};

let cert_four = document.querySelector(".four_div_img");
let secret_img_box_four = document.querySelector(".secret_img_box_four");
let cert_one_four = document.querySelector(".cert_one_four");

cert_four.onclick = (e) => {
  e.preventDefault();
  body.classList.toggle("lock");
  window.scrollTo(0, 3933);
  secret_img_box_four.classList.toggle("img_n");
  secret_img_box_four.onclick = () => {
    secret_img_box_four.classList.toggle("img_n");
    body.classList.remove("lock");
  };
  cert_one_four.onclick = () => {
    secret_img_box_four.classList.add("img_n");
  };

  window.addEventListener(
    "keydown",
    (event) => {
      if (event.key == "Escape") {
        secret_img_box_four.classList.add("img_n");
        body.classList.remove("lock");
      }
    },
    true
  );
};

let scroll = document.querySelector(".onas");
let sec = document.querySelector(".div_two_box");
let pos_sec = sec.offsetTop;
console.log(pos_sec);

scroll.onclick = () => {
  event.preventDefault();
  window.scrollTo({
    top: pos_sec,
    left: 0,
  });
};

let scrolltwo = document.querySelector(".catalog");
let sec2 = document.querySelector(".box_father_four");
let pos_sec2 = sec2.offsetTop;

scrolltwo.onclick = () => {
  event.preventDefault();
  window.scrollTo({
    top: pos_sec2,
    left: 0,
  });
};

let scrolltree = document.querySelector(".certificat");
let sec3 = document.querySelector(".box_father_five");
let pos_sec3 = sec3.offsetTop;

scrolltree.onclick = () => {
  event.preventDefault();
  window.scrollTo({
    top: pos_sec3,
    left: 0,
  });
};

new Swiper(".swiper", {
  slidesPerView: 3,
  spaceBetween: 20,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

let otziv = document.querySelector(".otziv");
let sec4 = document.querySelector(".box_father_five");
let pos_sec4 = sec4.offsetTop;

otziv.onclick = () => {
  event.preventDefault();
  window.scrollTo({
    top: pos_sec4 + 340,
    left: 0,
  });
};

let scrollfive = document.querySelector(".contacti");
let sec5 = document.querySelector(".box_father_six");
let pos_sec5 = sec5.offsetTop;

scrollfive.onclick = () => {
  event.preventDefault();
  window.scrollTo({
    top: pos_sec5,
    left: 0,
  });
};
let btn_catalog = document.querySelector(".slide_btn_one");
let btn_catalog_two = document.querySelector(".slide_btn_two");
let btn_catalog_tree = document.querySelector(".slide_btn_tree");
let btn_catalog_four = document.querySelector(".slide_btn_four");
let btn_catalog_five = document.querySelector(".slide_btn_five");
let btn_catalog_six = document.querySelector(".slide_btn_six");

btn_catalog.onclick = () => {
  window.scrollTo(0, 0);
};

btn_catalog_two.onclick = () => {
  window.scrollTo(0, 0);
};

btn_catalog_tree.onclick = () => {
  window.scrollTo(0, 0);
};

btn_catalog_four.onclick = () => {
  window.scrollTo(0, 0);
};

btn_catalog_five.onclick = () => {
  window.scrollTo(0, 0);
};

btn_catalog_six.onclick = () => {
  window.scrollTo(0, 0);
};

let href_one = document.querySelector(".href_one");
let school_display_none_one = document.querySelector(
  ".school_display_none_one"
);

href_one.onclick = () => {
  href_one.style.display = "none";
  school_display_none_one.classList.remove("school_display_none_one");
};

let href_two = document.querySelector(".href_two");
let school_display_none_two = document.querySelector(
  ".school_display_none_two"
);

href_two.onclick = () => {
  href_two.style.display = "none";
  school_display_none_two.classList.remove("school_display_none_two");
};

let href_tree = document.querySelector(".href_tree");
let school_display_none_tree = document.querySelector(
  ".school_display_none_tree"
);

href_tree.onclick = () => {
  href_tree.style.display = "none";
  school_display_none_tree.classList.remove("school_display_none_tree");
};

let href_four = document.querySelector(".href_four");
let school_display_none_four = document.querySelector(
  ".school_display_none_four"
);

href_four.onclick = () => {
  href_four.style.display = "none";
  school_display_none_four.classList.remove("school_display_none_four");
};

let href_six = document.querySelector(".href_six");
let school_display_none_six = document.querySelector(
  ".school_display_none_six"
);

href_six.onclick = () => {
  href_six.style.display = "none";
  school_display_none_six.classList.remove("school_display_none_six");
};

let scroll_on = document.querySelector(".on");
let sec_on = document.querySelector(".div_two_box");
let pos_sec_on = sec_on.offsetTop;

scroll_on.onclick = () => {
  event.preventDefault();
  window.scrollTo({
    top: pos_sec_on,
    left: 0,
  });
};

let scroll_cata = document.querySelector(".cata");
let sec_cata = document.querySelector(".box_father_four");
let pos_sec_cata = sec_cata.offsetTop;

scroll_cata.onclick = () => {
  event.preventDefault();
  window.scrollTo({
    top: pos_sec_cata,
    left: 0,
  });
};

let scroll_certi = document.querySelector(".certi");
let sec_certi = document.querySelector(".box_father_five");
let pos_sec_certi = sec_certi.offsetTop;

scroll_certi.onclick = () => {
  event.preventDefault();
  window.scrollTo({
    top: pos_sec_certi,
    left: 0,
  });
};

let otziv_otzi = document.querySelector(".otzi");
let sec_otzi = document.querySelector(".box_father_five");
let pos_sec_otzi = sec_otzi.offsetTop;

otziv_otzi.onclick = () => {
  event.preventDefault();
  window.scrollTo({
    top: pos_sec_otzi + 340,
    left: 0,
  });
};

let scroll_contact = document.querySelector(".contact");
let sec_contact = document.querySelector(".box_father_six");
let pos_sec_contact = sec_contact.offsetTop;

scroll_contact.onclick = () => {
  event.preventDefault();
  window.scrollTo({
    top: pos_sec_contact,
    left: 0,
  });
};

let baldy = document.body.clientWidth;

if (baldy > 1270) {
  new Swiper(".swiper", {
    cssMode: false,
    slidesPerView: 3,
    spaceBetween: 20,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
  speed: 500;
  mousewheel: true;
  Keyboard: true;
}

if (baldy <= 1270) {
  new Swiper(".swiper", {
    slidesPerView: 2,
    spaceBetween: 20,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
}

if (baldy <= 1000) {
  new Swiper(".swiper", {
    spaceBetween: 10,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
}

let burger = document.querySelector(".burger");
let span = document.querySelector(".burger span");
let menu = document.querySelector(".menu");
let h = document.querySelector(".head");
burger.onclick = () => {
  body.classList.toggle("lock");
  h.classList.toggle("color");
  span.classList.toggle("crestik");
  menu.classList.toggle("animate");
};

let scroll_onas_onas = document.querySelector(".onasonas");
let sec_onas_onas = document.querySelector(".div_two_box");
let pos_sec_onas_onas = sec_onas_onas.offsetTop;

scroll_onas_onas.onclick = () => {
  body.classList.toggle("lock");
  event.preventDefault();
  window.scrollTo({
    top: pos_sec_onas_onas,
    left: 0,
  });
  h.classList.toggle("color");
  span.classList.toggle("crestik");
  menu.classList.toggle("animate");
};

let scroll_catalogcatalog = document.querySelector(".catalogcatalog");
let sec_catalogcatalog = document.querySelector(".box_father_four");
let pos_seccatalogcatalog = sec_catalogcatalog.offsetTop;

scroll_catalogcatalog.onclick = () => {
  body.classList.toggle("lock");
  event.preventDefault();
  window.scrollTo({
    top: pos_seccatalogcatalog,
    left: 0,
  });
  h.classList.toggle("color");
  span.classList.toggle("crestik");
  menu.classList.toggle("animate");
};

let scroll_certificatcertificat = document.querySelector(
  ".certificatcertificat"
);
let sec_certificatcertificat = document.querySelector(".box_father_five");
let pos_certificatcertificat = sec_certificatcertificat.offsetTop;

scroll_certificatcertificat.onclick = () => {
  body.classList.toggle("lock");
  event.preventDefault();
  window.scrollTo({
    top: pos_certificatcertificat,
    left: 0,
  });
  h.classList.toggle("color");
  span.classList.toggle("crestik");
  menu.classList.toggle("animate");
};

let otzivotziv = document.querySelector(".otzivotziv");
let sec_otziotziv = document.querySelector(".box_father_five");
let pos_sec_otziotziv = sec_otziotziv.offsetTop;

otzivotziv.onclick = () => {
  body.classList.toggle("lock");
  event.preventDefault();
  window.scrollTo({
    top: pos_sec_otziotziv + 340,
    left: 0,
  });
  h.classList.toggle("color");
  span.classList.toggle("crestik");
  menu.classList.toggle("animate");
};

let contacticontacti = document.querySelector(".contacticontacti");
let sec_contacticontacti = document.querySelector(".box_father_six");
let pos_sec_contacticontacti = sec_contacticontacti.offsetTop;

contacticontacti.onclick = () => {
  body.classList.toggle("lock");
  event.preventDefault();
  window.scrollTo({
    top: pos_sec_contacticontacti + 340,
    left: 0,
  });
  h.classList.toggle("color");
  span.classList.toggle("crestik");
  menu.classList.toggle("animate");
};

let mode = document.querySelector(".button_dark_or_sun_mode");

let switchh = document.querySelector(".block_switch");

let sun = document.querySelector(".sun_mode");
let moon = document.querySelector(".moon_mode");

mode.onclick = () => {
  mode.classList.toggle("color_mode");
  switchh.classList.toggle("right");
  let theme = document.getElementById("theme");
  if (theme.getAttribute("href") == "./style/") {
    theme.href = "./style/dark.css";
  } else {
    theme.href = "./style/";
  }
};

window.onscroll = function () {
  myFunction();
};

function myFunction() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("myBar").style.width = scrolled + "%";
}


let block_img = document.querySelectorAll('.block_block')


let funct = function () {
  let item_of_this;
  let drag;
  function dr_st() {
    drag = this
    item_of_this = drag.children
    this.classList.add('scale')
  }
  function dr_ent() {

  }

  function dr_ov(event) {
    event.preventDefault()
    this.classList.add('scale')
  }

  function dr_lv() {
    this.classList.remove('scale')
  }

  function dr_end() {
    this.classList.remove('scale')
  }

  function dr_op() {
    for (let item of item_of_this) {
      this.append(item)
    }

    let item_of_item = this.children

    for (let item of item_of_item) {
      drag.append(item)
    }

  }


  for (let item of block_img) {
    item.addEventListener('dragstart', dr_st)
    item.addEventListener('dragenter', dr_ent)
    item.addEventListener('dragover', dr_ov)
    item.addEventListener('dragleave', dr_lv)
    item.addEventListener('dragend', dr_end)
    item.addEventListener('drop', dr_op)
  }
}

funct()
