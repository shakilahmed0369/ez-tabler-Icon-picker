import iconList from './icon-list.js';

export default class EzIconPicker {
    // icon prefix
    iconPrefix = 'ti ti';

    constructor({selector}) {
        this.ICONS_PER_PAGE = 30;
        this.currentPage = 0;
        this.currentIcons = [...iconList];
        this.holder = document.querySelector(selector);
        this.init();
    }

    init() {
        this.render();
        this.loadInitialIcon();
        this.createIcons();
        this.bindEvents();
    }

    render() {
        this.holder.innerHTML = `
            <div class="ez_main" style="width: 100%; max-width: 300px;">
                <input type="text" placeholder="Search icon" class="ez_search" name="${this.holder.dataset.name}">
                <div class="ez_container"></div>
                <div class="ez_footer" style="text-align: center; margin-top: 10px;">
                    <button class="ez_prev">Prev</button>
                    <span class="ez_page-info"></span>
                    <button class="ez_next">Next</button>
                </div>
            </div>
        `;
    }

    loadInitialIcon() {
        const { icon } = this.holder.dataset;
        if (icon) {
            this.getElement('.ez_search').value = icon;
            this.searchIcon(icon);
        }
    }

    bindEvents() {
        this.getElement('.ez_search').addEventListener('input', (e) => 
            this.searchIcon(e.target.value));
        
        this.getElement('.ez_next').addEventListener('click', () => {
            this.currentPage++;
            this.createIcons();
        });

        this.getElement('.ez_prev').addEventListener('click', () => {
            this.currentPage--;
            this.createIcons();
        });
    }

    createIcons() {
        const container = this.getElement('.ez_container');
        const startIndex = this.currentPage * this.ICONS_PER_PAGE;
        const endIndex = startIndex + this.ICONS_PER_PAGE;
        const pageIcons = this.currentIcons.slice(startIndex, endIndex);
        
        if (pageIcons.length === 0) {
            container.innerHTML = `<div class="ez_no_results">
                <div class="ez_no_results_icon">😩</div>
                <div>No icons found!</div>
            </div>`;
        } else {
            container.innerHTML = pageIcons
                .map(icon => this.createIconElement(icon))
                .join('');
        }

        this.attachIconClickHandlers();
        this.updatePaginationButtons();
    }

    createIconElement(icon) {
        return `<div class="ez_icon" data-icon="${this.iconPrefix}-${icon}">
                <i class="${this.iconPrefix}-${icon}"></i>
            </div>
        `;
    }

    attachIconClickHandlers() {
        this.getAllElements('.ez_icon').forEach(icon => {
            icon.addEventListener('click', () => {
                this.getAllElements('.ez_icon')
                    .forEach(icon => icon.classList.remove('ez_active'));
                
                this.getElement('.ez_search').value = icon.dataset.icon;
                icon.classList.add('ez_active');
            });
        });
    }

    updatePaginationButtons() {
        const nextBtn = this.getElement('.ez_next');
        const prevBtn = this.getElement('.ez_prev');
        const totalPages = Math.ceil(this.currentIcons.length / this.ICONS_PER_PAGE);
        
        nextBtn.disabled = this.currentPage >= totalPages - 1;
        prevBtn.disabled = this.currentPage <= 0;
        
        this.getElement('.ez_page-info').textContent = 
            `Page ${this.currentPage + 1} of ${totalPages} (${this.currentIcons.length} icons)`;
    }

    searchIcon(search) {
        const searchTerm = search.toLowerCase().trim();
        this.currentPage = 0;
        
        if (!searchTerm) {
            this.currentIcons = [...iconList];
            this.createIcons();
            return;
        }

        const searchTerms = searchTerm.split(/\s+/);
        this.currentIcons = iconList.filter(icon => {
            const iconWords = icon.replace(/-/g, ' ');
            return searchTerms.every(term => 
                iconWords.includes(term) || icon.includes(term)
            );
        });

        this.createIcons();
    }

    // Helper methods
    getElement(selector) {
        return this.holder.querySelector(selector);
    }

    getAllElements(selector) {
        return this.holder.querySelectorAll(selector);
    }
}





