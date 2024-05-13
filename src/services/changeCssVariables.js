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
        '--theme-default-select-header',
        `var(--theme-${theme}-select-header)`
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
        '--theme-default-needhelp-bg',
        `var(--theme-${theme}-needhelp-bg)`
    );
};
