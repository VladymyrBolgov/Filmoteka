var btn=document.querySelector(".btn-toggle"),currentTheme=localStorage.getItem("theme");"dark"==currentTheme&&document.body.classList.add("dark-theme"),btn.addEventListener("click",(function(e){document.body.classList.toggle("dark-theme");var t="light";document.body.classList.contains("dark-theme")&&(t="dark"),localStorage.setItem("theme",t),localStorage.setItem("btnToggle",btnToggle)})),document.querySelector(".btn-toggle").addEventListener("click",(function(e){e.target.closest(".btn-toggle").classList.toggle("btn-toggle--toggle")}));
//# sourceMappingURL=library.d32fd55d.js.map