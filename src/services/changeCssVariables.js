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
};
