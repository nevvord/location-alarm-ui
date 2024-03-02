import { ContainedButtons } from './contained-buttons'
import { OutlinedButtons } from './outlined-buttons'
import { TextButtons } from './text-buttons'
import { TypographyElements } from './typography'

export function UiKitPage() {
  return (
    <>
      <TypographyElements />
      <ContainedButtons />
      <TextButtons />
      <OutlinedButtons />
    </>
  )
}
