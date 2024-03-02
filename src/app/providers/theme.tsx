import {
  CssBaseline,
  LinkProps,
  ThemeProvider as MuiThemeProvider,
  createTheme,
} from '@mui/material'
import { ColorPartial } from '@mui/material/styles/createPalette'
import { TypographyOptions } from '@mui/material/styles/createTypography'
import React, { ReactNode } from 'react'
import {
  Link as RouterLink,
  LinkProps as RouterLinkProps,
} from 'react-router-dom'

interface IProps {
  children: ReactNode
}

interface ExtendedTypographyOptions extends TypographyOptions {
  body3: React.CSSProperties
  body4: React.CSSProperties
}

// eslint-disable-next-line react/display-name
const LinkBehavior = React.forwardRef<
  HTMLAnchorElement,
  Omit<RouterLinkProps, 'to'> & {
    href: RouterLinkProps['to']
  }
>((props, ref) => {
  const { href, ...other } = props

  // Map href (MUI) -> to (react-router)
  return <RouterLink ref={ref} to={href} {...other} />
})

const common = {
  text: '#282828',
}

const theme = createTheme({
  palette: {
    primary: {
      main: '#009EE0',
    },
    secondary: {
      main: '#0155B7',
    },
    error: {
      main: '#EE1C2E',
    },
    tertiary: {
      main: '#006B99',
      contrastText: '#FFFFFF',
    },
    greyBlue: {
      dark: '#4A4E5C',
      main: '#607185',
      light: '#DFE4EB',
      contrastText: '#FFFFFF',
    },
    violet: {
      main: '#9747FF',
      contrastText: '#FFFFFF',
    },
    purple: {
      light: '#E8F1FF',
      contrastText: '#FFFFFF',
    },
    background: {
      default: '#FAFAFA',
      paper: '#FFFFFF',
    },
    warning: {
      main: '#F66F1D',
    },
    success: {
      main: '#2DC557',
    },
    text: {
      primary: common.text,
      secondary: '#717070',
      disabled: '#B1B2B4',
    },
    surface: {
      light: '#F5F7FF',
      main: '#E8ECF3',
      contrastText: common.text,
    },
    grey: {
      light: '#C7C7C7',
      // TODO: нужно заменить на нормальный d.ts
    } as ColorPartial,

    divider: '#434343',
    action: {
      disabled: '#B1B2B4',
      disabledBackground: '#EFEFEF',
      disabledOpacity: 1,
    },
    mode: 'light',
    common: {
      white: '#FFFFFF',
      black: '#22262B',
    },
  },
  typography: {
    fontFamily: [
      'Inter',
      'sans-serif',
      '-apple-system',
      'BlinkMacSystemFont',
      'Segoe UI',
      'Roboto',
      'Helvetica Neue',
      'Arial',
      'Apple Color Emoji',
      'Segoe UI Emoji',
      'Segoe UI Symbol',
    ].join(','),
    h1: {
      fontSize: 36,
      lineHeight: '44px',
      fontWeight: 500,
    },
    h2: {
      fontSize: 28,
      lineHeight: '34px',
      fontWeight: 500,
    },
    h3: {
      fontSize: 24,
      lineHeight: '29px',
      fontWeight: 500,
    },
    subtitle1: {
      fontSize: 28,
      lineHeight: '34px',
      fontWeight: 700,
    },
    subtitle2: {
      fontSize: 24,
      lineHeight: '34px',
      fontWeight: 400,
    },
    body1: {
      fontSize: 24,
      lineHeight: '34px',
      fontWeight: 400,
    },
    body2: {
      fontSize: 20,
      lineHeight: '24px',
      fontWeight: 500,
    },
    body3: {
      fontSize: 16,
      lineHeight: '28px',
      fontWeight: 500,
    },
    body4: {
      fontSize: 16,
      lineHeight: '28px',
      fontWeight: 400,
    },
    button: {
      fontWeight: 600,
      fontSize: 28,
      lineHeight: '34px',
      textTransform: 'inherit',
    },
  } as ExtendedTypographyOptions,
  components: {
    MuiButton: {
      variants: [
        {
          props: { rounded: true },
          style: { borderRadius: '100px' },
        },
      ],
      styleOverrides: {
        root: {
          borderRadius: 8,
          '.MuiButton-iconSizeSmall svg': {
            fontSize: 32,
          },
          '.MuiButton-iconSizeMedium svg': {
            fontSize: 36,
          },
        },
        sizeSmall: {
          padding: '16px',
          fontWeight: 600,
          fontSize: 28,
          lineHeight: '34px',
        },
        sizeMedium: {
          padding: '24px',
        },
      },
    },
    MuiButtonBase: {
      defaultProps: { LinkComponent: LinkBehavior },
    },
    MuiLink: {
      defaultProps: {
        component: LinkBehavior,
      } as LinkProps,
    },
  },
})

export function ThemeProvider({ children }: IProps) {
  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </MuiThemeProvider>
  )
}
