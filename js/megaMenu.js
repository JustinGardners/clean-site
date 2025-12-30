/**
 * MegaMenu
 * Vanilla JS refactor of jQuery original
 * Improvements
 * - No dependencies, native JS
 * - Centralized addEventListener callbacks
 * - Debounced resize (200ms)
 * - Unified classList with utility function
 * - Cached, efficient queries
 * - Organized, reusable, readable
 * - Warns on missing elements, logs for debug

 * Author: Justin Small
 *
 */

const MegaMenu = (() => {

    // DOM element references for navigation components
    /// Can't find reference to 'navClickerClose' or 'closeClicker' in the HTML, which both called updateBodyClass('remove'), so removed 
    const body = document.body 

    const nav = document.getElementById('nav');
    const navPrimary = nav?.querySelector('.primary');
    const navPrimaryLinks = nav?.querySelectorAll('.primary > li > a');
    const megaMenus = nav?.querySelectorAll('.megaMenu');
    const categoryContainers = navPrimary?.querySelectorAll('.categoryContainer');
    const dropDownGroupLabels = navPrimary?.querySelectorAll('.group-label');
    const dropDownGroups = navPrimary?.querySelectorAll('.dropdown-group');

    const navbarToggle = document.querySelector('.navbarToggle');
    const accountNav = document.querySelector('.accountNav');
    const miniNavToggle = document.querySelector('#miniNav .dropdownToggle');
    const backgroundClicker = document.getElementById('backgroundClicker'); 

    // Constants for breakpoint and mobile menu class
    const BP = 768;
    const MM_OPEN_CLASS = 'mobileMenuOpen';

    // Checks if mobile menu is open
    const isMobileMenuOpen = () => body.classList.contains(MM_OPEN_CLASS)

    // Debouncer - used in resize event
    function debounce(func, wait) {
        let timeout;
        return (...args) => {
            clearTimeout(timeout);
            timeout = setTimeout(() => func(...args), wait);
        };
    }

    // Manages mobileMenuOpen class on body element
    const updateBodyOpenClass = (action = 'remove') => {
        switch (action) {
            case 'remove':
                body.classList.remove(MM_OPEN_CLASS);
                break;
            case 'add':
                body.classList.add(MM_OPEN_CLASS);
                break;
            case 'toggle':
                body.classList.toggle(MM_OPEN_CLASS);
                break;
                default:
                console.warn(`Unknown action: ${action}`);
                break;                
        }
    }

    // Checks if an element is visible in the DOM
    const isVisible = (element) => {
        if (!element) return false;
        return window.getComputedStyle(element).display !== 'none';
    };

    // Defines event handler callbacks for navigation interactions
    const clickCallbacks = () => {

        // Toggles mobile menu visibility
        const navBar = e => {
            e.stopPropagation()
            if (window.innerWidth <= BP) {
                if (accountNav) accountNav.style.display = 'none';
                if (isVisible(nav)) {
                    updateBodyOpenClass('toggle');
                } else {
                    updateBodyOpenClass('add');
                }
            }
        };

        // Closes mobile menu on mini nav toggle click
        const miniNav = () => {
            if (window.innerWidth <= BP) {
                updateBodyOpenClass('remove');
            }
        };

        // Closes mobile menu on background click
        const bgClick = () => {
            updateBodyOpenClass('remove');
        };

        // Handles submenu toggling in mobile menu
        const subMenu = e => {    
            if (!isMobileMenuOpen()) return;
            const mainNavLink = e.target;
            const mainNavLi = mainNavLink.parentElement;
            const hasMegaMenu = mainNavLink.nextElementSibling?.classList.contains('megaMenu');
            if (!hasMegaMenu) return;

            e.preventDefault();
            const isSubMenuOpen = mainNavLi.classList.contains('open');
            navPrimary.classList.toggle('open', !isSubMenuOpen);
            mainNavLi.classList.toggle('open', !isSubMenuOpen);
        };

        // Toggles dropdown group visibility in mobile menu
        const groupLabel = e => {
            if (!isMobileMenuOpen()) return;
            const label = e.target;
            const hasDropDownGroup = label.nextElementSibling?.classList.contains('dropdown-group');
            if (!hasDropDownGroup) return;

            e.preventDefault();
            label.closest('li').classList.toggle('open');
        };

        return { navBar, miniNav, bgClick, subMenu, groupLabel };
    };

    // Enhances mobile menu with "See all" links for categories and dropdowns
    const megaMenuBrowse = () => {
        categoryContainers.forEach(catContainer => {
            const menuContainer = catContainer.parentElement
            const mainLink = menuContainer.previousElementSibling
            if(mainLink && mainLink.tagName === 'A') {
                mainLink.classList.add('has-children')
                const newTitle = `<h6><a href="${mainLink.getAttribute("href")}">See all in ${mainLink.textContent}</a></h6>`
                menuContainer.insertAdjacentHTML('afterbegin', newTitle)
            }
        })

        dropDownGroups.forEach(dropDownGroup => {
            const title = dropDownGroup.previousElementSibling;
            if (title) {
                title.classList.add('has-children');
                const titleLink = title.querySelector('a');
                const href = titleLink?.getAttribute('href')
                if (titleLink && href) {                    
                    const newTitle = `<h6><a href="${href}">See all in ${title.textContent}</a></h6>`;
                    dropDownGroup.insertAdjacentHTML('afterbegin', newTitle);
                }
            } else {
                dropDownGroup.classList.add('open');
            }
        });

    }

    // Positions mega menus based on parent link and column count
    const megaMenuLocation = () => {
        const MAX_COL = 4;
        const navPrimaryUlLayout = navPrimary.getBoundingClientRect();
        const navPrimaryUlOffset = navPrimaryUlLayout.left;
        const navPrimaryUlWidth = navPrimaryUlLayout.width;

        categoryContainers.forEach(container => {
            const parent = container.parentElement;
            const colCount = container.children.length;
            if (colCount < MAX_COL) {
                const closestTopLevelLink = container.parentElement.previousElementSibling; // The <a>
                if (closestTopLevelLink && closestTopLevelLink.tagName === 'A') {
                    const closestTopLevelLinkLayout = closestTopLevelLink.getBoundingClientRect();
                    const closestTopLevelLinkWidth = closestTopLevelLinkLayout.width;
                    const closestTopLevelLinkCenter = closestTopLevelLinkLayout.left + closestTopLevelLinkWidth / 2;
                    const colContainerWidth = (navPrimaryUlWidth / MAX_COL) * colCount;
                    const colContainerLeft = closestTopLevelLinkCenter - navPrimaryUlOffset - colContainerWidth / 2;
                    const colContainerRight = closestTopLevelLinkCenter - navPrimaryUlOffset + colContainerWidth / 2;

                    if (colContainerRight > navPrimaryUlWidth) {
                        parent.style.right = '0';
                        parent.style.left = '';
                    } else if (colContainerLeft >= 0) {
                        parent.style.left = `${colContainerLeft}px`;
                        parent.style.right = '';
                    } else { // colContainerLeft < 0
                        parent.style.left = '0';
                        parent.style.right = '';
                    }
                }
            } else {
                parent.style.left = '0';
                parent.style.right = '';
            }
        });
    };

    // Removes sortable classes from mega menus and containers
    const removeSortable = () => {
        megaMenus.forEach(menu => menu.classList.remove('ui-sortable'));
        categoryContainers.forEach(container => container.classList.remove('ui-sortable-handle'));
    };


    // Handles window resize to manage menu state and positioning
    window.addEventListener('resize', debounce(() => {
        // changed this so class gets removed on any resize rather than just below BP
        if(isMobileMenuOpen) {
            updateBodyOpenClass('remove');
        } 
        if (window.innerWidth <= BP) {        
            if(navPrimary) {
                navPrimary.querySelectorAll('li.open').forEach(el => el.classList.remove('open'));
                navPrimary.querySelectorAll('.category.open').forEach(el => el.classList.remove('open'));
            } else {
                console.warn('navPrimaryUl not defined')
            }

        } else {
            megaMenuLocation(); // Reposition mega menus on desktop
        }        
    }, 200) )

    // Initializes click event listeners
    const initClicks = () => {
        const clickCb = clickCallbacks();
        navbarToggle.addEventListener('click', clickCb.navBar);
        miniNavToggle.addEventListener('click', clickCb.miniNav);
        backgroundClicker.addEventListener('click', clickCb.bgClick);
        navPrimaryLinks.forEach(link => {
            link.addEventListener('click', clickCb.subMenu)
        })  
        dropDownGroupLabels.forEach(label => {
            label.addEventListener('click', clickCb.groupLabel)
        })
    };

    // Initializes the navigation menu
    const init = () => {
        removeSortable();
        if (!nav) {
            console.warn('Missing #nav element');
            return;
        }
        if (!navPrimary) {
            console.warn('Missing .primary element inside #nav');
            return;
        }
        if (!navPrimaryLinks?.length) {
            console.warn('No .primary > li > a elements found');
            return;
        }
        if (!navbarToggle) {
            console.warn('Missing .navbarToggle element');
            return;
        }
        if (!accountNav) {
            console.warn('Missing .accountNav element');
            return;
        }
        if (!miniNavToggle) {
            console.warn('Missing #miniNav .dropdownToggle element');
            return;
        }
        if (!backgroundClicker) {
            console.warn('Missing #backgroundClicker element');
            return;
        }
        initClicks();
        megaMenuBrowse();
        if(window.innerWidth > BP) {
            megaMenuLocation()
        }
    };

    return { init };
    })

// Initialize MegaMenu on DOM content load
document.addEventListener('DOMContentLoaded', () => {
    const mm = MegaMenu()
    mm.init()
})