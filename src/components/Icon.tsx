import * as icons from 'react-icons/fa'

export default function Icon({ name, outline, ...rest }: {
  name: string,
  outline?: boolean,
} & Record<string, any>) {
  const iconName = `Fa${name}`
  const Component = (icons as any)[iconName]
  if (!Component)
    return <span>[INVALID ICON]</span>
  return <Component {...rest} />
}
