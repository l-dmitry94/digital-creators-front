export const changeCssVariables = theme => {
    const root = document.querySelector(':root');

    root.style.setProperty(
        '--theme-default-body',
        `var(--theme-${theme}-body)`
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
};
