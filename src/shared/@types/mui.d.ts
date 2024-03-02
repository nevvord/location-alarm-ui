import {
  ButtonBaseTypeMap,
  ButtonTypeMap,
  ExtendButtonBaseTypeMap,
} from '@mui/material'
import {
  OverridableComponent,
  OverridableTypeMap,
  OverrideProps,
} from '@mui/material/OverridableComponent'
import { Palette } from '@mui/material/styles/createPalette'
import React from 'react'

interface IButtonProps {
  rounded?: boolean
}

declare module '@mui/material/Button' {
  export type ButtonProps<
    D extends React.ElementType = ButtonTypeMap['defaultComponent'],
    P = object & IButtonProps,
  > = OverrideProps<ButtonTypeMap<P, D>, D>
}

declare module '@mui/material/ButtonBase' {
  export type ButtonBaseProps<
    D extends React.ElementType = ButtonBaseTypeMap['defaultComponent'],
    P = IButtonProps,
  > = OverrideProps<ButtonBaseTypeMap<P, D>, D>

  export type ExtendButtonBase<M extends OverridableTypeMap> = ((
    props: { href?: string } & IButtonProps &
      OverrideProps<ExtendButtonBaseTypeMap<M>, 'a'>
  ) => JSX.Element) &
    OverridableComponent<ExtendButtonBaseTypeMap<M>>
}

declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    body3: true
    body4: true
  }
}

declare module '@mui/material/styles/createPalette' {
  export interface PaletteOptions {
    tertiary?: {
      main?: string
      contrastText?: string
    }
    surface?: {
      main?: string
      light?: string
      contrastText?: string
    }
    violet?: {
      main?: string
      contrastText?: string
    }
    purple?: {
      light?: string
      contrastText?: string
    }
    greyBlue?: {
      light?: string
      main?: string
      dark?: string
      contrastText?: string
    }
    text?: {
      primary?: string
      secondary?: string
      disabled?: string
    }
    grey: {
      light: string
    }
  }
}

interface IPalette extends Palette {
  tertiary: {
    main: string
    contrastText: string
  }
  surface: {
    main: string
    light: string
    contrastText: string
  }
  purple: {
    main: string
    contrastText: string
  }
  violet: {
    main: string
    contrastText: string
  }
  grey: {
    light
  }
  greyBlue: {
    light: string
    main: string
    dark: string
    contrastText: string
  }
  text: {
    primary: string
    secondary: string
    disabled: string
  }
}

declare module '@mui/material' {
  interface Theme {
    palette: IPalette
  }

  interface ButtonPropsColorOverrides {
    tertiary: true
  }
}
