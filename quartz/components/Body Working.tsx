// @ts-ignore
import OptinIframe from "./OptinIframe"
import clipboardScript from "./scripts/clipboard.inline"
import clipboardStyle from "./styles/clipboard.scss"
import { QuartzComponentConstructor, QuartzComponentProps } from "./types"
import OptinIframe from "./OptinIframe"

function Body({ children }: QuartzComponentProps) {
  return <div id="quartz-body">{children}</div>

}

Body.afterDOMLoaded = clipboardScript
Body.css = clipboardStyle

export default (() => Body) satisfies QuartzComponentConstructor
