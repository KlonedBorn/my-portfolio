// Copyright 2022 Kyle King
// 
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
// 
//     http://www.apache.org/licenses/LICENSE-2.0
// 
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

// Select DOM items
const menuBtn = document.querySelector('.menu-btn')
const menu = document.querySelector('.menu')
const menuNav = document.querySelector('.menu-nav')
const menuBrand = document.querySelector('.menu-branding')
const navItems = document.querySelectorAll('.nav-item')

let showMenu = false;

menuBtn.addEventListener('click',toggleMenu)

function toggleMenu()
{
    if(showMenu) {
        menuBtn.classList.remove('close')
        menu.classList.remove('show')
        menuNav.classList.remove('show')
        menuBrand.classList.remove('show')
        navItems.forEach(item => item.classList.remove('show'))
    }
    else {
        menuBtn.classList.add('close')
        menu.classList.add('show')
        menuNav.classList.add('show')
        menuBrand.classList.add('show')
        navItems.forEach(item => item.classList.add('show'))
    }
    showMenu = !showMenu
}