// static colors
const BACKGROUND_COLOR = '#1e1e1e';
const FOREGROUND_COLOR = '#D4D4D4';
const BORDER_COLOR = '#1e1e1e';

// colors
const RED = '#f44747';
const GREEN = '#6A9955';
const YELLOW = '#DCDCAA';
const BLUE = '#569cd6';
const PINK = '#b267e6';
const CYAN = '#9cdcfe';
const LIGHT_GRAY = FOREGROUND_COLOR;
const MEDIUM_GRAY = '#5D5D5D';
const LIGHT_RED = '#d16969';
const LIGHT_GREEN = '#4EC9B0';
const LIGHT_YELLOW = '#DCDCAA';
const LIGHT_BLUE = '#569cd6';
const LIGHT_PINK = '#C586C0';
const LIGHT_CYAN = '#9cdcfe';
const WHITE = '#FFFFFF';

const colors = {
  black: BACKGROUND_COLOR,
  red: RED,
  green: GREEN,
  yellow: YELLOW,
  blue: BLUE,
  magenta: PINK,
  cyan: CYAN,
  white: LIGHT_GRAY,
  lightblack: MEDIUM_GRAY,
  lightRed: LIGHT_RED,
  lightGreen: LIGHT_GREEN,
  lightYellow: LIGHT_YELLOW,
  lightBlue: LIGHT_BLUE,
  lightMagenta: LIGHT_PINK,
  lightCyan: LIGHT_CYAN,
  lightWhite: WHITE,
};

const themeStyles = /*css*/`
  /* hide bottom border if tab is active, make bg lighter */
  .tab_tab {
    color: ${FOREGROUND_COLOR} !important;
    border-left: 0 none;
    border-right: 0 none;
  }

  .tab_active {
    color: #fff;
    background-color: ${BACKGROUND_COLOR} !important;
    height: calc(100% + 1px);
    border-left: 1px solid ${BORDER_COLOR} !important;
    border-right: 1px solid ${BORDER_COLOR} !important;
  }

  .tab_tab:last-child {
    border-right: 1px solid transparent !important;
  }

  /* Hide hardcoded black bottom border */
  .tab_active:before {
    border-bottom: none !important;
  }

  .tab_text {
    color: ${FOREGROUND_COLOR};
    border-color: transparent !important;
    opacity: 0.5;
  }

  .tab_active .tab_text {
    opacity: 1;
    color: ${WHITE};
  }

  .xterm {
    opacity: 0.6;
    transition: .1s ease opacity;
  }

  .term_active .xterm {
    opacity: 1;
  }
`;

// apply theme
exports.decorateConfig = (config) => {
  const decoratedConfig = Object.assign({}, config, {
    backgroundColor: BACKGROUND_COLOR,
    foregroundColor: FOREGROUND_COLOR,
    borderColor: BORDER_COLOR,
    cursorColor: FOREGROUND_COLOR,
    colors,
    css: `
      ${config.css || ''}
      ${themeStyles}
    `,
  });
  return decoratedConfig;
};