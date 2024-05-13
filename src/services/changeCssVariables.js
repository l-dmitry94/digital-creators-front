export const changeCssVariables = theme => {
    const root = document.querySelector(':root');

    root.style.setProperty(
        '--theme-default-body',
        `var(--theme-${theme}-body)`
    );
    root.style.setProperty(
        '--thema-default-bg-cl',
        `var(--thema-${theme}-bg-cl)`
    );
    root.style.setProperty(
        '--theme-default-header-bg',
        `var(--theme-${theme}-header-bg)`
    );
    root.style.setProperty(
        '--theme-default-select-bg',
        `var(--theme-${theme}-select-bg)`
    );
    root.style.setProperty(
        '--theme-default-select-border',
        `var(--theme-${theme}-select-border)`
    );
    root.style.setProperty(
        '--thema-default-option-hover-cl',
        `var(--thema-${theme}-option-hover-cl)`
    );
    root.style.setProperty(
        '--theme-default-sidebar-bg',
        `var(--theme-${theme}-sidebar-bg)`
    );
    root.style.setProperty(
        '--theme-default-sidebar-text',
        `var(--theme-${theme}-sidebar-text)`
    );
    root.style.setProperty(
        '--theme-default-indicator-color',
        `var(--theme-${theme}-indicator-color)`
    );
    root.style.setProperty(
        '--theme-default-logo-color',
        `var(--theme-${theme}-logo-color)`
    );
    root.style.setProperty(
        '--theme-default-logo-bg',
        `var(--theme-${theme}-logo-bg)`
    );
    root.style.setProperty(
        '--theme-default-link-bg',
        `var(--theme-${theme}-link-bg)`
    );
    root.style.setProperty(
        '--theme-default-link-text',
        `var(--theme-${theme}-link-text)`
    );
    root.style.setProperty(
        '--theme-default-createbutton-bg',
        `var(--theme-${theme}-createbutton-bg)`
    );
    root.style.setProperty(
        '--theme-default-createbutton-focusbg',
        `var(--theme-${theme}-createbutton-focusbg)`
    );
    root.style.setProperty(
        '--theme-default-createbutton-color',
        `var(--theme-${theme}-createbutton-color)`
    );
    root.style.setProperty(
        '--theme-default-needhelp-bg',
        `var(--theme-${theme}-needhelp-bg)`
    );
    root.style.setProperty(
        '--theme-default-modal-bg',
        `var(--theme-${theme}-modal-bg)`
    );
    root.style.setProperty(
        '--theme-default-modal-color',
        `var(--theme-${theme}-modal-color)`
    );
    root.style.setProperty(
        '--theme-default-input-bg',
        `var(--theme-${theme}-input-bg)`
    );
    root.style.setProperty(
        '--theme-default-button-bg',
        `var(--theme-${theme}-button-bg)`
    );
    root.style.setProperty(
        '--theme-default-button-text',
        `var(--theme-${theme}-button-text)`
    );
    root.style.setProperty(
        '--thema-default-filter-btn-cl',
        `var(--thema-${theme}-filter-btn-cl)`
    );
    root.style.setProperty(
        '--thema-default-filter-icon-cl',
        `var(--thema-${theme}-filter-icon-cl)`
    );
    root.style.setProperty(
        '--thema-default-filter-modal-overlay-cl',
        `var(--thema-${theme}-filter-modal-overlay-cl)`
    );
    root.style.setProperty(
        '--thema-default-filter-title-cl',
        `var(--thema-${theme}-filter-title-cl)`
    );
    root.style.setProperty(
        '--thema-default-filter-title-border-cl',
        `var(--thema-${theme}-filter-title-border-cl)`
    );
    root.style.setProperty(
        '--thema-default-filter-modal-border-cl',
        `var(--thema-${theme}-filter-modal-border-cl)`
    );
    root.style.setProperty(
        '--thema-default-filter-modal-bg-cl',
        `var(--thema-${theme}-filter-modal-bg-cl)`
    );
    root.style.setProperty(
        '--thema-default-filter-modal-close-icon-cl',
        `var(--thema-${theme}-filter-modal-close-icon-cl)`
    );
    root.style.setProperty(
        '--thema-default-filter-modal-show-cl',
        `var(--thema-${theme}-filter-modal-show-cl)`
    );
    root.style.setProperty(
        '--thema-default-filter-modal-radio-text-cl',
        `var(--thema-${theme}-filter-modal-radio-text-cl)`
    );
    root.style.setProperty(
        '--thema-default-filter-modal-radio-text-checked-cl',
        `var--thema-${theme}-filter-modal-radio-text-checked-cl)`
    );
};
